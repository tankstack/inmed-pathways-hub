import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sprout, Apple, TreePine, Briefcase, Users2, Zap } from "lucide-react";

const WorkSection = () => {
  const programs = [
    {
      icon: <Sprout className="w-8 h-8" />,
      title: "Adaptive Agriculture for Resilience",
      description: "Community projects and capacity building through innovative school gardens and sustainable farming practices.",
      color: "text-success",
      bgGradient: "from-success/10 to-success/5"
    },
    {
      icon: <Apple className="w-8 h-8" />,
      title: "Nutrition & Healthy Lifestyles",
      description: "Health in Action programs providing school community nutrition support and chronic illness prevention.",
      color: "text-accent",
      bgGradient: "from-accent/10 to-accent/5"
    },
    {
      icon: <TreePine className="w-8 h-8" />,
      title: "Climate-Smart Livelihoods",
      description: "Climate adaptation initiatives focused on women and youth empowerment through sustainable practices.",
      color: "text-secondary",
      bgGradient: "from-secondary/10 to-secondary/5"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Employment Creation",
      description: "Social employment opportunities and entrepreneurship development for sustainable community growth.",
      color: "text-primary",
      bgGradient: "from-primary/10 to-primary/5"
    },
    {
      icon: <Users2 className="w-8 h-8" />,
      title: "Social Entrepreneurship",
      description: "Supporting community-led businesses and social enterprises like INMED Aquaponics Social Enterprise.",
      color: "text-accent",
      bgGradient: "from-accent/10 to-accent/5"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Capacity Building",
      description: "Training and development programs that strengthen community resilience and self-reliance.",
      color: "text-success",
      bgGradient: "from-success/10 to-success/5"
    }
  ];

  return (
    <section id="work" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Work
          </h2>
          <div className="w-24 h-1 bg-gradient-secondary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We work across multiple programmatic pillars to create sustainable impact 
            in communities across Southern Africa.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {programs.map((program, index) => (
            <Card key={index} className={`p-6 shadow-medium hover:shadow-strong transition-all duration-300 group bg-gradient-to-br ${program.bgGradient}`}>
              <div className={`flex justify-center mb-6 ${program.color} group-hover:scale-110 transition-transform duration-300`}>
                {program.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4 text-center">
                {program.title}
              </h3>
              <p className="text-muted-foreground text-center leading-relaxed">
                {program.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Impact Stats */}
        <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-8">Our Impact at a Glance</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-white/90">School Gardens Established</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-white/90">Children Reached</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-white/90">Community Leaders Trained</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15</div>
              <div className="text-white/90">Partner Organizations</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="secondary" size="lg" className="group">
            Explore Our Programs in Detail
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;