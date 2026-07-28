import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import CardsSection from "@/components/CardsSection";
import ComparisonSection from "@/components/ComparisonSection";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import {
  CoverageSection,
  WhyKyrgyzstanSection,
  IncludedSection,
  ProcessSection,
  DocumentsSection,
  TopUpCurrenciesSection,
  MobileAppSection,
  AudienceSection,
  SecuritySection,
  ClientGetsSection,
} from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServicesSection />
        <CardsSection />
        <ComparisonSection />
        <CoverageSection />
        <WhyKyrgyzstanSection />
        <IncludedSection />
        <ProcessSection />
        <DocumentsSection />
        <TopUpCurrenciesSection />
        <MobileAppSection />
        <AudienceSection />
        <SecuritySection />
        <Faq />
        <ClientGetsSection />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
