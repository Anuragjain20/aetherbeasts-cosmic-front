import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import UpcomingDropSection from "@/components/UpcomingDropSection";
import GallerySection from "@/components/GallerySection";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <HowItWorksSection />
      <UpcomingDropSection />
      <GallerySection />
      <CommunitySection />
      <Footer />
    </div>
  );
};

export default Index;
