import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { Theme } from '../App';
import { useState } from 'react';

const pudgyPenguinsLogo = '/assets/95f57c0e459433d6e5c9fd2635182d395601e91e.png';
const concreteLogo = '/assets/90ba0b0f72c53d3fcd002ca2970fc3ac54e5366c.png';
const grvtLogo = '/assets/1bc377a2abeb1d8e45a8b8a22b3b36c87484a456.png';
const dydxLogo = '/assets/303ecbf0fea5bd3c052bc84e451aff78cecf459c.png';
const layerZeroLogo = '/assets/5040b571ca11672cefc75a148a7b6e3c0cbbead6.png';
const seiLogo = '/assets/ab5d4369c4208c51680d91bd83beb233161b1efe.png';
const cowSwapLogo = '/assets/693c7fdac9d32d5d4a8ad9c9673be68258d93b75.png';
const solvLogo = '/assets/c4ec6a0b9df61a0a7e6ab2d5601cd77163c2f295.png';
const bitlayerLogo = '/assets/1755699848812e56af65faeb4b77e77844dcdf33.png';
const openTradeLogo = '/assets/6d75ab1e750445d63c956b4b793a88f03e3497f4.png';
const abstractLogo = '/assets/8d58d8ac3bb7ea3b017d56e7585d90ef0116a2ed.png';
const starkwareLogo = '/assets/de0174143cdd887c8972bcd04f6d649ba6a8b502.png';
const orderlyLogo = '/assets/f5ded359ccc31eb616394a678bf78869c125aa38.png';
const myPrizeLogo = '/assets/238eb3c5d1648d17a8df1ec9eef050ee4d4370df.png';
const cambrianLogo = '/assets/12b6e174eeb689329d799e84577f2f75d50aee32.png';

interface PortfolioProps {
  theme: Theme;
}

const portfolioCompanies = [
  {
    id: 1,
    name: 'PUDGY Penguins',
    description: 'A web3-born consumer IP brand turning NFTs into global toys, media, and community-driven products.',
    website: 'https://www.pudgypenguins.com/',
    twitter: 'https://twitter.com/pudgypenguins',
    logo: pudgyPenguinsLogo
  },
  {
    id: 2,
    name: 'CONCRETE',
    description: 'DeFi credit and yield infrastructure offering automated strategies and dynamic credit facilities.',
    website: 'https://www.concrete.xyz/',
    twitter: 'https://x.com/ConcreteXYZ',
    logo: concreteLogo
  },
  {
    id: 3,
    name: 'GRVT',
    description: 'Licensed DEX building a compliant CeDeFi trading venue with speed and low fees.',
    website: 'https://grvt.io/',
    twitter: 'https://twitter.com/grvt_io',
    logo: grvtLogo
  },
  {
    id: 4,
    name: 'dYdX',
    description: 'Leading decentralized perpetuals exchange with deep liquidity and pro trading tools.',
    website: 'https://dydx.exchange/',
    twitter: 'https://twitter.com/dydx',
    logo: dydxLogo
  },
  {
    id: 5,
    name: 'LayerZero',
    description: 'Omnichain messaging layer enabling secure, censorship-resistant cross-chain interoperability.',
    website: 'https://layerzero.network/',
    twitter: 'https://x.com/LayerZero_Core',
    logo: layerZeroLogo
  },
  {
    id: 6,
    name: 'Sei',
    description: 'High-performance Layer 1 EVM blockchain optimized for high-frequency apps and DeFi.',
    website: 'https://www.sei.io/',
    twitter: 'https://twitter.com/SeiNetwork',
    logo: seiLogo
  },
  {
    id: 7,
    name: 'Cow Swap',
    description: 'Intents-based DEX aggregator with MEV protection and batch auctions for better prices.',
    website: 'https://cowswap.exchange/',
    twitter: 'https://twitter.com/CoWSwap',
    logo: cowSwapLogo
  },
  {
    id: 8,
    name: 'Solv',
    description: 'Bitcoin finance platform powering lending, yield, and BTC-native assets backed on-chain reserves.',
    website: 'https://solv.finance/',
    twitter: 'https://twitter.com/SolvProtocol',
    logo: solvLogo
  },
  {
    id: 9,
    name: 'BitLayer',
    description: 'Bitcoin Layer 2 leveraging the BitVM paradigm; EVM-compatible with BTC-aligned security goals.',
    website: 'https://bitlayer.org/',
    twitter: 'https://twitter.com/BitLayerLabs',
    logo: bitlayerLogo
  },
  {
    id: 10,
    name: 'OpenTrade',
    description: 'Stablecoin yield infrastructure enabling turnkey, compliant treasury products for fintechs.',
    website: 'https://www.open-trade.io/',
    twitter: 'https://x.com/opentrade_io',
    logo: openTradeLogo
  },
  {
    id: 11,
    name: 'Abstract',
    description: 'Consumer-grade L2 portal and ecosystem focusing on-chain discovery and gasless onboarding.',
    website: 'https://abs.xyz/',
    twitter: 'https://twitter.com/AbstractChain',
    logo: abstractLogo
  },
  {
    id: 12,
    name: 'Starkware',
    description: 'Pioneers of STARK proofs; builders of Starknet and StarkEx to scale Ethereum with validity proofs.',
    website: 'https://starkware.co/',
    twitter: 'https://twitter.com/StarkWareLtd',
    logo: starkwareLogo
  },
  {
    id: 13,
    name: 'Orderly',
    description: 'Omnichain liquidity layer and SDK stack for spot & derivatives trading in DeFi.',
    website: 'https://orderly.network/',
    twitter: 'https://twitter.com/OrderlyNetwork',
    logo: orderlyLogo
  },
  {
    id: 14,
    name: 'MyPrize',
    description: 'Multiplayer crypto casino and social gaming experiences; \"bet together\" with creators and friends.',
    website: 'https://myprize.com',
    twitter: 'https://x.com/myprizecom',
    logo: myPrizeLogo
  },
  {
    id: 15,
    name: 'Cambrian',
    description: 'Financial intelligence API helping agents make autonomous DeFi decisions with on/off-chain data.',
    website: 'https://cambrian.org/',
    twitter: 'https://x.com/CambrianNetwork',
    logo: cambrianLogo
  }
];

export function Portfolio({ theme }: PortfolioProps) {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  
  const bgColor = theme === 'light' ? 'bg-white' : 'bg-[#020847]';
  const textColor = theme === 'light' ? 'text-[#020847]' : 'text-white';
  const subtextColor = theme === 'light' ? 'text-[#020847]/60' : 'text-white/60';
  const cardBg = theme === 'light' ? 'bg-[#020847]/5' : 'bg-white/5';
  const cardHoverBg = theme === 'light' ? 'hover:bg-[#020847]/10' : 'hover:bg-white/10';
  const cardBorder = theme === 'light' ? 'border-[#020847]/10' : 'border-white/10';
  const cardHoverBorder = theme === 'light' ? 'hover:border-[#020847]/20' : 'hover:border-white/20';
  const numberColor = theme === 'light' ? 'text-[#020847]/40' : 'text-white/40';
  const hoverText = theme === 'light' ? 'group-hover:text-[#020847]/80' : 'group-hover:text-white/80';
  const iconColor = theme === 'light' ? 'text-[#020847]/30 group-hover:text-[#020847]/60' : 'text-white/30 group-hover:text-white/60';
  const descColor = theme === 'light' ? 'text-[#020847]/50' : 'text-white/50';
  const logoBg = theme === 'light' ? 'bg-gray-100' : 'bg-white';
  const modalBg = theme === 'light' ? 'bg-white' : 'bg-[#020847]';

  // Sort companies alphabetically by name
  const sortedCompanies = [...portfolioCompanies].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <section id="portfolio" className={`${bgColor} px-8 lg:px-16 py-12 lg:py-20 transition-colors duration-700`}>
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16">
          <h2 className={`text-[clamp(2rem,5vw,3.5rem)] leading-tight font-bold ${textColor} mb-6`}>Portfolio</h2>
          <p className={`text-[clamp(1rem,2vw,1.25rem)] ${subtextColor} leading-relaxed`}>
            We back exceptional founders and ideas with clarity and conviction across Web3 infrastructure, DeFi, and emerging technologies
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