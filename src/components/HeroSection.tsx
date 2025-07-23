import { Button } from "@/components/ui/button";
import dragonFireImage from "@/assets/dragon-fire-hero.jpg";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    const checkReducedMotion = () => setIsReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    
    checkMobile();
    checkReducedMotion();
    
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Optimized particle count
  const particleCount = isMobile ? 3 : isReducedMotion ? 1 : 12;

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden cosmic-bg">
      {/* Fire Dragon Background - Optimized */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src={dragonFireImage} 
            alt="Fire-breathing dragon with intense flames"
            className="absolute inset-0 w-full h-full object-cover object-center
                       opacity-12 sm:opacity-10 md:opacity-8
                       will-change-transform scale-105"
            style={{
              animation: isReducedMotion ? 'none' : isMobile ? 'none' : 'dragon-float 12s ease-in-out infinite'
            }}
          />
          
          {/* Simplified flame effects - desktop only */}
          {!isMobile && !isReducedMotion && (
            <div className="absolute top-[42%] left-[58%] transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-24 h-12 md:w-32 md:h-16 bg-gradient-to-r from-orange-500/6 via-red-500/10 to-yellow-400/6 
                             rounded-full blur-sm animate-dragon-breath origin-left scale-x-110"></div>
            </div>
          )}
        </div>
        
        {/* Enhanced gradient overlays for perfect text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/96 via-background/75 to-background/45"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/55 via-background/35 to-background/90"></div>
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/20 to-background/60"></div>
      </div>

      {/* Minimal particles for clean design */}
      {!isReducedMotion && (
        <div className="absolute inset-0 z-5 overflow-hidden pointer-events-none">
          {Array.from({ length: particleCount }).map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-0.5 bg-primary/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 15}s`,
                animationDuration: `${15 + Math.random() * 8}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Hero content - Perfect mobile centering */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          
          {/* Brand Section with Perfect Mobile Centering */}
          <div className="space-y-8">
            <div className="relative mx-2 sm:mx-4 md:mx-8">
              {/* Fixed glassmorphism backdrop - proper containment */}
              <div className="absolute inset-0 bg-background/20 backdrop-blur-xl rounded-2xl sm:rounded-3xl 
                             border border-white/5 shadow-2xl"></div>
              
              {/* Content with safe padding and perfect centering */}
              <div className="relative px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:px-10 lg:py-18 text-center">
                {/* Main Title - Perfect mobile centering */}
                <h1 className="font-black leading-[0.85] tracking-tight mb-4 sm:mb-6 text-center" 
                    style={{ 
                      fontFamily: 'Orbitron, monospace',
                      fontSize: 'clamp(2rem, 6vw, 5.5rem)'
                    }}>
                  <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent 
                                 drop-shadow-2xl filter block text-center">
                    AETHERBEASTS
                  </span>
                </h1>
                
                {/* Subtitle with Perfect Hierarchy and Centering */}
                <div className="relative mx-1 sm:mx-2">
                  <div className="absolute inset-0 bg-background/50 backdrop-blur-sm rounded-xl sm:rounded-2xl"></div>
                  <p className="relative text-foreground/85 font-medium leading-relaxed px-3 py-3 sm:px-4 sm:py-4
                               drop-shadow-lg max-w-4xl mx-auto text-center"
                     style={{ fontSize: 'clamp(1rem, 3vw, 1.75rem)' }}>
                    Collect, Battle, Evolve Your Mystical Creatures
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Standardized CTA Buttons - Perfect Mobile Centering */}
          <div className="space-y-8 px-2 sm:px-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center
                           max-w-lg mx-auto">
              {/* Primary Button - Mobile-centered design */}
              <Button 
                size="lg"
                className="group relative w-full sm:flex-1 overflow-hidden touch-target
                          bg-gradient-to-r from-primary via-primary-glow to-accent
                          hover:from-primary-glow hover:via-accent hover:to-primary
                          text-white font-semibold px-6 py-4 sm:px-8 sm:py-4
                          rounded-xl border-2 border-primary/20 hover:border-accent/50
                          shadow-lg hover:shadow-glow transform hover:scale-[1.02] active:scale-[0.98]
                          transition-all duration-300 will-change-transform
                          min-h-[48px] sm:min-h-[52px] text-center"
                style={{ fontSize: 'clamp(0.875rem, 2.2vw, 1rem)' }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span className="w-4 h-4 text-white">🚀</span>
                  <span>Join the Drop</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent 
                               -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </Button>
              
              {/* Secondary Button - Mobile-centered design */}
              <Button 
                variant="outline"
                size="lg"
                className="group relative w-full sm:flex-1 touch-target
                          bg-background/15 backdrop-blur-md
                          border-2 border-primary/20 hover:border-primary/50
                          text-primary hover:text-primary-foreground hover:bg-primary/80
                          font-semibold px-6 py-4 sm:px-8 sm:py-4
                          rounded-xl shadow-lg hover:shadow-accent-glow
                          transform hover:scale-[1.02] active:scale-[0.98] 
                          transition-all duration-300
                          min-h-[48px] sm:min-h-[52px] text-center"
                style={{ fontSize: 'clamp(0.875rem, 2.2vw, 1rem)' }}
              >
                <span className="flex items-center justify-center gap-2">
                  <span className="w-4 h-4">📖</span>
                  <span>Learn More</span>
                </span>
              </Button>
            </div>

            {/* Status Badges - Perfect Mobile Centering */}
            <div className="flex flex-col xs:flex-row items-center justify-center gap-4 sm:gap-6 px-2">
              <div className="flex items-center gap-2 sm:gap-3 px-3 py-2 sm:px-4 sm:py-2.5 
                             bg-background/25 backdrop-blur-md rounded-full 
                             border border-primary/15 shadow-lg hover:shadow-glow 
                             transition-all duration-300 hover:scale-105">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse shadow-glow"></div>
                <span className="text-foreground/80 font-medium text-sm whitespace-nowrap text-center">
                  Minted on Ethereum
                </span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 px-3 py-2 sm:px-4 sm:py-2.5 
                             bg-background/25 backdrop-blur-md rounded-full 
                             border border-accent/15 shadow-lg hover:shadow-accent-glow 
                             transition-all duration-300 hover:scale-105">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse shadow-accent-glow"></div>
                <span className="text-foreground/80 font-medium text-sm whitespace-nowrap text-center">
                  Web3 Powered
                </span>
              </div>
            </div>
          </div>

          {/* Unified Info Cards Grid - Perfect Mobile Centering */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto px-2 sm:px-4">
            {[
              { label: "Total Supply", value: "10,000", icon: "💎" },
              { label: "Mint Price", value: "0.05 WETH", icon: "⚡" },
              { label: "Max per Wallet", value: "5", icon: "👛" },
              { label: "Launching", value: "Soon", icon: "🚀" }
            ].map((stat, index) => (
              <div key={index} 
                   className="group text-center p-3 sm:p-4 bg-background/20 backdrop-blur-md 
                             rounded-xl border border-white/8 hover:border-primary/25
                             transition-all duration-300 hover:shadow-glow hover:scale-[1.02]
                             touch-target cursor-pointer shadow-lg">
                {/* Consistent Icon Design - Centered */}
                <div className="text-xl sm:text-2xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300 text-center">
                  {stat.icon}
                </div>
                {/* Consistent Typography - Centered */}
                <div className="font-bold text-primary mb-1 text-center"
                     style={{ fontSize: 'clamp(0.75rem, 2vw, 1rem)' }}>
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium text-xs leading-tight text-center">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Refined Scroll Indicator - Centered */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10 
                     group cursor-pointer touch-target"
           onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
           style={{ animation: isReducedMotion ? 'none' : 'bounce 2s infinite' }}>
        <div className="w-8 h-12 sm:w-10 sm:h-14 border-2 border-primary/35 rounded-full flex justify-center 
                       bg-background/15 backdrop-blur-md hover:border-primary/60 hover:bg-background/25
                       transition-all duration-300 group-hover:scale-110 shadow-lg hover:shadow-glow">
          <div className="w-1.5 h-3 sm:w-1.5 sm:h-4 bg-primary rounded-full mt-2.5 sm:mt-3 animate-pulse 
                         group-hover:bg-accent transition-colors duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;