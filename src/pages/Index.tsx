import HeroSection from "@/components/HeroSection";
import GallerySection from "@/components/GallerySection";
import ParticipantsSection from "@/components/ParticipantsSection";
import DiagnosticSection from "@/components/DiagnosticSection";
import SpeakerSection from "@/components/SpeakerSection";
import TariffsSection from "@/components/TariffsSection";
import QuoteSection from "@/components/QuoteSection";
import BenefitsSection from "@/components/BenefitsSection";
import Footer from "@/components/Footer";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const Index = () => {
  useScrollAnimations();

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <GallerySection />
      <ParticipantsSection />
      <DiagnosticSection />
      <QuoteSection />
      <BenefitsSection />
      <SpeakerSection />
      <TariffsSection />
      <Footer />
    </div>
  );
};

export default Index;
