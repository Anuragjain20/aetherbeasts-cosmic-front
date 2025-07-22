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
      members: "29.5K",
      description: "Join our vibrant community for daily challenges and exclusive drops",
      gradient: "bg-gradient-to-br from-indigo-500/20 to-purple-600/20",
      hoverColor: "hover:border-indigo-500/50"
    },
    {
      name: "Twitter",
      icon: "🐦",
      members: "85.2K",
      description: "Follow for real-time updates, sneak peeks, and community highlights",
      gradient: "bg-gradient-to-br from-blue-400/20 to-blue-600/20",
      hoverColor: "hover:border-blue-500/50"
    },
    {
      name: "Instagram",
      icon: "📸",
      members: "42.8K",
      description: "Discover stunning artwork and behind-the-scenes content",
      gradient: "bg-gradient-to-br from-pink-500/20 to-purple-500/20",
      hoverColor: "hover:border-pink-500/50"
    },
    {
      name: "YouTube",
      icon: "📺",
      members: "18.7K",
      description: "Watch tutorials, lore videos, and community showcases",
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
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 space-y-4 sm:space-y-6">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-glow leading-tight" 
              style={{ fontFamily: 'Orbitron, monospace' }}>
            Join Our <span className="text-accent">Community</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-2">
            Connect with fellow collectors, share your adventures, and shape the future of the Aetherial Realm together
          </p>
        </div>

        {/* Social Platform Grid */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {socialPlatforms.map((platform, index) => (
              <Card key={platform.name} 
                    className={`group relative overflow-hidden bg-gradient-card border-border/50 
                               ${platform.hoverColor} transition-all duration-500 
                               hover:shadow-glow hover:transform hover:scale-[1.02] will-change-transform h-full`}
                    style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 sm:p-8 text-center space-y-4 sm:space-y-6 relative">
                  {/* Background gradient */}
                  <div className={`absolute inset-0 ${platform.gradient} opacity-50 group-hover:opacity-70 
                                  transition-opacity duration-300`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10 space-y-4 sm:space-y-6">
                    {/* Icon and Platform */}
                    <div className="space-y-3">
                      <div className="text-4xl sm:text-5xl lg:text-6xl mb-2 group-hover:scale-110 
                                     transition-transform duration-300">
                        {platform.icon}
                      </div>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground 
                                    group-hover:text-primary transition-colors duration-300">
                        {platform.name}
                      </h3>
                    </div>

                    {/* Members count */}
                    <div className="space-y-2">
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-primary">
                        {platform.members}
                      </div>
                      <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider font-semibold">
                        Members
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed px-2">
                      {platform.description}
                    </p>

                    {/* Join Button */}
                    <Button 
                      size="sm"
                      className="bg-primary/10 border border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground 
                                transition-all duration-300 w-full font-semibold text-sm sm:text-base py-2 sm:py-3"
                    >
                      Join {platform.name}
                    </Button>
                  </div>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 
                                 transition-opacity duration-300"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Community Highlights */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-glow mb-3 sm:mb-4" 
                style={{ fontFamily: 'Orbitron, monospace' }}>
              Community <span className="text-accent">Highlights</span>
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
              See what makes our community the strongest in the metaverse
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
                Exclusive Access
              </h4>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Get early access to new drops and special community-only events
              </p>
            </div>
          </div>
        </div>

        {/* Community Stats */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-glow mb-3 sm:mb-4" 
                style={{ fontFamily: 'Orbitron, monospace' }}>
              By The <span className="text-accent">Numbers</span>
            </h3>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
            {communityStats.map((stat, index) => (
              <div key={stat.label} 
                   className="text-center space-y-3 sm:space-y-4 p-4 sm:p-6 lg:p-8 rounded-2xl bg-gradient-card 
                             border border-border/50 hover:border-primary/50 transition-all duration-300 
                             hover:shadow-glow group">
                <div className="text-2xl sm:text-3xl lg:text-4xl group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className={`text-2xl sm:text-3xl lg:text-4xl font-black ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground font-medium leading-tight px-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center space-y-6 sm:space-y-8">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-glow" 
              style={{ fontFamily: 'Orbitron, monospace' }}>
            Ready to <span className="text-accent">Connect</span>?
          </h3>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2 leading-relaxed">
            Join thousands of adventurers in the most supportive and exciting NFT community in the metaverse
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