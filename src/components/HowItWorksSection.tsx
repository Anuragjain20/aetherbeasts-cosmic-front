import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Eye, Swords } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: ShoppingCart,
      title: "Buy Mystery Packs",
      description: "Purchase limited-edition NFT packs to uncover unique AetherBeasts with rare traits and elemental powers.",
      gradient: "bg-gradient-fire"
    },
    {
      icon: Eye,
      title: "Reveal Beasts",
      description: "Open packs to discover your creatures' rarity and traits, minted securely on the Ethereum blockchain.",
      gradient: "bg-gradient-cosmic"
    },
    {
      icon: Swords,
      title: "Battle & Evolve",
      description: "Train and battle your Beasts to unlock evolutions and dominate the Aetherial Realm in epic combat.",
      gradient: "bg-gradient-ethereal"
    }
  ];

  return (
    <section className="py-24 px-6 relative">
      <div className="container mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-glow" style={{ fontFamily: 'Orbitron, monospace' }}>
            How It <span className="text-accent">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Begin your journey into the Aetherial Realm with these simple steps
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-glow hover:transform hover:scale-105"
            >
              <CardContent className="p-8 text-center space-y-6">
                {/* Step number */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-sm font-bold text-primary">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className={`w-20 h-20 ${step.gradient} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-10 h-10 text-white" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Connection lines for desktop */}
        <div className="hidden md:block relative -mt-8 mb-8">
          <div className="flex justify-center items-center space-x-16">
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-primary/50"></div>
            <div className="w-24 h-0.5 bg-gradient-to-r from-primary/50 via-accent/50 to-accent/50"></div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-primary/30 rounded-full px-6 py-3 text-sm text-primary">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span>Ready to start your collection?</span>
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default HowItWorksSection;