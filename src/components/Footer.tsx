const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border/50 bg-card/20 backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-glow" style={{ fontFamily: 'Orbitron, monospace' }}>
              AETHER<span className="text-accent">BEASTS</span>
            </h3>
            <p className="text-muted-foreground max-w-sm">
              Mystical creatures born from elemental forces, living on the Ethereum blockchain.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Marketplace
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Roadmap
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Whitepaper
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Team
              </a>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Legal</h4>
            <div className="flex flex-col space-y-2">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-border/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-muted-foreground text-sm">
              © 2025 AetherBeasts. Minted with Magic on Ethereum.
            </div>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span>Ethereum Network</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <span>ERC-721 Standard</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background glow effect */}
      <div className="absolute bottom-0 left-1/2 w-96 h-32 bg-primary/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
    </footer>
  );
};

export default Footer;