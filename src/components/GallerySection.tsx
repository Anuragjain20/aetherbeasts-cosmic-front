import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import beastFire from "@/assets/beast-fire.jpg";
import beastIce from "@/assets/beast-ice.jpg";
import beastNature from "@/assets/beast-nature.jpg";
import beastShadow from "@/assets/beast-shadow.jpg";
import beastLightning from "@/assets/beast-lightning.jpg";

const GallerySection = () => {
  const beasts = [
    {
      id: 1,
      name: "Ember Phoenix",
      element: "Fire",
      rarity: "Legendary",
      image: beastFire,
      rarityColor: "bg-gradient-fire"
    },
    {
      id: 2,
      name: "Frost Warden", 
      element: "Ice",
      rarity: "Epic",
      image: beastIce,
      rarityColor: "bg-cosmic-cyan"
    },
    {
      id: 3,
      name: "Verdant Guardian",
      element: "Nature", 
      rarity: "Rare",
      image: beastNature,
      rarityColor: "bg-cosmic-green"
    },
    {
      id: 4,
      name: "Shadow Wraith",
      element: "Shadow",
      rarity: "Mythic", 
      image: beastShadow,
      rarityColor: "bg-cosmic-purple"
    },
    {
      id: 5,
      name: "Storm Striker",
      element: "Lightning",
      rarity: "Epic",
      image: beastLightning,
      rarityColor: "bg-gradient-ethereal"
    },
    {
      id: 6,
      name: "Crystal Sage",
      element: "Ice",
      rarity: "Legendary",
      image: beastIce,
      rarityColor: "bg-gradient-cosmic"
    }
  ];

  return (
    <section className="py-24 px-6 relative">
      <div className="container mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-glow" style={{ fontFamily: 'Orbitron, monospace' }}>
            Beast <span className="text-accent">Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the magnificent creatures that inhabit the Aetherial Realm
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {beasts.map((beast, index) => (
            <div 
              key={beast.id}
              className="group relative overflow-hidden rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-glow hover:transform hover:scale-[1.02]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image container */}
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={beast.image}
                  alt={`${beast.name} - ${beast.element} elemental AetherBeast`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                
                {/* Rarity badge */}
                <Badge 
                  className={`absolute top-4 right-4 ${beast.rarityColor} text-white border-0 shadow-lg`}
                >
                  {beast.rarity}
                </Badge>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {beast.name}
                  </h3>
                  <p className="text-muted-foreground">
                    {beast.element} Element
                  </p>
                </div>

                {/* Stats or attributes could go here */}
                <div className="flex justify-between items-center pt-2">
                  <div className="text-sm text-muted-foreground">
                    #{beast.id.toString().padStart(4, '0')}
                  </div>
                  <div className="text-sm font-semibold text-primary">
                    0.5 ETH
                  </div>
                </div>
              </div>

              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center space-y-6">
          <Button 
            size="lg"
            variant="outline"
            className="border-primary/50 text-primary hover:bg-primary/10 hover:shadow-glow transition-all duration-300 text-lg px-8 py-6"
          >
            View Full Collection on OpenSea
          </Button>
          
          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span>6,847 Owners</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span>2.3 ETH Floor</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-cosmic-green rounded-full animate-pulse"></div>
              <span>12.5K Total Volume</span>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default GallerySection;