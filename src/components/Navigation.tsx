import { Button } from "@/components/ui/button";
import { Menu, X, Wallet, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { useAccount, useDisconnect } from 'wagmi'
import { useWallet } from '@/context/WalletContext'
import WalletModal from './WalletModal'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { address, isConnected } = useAccount()
  const { disconnect } = useDisconnect()
  const { isWalletModalOpen, setIsWalletModalOpen } = useWallet()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`
  }

  const handleConnectWallet = () => {
    setIsWalletModalOpen(true)
  }

  const handleDisconnect = () => {
    disconnect()
    setIsMenuOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-xl border-b border-border/60 shadow-xl' 
        : 'bg-background/80 backdrop-blur-lg border-b border-border/30'
    }`}>
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-18">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3 min-w-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-cosmic rounded-lg flex items-center justify-center 
                           shadow-glow hover:shadow-accent-glow transition-all duration-300 flex-shrink-0">
              <div className="w-4 h-4 sm:w-5 sm:h-5 bg-white rounded-sm"></div>
            </div>
            <span className="font-bold text-glow transition-all duration-300 truncate" 
                  style={{ 
                    fontFamily: 'Orbitron, monospace',
                    fontSize: 'clamp(1rem, 3vw, 1.5rem)'
                  }}>
              AetherBeasts
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            {[
              { label: 'About', id: 'about' },
              { label: 'How It Works', id: 'how-it-works' },
              { label: 'Gallery', id: 'gallery' },
              { label: 'Community', id: 'community' }
            ].map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-muted-foreground hover:text-primary transition-all duration-300 
                          font-medium py-2 px-3 rounded-lg hover:bg-primary/10 
                          relative group touch-target text-sm xl:text-base"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary transition-all duration-300 
                               group-hover:w-full group-hover:left-0"></span>
              </button>
            ))}
            
            {isConnected ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    className="relative overflow-hidden bg-gradient-cosmic hover:shadow-cosmic 
                              transition-all duration-300 hover:scale-105 font-semibold 
                              px-4 xl:px-6 py-2 xl:py-3 rounded-lg border border-primary/30
                              hover:border-primary/60 touch-target group"
                    style={{ fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)' }}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <Wallet className="h-4 w-4" />
                      {formatAddress(address!)}
                      <ChevronDown className="h-3 w-3" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                                   -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem onClick={handleDisconnect} className="text-destructive">
                    Disconnect Wallet
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button 
                onClick={handleConnectWallet}
                className="relative overflow-hidden bg-gradient-cosmic hover:shadow-cosmic 
                          transition-all duration-300 hover:scale-105 font-semibold 
                          px-4 xl:px-6 py-2 xl:py-3 rounded-lg border border-primary/30
                          hover:border-primary/60 touch-target group"
                style={{ fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)' }}
              >
                <span className="relative z-10">Connect Wallet</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                               -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground p-2 rounded-lg hover:bg-primary/10 
                       transition-all duration-300 touch-target flex-shrink-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile/Tablet Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen 
            ? 'max-h-96 opacity-100 pb-4' 
            : 'max-h-0 opacity-0 pb-0'
        }`}>
          <div className="pt-3 space-y-1 border-t border-border/50">
            {[
              { label: 'About', id: 'about' },
              { label: 'How It Works', id: 'how-it-works' },
              { label: 'Gallery', id: 'gallery' },
              { label: 'Community', id: 'community' }
            ].map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-muted-foreground hover:text-primary 
                          transition-all duration-300 py-3 px-4 rounded-lg 
                          hover:bg-primary/10 font-medium
                          touch-target active:bg-primary/20 active:scale-[0.98]"
              >
                {item.label}
              </button>
            ))}
            
            <div className="pt-2">
              {isConnected ? (
                <div className="space-y-2">
                  <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
                    <p className="text-sm font-medium text-primary flex items-center gap-2">
                      <Wallet className="h-4 w-4" />
                      Connected
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {formatAddress(address!)}
                    </p>
                  </div>
                  <Button 
                    onClick={handleDisconnect}
                    variant="outline"
                    className="w-full py-4 touch-target active:scale-[0.98] text-destructive border-destructive/20 hover:bg-destructive/10"
                  >
                    Disconnect Wallet
                  </Button>
                </div>
              ) : (
                <Button 
                  onClick={handleConnectWallet}
                  className="relative group w-full overflow-hidden
                            bg-gradient-cosmic hover:shadow-cosmic transition-all duration-300 
                            font-semibold py-4 rounded-lg border border-primary/30
                            hover:border-primary/60 touch-target active:scale-[0.98]"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <span className="text-lg">🔗</span>
                    <span>Connect Wallet</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                                 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Wallet Modal */}
      <WalletModal 
        isOpen={isWalletModalOpen} 
        onClose={() => setIsWalletModalOpen(false)} 
      />
    </nav>
  );
};

export default Navigation;