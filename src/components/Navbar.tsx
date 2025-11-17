import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { Theme } from '../App';
import { ProximaLogo } from './ProximaLogo';
import { motion, useScroll, useTransform } from 'motion/react';

const proximaIcon = '/assets/aa913dac60104ea0e5f7bb6bf7b81f855940e11b.png';

interface NavbarProps {
  theme: Theme;
}

export function Navbar({ theme }: NavbarProps) {
  const { scrollY } = useScroll();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);
  
  const darkBg = ['rgba(1, 4, 32, 0)', 'rgba(1, 4, 32, 0.95)'];
  const lightBg = ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.95)'];
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    theme === 'light' ? lightBg : darkBg
  );

  const textColor = theme === 'light' ? 'text-[#020847]' : 'text-white';
  const textColorInactive = theme === 'light' ? 'text-[#020847]/40 hover:text-[#020847]/80' : 'text-white/40 hover:text-white/80';
  const borderColor = theme === 'light' ? 'border-[#020847]/10' : 'border-white/10';

  // Show mobile navbar after scrolling past hero section (approximately 80vh)
  // Also track when to show pill navbar on desktop
  const [showPillNav, setShowPillNav] = useState(true); // Changed to true to show immediately

  useEffect(() => {
    const handleScroll = () => {
      // Removed mobile nav scroll tracking - it's now always visible
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 64; // Account for navbar height
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
    setMobileMenuOpen(false); // Close mobile menu after navigation
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Desktop Navbar - Pill Shape (Always Visible) */}
      <header className="hidden lg:flex fixed top-6 left-0 right-0 z-50 justify-center pointer-events-none">
        <motion.nav
          initial={{ opacity: 1 }}
          animate={{ 
            opacity: 1
          }}
          className={`w-1/2 ${'bg-gradient-to-t from-[#020847]/60 via-[#020847]/50 to-[#020847]/40'} backdrop-blur-md border ${borderColor} rounded-full shadow-lg pointer-events-auto`}
          aria-label="Main navigation"
        >
          <div className="px-3 py-1.5">
            <div className="flex items-center justify-center gap-10">
              <motion.button 
                onClick={scrollToTop}
                className={`flex items-center ${textColor}`}
                whileHover={{ opacity: 0.7 }}
                transition={{ duration: 0.2 }}
                aria-label="Go to homepage"
              >
                <img 
                  src={proximaIcon} 
                  alt="Proxima Investments icon" 
                  className="w-[36px] h-[36px]"
                />
              </motion.button>
              <button 
                onClick={() => scrollToSection('focus')}
                className={`text-sm tracking-wider transition-all duration-300 ${textColorInactive}`}
              >
                Focus
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className={`text-sm tracking-wider transition-all duration-300 ${textColorInactive}`}
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('advisory')}
                className={`text-sm tracking-wider transition-all duration-300 ${textColorInactive}`}
              >
                Advisory
              </button>
              <button 
                onClick={() => scrollToSection('team')}
                className={`text-sm tracking-wider transition-all duration-300 ${textColorInactive}`}
              >
                Team
              </button>
            </div>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Navbar - Top Position (Pill Shape) - Always Visible */}
      <header className="lg:hidden fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none px-4">
        <motion.nav
          initial={{ opacity: 1 }}
          animate={{ 
            opacity: 1
          }}
          className={`flex-1 ${
            theme === 'light' 
              ? 'bg-gradient-to-t from-white/60 via-white/50 to-white/40' 
              : 'bg-gradient-to-t from-[#020847]/60 via-[#020847]/50 to-[#020847]/40'
          } backdrop-blur-md border ${borderColor} rounded-full shadow-lg pointer-events-auto`}
          aria-label="Main navigation"
        >
          <div className="px-4 py-3">
            <div className="flex items-center justify-between gap-3">
              <motion.button 
                onClick={scrollToTop}
                className={`flex items-center ${textColor} flex-shrink-0`}
                whileHover={{ opacity: 0.7 }}
                transition={{ duration: 0.2 }}
                aria-label="Go to homepage"
              >
                <img 
                  src={proximaIcon} 
                  alt="Proxima Investments icon" 
                  className="w-[28px] h-[28px]"
                />
              </motion.button>
              <div className="flex items-center justify-center gap-5 flex-1">
                <button 
                  onClick={() => scrollToSection('focus')}
                  className={`text-xs tracking-wider transition-all duration-300 ${textColorInactive}`}
                >
                  Focus
                </button>
                <button 
                  onClick={() => scrollToSection('portfolio')}
                  className={`text-xs tracking-wider transition-all duration-300 ${textColorInactive}`}
                >
                  Portfolio
                </button>
                <button 
                  onClick={() => scrollToSection('advisory')}
                  className={`text-xs tracking-wider transition-all duration-300 ${textColorInactive}`}
                >
                  Advisory
                </button>
                <button 
                  onClick={() => scrollToSection('team')}
                  className={`text-xs tracking-wider transition-all duration-300 ${textColorInactive}`}
                >
                  Team
                </button>
              </div>
            </div>
          </div>
        </motion.nav>
      </header>

    </>
  );
}