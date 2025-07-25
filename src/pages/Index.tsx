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
    <div className="min-h-screen bg-background w-full max-w-full overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <HowItWorksSection />
      <GallerySection />
      <UpcomingDropSection />
      <CommunitySection />
      <Footer />
    </div>
  );
};

export default Index;
