import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const HowItWorksSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const steps = [
    {
      number: "01",
      title: "Connect Wallet",
      description: "Link your MetaMask or compatible Web3 wallet to begin your journey into the Aetherial Realm",
      icon: "🔗",
      gradient: "bg-gradient-cosmic",
      detail: "Secure connection with industry-standard protocols"
    },
    {
      number: "02", 
      title: "Choose Your Pack",
      description: "Select from various mystery packs, each containing unique AetherBeasts with different rarity levels",
      icon: "📦",
      gradient: "bg-gradient-fire",
      detail: "Multiple pack types with guaranteed rarities"
    },
    {
      number: "03",
      title: "Mint & Reveal",
      description: "Complete your transaction and watch as your AetherBeast emerges with its unique traits and powers",
      icon: "✨",
      gradient: "bg-gradient-ethereal",
      detail: "Instant reveal with provably fair randomness"
    },
    {
      number: "04",
      title: "Battle & Collect",
      description: "Train your creatures, engage in epic battles, and build the ultimate collection of mystical beings",
      icon: "⚔️",
      gradient: "bg-gradient-card",
      detail: "Endless gameplay possibilities await"
    }
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto max-w-7xl">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 space-y-4 sm:space-y-6">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-glow leading-tight" 
              style={{ fontFamily: 'Orbitron, monospace' }}>
            How It <span className="text-accent">Works</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-2">
            Begin your journey into the Aetherial Realm with these simple steps
          </p>
        </div>

        {/* Steps grid - Fixed container to prevent cutoff */}
        <div className="px-2 sm:px-4 mb-12 sm:mb-16 lg:mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <div key={step.number} className="relative group">
                {/* Connection line for desktop */}
                {!isMobile && index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-8 h-0.5 bg-gradient-to-r from-primary to-transparent z-0"></div>
                )}
                
                {/* Card with proper padding for badges */}
                <Card className="group relative overflow-visible bg-gradient-card border-border/50 
                                hover:border-primary/50 transition-all duration-500 
                                hover:shadow-glow hover:transform hover:scale-[1.02] will-change-transform h-full
                                mt-4 mb-2">
                  <CardContent className="p-6 sm:p-8 space-y-4 sm:space-y-6 relative">
                    {/* Step number badge - Properly contained */}
                    <div className="absolute -top-3 -right-3 z-10">
                      <Badge className={`${step.gradient} text-white font-bold text-sm sm:text-base 
                                       px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-lg 
                                       group-hover:scale-110 transition-transform duration-300`}>
                        {step.number}
                      </Badge>
                    </div>

                    {/* Icon */}
                    <div className="text-4xl sm:text-5xl lg:text-6xl mb-4 group-hover:scale-110 
                                   transition-transform duration-300 text-center sm:text-left">
                      {step.icon}
                    </div>

                    {/* Content */}
                    <div className="space-y-3 sm:space-y-4 text-center sm:text-left">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground 
                                    group-hover:text-primary transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                      <div className="pt-2">
                        <p className="text-xs sm:text-sm text-primary font-medium">
                          {step.detail}
                        </p>
                      </div>
                    </div>

                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 
                                   transition-opacity duration-300 pointer-events-none rounded-lg"></div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="max-w-4xl mx-auto px-2 sm:px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mb-12 sm:mb-16">
            {/* Getting Started */}
            <div className="space-y-4 sm:space-y-6 text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-glow" 
                  style={{ fontFamily: 'Orbitron, monospace' }}>
                Getting <span className="text-accent">Started</span>
              </h3>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <p>
                  New to Web3? No problem! Our onboarding process guides you through every step, 
                  from setting up your first wallet to understanding blockchain basics.
                </p>
                <p>
                  Each AetherBeast is a unique NFT with verifiable ownership and rarity, 
                  ensuring your collection has real value and authenticity.
                </p>
              </div>
              <div className="pt-2">
                <Button 
                  variant="outline"
                  className="border-2 border-primary/50 text-primary hover:bg-primary/10 
                            hover:border-primary/80 transition-all duration-300 
                            font-semibold text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 rounded-lg"
                >
                  Beginner's Guide
                </Button>
              </div>
            </div>

            {/* What Makes Us Different */}
            <div className="space-y-4 sm:space-y-6 text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-glow" 
                  style={{ fontFamily: 'Orbitron, monospace' }}>
                Why <span className="text-accent">Choose</span> Us?
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {[
                  { icon: "🎯", text: "Fair & transparent minting process" },
                  { icon: "🔐", text: "Secure smart contract audited by experts" },
                  { icon: "🌟", text: "Utility-driven with real gameplay value" },
                  { icon: "🤝", text: "Strong community and active development" }
                ].map((feature, index) => (
                  <div key={index} className="flex items-center justify-center md:justify-start space-x-3 sm:space-x-4">
                    <div className="text-xl sm:text-2xl flex-shrink-0">
                      {feature.icon}
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {feature.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background effects */}
      <div className="absolute top-1/4 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-primary/5 rounded-full blur-3xl 
                     transform translate-x-1/2"></div>
      <div className="absolute bottom-1/4 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-accent/5 rounded-full blur-3xl 
                     transform -translate-x-1/2"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: isMobile ? 6 : 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;