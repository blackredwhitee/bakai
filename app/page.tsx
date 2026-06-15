import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CardsSection from "@/components/CardsSection";
import ComparisonSection from "@/components/ComparisonSection";
import PhotosSection from "@/components/PhotosSection";
import Footer from "@/components/Footer";
import {
  TrustSection,
  MerchantsSection,
  CoverageSection,
  WhyKyrgyzstanSection,
  IncludedSection,
  ProcessSection,
  DocumentsSection,
  TopUpSection,
  CurrenciesSection,
  MobileAppSection,
  AudienceSection,
  SafetySection,
  ConcernsSection,
  ReviewsSection,
  FaqSection,
  FinalCtaSection,
} from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustSection />
        <CardsSection />
        <ComparisonSection />
        <MerchantsSection />
        <CoverageSection />
        <WhyKyrgyzstanSection />
        <IncludedSection />
        <ProcessSection />
        <DocumentsSection />
        <TopUpSection />
        <CurrenciesSection />
        <MobileAppSection />
        <AudienceSection />
        <SafetySection />
        <ConcernsSection />
        <PhotosSection />
        <ReviewsSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}
