import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AboutSection from "./AboutSection";
import WorkSection from "./WorkSection";

const InfoTabsSection = () => {
  return (
    <section className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Tabs defaultValue="about" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="about" className="text-base font-semibold">
              About Us
            </TabsTrigger>
            <TabsTrigger value="work" className="text-base font-semibold">
              Our Work
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="about" className="mt-0">
            <AboutSection />
          </TabsContent>
          
          <TabsContent value="work" className="mt-0">
            <WorkSection />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default InfoTabsSection;
