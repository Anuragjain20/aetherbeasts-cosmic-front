import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const UpcomingDropSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 12,
    minutes: 30,
    seconds: 0
  });

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
    { element: "Fire", rarity: "Legendary", gradient: "bg-gradient-fire" },
    { element: "Ice", rarity: "Epic", gradient: "bg-gradient-cosmic" },
    { element: "Lightning", rarity: "Rare", gradient: "bg-gradient-ethereal" },
    { element: "Shadow", rarity: "Mythic", gradient: "bg-gradient-card" }
  ];

  return (
    <section className="py-24 px-6 relative cosmic-bg">
      <div className="container mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-glow" style={{ fontFamily: 'Orbitron, monospace' }}>
            Upcoming <span className="text-accent">Drop</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The next wave of mystical creatures is approaching. Prepare for the reveal.
          </p>
        </div>

        {/* Countdown timer */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-8 bg-card/80 backdrop-blur-sm border border-primary/30 rounded-2xl p-8">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="text-center">
                <div className="text-4xl md:text-6xl font-bold text-glow text-primary" style={{ fontFamily: 'Orbitron, monospace' }}>
                  {value.toString().padStart(2, '0')}
                </div>
                <div className="text-sm md:text-base text-muted-foreground uppercase tracking-wider">
                  {unit}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mystery preview cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
          {mysteryCards.map((card, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-glow"
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className={`aspect-square ${card.gradient} rounded-xl relative overflow-hidden flex items-center justify-center`}>
                  {/* Mystery silhouette effect */}
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
                  <div className="relative z-10 text-4xl">❓</div>
                  
                  {/* Reveal animation on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <div className="space-y-2">
                  <div className="text-sm font-semibold text-primary">{card.rarity}</div>
                  <div className="text-lg font-bold">{card.element} Element</div>
                  <div className="text-sm text-muted-foreground">Reveal Soon</div>
                </div>

                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center space-y-6">
          <Button 
            size="lg"
            className="bg-gradient-fire hover:shadow-accent-glow transition-all duration-300 transform hover:scale-105 text-lg px-8 py-6"
          >
            Get Ready for Drop
          </Button>
          
          <div className="text-sm text-muted-foreground">
            Join our Discord to be notified when the drop goes live
          </div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default UpcomingDropSection;