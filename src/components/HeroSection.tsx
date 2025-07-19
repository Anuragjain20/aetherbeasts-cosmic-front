import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-aetherbeast.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden cosmic-bg pt-16">
      {/* Animated particles background */}
      <div className="particles">
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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-black text-glow" style={{ fontFamily: 'Orbitron, monospace' }}>
                AETH<span className="text-accent text-accent-glow">ER</span>BEASTS
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                Collect, Battle, Evolve Your Mystical Creatures
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-ethereal hover:shadow-glow transition-all duration-300 transform hover:scale-105 text-lg px-8 py-6 font-semibold"
              >
                Join the Drop
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/50 text-primary hover:bg-primary/10 hover:shadow-glow transition-all duration-300 text-lg px-8 py-6"
              >
                Learn More
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-8 text-sm text-muted-foreground">
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

          {/* Hero image */}
          <div className="relative lg:order-last order-first">
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src={heroImage} 
                alt="Mystical AetherBeast creature floating in cosmic space"
                className="w-full h-auto object-cover filter brightness-110 contrast-110 saturate-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-float"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;