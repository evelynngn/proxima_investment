import { useEffect, useRef, useState } from 'react';
import { Theme } from '../App';

interface ParticleSphereProps {
  theme: Theme;
}

interface Particle {
  x: number;
  y: number;
  z: number;
  originalX: number;
  originalY: number;
  originalZ: number;
  phi: number;
  theta: number;
}

export function ParticleSphere({ theme }: ParticleSphereProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rotationRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>();
  const timeRef = useRef(0);
  const lastFrameTimeRef = useRef<number>(0);
  const [isMobile, setIsMobile] = useState(false);

  // Target frame rate (30 FPS)
  const TARGET_FPS = 30;
  const FRAME_DURATION = 1000 / TARGET_FPS; // ~33.33ms per frame

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const updateCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    // Create particles in a sphere
    const createParticles = () => {
      const particles: Particle[] = [];
      const particleCount = isMobile ? 200 : 400;
      const radius = isMobile ? 120 : 200;

      for (let i = 0; i < particleCount; i++) {
        const phi = Math.acos(-1 + (2 * i) / particleCount);
        const theta = Math.sqrt(particleCount * Math.PI) * phi;

        const x = radius * Math.cos(theta) * Math.sin(phi);
        const y = radius * Math.sin(theta) * Math.sin(phi);
        const z = radius * Math.cos(phi);

        particles.push({
          x,
          y,
          z,
          originalX: x,
          originalY: y,
          originalZ: z,
          phi,
          theta
        });
      }

      return particles;
    };

    particlesRef.current = createParticles();

    // Initialize last frame time
    lastFrameTimeRef.current = performance.now();

    // Animation loop with frame rate limiting
    const animate = (currentTime: number) => {
      // Calculate time since last frame
      const deltaTime = currentTime - lastFrameTimeRef.current;
      
      // Frame rate limiting: only render if enough time has passed
      if (deltaTime < FRAME_DURATION) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }
      
      // Cap deltaTime to prevent large jumps (e.g., when tab becomes inactive)
      const cappedDelta = Math.min(deltaTime, FRAME_DURATION * 2);
      lastFrameTimeRef.current = currentTime;

      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      ctx.clearRect(0, 0, width, height);

      // Time-based rotation speeds (radians per second)
      const rotationSpeedY = 0.2; // Y-axis rotation speed
      const rotationSpeedX = 0.067; // X-axis rotation speed
      
      // Update rotation based on actual time passed (deltaTime in milliseconds)
      rotationRef.current.y += rotationSpeedY * (cappedDelta / 1000);
      rotationRef.current.x += rotationSpeedX * (cappedDelta / 1000);
      
      // Update time for wave animation
      timeRef.current += cappedDelta / 1000;

      const particles = particlesRef.current;
      const projectedParticles: Array<{ x: number; y: number; z: number; brightness: number }> = [];

      // Rotate and project particles
      particles.forEach((particle) => {
        // Calculate wave effect - radial pulsation based on angular position
        const waveSpeed = 2;
        const waveAmplitude = 0.15; // 15% radius variation
        const waveFrequency = 3; // Number of wave peaks around the sphere
        
        // Create traveling wave based on theta (azimuthal angle) and time
        const wave = Math.sin(particle.theta * waveFrequency + timeRef.current * waveSpeed);
        
        // Add secondary wave based on phi (polar angle) for more complex pattern
        const wave2 = Math.sin(particle.phi * 2 + timeRef.current * waveSpeed * 0.7);
        
        // Combine waves and apply amplitude
        const radiusMultiplier = 1 + (wave * 0.6 + wave2 * 0.4) * waveAmplitude;
        
        // Apply wave to particle position
        let x = particle.originalX * radiusMultiplier;
        let y = particle.originalY * radiusMultiplier;
        let z = particle.originalZ * radiusMultiplier;

        // Rotation Y
        const cosY = Math.cos(rotationRef.current.y);
        const sinY = Math.sin(rotationRef.current.y);
        const x1 = x * cosY - z * sinY;
        const z1 = x * sinY + z * cosY;

        // Rotation X
        const cosX = Math.cos(rotationRef.current.x);
        const sinX = Math.sin(rotationRef.current.x);
        const y1 = y * cosX - z1 * sinX;
        const z2 = y * sinX + z1 * cosX;

        particle.x = x1;
        particle.y = y1;
        particle.z = z2;

        // Perspective projection
        const perspective = 600;
        const scale = perspective / (perspective + z2);
        const projectedX = x1 * scale + width / 2;
        const projectedY = y1 * scale + height / 2;

        // Calculate brightness based on Z position
        const radiusForBrightness = isMobile ? 120 : 200;
        const brightness = (z2 + radiusForBrightness) / (radiusForBrightness * 2);

        projectedParticles.push({
          x: projectedX,
          y: projectedY,
          z: z2,
          brightness: Math.max(0.2, Math.min(1, brightness))
        });
      });

      // Sort by Z for proper rendering
      const sortedIndices = projectedParticles
        .map((_, index) => index)
        .sort((a, b) => projectedParticles[a].z - projectedParticles[b].z);

      // Draw particles (bright blue)
      const dotColor = '0, 150, 255'; // Bright blue RGB
      
      sortedIndices.forEach((i) => {
        const p = projectedParticles[i];
        const size = 2 + p.brightness * 2;

        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${dotColor}, ${p.brightness * 0.8})`;
        ctx.fill();

        // Add glow
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, size * 2);
        gradient.addColorStop(0, `rgba(${dotColor}, ${p.brightness * 0.4})`);
        gradient.addColorStop(1, `rgba(${dotColor}, 0)`);
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, size * 2, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate(performance.now());

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [theme, isMobile]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.6 }}
    />
  );
}