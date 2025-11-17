import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { OurFocus } from "./components/OurFocus";
import { Portfolio } from "./components/Portfolio";
import { Advisory } from "./components/Advisory";
import { Team } from "./components/Team";
import { Footer } from "./components/Footer";
import { PrivacyPage } from "./components/pages/PrivacyPage";
import { TermsPage } from "./components/pages/TermsPage";
import { Separator } from "./components/ui/separator";
import { Toaster } from "./components/ui/sonner";
import { StructuredData } from "./components/StructuredData";

export type Theme = "dark" | "light" | "blue";

function App() {
  const [theme, setTheme] = useState<Theme>("blue");
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    
    // CRITICAL: Remove any "noindex" tags that might be set by Figma Make
    // Check all meta tags with name="robots"
    const allRobotsMeta = document.querySelectorAll('meta[name="robots"]');
    allRobotsMeta.forEach(meta => {
      const content = meta.getAttribute('content');
      if (content && content.includes('noindex')) {
        meta.remove();
      }
    });
    
    // Also check for X-Robots-Tag in meta tags (some platforms add this)
    const xRobotsMeta = document.querySelectorAll('meta[http-equiv="X-Robots-Tag"]');
    xRobotsMeta.forEach(meta => {
      const content = meta.getAttribute('content');
      if (content && content.includes('noindex')) {
        meta.remove();
      }
    });
    
    // Remove any "generator" meta tag that might say "Figma"
    const metaGenerator = document.querySelector('meta[name="generator"]');
    if (metaGenerator) {
      metaGenerator.remove();
    }
    
    // Update meta tags
    document.title = "Proxima Investments | Venture Capital for Web3, DeFi & Digital Assets";
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Think deep, dream forward, back excellence. Leading venture capital firm backing exceptional founders across Web3 infrastructure, DeFi, and emerging technologies.');
    
    // Keywords meta tag
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'venture capital, investment firm, Web3, DeFi, cryptocurrency, blockchain, digital assets, advisory, liquid investments, Proxima Investments, crypto VC, blockchain investments, Web3 infrastructure, tokenomics, crypto advisory');
    
    // Author meta tag
    let metaAuthor = document.querySelector('meta[name="author"]');
    if (!metaAuthor) {
      metaAuthor = document.createElement('meta');
      metaAuthor.setAttribute('name', 'author');
      document.head.appendChild(metaAuthor);
    }
    metaAuthor.setAttribute('content', 'Proxima Investments');
    
    // Robots meta tag
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.setAttribute('name', 'robots');
      document.head.appendChild(metaRobots);
    }
    metaRobots.setAttribute('content', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    
    // Googlebot meta tag
    let metaGooglebot = document.querySelector('meta[name="googlebot"]');
    if (!metaGooglebot) {
      metaGooglebot = document.createElement('meta');
      metaGooglebot.setAttribute('name', 'googlebot');
      document.head.appendChild(metaGooglebot);
    }
    metaGooglebot.setAttribute('content', 'index, follow');
    
    // Theme color meta tag
    let metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (!metaThemeColor) {
      metaThemeColor = document.createElement('meta');
      metaThemeColor.setAttribute('name', 'theme-color');
      document.head.appendChild(metaThemeColor);
    }
    metaThemeColor.setAttribute('content', '#020847');
    
    // Viewport meta tag (should already exist in index.html but ensuring it's set)
    let metaViewport = document.querySelector('meta[name="viewport"]');
    if (!metaViewport) {
      metaViewport = document.createElement('meta');
      metaViewport.setAttribute('name', 'viewport');
      document.head.appendChild(metaViewport);
    }
    metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
    
    // Language tag
    document.documentElement.setAttribute('lang', 'en');
    
    // Favicon links
    let linkIcon = document.querySelector('link[rel="icon"]');
    if (!linkIcon) {
      linkIcon = document.createElement('link');
      linkIcon.setAttribute('rel', 'icon');
      document.head.appendChild(linkIcon);
    }
    linkIcon.setAttribute('type', 'image/x-icon');
    linkIcon.setAttribute('href', '/favicon.ico');
    
    let linkAppleIcon = document.querySelector('link[rel="apple-touch-icon"]');
    if (!linkAppleIcon) {
      linkAppleIcon = document.createElement('link');
      linkAppleIcon.setAttribute('rel', 'apple-touch-icon');
      document.head.appendChild(linkAppleIcon);
    }
    linkAppleIcon.setAttribute('href', '/favicon.svg');
    
    // Canonical URL
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', 'https://proxima.investments');
    
    // Update or create OG meta tags for social sharing
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute('content', 'Think deep, dream forward, back excellence. Leading venture capital firm backing exceptional founders across Web3, DeFi, and emerging technologies.');
    
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', 'Proxima Investments | Venture Capital for Web3 & DeFi');
    
    let ogType = document.querySelector('meta[property="og:type"]');
    if (!ogType) {
      ogType = document.createElement('meta');
      ogType.setAttribute('property', 'og:type');
      document.head.appendChild(ogType);
    }
    ogType.setAttribute('content', 'website');
    
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute('content', 'https://proxima.investments');
    
    let ogImage = document.querySelector('meta[property="og:image"]');
    if (!ogImage) {
      ogImage = document.createElement('meta');
      ogImage.setAttribute('property', 'og:image');
      document.head.appendChild(ogImage);
    }
    ogImage.setAttribute('content', 'https://proxima.investments/og-image.png');
    
    let ogImageWidth = document.querySelector('meta[property="og:image:width"]');
    if (!ogImageWidth) {
      ogImageWidth = document.createElement('meta');
      ogImageWidth.setAttribute('property', 'og:image:width');
      document.head.appendChild(ogImageWidth);
    }
    ogImageWidth.setAttribute('content', '1200');
    
    let ogImageHeight = document.querySelector('meta[property="og:image:height"]');
    if (!ogImageHeight) {
      ogImageHeight = document.createElement('meta');
      ogImageHeight.setAttribute('property', 'og:image:height');
      document.head.appendChild(ogImageHeight);
    }
    ogImageHeight.setAttribute('content', '630');
    
    let ogLocale = document.querySelector('meta[property="og:locale"]');
    if (!ogLocale) {
      ogLocale = document.createElement('meta');
      ogLocale.setAttribute('property', 'og:locale');
      document.head.appendChild(ogLocale);
    }
    ogLocale.setAttribute('content', 'en_US');
    
    let ogSiteName = document.querySelector('meta[property="og:site_name"]');
    if (!ogSiteName) {
      ogSiteName = document.createElement('meta');
      ogSiteName.setAttribute('property', 'og:site_name');
      document.head.appendChild(ogSiteName);
    }
    ogSiteName.setAttribute('content', 'Proxima Investments');
    
    // Twitter card meta tags
    let twitterCard = document.querySelector('meta[name="twitter:card"]');
    if (!twitterCard) {
      twitterCard = document.createElement('meta');
      twitterCard.setAttribute('name', 'twitter:card');
      document.head.appendChild(twitterCard);
    }
    twitterCard.setAttribute('content', 'summary_large_image');
    
    let twitterSite = document.querySelector('meta[name="twitter:site"]');
    if (!twitterSite) {
      twitterSite = document.createElement('meta');
      twitterSite.setAttribute('name', 'twitter:site');
      document.head.appendChild(twitterSite);
    }
    twitterSite.setAttribute('content', '@proxima_xyz');
    
    let twitterCreator = document.querySelector('meta[name="twitter:creator"]');
    if (!twitterCreator) {
      twitterCreator = document.createElement('meta');
      twitterCreator.setAttribute('name', 'twitter:creator');
      document.head.appendChild(twitterCreator);
    }
    twitterCreator.setAttribute('content', '@proxima_xyz');
    
    let twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (!twitterDescription) {
      twitterDescription = document.createElement('meta');
      twitterDescription.setAttribute('name', 'twitter:description');
      document.head.appendChild(twitterDescription);
    }
    twitterDescription.setAttribute('content', 'Think deep, dream forward, back excellence. Leading venture capital firm backing exceptional founders across Web3, DeFi, and emerging technologies.');
    
    let twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (!twitterTitle) {
      twitterTitle = document.createElement('meta');
      twitterTitle.setAttribute('name', 'twitter:title');
      document.head.appendChild(twitterTitle);
    }
    twitterTitle.setAttribute('content', 'Proxima Investments | Venture Capital for Web3 & DeFi');
    
    let twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (!twitterImage) {
      twitterImage = document.createElement('meta');
      twitterImage.setAttribute('name', 'twitter:image');
      document.head.appendChild(twitterImage);
    }
    twitterImage.setAttribute('content', 'https://proxima.investments/og-image.png');
    
    let twitterImageAlt = document.querySelector('meta[name="twitter:image:alt"]');
    if (!twitterImageAlt) {
      twitterImageAlt = document.createElement('meta');
      twitterImageAlt.setAttribute('name', 'twitter:image:alt');
      document.head.appendChild(twitterImageAlt);
    }
    twitterImageAlt.setAttribute('content', 'Proxima Investments - Venture Capital for Web3 and DeFi');
    
    // Additional meta tags for better SEO
    let metaCopyright = document.querySelector('meta[name="copyright"]');
    if (!metaCopyright) {
      metaCopyright = document.createElement('meta');
      metaCopyright.setAttribute('name', 'copyright');
      document.head.appendChild(metaCopyright);
    }
    metaCopyright.setAttribute('content', 'Proxima Investments');
    
    let metaRating = document.querySelector('meta[name="rating"]');
    if (!metaRating) {
      metaRating = document.createElement('meta');
      metaRating.setAttribute('name', 'rating');
      document.head.appendChild(metaRating);
    }
    metaRating.setAttribute('content', 'general');
    
    let metaDistribution = document.querySelector('meta[name="distribution"]');
    if (!metaDistribution) {
      metaDistribution = document.createElement('meta');
      metaDistribution.setAttribute('name', 'distribution');
      document.head.appendChild(metaDistribution);
    }
    metaDistribution.setAttribute('content', 'global');
  }, []);

  useEffect(() => {
    if (showPrivacy || showTerms) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showPrivacy, showTerms]);

  const bgColor =
    theme === "light" ? "bg-white" : "bg-[#020847]";
  const separatorColor =
    theme === "light" ? "bg-[#020847]/10" : "bg-white/10";

  return (
    <>
      <StructuredData />
      
      <div
        className={`${bgColor} min-h-screen antialiased transition-colors duration-700`}
      >
        <Navbar theme={theme} />
        <main>
          <Hero theme={theme} setTheme={setTheme} />
          <Separator
            className={`${separatorColor} transition-colors duration-700 hidden md:block`}
          />
          {/* Slogan section removed from desktop, kept separator for mobile */}
          <Separator
            className={`${separatorColor} transition-colors duration-700 md:hidden`}
          />
          <OurFocus theme={theme} />
          <Separator
            className={`${separatorColor} transition-colors duration-700`}
          />
          <Portfolio theme={theme} />
          <Separator
            className={`${separatorColor} transition-colors duration-700`}
          />
          <Advisory theme={theme} />
          <Separator
            className={`${separatorColor} transition-colors duration-700`}
          />
          <Team theme={theme} />
          <Separator
            className={`${separatorColor} transition-colors duration-700`}
          />
        </main>
        <Footer
          theme={theme}
          onPrivacyClick={() => setShowPrivacy(true)}
          onTermsClick={() => setShowTerms(true)}
        />
      </div>

      <Toaster />

      {showPrivacy && (
        <PrivacyPage
          theme={theme}
          onClose={() => setShowPrivacy(false)}
        />
      )}

      {showTerms && (
        <TermsPage
          theme={theme}
          onClose={() => setShowTerms(false)}
        />
      )}
    </>
  );
}

export default App;