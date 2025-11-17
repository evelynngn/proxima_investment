import { motion } from 'motion/react';
import { Linkedin } from 'lucide-react';
import { Theme } from '../App';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { ImageWithFallback } from './figma/ImageWithFallback';

const davidCaiImage = '/assets/2532ecfd223d5c55a5e627c9f32280da2d6e264e.png';
const jasonImage = '/assets/7b62844201072bd3f66bfb2199533113f932561a.png';
const georgeImage = '/assets/edaf6cc576787d8def6c2602daf537748d1e5216.png';
const michaelImage = '/assets/3d0038001027bab4b3b3b6c90424831593b5e738.png';
const evelynImage = '/assets/833a5b44bf8ed859a2cdc3db1440118813e72653.png';
const baneImage = '/assets/2ae839aa858885c06c6f806b28f84f633d8b44f2.png';

interface TeamProps {
  theme: Theme;
}

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  twitter: string;
  linkedin: string;
}

// X (formerly Twitter) icon
const XIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const teamMembers = [
  {
    name: 'David Cai',
    role: 'Co-founder and Managing Partner',
    bio: 'David leads Proxima Investments, bringing a sharp blend of experience across crypto, private equity, and investment banking. Before diving deep into Web3, he spent 15+ years at firms like Lone Star Funds, Lazard, and Perella Weinberg Partners, executing over $50 billion in M&A deals and managing a $5 billion opportunity fund. Since moving into crypto, he has been an early advocate for on-chain innovation and now advises several frontier projects across many different verticals. David studied Finance and Accounting at NYU Stern.',
    image: davidCaiImage,
    twitter: 'https://x.com/singularitymemo',
    linkedin: 'https://www.linkedin.com/in/davidcai/'
  },
  {
    name: 'Jason Brannigan',
    role: 'Co-founder and General Partner',
    bio: 'Jason has been in crypto since 2014, long before it was mainstream. As part of a three-person investment team managing the $5 billion Church of England Pension Fund, he oversaw a $300 million portfolio in private equity and venture capital. Today, he brings that same institutional discipline to early-stage investing in crypto and AI. Jason also leads research for one of the top crypto DAOs and frequently speaks at conferences around the world. He holds a First-Class degree in Economics from Royal Holloway, University of London.',
    image: jasonImage,
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
    image: baneImage,
    twitter: 'https://x.com/0xBane',
    linkedin: 'https://www.linkedin.com/in/banezhang/'
  },
  {
    name: 'Michael Dulski',
    role: 'Investment Analyst',
    bio: 'Michael covers DeFi and liquid markets at Proxima Investments, combining analytical precision with the mindset of an experienced trader. He began trading traditional markets at 16 and entered crypto in 2021, developing a deep understanding of market structure and risk dynamics. His background includes research at Poland\'s Ministry of Finance, where he contributed to the research department. Currently completing his bachelor\'s degree at the Warsaw School of Economics, he focuses on identifying asymmetric opportunities in emerging crypto markets while maintaining disciplined risk frameworks.',
    image: michaelImage,
    twitter: 'https://x.com/Duldul_Capital',
    linkedin: ''
  },
  {
    name: 'Evelyn Nguyen',
    role: 'Investment Analyst',
    bio: 'Evelyn is an Investment Analyst at Proxima Investments, combining an economics background with a deep curiosity for crypto and emerging technologies. She focuses on research, analysis, and deal sourcing activities to identify visionary founders and markets shaping the next wave of innovation. She previously led business development at Twendee Labs, driving partnerships and blockchain initiatives across the tech landscape.',
    image: evelynImage,
    twitter: 'https://x.com/Evelyn_ngn',
    linkedin: 'https://www.linkedin.com/in/giangnguyen15/'
  }
];

export function Team({ theme }: TeamProps) {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [expandedBios, setExpandedBios] = useState<Set<string>>(new Set());
  
  const bgColor = theme === 'light' ? 'bg-white' : 'bg-[#020847]';
  const textColor = theme === 'light' ? 'text-[#020847]' : 'text-white';
  const subtextColor = theme === 'light' ? 'text-[#020847]/60' : 'text-white/60';
  const roleColor = theme === 'light' ? 'text-[#020847]/50' : 'text-white/50';
  const hoverText = theme === 'light' ? 'group-hover:text-[#020847]/80' : 'group-hover:text-white/80';
  const imageBg = theme === 'light' ? 'bg-[#020847]/5' : 'bg-white/5';

  const toggleBio = (name: string) => {
    setExpandedBios(prev => {
      const newSet = new Set(prev);
      if (newSet.has(name)) {
        newSet.delete(name);
      } else {
        newSet.add(name);
      }
      return newSet;
    });
  };

  const truncateBio = (bio: string, wordLimit: number = 20) => {
    const words = bio.split(' ');
    if (words.length <= wordLimit) return bio;
    return words.slice(0, wordLimit).join(' ') + '...';
  };

  return (
    <>
      <section id="team" className={`${bgColor} px-8 lg:px-16 py-12 lg:py-20 pb-24 lg:pb-20 transition-colors duration-700`}>
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16">
            <h2 className={`text-[clamp(2rem,5vw,3.5rem)] leading-tight font-bold ${textColor} mb-6`}>Team</h2>
            <p className={`text-[clamp(1rem,2vw,1.25rem)] ${subtextColor} leading-relaxed text-left`}>
              Founded in 2021 as Kronos Ventures, the venture arm of Kronos Research, we rebranded as Proxima Investments in 2025 to operate as an independent platform for ventures, liquid investments, and advisory. Our team combines decades of experience across investment banking, private equity, venture capital, and digital assets. From global institutions to emerging crypto ecosystems, we deliver disciplined investing backed by deep operational expertise.
            </p>
          </div>
          
          {/* Desktop Layout - 3x2 Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-12">
            {teamMembers.map((member) => (
              <article 
                key={member.name} 
                className="group cursor-pointer"
                onClick={() => setSelectedMember(member)}
              >
                <div className={`aspect-[3/4] ${imageBg} overflow-hidden rounded-lg mb-4`}>
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <h3 className={`text-2xl ${textColor} ${hoverText} mb-2 transition-colors duration-300`}>
                  {member.name}
                </h3>
                <p className={`${roleColor} mb-3 text-base`}>{member.role}</p>
                <div className="flex gap-2">
                  <a 
                    href={member.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`${textColor} opacity-60 hover:opacity-100 transition-opacity duration-300`}
                    aria-label={`${member.name}'s X`}
                    onClick={(e) => e.stopPropagation()}
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
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Linkedin size={20} />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>

          {/* Mobile Layout - 2 per row */}
          <div className="md:hidden grid grid-cols-2 gap-6">
            {teamMembers.map((member) => (
              <article 
                key={member.name} 
                className="group cursor-pointer"
                onClick={() => setSelectedMember(member)}
              >
                <div className={`aspect-[3/4] ${imageBg} overflow-hidden rounded-lg mb-3`}>
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <h3 className={`text-sm ${textColor} mb-1 line-clamp-1`}>
                  {member.name}
                </h3>
                <p className={`text-xs ${roleColor} mb-3 leading-tight`}>{member.role}</p>
                <div className="flex gap-2">
                  <a 
                    href={member.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`${textColor} opacity-60 hover:opacity-100 transition-opacity duration-300`}
                    aria-label={`${member.name}'s X`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <XIcon size={18} />
                  </a>
                  {member.linkedin && (
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`${textColor} opacity-60 hover:opacity-100 transition-opacity duration-300`}
                      aria-label={`${member.name}'s LinkedIn`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Linkedin size={18} />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Bio Dialog */}
      <Dialog open={!!selectedMember} onOpenChange={() => setSelectedMember(null)}>
        <DialogContent className={`${bgColor} ${textColor} max-w-md max-h-[80vh] overflow-y-auto`}>
          {selectedMember && (
            <>
              <DialogHeader>
                <DialogTitle className={`text-xl ${textColor}`}>
                  {selectedMember.name}
                </DialogTitle>
                <DialogDescription className={`${roleColor} text-sm`}>
                  {selectedMember.role}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <p className={`${subtextColor} text-sm leading-relaxed text-left`}>
                  {selectedMember.bio}
                </p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}