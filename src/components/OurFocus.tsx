import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Theme } from '../App';

const focuses = [
  {
    title: 'Venture Capital',
    subtitle: 'Backing founders who redefine markets.',
    description: 'We back founders and founding teams with a diverse blend of skills, insight, and executional strength. Our approach is deliberately selective and founder-centric: we support few, but engage deeply, combining capital with strategic and operational involvement to help teams scale with precision and resilience.'
  },
  {
    title: 'Advisory',
    subtitle: 'Provide strategic insights for ambitious teams.',
    description: 'We advise projects across strategy, governance, and market positioning, drawing on experience that spans both Web3 and traditional finance. Our team has supported clients with strategic guidance, tokenomics design, and go-to-market planning, as well as preparation and support for exchange listings to ensure that teams present investor-ready structures and narratives.'
  },
  {
    title: 'Liquid Investments',
    subtitle: 'Discipline in motion.',
    description: 'Our liquid strategies follow the same principles that guide our venture work: precision, focus, and disciplined risk management. We actively allocate across digital assets and public markets through a data-driven, analytical framework, with an emphasis on shorter-duration token opportunities and targeted farming strategies that align with our fundamental investment methodology.'
  }
];

interface OurFocusProps {
  theme: Theme;
}

export function OurFocus({ theme }: OurFocusProps) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const bgColor = theme === 'light' ? 'bg-white' : 'bg-[#020847]';
  const textColor = theme === 'light' ? 'text-[#020847]' : 'text-white';
  const subtextColor = theme === 'light' ? 'text-[#020847]/40' : 'text-white/40';
  const cardBg = theme === 'light' ? 'bg-[#020847]/5' : 'bg-white/5';
  const cardHoverBg = theme === 'light' ? 'hover:bg-[#020847]/10' : 'hover:bg-white/10';
  const cardBorder = theme === 'light' ? 'border-[#020847]/10' : 'border-white/10';
  const cardHoverBorder = theme === 'light' ? 'hover:border-[#020847]/20' : 'hover:border-white/20';
  const accentText = theme === 'light' ? 'text-[#020847]/80' : 'text-[rgba(255,255,255,0.8)]';
  const descText = theme === 'light' ? 'text-[#020847]/50' : 'text-[rgba(255,255,255,0.5)]';

  return (
    <section id="focus" ref={containerRef} className={`${bgColor} px-8 lg:px-16 py-16 lg:py-20 relative transition-colors duration-700`}>
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16">
          <h2 className={`text-[clamp(2rem,5vw,3.5rem)] leading-tight font-bold ${textColor} mb-6`}>Our Focus</h2>
          <p className={`text-[clamp(1rem,2vw,1.25rem)] ${subtextColor} leading-relaxed`}>
            We operate across three disciplines that reflect our conviction-driven approach to building and backing excellence
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {focuses.map((focus, index) => (
            <article key={focus.title}>
              <div className={`${cardBg} ${cardHoverBg} border ${cardBorder} ${cardHoverBorder} rounded-2xl p-8 transition-all duration-500 hover:scale-[1.02] h-full flex flex-col group`}>
                <div className="mb-6 flex-shrink-0">
                  <h3 className={`text-[clamp(1.5rem,3vw,2rem)] ${textColor} transition-colors duration-300`}>{focus.title}</h3>
                </div>
                
                <div className="space-y-6 flex-grow">
                  <p className={`${descText} leading-relaxed text-left`}>
                    {focus.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}