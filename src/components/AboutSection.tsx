import { Button } from "@/components/ui/button";
import beastNatureImage from "@/assets/beast-nature.jpg";
import { useState, useEffect } from "react";

const AboutSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();

    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const features = [
    {
      icon: "⚔️",
      title: "Epic Battles",
      description: "Engage in strategic turn-based combat with unique elemental abilities and power combinations."
    },
    {
      icon: "🔮",
      title: "Evolution System",
      description: "Watch your creatures grow stronger through battles, training, and mystical transformations."
    },
    {
      icon: "🌍",
      title: "Vast Realms",
      description: "Explore multiple floating islands, each with distinct environments and hidden treasures."
    },
    {
      icon: "💎",
      title: "True Ownership",
      description: "Your AetherBeasts are permanently yours on the blockchain, trade and collect with confidence."
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-start">
          {/* Left: Heading and Lore Text */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-10 order-2 lg:order-1">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-glow leading-tight"
                style={{ fontFamily: 'Orbitron, monospace' }}>
                The Myth of the <span className="text-accent">Aetherial</span> Dawn
              </h2>
              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed">
                <p>
                  In the beginning, when the cosmos was but a whisper of stardust, the Aetherial Realm was born
                  from the collision of five primal elements: <span className="text-accent font-semibold">Fire</span>, <span className="text-primary font-semibold">Storm</span>, <span className="text-cosmic-cyan font-semibold">Moon</span>, <span className="text-cosmic-green font-semibold">Spirit</span>, and <span className="text-cosmic-purple font-semibold">Stone</span>. These forces
                  swirled in chaos, untamed and boundless, until the First Aetherion, a celestial dragon of radiant
                  light, descended from the stars.
                </p>
                <p>
                  With a single roar, it wove the elements into harmony, birthing the floating islands of the Realm—each
                  a crucible of life, glowing with the pulse of creation. From the embers of volcanoes came <span className="text-accent font-semibold">Spryke</span>,
                  its fiery tail crackling with storm-born lightning. In the moonlit mists emerged <span className="text-cosmic-cyan font-semibold">Lunethra</span>, its wings
                  shimmering with crescent patterns, guiding lost souls with serene wisdom.
                </p>
                <p>
                  Now, these mystical beings await their destined companions—brave souls who will unlock their ancient powers
                  and forge legendary bonds that transcend the boundaries between realms.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col xs:flex-row gap-4 sm:gap-6 pt-4 sm:pt-6">
              <Button 
                size="lg"
                className="bg-gradient-ethereal hover:shadow-glow transition-all duration-300 
                           hover:scale-105 font-semibold text-base sm:text-lg 
                           px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 rounded-xl 
                           w-full xs:w-auto min-w-[180px]"
              >
                Start Your Journey
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-primary/50 text-primary hover:bg-primary/10 
                           hover:border-primary/80 transition-all duration-300 
                           font-semibold text-base sm:text-lg px-6 sm:px-8 lg:px-10 
                           py-4 sm:py-5 lg:py-6 rounded-xl w-full xs:w-auto min-w-[180px]"
              >
                Read Lore
              </Button>
            </div>
          </div>

          {/* Right: Image + Features below it */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Beast Image */}
            <div className="relative group">
              <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] overflow-hidden rounded-2xl 
                     border border-border/50 group-hover:border-primary/50 transition-all duration-500 
                     hover:shadow-glow will-change-transform">
                <img
                  src={beastNatureImage}
                  alt="Verdant Guardian - Nature AetherBeast in mystical forest"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 will-change-transform"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent"></div>
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 
                       bg-background/90 backdrop-blur-sm border border-border/50 rounded-xl 
                       p-4 sm:p-6 space-y-2 sm:space-y-3 group-hover:bg-background/95 
                       transition-all duration-300">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground">
                    Verdant Guardian
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Ancient protector of the sacred groves, wielding the power of eternal growth
                  </p>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs sm:text-sm font-medium text-cosmic-green uppercase tracking-wider">
                      Nature Element
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-primary">
                      ⚡ 8,500 Power
                    </span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 
                       transition-opacity duration-300 pointer-events-none"></div>
              </div>

              {/* Decorative floating elements */}
              {!isMobile && (
                <>
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-cosmic-green/20 rounded-full blur-xl animate-float" />
                  <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/15 rounded-full blur-2xl animate-float" />
                  <div className="absolute top-1/3 -right-8 w-16 h-16 bg-accent/20 rounded-full blur-lg animate-float" />
                </>
              )}
            </div>
          </div>
        </div>


        {/* Features Grid — now below image */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12">
              {features.map((feature, index) => (
                <div key={feature.title}
                  className="group p-4 sm:p-6 rounded-xl bg-gradient-card border border-border/50 
                       hover:border-primary/50 transition-all duration-300 hover:shadow-glow 
                       hover:transform hover:scale-[1.02] will-change-transform"
                  style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="text-2xl sm:text-3xl lg:text-4xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
      </div>

      {/* Background effects */}
      <div className="absolute top-1/4 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-cosmic-green/5 rounded-full blur-3xl 
                     transform -translate-x-1/2"></div>
      <div className="absolute bottom-1/4 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-primary/5 rounded-full blur-3xl 
                     transform translate-x-1/2"></div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: isMobile ? 6 : 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cosmic-green/30 rounded-full animate-float"
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

export default AboutSection;