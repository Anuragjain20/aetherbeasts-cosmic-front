import { Button } from "@/components/ui/button";
import beastNatureImage from "@/assets/beast-nature.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl font-bold text-glow" style={{ fontFamily: 'Orbitron, monospace' }}>
                The Myth of the <span className="text-accent">Aetherial</span> Dawn
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  In the beginning, when the cosmos was but a whisper of stardust, the Aetherial Realm was born 
                  from the collision of five primal elements: Fire, Storm, Moon, Spirit, and Stone. These forces 
                  swirled in chaos, untamed and boundless, until the First Aetherion, a celestial dragon of radiant 
                  light, descended from the stars.
                </p>
                <p>
                  With a single roar, it wove the elements into harmony, birthing the floating islands of the Realm—each 
                  a crucible of life, glowing with the pulse of creation. From the embers of volcanoes came Spryke, 
                  its fiery tail crackling with storm-born lightning. In the moonlit mists emerged Lunethra, its wings 
                  shimmering with crescent patterns, guiding lost souls with serene wisdom.
                </p>
                <p>
                  For eons, the AetherBeasts roamed freely, their powers shaping the Realm's landscapes. But harmony 
                  fractured when the Void Shroud seeped from the cosmos' edge, corrupting Beasts and shrouding islands 
                  in gloom. The First Aetherion vanished into the stars, leaving behind a prophecy: <span className="text-accent italic">
                  "When the Marked Ones rise, bearing the bond of heart and will, the Aetherial Dawn shall return."</span>
                </p>
                <p>
                  Now, the Aetherial Realm calls to Trainers—chosen souls from beyond the stars. Through Mystery Packs, 
                  glowing orbs infused with primal elements, Trainers summon AetherBeasts, each a unique NFT bound by 
                  its Aether Mark. Will you answer the call?
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 py-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">10K</div>
                <div className="text-sm text-muted-foreground">Unique Beasts</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">7</div>
                <div className="text-sm text-muted-foreground">Elemental Types</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cosmic-cyan">∞</div>
                <div className="text-sm text-muted-foreground">Possibilities</div>
              </div>
            </div>

            <Button 
              size="lg"
              className="bg-gradient-cosmic hover:shadow-cosmic transition-all duration-300 transform hover:scale-105"
            >
              Explore the Lore
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative group">
              <img 
                src={beastNatureImage} 
                alt="Nature elemental AetherBeast with glowing green crystal formations"
                className="w-full h-auto object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-cosmic-green/20 to-transparent rounded-2xl"></div>
              
              {/* Floating badges */}
              <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm border border-cosmic-green/30 rounded-lg px-3 py-2">
                <div className="text-sm font-semibold text-cosmic-green">Rare</div>
              </div>
              
              <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm border border-border rounded-lg px-4 py-3">
                <div className="text-sm text-muted-foreground">Nature Element</div>
                <div className="text-lg font-bold text-cosmic-green">Verdant Guardian</div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-8 -left-8 w-16 h-16 bg-cosmic-green/20 rounded-full blur-xl animate-float"></div>
            <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float" style={{ animationDelay: '3s' }}></div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cosmic-green/5 rounded-full blur-3xl transform -translate-y-1/2 -translate-x-1/2"></div>
    </section>
  );
};

export default AboutSection;