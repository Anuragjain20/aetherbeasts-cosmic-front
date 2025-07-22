import { useState, useEffect } from "react";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const footerSections = [
    {
      title: "Quick Links",
      links: [
        { name: "Marketplace", href: "#", icon: "🏪" },
        { name: "Roadmap", href: "#", icon: "🗺️" },
        { name: "Whitepaper", href: "#", icon: "📄" },
        { name: "Team", href: "#", icon: "👥" }
      ]
    },
    {
      title: "Community",
      links: [
        { name: "Discord", href: "#", icon: "🎮" },
        { name: "Twitter", href: "#", icon: "🐦" },
        { name: "Instagram", href: "#", icon: "📸" },
        { name: "YouTube", href: "#", icon: "📺" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "#", icon: "❓" },
        { name: "Contact Us", href: "#", icon: "📧" },
        { name: "Bug Reports", href: "#", icon: "🐛" },
        { name: "Feature Requests", href: "#", icon: "💡" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#", icon: "🔒" },
        { name: "Terms of Service", href: "#", icon: "📋" },
        { name: "Cookie Policy", href: "#", icon: "🍪" },
        { name: "DMCA", href: "#", icon: "⚖️" }
      ]
    }
  ];

  return (
    <footer className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 border-t border-border/50 bg-card/20 backdrop-blur-sm relative">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-12 lg:gap-16 mb-8 sm:mb-12 lg:mb-16">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-4 sm:space-y-6">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-cosmic rounded-lg flex items-center justify-center 
                             shadow-glow hover:shadow-accent-glow transition-all duration-300">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-sm"></div>
              </div>
              <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-glow transition-all duration-300" 
                    style={{ fontFamily: 'Orbitron, monospace' }}>
                AETHER<span className="text-accent">BEASTS</span>
              </span>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-md leading-relaxed">
              Mystical creatures born from elemental forces, living on the Ethereum blockchain. 
              Collect, battle, and evolve your way to legendary status in the Aetherial Realm.
            </p>

            {/* Newsletter Signup */}
            <div className="space-y-3 sm:space-y-4">
              <h4 className="text-lg sm:text-xl font-semibold text-foreground">
                Stay Updated
              </h4>
              <div className="flex flex-col xs:flex-row gap-3 max-w-md">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-3 sm:px-4 py-2 sm:py-3 bg-background/50 border border-border rounded-lg 
                           focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground 
                           placeholder:text-muted-foreground text-sm sm:text-base transition-all duration-300"
                />
                <button className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-ethereal text-white font-semibold 
                                 rounded-lg hover:shadow-glow transition-all duration-300 
                                 hover:scale-105 text-sm sm:text-base whitespace-nowrap">
                  Subscribe
                </button>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">
                No spam, just the good stuff. Unsubscribe anytime.
              </p>
            </div>
          </div>

          {/* Link Sections */}
          {footerSections.map((section, index) => (
            <div key={section.title} className="space-y-4 sm:space-y-6">
              <h4 className="text-lg sm:text-xl font-semibold text-foreground">
                {section.title}
              </h4>
              <div className="space-y-2 sm:space-y-3">
                {section.links.map((link, linkIndex) => (
                  <a 
                    key={linkIndex}
                    href={link.href} 
                    className="flex items-center space-x-2 sm:space-x-3 text-muted-foreground 
                             hover:text-primary transition-colors duration-300 group text-sm sm:text-base"
                  >
                    <span className="text-base sm:text-lg group-hover:scale-110 transition-transform duration-300">
                      {link.icon}
                    </span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16 
                       p-6 sm:p-8 rounded-2xl bg-gradient-card border border-border/50">
          {[
            { label: "Total Supply", value: "10,000", icon: "🔢" },
            { label: "Owners", value: "6,847+", icon: "👥" },
            { label: "Floor Price", value: "0.08 ETH", icon: "💎" },
            { label: "Total Volume", value: "2.3K ETH", icon: "📈" }
          ].map((stat, index) => (
            <div key={index} className="text-center space-y-2 sm:space-y-3 group">
              <div className="text-2xl sm:text-3xl lg:text-4xl group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 pt-6 sm:pt-8 lg:pt-10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
            {/* Copyright */}
            <div className="text-center sm:text-left">
              <p className="text-sm sm:text-base text-muted-foreground">
                © 2024 AetherBeasts. All rights reserved.
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                Built with ❤️ for the Web3 community
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 sm:space-x-6">
              {[
                { name: "Discord", icon: "🎮", href: "#" },
                { name: "Twitter", icon: "🐦", href: "#" },
                { name: "Instagram", icon: "📸", href: "#" },
                { name: "YouTube", icon: "📺", href: "#" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-background/50 border border-border/50 
                           rounded-lg flex items-center justify-center hover:bg-primary/10 
                           hover:border-primary/50 transition-all duration-300 hover:scale-110 group"
                  aria-label={social.name}
                >
                  <span className="text-lg sm:text-xl group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>

            {/* Scroll to top */}
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 border border-primary/50 
                         rounded-lg flex items-center justify-center hover:bg-primary/20 
                         hover:border-primary/80 transition-all duration-300 hover:scale-110 group"
              aria-label="Scroll to top"
            >
              <span className="text-lg sm:text-xl text-primary group-hover:scale-110 transition-transform duration-300">
                ⬆️
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Background effects */}
      <div className="absolute top-0 left-1/4 w-32 sm:w-48 h-32 sm:h-48 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-32 sm:w-48 h-32 sm:h-48 bg-accent/5 rounded-full blur-3xl"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: isMobile ? 4 : 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${10 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;