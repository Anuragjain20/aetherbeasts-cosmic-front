import { Button } from "@/components/ui/button";
import dragonFireImage from "@/assets/dragon-fire-hero.jpg";
import { useEffect, useState } from "react";
import { trackButtonClick } from "@/lib/analytics";

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
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-x-hidden overflow-y-hidden cosmic-bg pt-24">
      {/* Fire Dragon Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={dragonFireImage}
          alt="Fire-breathing dragon"
          className="absolute inset-0 w-full h-full object-cover object-center
                 opacity-12 sm:opacity-10 md:opacity-8
                 will-change-transform scale-105"
          style={{
            animation: isReducedMotion ? 'none' : isMobile ? 'none' : 'dragon-float 12s ease-in-out infinite',
          }}
        />

        {!isMobile && !isReducedMotion && (
          <div className="absolute top-[42%] left-[58%] -translate-x-1/2 -translate-y-1/2">
            <div className="w-24 h-12 md:w-32 md:h-16 bg-gradient-to-r from-orange-500/6 via-red-500/10 to-yellow-400/6 
                       rounded-full blur-sm animate-dragon-breath origin-left scale-x-110" />
          </div>
        )}

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/70 to-background/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/55 via-background/35 to-background/90"></div>
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/20 to-background/60"></div>
      </div>

      {/* Particles */}
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

      {/* Hero content */}
      <div className="relative z-10 w-full max-w-6xl px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="text-center space-y-8">
          {/* Title */}
          <div className="relative mx-auto w-full max-w-full">
            <div className="absolute inset-0 bg-background/20 backdrop-blur-xl rounded-2xl sm:rounded-3xl 
                       border border-white/5 shadow-2xl" />

            <div className="relative px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16 text-center">
              <h1
                className="font-black leading-[0.85] tracking-tight mb-4 sm:mb-6 text-center"
                style={{
                  fontFamily: 'Orbitron, monospace',
                  fontSize: 'clamp(2rem, 6vw, 5.5rem)',
                }}
              >
                <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent 
                           drop-shadow-2xl filter block text-center">
                  AETHERBEASTS
                </span>
              </h1>

              {/* Subtitle */}
              <div className="relative mx-auto max-w-3xl">
                <div className="absolute inset-0 bg-background/50 backdrop-blur-sm rounded-xl sm:rounded-2xl" />
                <p
                  className="relative text-foreground/85 font-medium leading-relaxed px-3 py-3 sm:px-4 sm:py-4 drop-shadow-lg"
                  style={{ fontSize: 'clamp(1rem, 3vw, 1.75rem)' }}
                >
                  Collect, Battle, Evolve Your Mystical Creatures
                </p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-6 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center items-center max-w-[95vw] mx-auto">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-primary via-primary-glow to-accent 
                    hover:from-primary-glow hover:via-accent hover:to-primary 
                    text-white font-semibold px-6 py-4 sm:px-8 rounded-xl border-2 
                    border-primary/20 hover:border-accent/50 shadow-lg hover:shadow-glow 
                    transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              onClick={() => trackButtonClick('join_drop', 'hero_section')}
            >
              <span className="flex items-center gap-2">
                🚀 <span>Join the Drop</span>
              </span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto bg-background/15 backdrop-blur-md border-2 border-primary/20 
                    hover:border-primary/50 text-primary hover:text-white hover:bg-primary 
                    font-semibold px-6 py-4 sm:px-8 rounded-xl shadow-lg hover:shadow-accent-glow 
                    transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              onClick={() => trackButtonClick('learn_more', 'hero_section')}
            >
              <span className="flex items-center gap-2">📖 <span>Learn More</span></span>
            </Button>
          </div>

          {/* Badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-2 mt-6">
            <div className="flex items-center gap-2 px-3 py-2 bg-background/25 backdrop-blur-md rounded-full border border-primary/15 shadow-lg">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm text-foreground/80">Minted on Ethereum</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 bg-background/25 backdrop-blur-md rounded-full border border-accent/15 shadow-lg">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm text-foreground/80">Web3 Powered</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-[95vw] mx-auto mt-8 px-2">
            {[
              { label: "Total Supply", value: "10,000", icon: "💎" },
              { label: "Mint Price", value: "0.05 WETH", icon: "⚡" },
              { label: "Max per Wallet", value: "5", icon: "👛" },
              { label: "Launching", value: "Soon", icon: "🚀" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-3 bg-background/20 backdrop-blur-md rounded-xl border border-white/10 
                       hover:border-primary/25 hover:shadow-glow transition-all duration-300"
              >
                <div className="text-xl mb-2">{stat.icon}</div>
                <div className="font-bold text-primary">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 cursor-pointer"
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        style={{ animation: isReducedMotion ? "none" : "bounce 2s infinite" }}
      >
        <div className="w-8 h-12 border-2 border-primary/35 rounded-full flex justify-center items-start bg-background/15 backdrop-blur-md">
          <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>

  );
};

export default HeroSection;