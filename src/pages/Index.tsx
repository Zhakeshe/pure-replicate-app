import HeroSection from "@/components/HeroSection";
import FindSection from "@/components/FindSection";
import CasesSection from "@/components/CasesSection";
import DiagnosticSection from "@/components/DiagnosticSection";
import ProcessSection from "@/components/ProcessSection";
import GallerySection from "@/components/GallerySection";
import ParticipantsSection from "@/components/ParticipantsSection";
import PartnershipSection from "@/components/PartnershipSection";
import TariffsSection from "@/components/TariffsSection";
import ContactForm from "@/components/ContactForm";
import SpeakerSection from "@/components/SpeakerSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <FindSection />
      <CasesSection />
      <DiagnosticSection />
      <ProcessSection />
      <GallerySection />
      <ParticipantsSection />
      <PartnershipSection />
      <TariffsSection />
      <ContactForm />
      <SpeakerSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
