import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";

const CommunitySection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const socialPlatforms = [
    {
      name: "Discord",
      icon: "🎮",
      description: "Join our vibrant community for daily challenges and exclusive drops",
      gradient: "bg-gradient-to-br from-indigo-500/20 to-purple-600/20",
      hoverColor: "hover:border-indigo-500/50"
    },
    {
      name: "Twitter",
      icon: "🐦",
      description: "Follow for real-time updates, sneak peeks, and community highlights",
      gradient: "bg-gradient-to-br from-blue-400/20 to-blue-600/20",
      hoverColor: "hover:border-blue-500/50"
    },
    {
      name: "Instagram",
      icon: "📸",
      description: "Discover stunning artwork and behind-the-scenes content from our community",
      gradient: "bg-gradient-to-br from-pink-500/20 to-purple-500/20",
      hoverColor: "hover:border-pink-500/50"
    },
    {
      name: "Telegram",
      icon: "📺",
      description: "Connect with us for announcements, discussions, and community events",
      gradient: "bg-gradient-to-br from-red-500/20 to-red-600/20",
      hoverColor: "hover:border-red-500/50"
    }
  ];

  const communityStats = [
    { label: "Community Members", value: "29K+", icon: "👥", color: "text-primary" },
    { label: "Daily Active Users", value: "450+", icon: "⚡", color: "text-accent" },
    { label: "Community Support", value: "24/7", icon: "🛡️", color: "text-cosmic-cyan" },
    { label: "Satisfaction Rate", value: "98%", icon: "⭐", color: "text-cosmic-green" }
  ];

  return (
    <section id="community" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto max-w-7xl">
        
        {/* Community Highlights */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-glow mb-3 sm:mb-4" 
                style={{ fontFamily: 'Orbitron, monospace' }}>
              Upcomming <span className="text-accent">Highlights</span>
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
              Discover what sets our emerging community apart in the metaverse.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-6xl mx-auto">
            <div className="text-center space-y-4 sm:space-y-6 p-6 sm:p-8 rounded-2xl bg-gradient-card border border-border/50 
                           hover:border-primary/50 transition-all duration-300 hover:shadow-glow group">
              <div className="text-4xl sm:text-5xl lg:text-6xl group-hover:scale-110 transition-transform duration-300">
                🏆
              </div>
              <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground">
                Weekly Tournaments
              </h4>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Compete in epic battles and earn exclusive rewards every week
              </p>
            </div>

            <div className="text-center space-y-4 sm:space-y-6 p-6 sm:p-8 rounded-2xl bg-gradient-card border border-border/50 
                           hover:border-primary/50 transition-all duration-300 hover:shadow-glow group">
              <div className="text-4xl sm:text-5xl lg:text-6xl group-hover:scale-110 transition-transform duration-300">
                🎨
              </div>
              <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground">
                Creator Showcase
              </h4>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Share your fan art and stories to win featured spots and prizes
              </p>
            </div>

            <div className="text-center space-y-4 sm:space-y-6 p-6 sm:p-8 rounded-2xl bg-gradient-card border border-border/50 
                           hover:border-primary/50 transition-all duration-300 hover:shadow-glow group md:col-span-2 lg:col-span-1">
              <div className="text-4xl sm:text-5xl lg:text-6xl group-hover:scale-110 transition-transform duration-300">
                💎
              </div>
              <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground">
                Wallet-to-Wallet Battles
              </h4>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Battle NFTs wallet-to-wallet, dominate PvP, and climb the global leaderboard ranks
              </p>
            </div>
          </div>
        </div>


        {/* Call to Action */}
        <div className="text-center space-y-6 sm:space-y-8">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-glow" 
              style={{ fontFamily: 'Orbitron, monospace' }}>
            Ready to <span className="text-accent">Connect</span>?
          </h3>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2 leading-relaxed">
            Be part of a growing community of adventurers exploring the most exciting NFT experiences in the metaverse.
          </p>
          
          <div className="flex flex-col xs:flex-row gap-4 sm:gap-6 justify-center max-w-lg mx-auto px-2">
            <Button 
              size="lg"
              className="bg-gradient-ethereal hover:shadow-glow transition-all duration-300 
                         hover:scale-105 font-semibold text-base sm:text-lg 
                         px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 rounded-xl 
                         w-full xs:w-auto min-w-[180px]"
            >
              Join Discord
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-primary/50 text-primary hover:bg-primary/10 
                         hover:border-primary/80 transition-all duration-300 
                         font-semibold text-base sm:text-lg px-6 sm:px-8 lg:px-10 
                         py-4 sm:py-5 lg:py-6 rounded-xl w-full xs:w-auto min-w-[180px]"
            >
              Follow Twitter
            </Button>
          </div>
        </div>
      </div>

      {/* Background effects */}
      <div className="absolute top-0 left-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-primary/5 rounded-full blur-3xl 
                     transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-accent/5 rounded-full blur-3xl 
                     transform translate-x-1/2 translate-y-1/2"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: isMobile ? 8 : 15 }).map((_, i) => (
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

export default CommunitySection;