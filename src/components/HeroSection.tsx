import { Button } from "@/components/ui/button";
import dragonFireImage from "@/assets/dragon-fire-dynamic.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden cosmic-bg pt-16">
      {/* Fire Dragon Background - Enhanced animations */}
      <div className="absolute inset-0 z-0">
        {/* Main fire-breathing dragon - better positioning */}
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src={dragonFireImage} 
            alt="Fire-breathing dragon with intense flames"
            className="absolute top-1/2 left-1/2 transform 
                       w-[140%] h-[140%] md:w-[110%] md:h-[110%] 
                       object-contain object-center
                       animate-dragon-float-enhanced animate-pulse-glow 
                       opacity-50 md:opacity-40"
          />
          
          {/* Animated flame effects from dragon's mouth - Multiple layers for realism */}
          <div className="absolute top-[35%] left-[65%] md:top-[30%] md:left-[60%] transform -translate-x-1/2 -translate-y-1/2">
            {/* Main flame burst - Large */}
            <div className="w-40 h-20 md:w-60 md:h-32 bg-gradient-to-r from-red-500/50 via-orange-500/60 to-yellow-400/50 
                           rounded-full blur-sm animate-dragon-breath origin-left scale-x-200"></div>
            
            {/* Secondary flame - Medium */}
            <div className="absolute -top-4 left-10 w-24 h-12 md:w-36 md:h-18 bg-gradient-to-r from-orange-600/40 via-red-500/50 to-yellow-300/40 
                           rounded-full blur-md animate-dragon-breath origin-left scale-x-150" style={{ animationDelay: '0.3s', animationDuration: '1.8s' }}></div>
            
            {/* Flame sparks - Small */}
            <div className="absolute top-2 left-16 w-12 h-6 md:w-18 md:h-9 bg-gradient-to-r from-yellow-500/60 to-orange-600/50 
                           rounded-full blur-sm animate-dragon-breath origin-left scale-x-100" style={{ animationDelay: '0.6s', animationDuration: '1.5s' }}></div>
                           
            {/* Additional flame wisps */}
            <div className="absolute -top-6 left-6 w-16 h-8 md:w-24 md:h-12 bg-gradient-to-r from-red-600/30 via-orange-400/40 to-yellow-200/30 
                           rounded-full blur-lg animate-dragon-breath origin-left scale-x-120" style={{ animationDelay: '0.9s', animationDuration: '2.2s' }}></div>
            
            {/* Fire particles floating */}
            <div className="absolute top-4 left-20 w-6 h-3 md:w-9 md:h-5 bg-gradient-to-r from-yellow-400/70 to-red-500/50 
                           rounded-full blur-sm animate-dragon-breath origin-left" style={{ animationDelay: '1.2s', animationDuration: '1.3s' }}></div>
          </div>
          
          {/* Enhanced fire glow ambient effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/8 via-red-500/6 to-yellow-500/8 animate-pulse-glow"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-red-600/15 via-orange-400/8 to-yellow-400/6 animate-dragon-breath" style={{ animationDuration: '3s' }}></div>
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-red-500/5 to-orange-500/10 animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
          
          {/* Additional dragon layers for depth - hidden on mobile for performance */}
          <img 
            src={dragonFireImage} 
            alt="Secondary fire dragon"
            className="hidden lg:block absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 
                       w-2/3 h-2/3 object-contain 
                       animate-dragon-drift opacity-12 scale-75 
                       filter blur-sm"
          />
        </div>
        
        {/* Enhanced gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/20 to-background/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
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