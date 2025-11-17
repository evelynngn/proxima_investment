interface ProximaLogoProps {
  className?: string;
  color?: string;
  showText?: boolean;
  textColor?: string;
}

export function ProximaLogo({ className = "w-8 h-8", color = "#0096FF", showText = false, textColor }: ProximaLogoProps) {
  const logoColor = color;
  const finalTextColor = textColor || color;
  
  if (showText) {
    return (
      <div className="flex items-center gap-3">
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          role="img"
          aria-label="Proxima Investments logo"
        >
          <title>Proxima Investments</title>
          {/* Circle */}
          <circle cx="50" cy="50" r="38" stroke={logoColor} strokeWidth="3" fill="none" />
          
          {/* Triangle/Mountain peak */}
          <path 
            d="M 50 20 L 65 55 L 35 55 Z" 
            fill="none" 
            stroke={logoColor} 
            strokeWidth="3.5" 
            strokeLinejoin="miter"
          />
          
          {/* Horizontal lines on left side */}
          <line x1="12" y1="50" x2="30" y2="50" stroke={logoColor} strokeWidth="2.5" />
          <line x1="16" y1="58" x2="30" y2="58" stroke={logoColor} strokeWidth="2.5" />
          <line x1="20" y1="66" x2="30" y2="66" stroke={logoColor} strokeWidth="2.5" />
          
          {/* Horizontal lines on right side */}
          <line x1="70" y1="50" x2="88" y2="50" stroke={logoColor} strokeWidth="2.5" />
          <line x1="70" y1="58" x2="84" y2="58" stroke={logoColor} strokeWidth="2.5" />
          <line x1="70" y1="66" x2="80" y2="66" stroke={logoColor} strokeWidth="2.5" />
        </svg>
        
        <div className="flex flex-col">
          <span 
            className="tracking-[0.15em] leading-none"
            style={{ 
              color: finalTextColor,
              fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
              fontWeight: 700
            }}
          >
            PROXIMA
          </span>
          <span 
            className="tracking-[0.2em] leading-none mt-0.5"
            style={{ 
              color: finalTextColor,
              fontSize: 'clamp(0.5rem, 1.2vw, 0.75rem)',
              fontWeight: 500
            }}
          >
            INVESTMENTS
          </span>
        </div>
      </div>
    );
  }
  
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Proxima Investments logo"
    >
      <title>Proxima Investments</title>
      {/* Circle */}
      <circle cx="50" cy="50" r="38" stroke={logoColor} strokeWidth="3" fill="none" />
      
      {/* Triangle/Mountain peak */}
      <path 
        d="M 50 20 L 65 55 L 35 55 Z" 
        fill="none" 
        stroke={logoColor} 
        strokeWidth="3.5" 
        strokeLinejoin="miter"
      />
      
      {/* Horizontal lines on left side */}
      <line x1="12" y1="50" x2="30" y2="50" stroke={logoColor} strokeWidth="2.5" />
      <line x1="16" y1="58" x2="30" y2="58" stroke={logoColor} strokeWidth="2.5" />
      <line x1="20" y1="66" x2="30" y2="66" stroke={logoColor} strokeWidth="2.5" />
      
      {/* Horizontal lines on right side */}
      <line x1="70" y1="50" x2="88" y2="50" stroke={logoColor} strokeWidth="2.5" />
      <line x1="70" y1="58" x2="84" y2="58" stroke={logoColor} strokeWidth="2.5" />
      <line x1="70" y1="66" x2="80" y2="66" stroke={logoColor} strokeWidth="2.5" />
    </svg>
  );
}