import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { Theme } from '../App';
import { useState } from 'react';

const grvtLogo = '/assets/1bc377a2abeb1d8e45a8b8a22b3b36c87484a456.png';
const solvLogo = '/assets/c4ec6a0b9df61a0a7e6ab2d5601cd77163c2f295.png';
const orderlyLogo = '/assets/f5ded359ccc31eb616394a678bf78869c125aa38.png';
const cambrianLogo = '/assets/12b6e174eeb689329d799e84577f2f75d50aee32.png';
const kronosLogo = '/assets/d334ed7059f7e91a5bab74fa230db84e30f66563.png';
const wooLogo = '/assets/e376dea18119679563d8a8eb3cf1ffd3b5f1a569.png';

interface AdvisoryProps {
  theme: Theme;
}

const advisoryCompanies = [
  {
    id: 1,
    name: 'Cambrian',
    description: 'Financial intelligence API helping agents make autonomous DeFi decisions with on/off-chain data.',
    website: 'https://www.cambrian.org',
    twitter: 'https://x.com/CambrianNetwork',
    logo: cambrianLogo
  },
  {
    id: 2,
    name: 'GRVT',
    description: 'Licensed DEX building a compliant CeDeFi trading venue with speed and low fees.',
    website: 'https://grvt.io',
    twitter: 'https://x.com/grvt_io',
    logo: grvtLogo
  },
  {
    id: 3,
    name: 'Kronos Research',
    description: 'Leading quantitative trading and liquidity provider across global crypto markets.',
    website: 'https://kronosresearch.com',
    twitter: 'https://x.com/KronosResearch',
    logo: kronosLogo
  },
  {
    id: 4,
    name: 'Orderly',
    description: 'Omnichain liquidity layer and SDK stack for spot & derivatives trading in DeFi.',
    website: 'https://orderly.network',
    twitter: 'https://x.com/OrderlyNetwork',
    logo: orderlyLogo
  },
  {
    id: 5,
    name: 'Solv',
    description: 'Bitcoin finance platform powering lending, yield, and BTC-native assets backed by on-chain reserves.',
    website: 'https://solv.finance',
    twitter: 'https://x.com/SolvProtocol',
    logo: solvLogo
  },
  {
    id: 6,
    name: 'WOO',
    description: 'Unified trading platform with deep liquidity, zero-fee trading, and best-in-class execution across CeFi and DeFi.',
    website: 'https://woofi.com',
    twitter: 'https://x.com/WOOnetwork',
    logo: wooLogo
  }
];

export function Advisory({ theme }: AdvisoryProps) {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  
  const bgColor = theme === 'light' ? 'bg-white' : 'bg-[#020847]';
  const textColor = theme === 'light' ? 'text-[#020847]' : 'text-white';
  const subtextColor = theme === 'light' ? 'text-[#020847]/60' : 'text-white/60';
  const cardBg = theme === 'light' ? 'bg-[#020847]/5' : 'bg-white/5';
  const cardHoverBg = theme === 'light' ? 'hover:bg-[#020847]/10' : 'hover:bg-white/10';
  const cardBorder = theme === 'light' ? 'border-[#020847]/10' : 'border-white/10';
  const cardHoverBorder = theme === 'light' ? 'hover:border-[#020847]/20' : 'hover:border-white/20';
  const hoverText = theme === 'light' ? 'group-hover:text-[#020847]/80' : 'group-hover:text-white/80';
  const iconColor = theme === 'light' ? 'text-[#020847]/30 group-hover:text-[#020847]/60' : 'text-white/30 group-hover:text-white/60';
  const descColor = theme === 'light' ? 'text-[#020847]/50' : 'text-white/50';
  const logoBg = theme === 'light' ? 'bg-gray-100' : 'bg-white';
  const modalBg = theme === 'light' ? 'bg-white' : 'bg-[#020847]';

  // Companies are already in alphabetical order
  const sortedCompanies = [...advisoryCompanies];

  return (
    <section id="advisory" className={`${bgColor} px-8 lg:px-16 py-12 lg:py-20 transition-colors duration-700`}>
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16">
          <h2 className={`text-[clamp(2rem,5vw,3.5rem)] leading-tight font-bold ${textColor} mb-6`}>Advisory</h2>
          <p className={`text-[clamp(1rem,2vw,1.25rem)] ${subtextColor} leading-relaxed`}>
            We have a proven history of advisory and partnership engagements with prominent institutions across the Web3 ecosystem
          </p>
        </div>
        
        {/* Desktop Layout - Hidden on mobile */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-12">
          {sortedCompanies.map((company, index) => (
            <article key={company.id} className="group">
              <div className={`${cardBg} ${cardHoverBg} border ${cardBorder} ${cardHoverBorder} rounded-2xl p-8 transition-all duration-500 group-hover:scale-[1.02] h-full flex flex-col`}>
                <div className="flex items-start gap-6 mb-6 flex-shrink-0">
                  <div className={`flex-shrink-0 w-16 h-16 ${logoBg} rounded-xl flex items-center justify-center overflow-hidden`}>
                    <img
                      src={company.logo}
                      alt={`${company.name} logo`}
                      className="w-12 h-12 object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className={`${textColor} text-xl transition-colors duration-300`}>
                        {company.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        <a
                          href={company.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${iconColor} hover:${textColor} transition-colors`}
                          onClick={(e) => e.stopPropagation()}
                          aria-label={`Visit ${company.name} website`}
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                        <a
                          href={company.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${iconColor} hover:${textColor} transition-colors`}
                          onClick={(e) => e.stopPropagation()}
                          aria-label={`Visit ${company.name} on X`}
                        >
                          <svg
                            viewBox="0 0 24 24"
                            width="20"
                            height="20"
                            fill="currentColor"
                            className="flex-shrink-0"
                          >
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <p className={`${descColor} leading-relaxed flex-grow text-left`}>
                  {company.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile Layout - Logo Grid */}
        <div className="lg:hidden grid grid-cols-3 gap-4">
          {sortedCompanies.map((company) => (
            <button
              key={company.id}
              onClick={() => setExpandedId(company.id)}
              className="bg-white backdrop-blur-md border border-white/60 rounded-xl p-4 transition-all duration-300 active:scale-95 aspect-square flex items-center justify-center shadow-lg"
            >
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className="w-full h-full object-contain p-2"
              />
            </button>
          ))}
        </div>

        {/* Mobile Expanded Modal */}
        {expandedId && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4" 
            onClick={() => setExpandedId(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className={`${modalBg} w-full max-w-md rounded-3xl overflow-hidden shadow-2xl`}
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const company = sortedCompanies.find(c => c.id === expandedId);
                if (!company) return null;
                
                return (
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0 w-16 h-16 bg-white rounded-xl flex items-center justify-center overflow-hidden">
                          <img
                            src={company.logo}
                            alt={`${company.name} logo`}
                            className="w-12 h-12 object-contain"
                          />
                        </div>
                        <h3 className={`${textColor}`}>
                          {company.name}
                        </h3>
                      </div>
                      <button 
                        onClick={() => setExpandedId(null)}
                        className={`${textColor} opacity-60 hover:opacity-100 transition-opacity p-2 -mt-2 -mr-2`}
                      >
                        <X size={24} />
                      </button>
                    </div>
                    
                    <p className={`${descColor} leading-relaxed mb-8 text-left`}>
                      {company.description}
                    </p>
                    
                    <div className="flex items-center gap-4">
                      <a
                        href={company.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center px-4 py-3 ${textColor} bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-300`}
                      >
                        <ExternalLink size={20} />
                      </a>
                      <a
                        href={company.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center px-4 py-3 ${textColor} bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-300`}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="flex-shrink-0"
                        >
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}