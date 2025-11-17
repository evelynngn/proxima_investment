import { motion } from 'motion/react';
import { useState } from 'react';
import { Linkedin, Mail } from 'lucide-react';
import { Theme } from '../App';

const logoImage = '/assets/436c37082aa7cb0f2cd8a4741acb0cd70f1fd591.png';

interface FooterProps {
  theme: Theme;
  onPrivacyClick: () => void;
  onTermsClick: () => void;
}

export function Footer({ theme, onPrivacyClick, onTermsClick }: FooterProps) {
  const bgColor = theme === 'light' ? 'bg-white' : 'bg-[#020847]';
  const textColor = theme === 'light' ? 'text-[#020847]' : 'text-white';
  const iconColor = theme === 'light' ? 'text-[#020847]/30 hover:text-[#020847]/60' : 'text-white/30 hover:text-white/60';
  const linkColor = theme === 'light' ? 'text-[#020847]/40 hover:text-[#020847]/60' : 'text-white/40 hover:text-white/60';
  const dividerColor = theme === 'light' ? 'bg-[#020847]/20' : 'bg-white/20';
  const copyrightColor = theme === 'light' ? 'text-[#020847]/20' : 'text-white/20';

  return (
    <footer id="contact" className={`${bgColor} transition-colors duration-700`}>
      {/* Footer Section - Bottom */}
      <div className="px-8 lg:px-16 py-8 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col items-center lg:items-start gap-6">
            {/* Logo - Mobile Only */}
            <div className="flex items-center justify-center gap-3 lg:hidden">
              <img src={logoImage} alt="Proxima" className="h-12 w-auto" />
            </div>

            {/* Social Media - Mobile Only (centered) */}
            <div className="flex items-center justify-center gap-4 lg:hidden">
              <a
                href="mailto:we@proxima.investments"
                className={`${iconColor} transition-colors`}
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <div className={`w-px h-3 ${dividerColor}`} />
              <a
                href="https://www.linkedin.com/company/proxima-investment"
                target="_blank"
                rel="noopener noreferrer"
                className={`${iconColor} transition-colors`}
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <div className={`w-px h-3 ${dividerColor}`} />
              <a
                href="https://x.com/proxima_xyz"
                target="_blank"
                rel="noopener noreferrer"
                className={`${iconColor} transition-colors`}
                aria-label="X (Twitter)"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>

            {/* Links and Copyright */}
            <div className="flex flex-col items-center lg:items-start gap-3 pt-2 lg:pt-0">
              <div className="flex items-center gap-4">
                <button
                  onClick={onTermsClick}
                  className={`${linkColor} text-xs transition-colors duration-300`}
                >
                  Terms and Conditions
                </button>
                <div className={`w-px h-3 ${dividerColor}`} />
                <button
                  onClick={onPrivacyClick}
                  className={`${linkColor} text-xs transition-colors duration-300`}
                >
                  Privacy
                </button>
                <div className={`w-px h-3 ${dividerColor} hidden lg:block`} />
                <a
                  href="mailto:we@proxima.investments"
                  className={`${iconColor} transition-colors hidden lg:inline-block`}
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <div className={`w-px h-3 ${dividerColor} hidden lg:block`} />
                <a
                  href="https://www.linkedin.com/company/proxima-investment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${iconColor} transition-colors hidden lg:inline-block`}
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <div className={`w-px h-3 ${dividerColor} hidden lg:block`} />
                <a
                  href="https://x.com/proxima_xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${iconColor} transition-colors hidden lg:inline-block`}
                  aria-label="X (Twitter)"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
              <p className={`${copyrightColor} text-xs`}>
                © 2025 Proxima Investments. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}