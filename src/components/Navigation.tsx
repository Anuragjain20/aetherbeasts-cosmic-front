import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-cosmic rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <span className="text-xl font-bold text-glow" style={{ fontFamily: 'Orbitron, monospace' }}>
              AetherBeasts
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('community')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Community
            </button>
            <Button 
              size="sm"
              className="bg-gradient-cosmic hover:shadow-cosmic transition-all duration-300"
            >
              Connect Wallet
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border/50">
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-muted-foreground hover:text-primary transition-colors py-2"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="block w-full text-left text-muted-foreground hover:text-primary transition-colors py-2"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="block w-full text-left text-muted-foreground hover:text-primary transition-colors py-2"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('community')}
              className="block w-full text-left text-muted-foreground hover:text-primary transition-colors py-2"
            >
              Community
            </button>
            <Button 
              size="sm"
              className="bg-gradient-cosmic hover:shadow-cosmic transition-all duration-300 w-full"
            >
              Connect Wallet
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;