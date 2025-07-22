import { Button } from "@/components/ui/button";
import cosmicDragonImage from "@/assets/cosmic-dragon-ethereal.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden cosmic-bg pt-16">
      {/* Ethereal Cosmic Dragon Background */}
      <div className="absolute inset-0 z-0">
        {/* Main cosmic dragon - perfectly integrated */}
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src={cosmicDragonImage} 
            alt="Ethereal cosmic dragon in nebula"
            className="absolute inset-0 w-full h-full object-cover object-center
                       animate-pulse-glow opacity-30 
                       filter brightness-110 contrast-110"
          />
          
          {/* Subtle cosmic glow overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/3 to-primary/5 animate-pulse-glow"></div>
        </div>
        
        {/* Professional gradient overlays for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-background/60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/70"></div>
      </div>

      {/* Animated particles background */}
      <div className="particles z-5">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              animationDelay: `${Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      {/* Hero content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Text content */}
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-glow leading-tight" style={{ fontFamily: 'Orbitron, monospace' }}>
                AETH<span className="text-accent text-accent-glow">ER</span>BEASTS
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto px-4">
                Collect, Battle, Evolve Your Mystical Creatures
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Button 
                size="lg" 
                className="bg-gradient-ethereal hover:shadow-glow transition-all duration-300 transform hover:scale-105 
                          text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4 lg:py-6 font-semibold
                          w-full sm:w-auto"
              >
                Join the Drop
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/50 text-primary hover:bg-primary/10 hover:shadow-glow transition-all duration-300 
                          text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4 lg:py-6
                          w-full sm:w-auto"
              >
                Learn More
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-muted-foreground px-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse-glow"></div>
                <span>Minted on Ethereum</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse-glow"></div>
                <span>Web3 Powered</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;