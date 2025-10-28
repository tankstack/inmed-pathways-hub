import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import InfoTabsSection from "@/components/InfoTabsSection";
import PartnersSection from "@/components/PartnersSection";
import NewsSection from "@/components/NewsSection";
import DonateSection from "@/components/DonateSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <InfoTabsSection />
      <PartnersSection />
      <NewsSection />
      <DonateSection />
      <Footer />
    </div>
  );
};

export default Index;
