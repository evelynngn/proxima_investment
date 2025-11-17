import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Theme } from '../../App';
import { Linkedin } from 'lucide-react';

const georgeImage = '/assets/edaf6cc576787d8def6c2602daf537748d1e5216.png';
const michaelImage = '/assets/217263d71a29c4f4c756185348b1d0252880fc08.png';

// X (formerly Twitter) icon
const XIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

interface TeamPageProps {
  theme: Theme;
}

const teamMembers = [
  {
    name: 'David Cai',
    role: 'Co-founder and Managing Partner',
    bio: 'David leads Proxima Investments, bringing a sharp blend of experience across crypto, private equity, and investment banking. Before diving deep into Web3, he spent 15+ years at firms like Lone Star Funds, Lazard, and Perella Weinberg Partners, executing over $50 billion in M&A deals and managing a $5 billion opportunity fund. Since moving into crypto, he has been an early advocate for on-chain innovation and now advises several frontier projects across many different verticals. David studied Finance and Accounting at NYU Stern.',
    image: 'https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MjEzMTk0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    twitter: 'https://x.com/singularitymemo',
    linkedin: 'https://www.linkedin.com/in/davidcai/'
  },
  {
    name: 'Jason Brannigan',
    role: 'Co-founder and General Partner',
    bio: 'Jason has been in crypto since 2014, long before it was mainstream. As part of a three-person investment team managing the $5 billion Church of England Pension Fund, he oversaw a $300 million portfolio in private equity and venture capital. Today, he brings that same institutional discipline to early-stage investing in crypto and AI. Jason also leads research for one of the top crypto DAOs and frequently speaks at conferences around the world. He holds a First-Class degree in Economics from Royal Holloway, University of London.',
    image: 'https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBsZWFkZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjIxNTQ2MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    twitter: 'https://x.com/Ja_Brann',
    linkedin: 'https://www.linkedin.com/in/jason-brannigan/'
  },
  {
    name: 'George Aranzaso',
    role: 'Co-founder and Research Partner',
    bio: 'George drives research and due diligence at Proxima Investments, combining over a decade in crypto with deep experience in small cap equity investing. He started out mining Bitcoin and Ethereum in 2014 and has since evolved into a sharp-eyed investor across blockchain and emerging technologies. Before joining Proxima, he also coached an esports team to multiple Asian championship titles - a testament to his analytical mindset and competitive edge.',
    image: georgeImage,
    twitter: 'https://x.com/GGaranzaso',
    linkedin: 'https://www.linkedin.com/in/george-michael-aranzaso-279ba8149/'
  },
  {
    name: 'Bane Zhang',
    role: 'Advisor',
    bio: 'Bane joined Proxima Investments as an Advisor, bringing over 5 years of experience in crypto. Prior to this, he spent over 2 years in equity research and structured products at top-tier investment banks and hedge funds. Bane is actively engaged as an on-chain trader and is a core member of several prominent research groups. In his earlier years, Bane excelled as a semi-professional League of Legends player, achieving top two finishes in multiple national competitions across different levels. He holds a degree in Quantitative Finance from Singapore Management University, graduating Summa Cum Laude.',
    image: 'https://images.unsplash.com/photo-1738566061505-556830f8b8f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHByb2Zlc3Npb25hbCUyMGJ1c2luZXNzbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYyNzcwNTcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    twitter: 'https://x.com/0xBane',
    linkedin: 'https://www.linkedin.com/in/banezhang/'
  },
  {
    name: 'Michal Dulski',
    role: 'Investment Analyst',
    bio: '',
    image: michaelImage,
    twitter: 'https://x.com/Duldul_Capital',
    linkedin: ''
  },
  {
    name: 'Evelyn Nguyen',
    role: 'Investment Analyst',
    bio: 'Evelyn is an Investment Analyst at Proxima Investments, combining an economics background with a deep curiosity for crypto and emerging technologies. She focuses on research, analysis, and deal sourcing activities to identify visionary founders and markets shaping the next wave of innovation. She previously led business development at Twendee Labs, driving partnerships and blockchain initiatives across the tech landscape.',
    image: 'https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc3dvbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYyMTA2MzczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    twitter: 'https://x.com/Evelyn_ngn',
    linkedin: 'https://www.linkedin.com/in/giangnguyen15/'
  }
];

export function TeamPage({ theme }: TeamPageProps) {
  const bgColor = theme === 'light' ? 'bg-white' : 'bg-[#010420]';
  const textColor = theme === 'light' ? 'text-[#010420]' : 'text-white';
  const subtextColor = theme === 'light' ? 'text-[#010420]/60' : 'text-white/60';
  const roleColor = theme === 'light' ? 'text-[#010420]/50' : 'text-white/50';
  const hoverText = theme === 'light' ? 'group-hover:text-[#010420]/80' : 'group-hover:text-white/80';
  const imageBg = theme === 'light' ? 'bg-[#010420]/5' : 'bg-white/5';

  return (
    <div className={`min-h-screen ${bgColor} pt-32 px-8 lg:px-16 pb-32 transition-colors duration-700`}>
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-32"
        >
          <h1 className={`text-[clamp(2.5rem,6vw,4.5rem)] leading-tight ${textColor} mb-8`}>Our Team</h1>
          <p className={`text-[clamp(1rem,2vw,1.25rem)] ${subtextColor} max-w-4xl leading-relaxed`}>
            Formed in 2021 as Kronos Ventures, the venture arm of Kronos Research. We rebranded to Proxima Investments in 2025 as an independent brand to pursue ventures, liquid investments and advisory. 
            Our team brings together decades of experience across investment banking, private equity, venture capital, and digital assets. From global institutions to emerging crypto ecosystems, we've built a track record of disciplined investing and deep operational understanding.
          </p>
        </motion.div>
        
        <div className="space-y-24">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 1, 
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="group"
            >
              <div className="grid md:grid-cols-[300px_1fr] gap-12 items-start">
                <div className={`aspect-[3/4] ${imageBg} overflow-hidden rounded-lg`}>
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                
                <div className="pt-4">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className={`text-[clamp(1.5rem,3vw,2rem)] ${textColor} ${hoverText} transition-colors duration-300`}>
                      {member.name}
                    </h3>
                    <div className="flex gap-2">
                      <a 
                        href={member.twitter} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`${textColor} opacity-60 hover:opacity-100 transition-opacity duration-300`}
                        aria-label={`${member.name}'s X`}
                      >
                        <XIcon size={20} />
                      </a>
                      {member.linkedin && (
                        <a 
                          href={member.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={`${textColor} opacity-60 hover:opacity-100 transition-opacity duration-300`}
                          aria-label={`${member.name}'s LinkedIn`}
                        >
                          <Linkedin size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className={`${roleColor} mb-6 text-lg`}>{member.role}</p>
                  {member.bio && (
                    <p className={`${subtextColor} leading-relaxed max-w-2xl`}>
                      {member.bio}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
