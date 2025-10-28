import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HomeSection from "./HomeSection";
import AboutSection from "./AboutSection";
import WorkSection from "./WorkSection";
import NewsSection from "./NewsSection";
import DonateSection from "./DonateSection";
import ContactSection from "./ContactSection";

const InfoTabsSection = () => {
  return (
    <section className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Tabs defaultValue="home" className="w-full">
          <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-3 lg:grid-cols-6 mb-8">
            <TabsTrigger value="home" className="text-sm lg:text-base font-semibold">
              Home
            </TabsTrigger>
            <TabsTrigger value="about" className="text-sm lg:text-base font-semibold">
              About Us
            </TabsTrigger>
            <TabsTrigger value="work" className="text-sm lg:text-base font-semibold">
              Our Work
            </TabsTrigger>
            <TabsTrigger value="news" className="text-sm lg:text-base font-semibold">
              News & Resources
            </TabsTrigger>
            <TabsTrigger value="donate" className="text-sm lg:text-base font-semibold">
              Donate
            </TabsTrigger>
            <TabsTrigger value="contact" className="text-sm lg:text-base font-semibold">
              Contact
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="home" className="mt-0">
            <HomeSection />
          </TabsContent>
          
          <TabsContent value="about" className="mt-0">
            <AboutSection />
          </TabsContent>
          
          <TabsContent value="work" className="mt-0">
            <WorkSection />
          </TabsContent>

          <TabsContent value="news" className="mt-0">
            <NewsSection />
          </TabsContent>

          <TabsContent value="donate" className="mt-0">
            <DonateSection />
          </TabsContent>

          <TabsContent value="contact" className="mt-0">
            <ContactSection />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default InfoTabsSection;
