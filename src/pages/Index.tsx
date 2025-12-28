import HeroSection from "@/components/HeroSection";
import FindSection from "@/components/FindSection";
import ParticipantsSection from "@/components/ParticipantsSection";
import DiagnosticSection from "@/components/DiagnosticSection";
import ProcessSection from "@/components/ProcessSection";
import GallerySection from "@/components/GallerySection";
import TariffsSection from "@/components/TariffsSection";
import SpeakerSection from "@/components/SpeakerSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <FindSection />
      <ParticipantsSection />
      <DiagnosticSection />
      <ProcessSection />
      <GallerySection />
      <SpeakerSection />
      <TariffsSection />
      <Footer />
    </div>
  );
};

export default Index;
