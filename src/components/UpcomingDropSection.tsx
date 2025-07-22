import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const UpcomingDropSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 10,
    hours: 12,
    minutes: 30,
    seconds: 0
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const mysteryCards = [
    { 
      element: "Fire", 
      rarity: "Legendary", 
      gradient: "bg-gradient-fire",
      description: "Ancient flames that never die",
      power: "12,000+"
    },
    { 
      element: "Ice", 
      rarity: "Epic", 
      gradient: "bg-gradient-cosmic",
      description: "Frozen realms of eternal winter",
      power: "9,500+"
    },
    { 
      element: "Lightning", 
      rarity: "Rare", 
      gradient: "bg-gradient-ethereal",
      description: "Thunder that shakes the cosmos",
      power: "7,800+"
    },
    { 
      element: "Shadow", 
      rarity: "Mythic", 
      gradient: "bg-gradient-card",
      description: "Darkness beyond comprehension",
      power: "15,000+"
    }
  ];

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative cosmic-bg">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 space-y-4 sm:space-y-6">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-glow leading-tight" 
              style={{ fontFamily: 'Orbitron, monospace' }}>
            Upcoming <span className="text-accent">Drop</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-1xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-2">
            The Genesis Collection awakens soon — don’t miss the upcoming free drop from the most exciting NFT project of the year.
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          {/* <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-glow mb-3 sm:mb-4" 
                style={{ fontFamily: 'Orbitron, monospace' }}>
              Drop Countdown
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground">
              Don't miss the upcoming free drop from the most exciting NFT project of the year.
            </p>
          </div> */}

          {/* Responsive Countdown Display */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 max-w-4xl mx-auto">
            {timeUnits.map((unit, index) => (
              <Card key={unit.label} className="bg-gradient-card border-border/50 hover:border-primary/50 
                                                transition-all duration-300 hover:shadow-glow 
                                                transform hover:scale-105 will-change-transform">
                <CardContent className="p-4 sm:p-6 lg:p-8 text-center">
                  <div className="text-3xl sm:text-4xl lg:text-6xl font-black text-primary mb-2 sm:mb-3 
                                 font-mono tabular-nums leading-none">
                    {unit.value.toString().padStart(2, '0')}
                  </div>
                  <div className="text-xs sm:text-sm lg:text-base text-muted-foreground uppercase tracking-widest font-semibold">
                    {unit.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mystery Cards Grid */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-glow mb-3 sm:mb-4" 
                style={{ fontFamily: 'Orbitron, monospace' }}>
              Mystery <span className="text-accent">Reveals</span>
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
              Four legendary elements await discovery, each holding powers beyond imagination.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
            {mysteryCards.map((card, index) => (
              <Card key={card.element} 
                    className="group relative overflow-hidden bg-gradient-card border-border/50 
                              hover:border-primary/50 transition-all duration-500 
                              hover:shadow-glow hover:transform hover:scale-[1.02] will-change-transform h-full"
                    style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-0 relative">
                  {/* Mystery Card Background */}
                  <div className={`aspect-[3/4] ${card.gradient} relative overflow-hidden`}>
                    {/* Animated mystery pattern */}
                    <div className="absolute inset-0 opacity-30">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/20"></div>
                      <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-white/30 rounded-full 
                                     animate-spin" style={{ animationDuration: '8s' }}></div>
                      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-white/20 rounded-full 
                                     animate-spin" style={{ animationDuration: '12s', animationDirection: 'reverse' }}></div>
                    </div>

                    {/* Question mark overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white/80 group-hover:text-white/60 
                                     transition-all duration-300 animate-pulse">
                        ?
                      </div>
                    </div>

                    {/* Rarity badge */}
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                      <div className="bg-black/50 backdrop-blur-sm text-white px-2 sm:px-3 py-1 sm:py-1.5 
                                     rounded-full text-xs sm:text-sm font-bold">
                        {card.rarity}
                      </div>
                    </div>

                    {/* Power indicator */}
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                      <div className="bg-black/50 backdrop-blur-sm text-primary px-2 sm:px-3 py-1 sm:py-1.5 
                                     rounded-full text-xs sm:text-sm font-bold">
                        ⚡ {card.power}
                      </div>
                    </div>

                    {/* Hover glow effect */}
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 
                                   transition-opacity duration-300"></div>
                  </div>

                  {/* Card Info */}
                  <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                    <div className="space-y-2">
                      <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground 
                                    group-hover:text-primary transition-colors duration-300">
                        {card.element} Element
                      </h4>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-xs sm:text-sm font-medium text-accent uppercase tracking-wider">
                        Mystery Box
                      </span>
                      <div className="text-xs sm:text-sm font-bold text-primary">
                        Coming Soon
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center space-y-6 sm:space-y-8">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-glow" 
              style={{ fontFamily: 'Orbitron, monospace' }}>
            Be <span className="text-accent">Ready</span>
          </h3>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2 leading-relaxed">
            Join our notification list to be the first to know when the Genesis Collection drops. 
            Limited supply, unlimited power.
          </p>
          
          <div className="flex flex-col xs:flex-row gap-4 sm:gap-6 justify-center max-w-lg mx-auto px-2">
            <Button 
              size="lg"
              className="bg-gradient-ethereal hover:shadow-glow transition-all duration-300 
                         hover:scale-105 font-semibold text-base sm:text-lg 
                         px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 rounded-xl 
                         w-full xs:w-auto min-w-[180px]"
            >
              Notify Me
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-primary/50 text-primary hover:bg-primary/10 
                         hover:border-primary/80 transition-all duration-300 
                         font-semibold text-base sm:text-lg px-6 sm:px-8 lg:px-10 
                         py-4 sm:py-5 lg:py-6 rounded-xl w-full xs:w-auto min-w-[180px]"
            >
              Learn More
            </Button>
          </div>

          {/* Drop Stats */}
          <div className="grid grid-cols-1 xs:grid-cols-3 gap-4 sm:gap-8 mt-8 sm:mt-12 max-w-2xl mx-auto">
            <div className="text-center space-y-2">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary">10,000</div>
              <div className="text-xs sm:text-sm text-muted-foreground font-medium">Total Supply</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-accent">0.08 ETH</div>
              <div className="text-xs sm:text-sm text-muted-foreground font-medium">Mint Price</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cosmic-green">5 MAX</div>
              <div className="text-xs sm:text-sm text-muted-foreground font-medium">Per Wallet</div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-primary/5 rounded-full blur-3xl 
                     transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-accent/5 rounded-full blur-3xl 
                     transform translate-x-1/2 translate-y-1/2"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: isMobile ? 8 : 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float"
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

export default UpcomingDropSection;