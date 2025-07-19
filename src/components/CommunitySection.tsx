import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Twitter, Instagram } from "lucide-react";

const CommunitySection = () => {
  const socialLinks = [
    {
      icon: MessageSquare,
      name: "Discord",
      description: "Join our community of Beast trainers",
      members: "15.2K",
      href: "#",
      gradient: "bg-gradient-cosmic"
    },
    {
      icon: Twitter,
      name: "Twitter",
      description: "Stay updated with the latest news",
      members: "8.7K",
      href: "#",
      gradient: "bg-gradient-ethereal"
    },
    {
      icon: Instagram,
      name: "Instagram",
      description: "Behind-the-scenes content",
      members: "5.1K",
      href: "#",
      gradient: "bg-gradient-fire"
    }
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="container mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-glow" style={{ fontFamily: 'Orbitron, monospace' }}>
            Join the <span className="text-accent">Community</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with fellow trainers, share strategies, and stay updated on the latest AetherBeasts news
          </p>
        </div>

        {/* Social links grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
          {socialLinks.map((social, index) => (
            <Card 
              key={social.name}
              className="group relative overflow-hidden bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-glow cursor-pointer"
            >
              <CardContent className="p-8 text-center space-y-6">
                {/* Icon */}
                <div className={`w-16 h-16 ${social.gradient} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <social.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {social.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {social.description}
                  </p>
                  <div className="text-lg font-semibold text-primary">
                    {social.members} members
                  </div>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter signup */}
        <div className="max-w-2xl mx-auto">
          <Card className="bg-gradient-card border-primary/30 shadow-cosmic">
            <CardContent className="p-8 text-center space-y-6">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-glow">
                  Stay in the <span className="text-accent">Loop</span>
                </h3>
                <p className="text-muted-foreground">
                  Get notified about new drops, exclusive content, and community events
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground"
                />
                <Button 
                  className="bg-gradient-ethereal hover:shadow-glow transition-all duration-300"
                >
                  Subscribe
                </Button>
              </div>

              <div className="text-xs text-muted-foreground">
                No spam, just the good stuff. Unsubscribe anytime.
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Community stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-primary">29K+</div>
            <div className="text-sm text-muted-foreground">Community Members</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-accent">450+</div>
            <div className="text-sm text-muted-foreground">Daily Active Users</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-cosmic-cyan">24/7</div>
            <div className="text-sm text-muted-foreground">Community Support</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-cosmic-green">98%</div>
            <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
          </div>
        </div>
      </div>

      {/* Background effects */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
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