import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { ExternalLink } from 'lucide-react';
import { Theme } from '../../App';

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

interface PortfolioPageProps {
  theme: Theme;
}

const portfolioCompanies = [
  {
    id: 1,
    name: 'PUDGY Penguins',
    description: 'A web3-born consumer IP brand turning NFTs into global toys, media, and community-driven products.',
    website: 'https://www.pudgypenguins.com/',
    logo: pudgyPenguinsLogo
  },
  {
    id: 2,
    name: 'CONCRETE',
    description: 'DeFi credit and yield infrastructure offering automated strategies and dynamic credit facilities.',
    website: 'https://www.concrete.xyz/',
    logo: concreteLogo
  },
  {
    id: 3,
    name: 'GRVT',
    description: 'Licensed DEX building a compliant CeDeFi trading venue with speed and low fees.',
    website: 'https://grvt.io/',
    logo: grvtLogo
  },
  {
    id: 4,
    name: 'dYdX',
    description: 'Leading decentralized perpetuals exchange with deep liquidity and pro trading tools.',
    website: 'https://dydx.exchange/',
    logo: dydxLogo
  },
  {
    id: 5,
    name: 'LayerZero',
    description: 'Omnichain messaging layer enabling secure, censorship-resistant cross-chain interoperability.',
    website: 'https://layerzero.network/',
    logo: layerZeroLogo
  },
  {
    id: 6,
    name: 'Sei',
    description: 'High-performance Layer 1 EVM blockchain optimized for high-frequency apps and DeFi.',
    website: 'https://www.sei.io/',
    logo: seiLogo
  },
  {
    id: 7,
    name: 'Cow Swap',
    description: 'Intents-based DEX aggregator with MEV protection and batch auctions for better prices.',
    website: 'https://cowswap.exchange/',
    logo: cowSwapLogo
  },
  {
    id: 8,
    name: 'Solv',
    description: 'Bitcoin finance platform powering lending, yield, and BTC-native assets backed by on-chain reserves.',
    website: 'https://solv.finance/',
    logo: solvLogo
  },
  {
    id: 9,
    name: 'BitLayer',
    description: 'Bitcoin Layer 2 leveraging the BitVM paradigm; EVM-compatible with BTC-aligned security goals.',
    website: 'https://bitlayer.org/',
    logo: bitlayerLogo
  },
  {
    id: 10,
    name: 'OpenTrade',
    description: 'Stablecoin yield infrastructure enabling turnkey, compliant treasury products for fintechs.',
    website: 'https://www.open-trade.io/',
    logo: openTradeLogo
  },
  {
    id: 11,
    name: 'Abstract',
    description: 'Consumer-grade L2 portal and ecosystem focusing on on-chain discovery and gasless onboarding.',
    website: 'https://abs.xyz/',
    logo: abstractLogo
  },
  {
    id: 12,
    name: 'Starkware',
    description: 'Pioneers of STARK proofs; builders of Starknet and StarkEx to scale Ethereum with validity proofs.',
    website: 'https://starkware.co/',
    logo: starkwareLogo
  },
  {
    id: 13,
    name: 'Orderly',
    description: 'Omnichain liquidity layer and SDK stack for spot & derivatives trading in DeFi.',
    website: 'https://orderly.network/',
    logo: orderlyLogo
  },
  {
    id: 14,
    name: 'MyPrize',
    description: 'Multiplayer crypto casino and social gaming experiences; "bet together" with creators and friends.',
    website: 'https://myprize.com/',
    logo: myPrizeLogo
  },
  {
    id: 15,
    name: 'Cambrian',
    description: 'Financial intelligence API helping agents make autonomous DeFi decisions with on/off-chain data.',
    website: 'https://cambrian.org/',
    logo: cambrianLogo
  }
];

export function PortfolioPage({ theme }: PortfolioPageProps) {
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

  return (
    <div className={`min-h-screen ${bgColor} pt-32 px-8 lg:px-16 pb-32 transition-colors duration-700`}>
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24"
        >
          <h1 className={`text-[clamp(2.5rem,6vw,4.5rem)] leading-tight ${textColor} mb-8`}>Portfolio</h1>
          <p className={`text-[clamp(1rem,2vw,1.25rem)] ${subtextColor} max-w-3xl leading-relaxed`}>
            We back exceptional founders and ideas with clarity and conviction across Web3 infrastructure, DeFi, and emerging technologies.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {portfolioCompanies.map((company, index) => (
            <motion.div
              key={company.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.05,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <a
                href={company.website}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className={`${cardBg} ${cardHoverBg} border ${cardBorder} ${cardHoverBorder} rounded-2xl p-8 transition-all duration-500 hover:scale-[1.02]`}>
                  <div className="flex items-start gap-6 mb-6">
                    <div className={`flex-shrink-0 w-16 h-16 ${logoBg} rounded-xl flex items-center justify-center overflow-hidden`}>
                      <img
                        src={company.logo}
                        alt={`${company.name} logo`}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div>
                          <div className={`${numberColor} text-sm mb-1`}>{String(company.id).padStart(2, '0')}</div>
                          <h3 className={`${textColor} text-xl ${hoverText} transition-colors duration-300`}>
                            {company.name}
                          </h3>
                        </div>
                        <ExternalLink className={`w-5 h-5 ${iconColor} transition-colors flex-shrink-0 mt-1`} />
                      </div>
                    </div>
                  </div>
                  <p className={`${descColor} leading-relaxed`}>
                    {company.description}
                  </p>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}