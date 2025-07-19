import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-aetherbeast.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden cosmic-bg pt-16">
      {/* Animated dragon background - Full screen coverage */}
      <div className="absolute inset-0 z-0">
        {/* Main dragon - covers most of screen */}
        <img 
          src={heroImage} 
          alt="Mystical AetherBeast creature floating in cosmic space"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover animate-dragon-float animate-pulse-glow opacity-25 scale-110"
        />
        {/* Secondary dragon for more movement */}
        <img 
          src={heroImage} 
          alt="Secondary AetherBeast"
          className="absolute top-1/4 right-0 transform translate-x-1/4 w-3/4 h-3/4 object-contain animate-dragon-drift opacity-15 scale-75"
        />
        {/* Third dragon for depth */}
        <img 
          src={heroImage} 
          alt="Tertiary AetherBeast"
          className="absolute bottom-0 left-0 transform -translate-x-1/4 translate-y-1/4 w-2/3 h-2/3 object-contain animate-dragon-spiral opacity-10 scale-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-background/20 to-background/40"></div>
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
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Text content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-glow" style={{ fontFamily: 'Orbitron, monospace' }}>
                AETH<span className="text-accent text-accent-glow">ER</span>BEASTS
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                Collect, Battle, Evolve Your Mystical Creatures
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-ethereal hover:shadow-glow transition-all duration-300 transform hover:scale-105 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 font-semibold"
              >
                Join the Drop
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/50 text-primary hover:bg-primary/10 hover:shadow-glow transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6"
              >
                Learn More
              </Button>
            </div>

            <div className="flex items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-muted-foreground">
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