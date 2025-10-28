import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Heart, Users, Shield, Lightbulb, Zap } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Empowerment",
      description: "Equip. Enable. Elevate.",
      color: "text-accent"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "Partner. Share. Build.",
      color: "text-secondary"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "Create. Adapt. Advance.",
      color: "text-primary"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Integrity",
      description: "Honest. Transparent. Fair.",
      color: "text-success"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Inclusion",
      description: "Listen. Value. Respect.",
      color: "text-accent"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Resilience",
      description: "Recover. Adapt. Thrive.",
      color: "text-secondary"
    }
  ];

  return (
    <div id="about" className="py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About INMED South Africa
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
        </div>

        {/* Introduction */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">Who We Are</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              INMED South Africa is a non-profit humanitarian development organisation 
              established in 2009 to serve the needs of vulnerable children and families 
              in Southern Africa. We build effective systems that deliver innovative and 
              sustainable approaches to breaking complex cycles of poverty for current 
              and future generations.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Since our inception, we have worked closely with government, corporates, 
              tertiary institutions and local communities to implement programmes that 
              strengthen food security, health and nutrition, workforce skills and 
              community development while empowering participants to achieve well-being 
              and self-reliance.
            </p>
            <Button variant="primary" className="group">
              Learn More About Our Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="space-y-8">
            {/* Vision */}
            <Card className="p-6 shadow-medium">
              <h4 className="text-xl font-bold text-primary mb-3">Our Vision</h4>
              <p className="text-muted-foreground">
                A future where every child, family, and community thrives in health, 
                dignity, and self-reliance.
              </p>
            </Card>

            {/* Mission */}
            <Card className="p-6 shadow-medium">
              <h4 className="text-xl font-bold text-secondary mb-3">Our Mission</h4>
              <p className="text-muted-foreground">
                Building pathways that empower vulnerable children, families, and 
                communities to achieve lasting well-being and self-reliance.
              </p>
            </Card>
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">Our Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center shadow-medium hover:shadow-strong transition-all duration-300 group">
                <div className={`flex justify-center mb-4 ${value.color} group-hover:scale-110 transition-transform duration-300`}>
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-foreground mb-2">{value.title}</h4>
                <p className="text-muted-foreground font-medium">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;