import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import beastFire from "@/assets/beast-fire.jpg";
import beastIce from "@/assets/beast-ice.jpg";
import beastNature from "@/assets/beast-nature.jpg";
import beastShadow from "@/assets/beast-shadow.jpg";
import beastLightning from "@/assets/beast-lightning.jpg";
import { useState, useEffect } from "react";

const GallerySection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();

    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const beasts = [
    {
      id: 1,
      name: "Ember Phoenix",
      element: "Fire",
      rarity: "Legendary",
      image: beastFire,
      rarityColor: "bg-gradient-fire",
      power: "9,500",
      description: "Born from volcanic eruptions, commands eternal flames."
    },
    {
      id: 2,
      name: "Frost Warden",
      element: "Ice",
      rarity: "Epic",
      image: beastIce,
      rarityColor: "bg-cosmic-cyan",
      power: "7,800",
      description: "Guardian of frozen realms, master of winter storms."
    },
    {
      id: 3,
      name: "Verdant Guardian",
      element: "Nature",
      rarity: "Rare",
      image: beastNature,
      rarityColor: "bg-cosmic-green",
      power: "6,200",
      description: "Protector of ancient forests, grows stronger with time."
    },
    {
      id: 4,
      name: "Shadow Wraith",
      element: "Shadow",
      rarity: "Mythic",
      image: beastShadow,
      rarityColor: "bg-cosmic-purple",
      power: "12,000",
      description: "Mysterious being from the void, bends reality itself."
    },
    {
      id: 5,
      name: "Storm Herald",
      element: "Lightning",
      rarity: "Epic",
      image: beastLightning,
      rarityColor: "bg-gradient-ethereal",
      power: "8,100",
      description: "Channels the fury of thunderstorms, swift as lightning."
    }
  ];

  const featuredBeasts = beasts.slice(0, 3);

  return (
    <section id="gallery" className="pt-12 sm:pt-14 lg:pt-16 pb-16 sm:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto max-w-7xl">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 space-y-4 sm:space-y-6">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-glow leading-tight"
            style={{ fontFamily: 'Orbitron, monospace' }}>
            Beast <span className="text-accent">Gallery</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-2">
            Discover the magnificent creatures that inhabit the Aetherial Realm
          </p>
        </div>

        {/* Gallery Carousel - Mobile Optimized */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <Carousel className="w-full max-w-full mx-auto"
            opts={{
              align: "start",
              loop: true,
              skipSnaps: false,
              dragFree: isMobile,
            }}>
            <CarouselContent className="-ml-2 sm:-ml-4">
              {beasts.map((beast, index) => (
                <CarouselItem key={beast.id} className="pl-2 sm:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <div className="group relative overflow-hidden rounded-2xl bg-gradient-card border border-border/50 
                                 hover:border-primary/50 transition-all duration-500 
                                 hover:shadow-glow hover:transform hover:scale-[1.02] 
                                 will-change-transform h-full">
                    {/* Beast Image */}
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <img
                        src={beast.image}
                        alt={beast.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700
                                  will-change-transform"
                        loading={index < 3 ? "eager" : "lazy"}
                      />

                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent"></div>

                      {/* Rarity badge */}
                      <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                        <Badge className={`${beast.rarityColor} text-white font-bold text-xs sm:text-sm 
                                          px-2 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-lg`}>
                          {beast.rarity}
                        </Badge>
                      </div>

                      {/* Power indicator */}
                      <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                        <div className="bg-background/80 backdrop-blur-sm rounded-full px-2 sm:px-3 py-1 sm:py-1.5">
                          <span className="text-xs sm:text-sm font-bold text-primary">⚡ {beast.power}</span>
                        </div>
                      </div>
                    </div>

                    {/* Beast Info */}
                    <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground group-hover:text-primary 
                                      transition-colors duration-300">
                          {beast.name}
                        </h3>
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                          {beast.description}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <span className="text-xs sm:text-sm font-medium text-accent uppercase tracking-wider">
                          {beast.element} Element
                        </span>
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-xs sm:text-sm border-primary/50 text-primary hover:bg-primary/10 
                                   hover:border-primary/80 transition-all duration-300 
                                   px-3 sm:px-4 py-1.5 sm:py-2"
                        >
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Carousel Controls */}
            <div className="flex justify-center items-center gap-4 mt-6 sm:mt-8">

              <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 -left-5 sm:-left-6 z-10 
                                    bg-background/80 border border-primary/50 
                                    hover:bg-primary/10 hover:border-primary/80 
                                    w-10 h-10 sm:w-12 sm:h-12 rounded-full" />
              <CarouselNext className="absolute top-1/2 -translate-y-1/2 -right-5 sm:-right-6 z-10 
                                bg-background/80 border border-primary/50 
                                hover:bg-primary/10 hover:border-primary/80 
                                w-10 h-10 sm:w-12 sm:h-12 rounded-full" />
            </div>
          </Carousel>
        </div>

        {/* Featured Grid - Desktop Enhancement */}
        {/* <div className="hidden lg:block">
          <div className="text-center mb-12 space-y-4">
            <h3 className="text-3xl xl:text-4xl font-bold text-glow" style={{ fontFamily: 'Orbitron, monospace' }}>
              Featured <span className="text-accent">Legends</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The most powerful beings in the Aetherial Realm
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 xl:gap-8 max-w-6xl mx-auto">
            {featuredBeasts.map((beast, index) => (
              <div key={`featured-${beast.id}`} 
                   className="group relative overflow-hidden rounded-2xl bg-gradient-card border border-border/50 
                             hover:border-primary/50 transition-all duration-500 
                             hover:shadow-glow hover:transform hover:scale-[1.02] will-change-transform">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={beast.image}
                    alt={beast.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent"></div>
                  
                  <div className="absolute top-4 right-4">
                    <Badge className={`${beast.rarityColor} text-white font-bold text-sm px-3 py-1.5 rounded-full shadow-lg`}>
                      {beast.rarity}
                    </Badge>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 space-y-3">
                    <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {beast.name}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {beast.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-accent uppercase tracking-wider">
                        {beast.element}
                      </span>
                      <span className="text-sm font-bold text-primary">⚡ {beast.power}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16 lg:mt-20 space-y-6 sm:space-y-8">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-glow"
            style={{ fontFamily: 'Orbitron, monospace' }}>
            Ready to <span className="text-accent">Collect</span>?
          </h3>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Join thousands of collectors in the mystical world of AetherBeasts
          </p>
          <div className="flex flex-col xs:flex-row gap-4 justify-center max-w-md mx-auto px-2">
            <Button
              size="lg"
              className="bg-gradient-ethereal hover:shadow-glow transition-all duration-300 
                         hover:scale-105 font-semibold text-base sm:text-lg 
                         px-6 sm:px-8 py-3 sm:py-4 rounded-xl w-full xs:w-auto"
            >
              Browse Collection
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary/50 text-primary hover:bg-primary/10 
                         hover:border-primary/80 transition-all duration-300 
                         font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 
                         rounded-xl w-full xs:w-auto"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Background effects */}
      <div className="absolute top-1/4 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-primary/5 rounded-full blur-3xl transform -translate-x-1/2"></div>
      <div className="absolute bottom-1/4 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-accent/5 rounded-full blur-3xl transform translate-x-1/2"></div>
    </section>
  );
};

export default GallerySection;