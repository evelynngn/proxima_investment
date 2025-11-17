import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { Theme } from '../App';
import { ParticleSphere } from './ParticleSphere';
import { ProximaLogo } from './ProximaLogo';
import { useState, useEffect } from 'react';

const proximaLogoFull = '/assets/436c37082aa7cb0f2cd8a4741acb0cd70f1fd591.png';

interface HeroProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export function Hero({ theme, setTheme }: HeroProps) {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 0.95]);

  const text1 = "Think deep\nDream forward\nBack excellence";
  const text2 = "Advance innovation\nEmpower visionaries\nBuild the future";
  
  const [displayedText, setDisplayedText] = useState('');
  const [phase, setPhase] = useState<'typing1' | 'showing1' | 'deleting1' | 'typing2' | 'showing2' | 'deleting2'>('typing1');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    switch (phase) {
      case 'typing1':
        if (currentIndex < text1.length) {
          timeout = setTimeout(() => {
            setDisplayedText(prev => prev + text1[currentIndex]);
            setCurrentIndex(prev => prev + 1);
          }, 150);
        } else {
          // Finished typing text1, show for 2 seconds
          timeout = setTimeout(() => {
            setPhase('showing1');
          }, 100);
        }
        break;

      case 'showing1':
        // Show text1 for 2 seconds
        timeout = setTimeout(() => {
          setPhase('deleting1');
          setCurrentIndex(displayedText.length - 1);
        }, 2000);
        break;

      case 'deleting1':
        if (currentIndex >= 0) {
          timeout = setTimeout(() => {
            setDisplayedText(prev => prev.slice(0, -1));
            setCurrentIndex(prev => prev - 1);
          }, 50); // Faster deletion
        } else {
          // Finished deleting, start typing text2
          timeout = setTimeout(() => {
            setPhase('typing2');
            setCurrentIndex(0);
          }, 300);
        }
        break;

      case 'typing2':
        if (currentIndex < text2.length) {
          timeout = setTimeout(() => {
            setDisplayedText(prev => prev + text2[currentIndex]);
            setCurrentIndex(prev => prev + 1);
          }, 150);
        } else {
          // Finished typing text2, show briefly
          timeout = setTimeout(() => {
            setPhase('showing2');
          }, 100);
        }
        break;

      case 'showing2':
        // Show text2 for 2 seconds before deleting
        timeout = setTimeout(() => {
          setPhase('deleting2');
          setCurrentIndex(displayedText.length - 1);
        }, 2000);
        break;

      case 'deleting2':
        if (currentIndex >= 0) {
          timeout = setTimeout(() => {
            setDisplayedText(prev => prev.slice(0, -1));
            setCurrentIndex(prev => prev - 1);
          }, 50);
        } else {
          // Finished deleting, loop back to typing1
          timeout = setTimeout(() => {
            setPhase('typing1');
            setCurrentIndex(0);
          }, 300);
        }
        break;
    }

    return () => clearTimeout(timeout);
  }, [phase, currentIndex, displayedText, text1, text2]);

  const themeStyles = {
    dark: {
      bg: 'bg-[#020847]',
      text: 'text-white',
      subtext: 'text-white/50',
      button: 'text-white/40 hover:text-white/80',
      switcherBg: 'bg-white/10 hover:bg-white/20',
      switcherText: 'text-white/60 hover:text-white',
    },
    light: {
      bg: 'bg-white',
      text: 'text-[#020847]',
      subtext: 'text-[#020847]/50',
      button: 'text-[#020847]/40 hover:text-[#020847]/80',
      switcherBg: 'bg-[#020847]/10 hover:bg-[#020847]/20',
      switcherText: 'text-[#020847]/60 hover:text-[#020847]',
    },
    blue: {
      bg: 'bg-[#020847]',
      text: 'text-white',
      subtext: 'text-white/60',
      button: 'text-white/40 hover:text-white/80',
      switcherBg: 'bg-white/10 hover:bg-white/20',
      switcherText: 'text-white/60 hover:text-white',
    },
  };

  const currentTheme = themeStyles[theme];

  return (
    <section className={`min-h-screen flex flex-col items-center ${currentTheme.bg} px-8 relative overflow-hidden transition-colors duration-700`}>
      {/* Logo - Full Wordmark */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        style={{ marginTop: '96px' }}
        className="flex items-center justify-center z-10"
      >
        <img 
          src={proximaLogoFull} 
          alt="PROXIMA INVESTMENTS - Venture capital firm backing exceptional founders" 
          className="w-[300px] md:w-[450px] lg:w-[550px] h-auto"
        />
      </motion.div>

      {/* Particle Sphere - Positioned below logo */}
      <div 
        className="relative w-full max-w-[600px] mt-4 mb-4 md:mt-2 md:mb-2 h-[300px] md:h-[500px] flex items-center justify-center overflow-visible"
      >
        <ParticleSphere theme={theme} />
      </div>

      {/* Typing Animation Text - Below particle sphere - Mobile Only */}
      <motion.div 
        style={{ opacity, scale, marginTop: '32px' }}
        className="md:hidden max-w-[1200px] mx-auto text-center relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center"
        >
          <div className="min-h-[15rem] flex items-start justify-center">
            <h1 className={`text-[clamp(2.25rem,6.5vw,5rem)] leading-[1.1] ${currentTheme.text} tracking-tight whitespace-pre-line`}>
              {displayedText}
            </h1>
          </div>
        </motion.div>
      </motion.div>

      {/* Typing Animation Text - Below particle sphere - Desktop Only */}
      <motion.div 
        style={{ marginTop: '0px' }}
        className="hidden md:block max-w-[1200px] mx-auto text-center relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center"
        >
          <div style={{ minHeight: '220px' }} className="flex items-start justify-center">
            <h1 className={`text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.1] ${currentTheme.text} tracking-tight whitespace-pre-line`}>
              {displayedText}
            </h1>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}