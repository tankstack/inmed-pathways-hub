import Navigation from "@/components/Navigation";
import InfoTabsSection from "@/components/InfoTabsSection";
import PartnersSection from "@/components/PartnersSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <InfoTabsSection />
      <PartnersSection />
      <Footer />
    </div>
  );
};

export default Index;
