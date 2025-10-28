import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sprout, Apple, TreePine, Briefcase, Users2, MapPin, Image, Newspaper, Heart } from "lucide-react";

const WorkSection = () => {
  const programs = [
    {
      icon: <Sprout className="w-8 h-8" />,
      title: "Adaptive Agriculture for Resilience",
      description: "Community projects and capacity building through innovative school gardens and sustainable farming practices that ensure food security.",
      color: "text-success",
      bgGradient: "from-success/10 to-success/5"
    },
    {
      icon: <Apple className="w-8 h-8" />,
      title: "Nutrition & Healthy Lifestyles",
      description: "Health in Action programs providing school community nutrition support, chronic illness prevention, and wellness education.",
      color: "text-accent",
      bgGradient: "from-accent/10 to-accent/5"
    },
    {
      icon: <TreePine className="w-8 h-8" />,
      title: "Climate-Smart Livelihoods",
      description: "Climate adaptation initiatives focused on women and youth empowerment through sustainable environmental practices.",
      color: "text-secondary",
      bgGradient: "from-secondary/10 to-secondary/5"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Employment Creation",
      description: "Social employment opportunities and skills development programs that create sustainable livelihood pathways.",
      color: "text-primary",
      bgGradient: "from-primary/10 to-primary/5"
    },
    {
      icon: <Users2 className="w-8 h-8" />,
      title: "Social Entrepreneurship",
      description: "Supporting community-led businesses and social enterprises that generate income and create local employment.",
      color: "text-accent",
      bgGradient: "from-accent/10 to-accent/5"
    }
  ];

  return (
    <div id="work" className="py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Work
          </h2>
          <div className="w-24 h-1 bg-gradient-secondary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We implement comprehensive programs across five core pillars to create lasting impact 
            in vulnerable communities throughout Southern Africa.
          </p>
        </div>

        {/* Core Programs */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {programs.map((program, index) => (
            <Card key={index} className={`p-8 shadow-medium hover:shadow-strong transition-all duration-300 group bg-gradient-to-br ${program.bgGradient}`}>
              <div className={`flex justify-center mb-6 ${program.color} group-hover:scale-110 transition-transform duration-300`}>
                {program.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4 text-center">
                {program.title}
              </h3>
              <p className="text-muted-foreground text-center leading-relaxed mb-6">
                {program.description}
              </p>
              <div className="flex gap-2 justify-center flex-wrap">
                <Button variant="ghost" size="sm" className="group/btn">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
                <Button variant="ghost" size="sm" className="group/btn">
                  <Image className="w-4 h-4 mr-1" />
                  View Gallery
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Photo/Video Gallery Placeholder */}
        <Card className="p-8 mb-16 shadow-medium">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">Program Gallery</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-muted rounded-lg aspect-video flex items-center justify-center hover:shadow-medium transition-shadow cursor-pointer">
                <div className="text-center">
                  <Image className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">[Photo/Video {i}]</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Button variant="secondary" className="group">
              <Image className="w-5 h-5 mr-2" />
              View Full Gallery
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </Card>

        {/* Related News Section */}
        <Card className="p-8 mb-16 shadow-medium bg-gradient-to-br from-primary/5 to-secondary/5">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">Related News & Updates</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="p-6 shadow-soft hover:shadow-medium transition-shadow">
                <Newspaper className="w-8 h-8 text-primary mb-4" />
                <h4 className="font-bold text-foreground mb-2">Latest Update {i}</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Brief description of program update or success story goes here...
                </p>
                <Button variant="link" size="sm" className="p-0">
                  Read Article
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Card>
            ))}
          </div>
        </Card>

        {/* Map Overlay Placeholder */}
        <Card className="p-8 mb-16 shadow-medium">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">Program Coverage</h3>
          <div className="bg-muted rounded-lg aspect-video flex items-center justify-center">
            <div className="text-center p-8">
              <MapPin className="w-20 h-20 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground font-semibold text-lg">[Interactive Map Overlay]</p>
              <p className="text-sm text-muted-foreground mt-2">Program locations and coverage areas</p>
            </div>
          </div>
          <div className="text-center mt-6">
            <Button variant="secondary" className="group">
              <MapPin className="w-5 h-5 mr-2" />
              Explore Map
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Button variant="secondary" size="lg" className="group">
            <Users2 className="w-5 h-5 mr-2" />
            Partner With Us
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="cta" size="lg" className="group">
            <Heart className="w-5 h-5 mr-2" />
            Donate to This Program
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WorkSection;