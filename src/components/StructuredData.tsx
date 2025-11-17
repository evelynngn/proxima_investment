import { useEffect } from 'react';

export function StructuredData() {
  useEffect(() => {
    // Organization Schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "FinancialService",
      "@id": "https://proxima.investments/#organization",
      "name": "Proxima Investments",
      "alternateName": "Proxima",
      "description": "Think deep, dream forward, back excellence. Venture capital firm backing exceptional founders across Web3 infrastructure, DeFi, and emerging technologies.",
      "url": "https://proxima.investments",
      "logo": "https://proxima.investments/proxima-logo.png",
      "foundingDate": "2021",
      "founders": [
        {
          "@type": "Person",
          "name": "David Cai",
          "jobTitle": "Co-founder and Managing Partner",
          "url": "https://proxima.investments/#team"
        },
        {
          "@type": "Person",
          "name": "Jason Brannigan",
          "jobTitle": "Co-founder and General Partner",
          "url": "https://proxima.investments/#team"
        },
        {
          "@type": "Person",
          "name": "George Aranzaso",
          "jobTitle": "Co-founder and Research Partner",
          "url": "https://proxima.investments/#team"
        }
      ],
      "sameAs": [
        "https://x.com/proxima_xyz",
        "https://www.linkedin.com/company/proxima-investment"
      ],
      "areaServed": "Worldwide",
      "slogan": "Think deep. Dream forward. Back excellence."
    };

    // Team Members Schema
    const teamMembersSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Proxima Investments Team",
      "itemListElement": [
        {
          "@type": "Person",
          "name": "David Cai",
          "jobTitle": "Co-founder and Managing Partner",
          "description": "David leads Proxima Investments, bringing a sharp blend of experience across crypto, private equity, and investment banking. Before diving deep into Web3, he spent 15+ years at firms like Lone Star Funds, Lazard, and Perella Weinberg Partners, executing over $50 billion in M&A deals and managing a $5 billion opportunity fund.",
          "alumniOf": "NYU Stern School of Business",
          "knowsAbout": ["Venture Capital", "Private Equity", "Investment Banking", "Cryptocurrency", "Web3"],
          "sameAs": [
            "https://x.com/singularitymemo",
            "https://www.linkedin.com/in/davidcai/"
          ],
          "worksFor": {
            "@id": "https://proxima.investments/#organization"
          }
        },
        {
          "@type": "Person",
          "name": "Jason Brannigan",
          "jobTitle": "Co-founder and General Partner",
          "description": "Jason has been in crypto since 2014, long before it was mainstream. As part of a three-person investment team managing the $5 billion Church of England Pension Fund, he oversaw a $300 million portfolio in private equity and venture capital.",
          "alumniOf": "Royal Holloway, University of London",
          "knowsAbout": ["Venture Capital", "Cryptocurrency", "Private Equity", "AI", "DeFi"],
          "sameAs": [
            "https://x.com/Ja_Brann",
            "https://www.linkedin.com/in/jason-brannigan/"
          ],
          "worksFor": {
            "@id": "https://proxima.investments/#organization"
          }
        },
        {
          "@type": "Person",
          "name": "George Aranzaso",
          "jobTitle": "Co-founder and Research Partner",
          "description": "George drives research and due diligence at Proxima Investments, combining over a decade in crypto with deep experience in small cap equity investing. He started out mining Bitcoin and Ethereum in 2014 and has since evolved into a sharp-eyed investor across blockchain and emerging technologies.",
          "knowsAbout": ["Cryptocurrency", "Blockchain", "Research", "Due Diligence", "Bitcoin", "Ethereum"],
          "sameAs": [
            "https://x.com/GGaranzaso",
            "https://www.linkedin.com/in/george-michael-aranzaso-279ba8149/"
          ],
          "worksFor": {
            "@id": "https://proxima.investments/#organization"
          }
        },
        {
          "@type": "Person",
          "name": "Bane Zhang",
          "jobTitle": "Advisor",
          "description": "Bane joined Proxima Investments as an Advisor, bringing over 5 years of experience in crypto. Prior to this, he spent over 2 years in equity research and structured products at top-tier investment banks and hedge funds.",
          "alumniOf": "Singapore Management University",
          "knowsAbout": ["Cryptocurrency", "Equity Research", "Structured Products", "Trading"],
          "sameAs": [
            "https://x.com/0xBane",
            "https://www.linkedin.com/in/banezhang/"
          ],
          "worksFor": {
            "@id": "https://proxima.investments/#organization"
          }
        },
        {
          "@type": "Person",
          "name": "Michael Dulski",
          "jobTitle": "Investment Analyst",
          "description": "Michael covers DeFi and liquid markets at Proxima Investments, combining analytical precision with the mindset of an experienced trader. He began trading traditional markets at 16 and entered crypto in 2021.",
          "alumniOf": "Warsaw School of Economics",
          "knowsAbout": ["DeFi", "Trading", "Market Analysis", "Risk Management"],
          "sameAs": [
            "https://x.com/Duldul_Capital"
          ],
          "worksFor": {
            "@id": "https://proxima.investments/#organization"
          }
        },
        {
          "@type": "Person",
          "name": "Evelyn Nguyen",
          "jobTitle": "Investment Analyst",
          "description": "Evelyn is an Investment Analyst at Proxima Investments, combining an economics background with a deep curiosity for crypto and emerging technologies. She focuses on research, analysis, and deal sourcing activities.",
          "knowsAbout": ["Economics", "Cryptocurrency", "Research", "Business Development"],
          "sameAs": [
            "https://x.com/Evelyn_ngn",
            "https://www.linkedin.com/in/giangnguyen15/"
          ],
          "worksFor": {
            "@id": "https://proxima.investments/#organization"
          }
        }
      ]
    };

    // Website Schema
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Proxima Investments",
      "url": "https://proxima.investments",
      "description": "Think deep, dream forward, back excellence. Venture capital firm backing exceptional founders across Web3 infrastructure, DeFi, and emerging technologies.",
      "publisher": {
        "@id": "https://proxima.investments/#organization"
      },
      "inLanguage": "en-US"
    };

    // Service Schema - for the three focus areas
    const servicesSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Proxima Investments Services",
      "itemListElement": [
        {
          "@type": "Service",
          "name": "Venture Capital",
          "description": "We back founders and founding teams with a diverse blend of skills, insight, and executional strength. Our approach is deliberately selective and founder-centric: we support few, but engage deeply, combining capital with strategic and operational involvement.",
          "provider": {
            "@id": "https://proxima.investments/#organization"
          },
          "serviceType": "Venture Capital Investment",
          "areaServed": "Worldwide"
        },
        {
          "@type": "Service",
          "name": "Advisory",
          "description": "We advise projects across strategy, governance, and market positioning, drawing on experience that spans both Web3 and traditional finance. Our team has supported clients with strategic guidance, tokenomics design, and go-to-market planning.",
          "provider": {
            "@id": "https://proxima.investments/#organization"
          },
          "serviceType": "Investment Advisory",
          "areaServed": "Worldwide"
        },
        {
          "@type": "Service",
          "name": "Liquid Investments",
          "description": "Our liquid strategies follow the same principles that guide our venture work: precision, focus, and disciplined risk management. We actively allocate across digital assets and public markets through a data-driven, analytical framework.",
          "provider": {
            "@id": "https://proxima.investments/#organization"
          },
          "serviceType": "Asset Management",
          "areaServed": "Worldwide"
        }
      ]
    };

    // Breadcrumb Schema for single-page sections
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://proxima.investments"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Our Focus",
          "item": "https://proxima.investments/#focus"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Portfolio",
          "item": "https://proxima.investments/#portfolio"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Advisory",
          "item": "https://proxima.investments/#advisory"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Team",
          "item": "https://proxima.investments/#team"
        }
      ]
    };

    // Create and append script tags for each schema
    const schemas = [
      { id: 'schema-organization', data: organizationSchema },
      { id: 'schema-website', data: websiteSchema },
      { id: 'schema-team', data: teamMembersSchema },
      { id: 'schema-services', data: servicesSchema },
      { id: 'schema-breadcrumb', data: breadcrumbSchema }
    ];

    schemas.forEach(({ id, data }) => {
      // Remove existing script if it exists
      const existing = document.getElementById(id);
      if (existing) {
        existing.remove();
      }

      // Create new script tag
      const script = document.createElement('script');
      script.id = id;
      script.type = 'application/ld+json';
      script.text = JSON.stringify(data);
      document.head.appendChild(script);
    });

    // Cleanup function to remove scripts on unmount
    return () => {
      schemas.forEach(({ id }) => {
        const script = document.getElementById(id);
        if (script) {
          script.remove();
        }
      });
    };
  }, []);

  return null;
}