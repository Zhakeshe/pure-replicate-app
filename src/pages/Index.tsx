import HeroSection from "@/components/HeroSection";
import FindSection from "@/components/FindSection";
import GallerySection from "@/components/GallerySection";
import ParticipantsSection from "@/components/ParticipantsSection";
import DiagnosticSection from "@/components/DiagnosticSection";
import SpeakerSection from "@/components/SpeakerSection";
import TariffsSection from "@/components/TariffsSection";
import QuoteSection from "@/components/QuoteSection";
import Footer from "@/components/Footer";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const Index = () => {
  useScrollAnimations();

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <FindSection />
      <GallerySection />
      <ParticipantsSection />
      <DiagnosticSection />
      <QuoteSection />
      <SpeakerSection />
      <TariffsSection />
      <Footer />
    </div>
  );
};

export default Index;
