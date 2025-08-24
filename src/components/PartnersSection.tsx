import { Card } from "@/components/ui/card";

const PartnersSection = () => {
  const partnerCategories = [
    {
      title: "Government Partners",
      partners: ["DFFE", "DBE", "DRDAR", "DSTI"],
      color: "text-primary"
    },
    {
      title: "Research Institutions",
      partners: ["NMU", "UFH", "TUT", "Motheo", "Lovedale"],
      color: "text-secondary"
    },
    {
      title: "Corporate Partners",
      partners: ["Mondelez", "Woolworths", "Air Products"],
      color: "text-accent"
    },
    {
      title: "Development Agencies",
      partners: ["USAID", "UNDP"],
      color: "text-success"
    }
  ];

  return (
    <section className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Our Partners & Funders
          </h2>
          <p className="text-lg text-muted-foreground">
            Working together to create lasting impact across Southern Africa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {partnerCategories.map((category, index) => (
            <Card key={index} className="p-6 text-center shadow-medium">
              <h3 className={`text-lg font-bold mb-4 ${category.color}`}>
                {category.title}
              </h3>
              <div className="space-y-2">
                {category.partners.map((partner, partnerIndex) => (
                  <div key={partnerIndex} className="text-muted-foreground font-medium">
                    {partner}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;