import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Heart, Users, Shield, Lightbulb, Zap, MapPin, FileText, TrendingUp } from "lucide-react";

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

  const teamMembers = [
    { name: "Team Member 1", role: "Executive Director" },
    { name: "Team Member 2", role: "Program Director" },
    { name: "Team Member 3", role: "Finance Manager" },
    { name: "Team Member 4", role: "Community Liaison" }
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

        {/* Mission, Vision, Values */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 shadow-medium">
            <h4 className="text-2xl font-bold text-primary mb-4">Our Vision</h4>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A future where every child, family, and community thrives in health, 
              dignity, and self-reliance.
            </p>
          </Card>

          <Card className="p-8 shadow-medium">
            <h4 className="text-2xl font-bold text-secondary mb-4">Our Mission</h4>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Building pathways that empower vulnerable children, families, and 
              communities to achieve lasting well-being and self-reliance.
            </p>
          </Card>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">Our Core Values</h3>
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

        {/* Our Team */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">Our Team</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="p-6 text-center shadow-medium hover:shadow-strong transition-all duration-300">
                <div className="bg-muted rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-16 h-16 text-muted-foreground" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">{member.name}</h4>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="primary" className="group">
              <Users className="w-5 h-5 mr-2" />
              View Our Full Team
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Where We Work */}
        <Card className="p-8 mb-16 shadow-medium">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">Where We Work</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-foreground mb-4">Provinces & Communities</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Eastern Cape - Rural communities and schools</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Western Cape - Urban and peri-urban areas</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Limpopo - Agricultural communities</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">KwaZulu-Natal - Coastal and rural regions</span>
                </li>
              </ul>
              <Button variant="secondary" className="mt-6 group">
                <MapPin className="w-5 h-5 mr-2" />
                Explore Interactive Map
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="bg-muted rounded-lg aspect-square flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="w-20 h-20 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground font-semibold text-lg">[Interactive Map Placeholder]</p>
                <p className="text-sm text-muted-foreground mt-2">Coverage areas and project locations</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Impact at a Glance */}
        <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-white mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Impact at a Glance</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <TrendingUp className="w-12 h-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-white/90">School Gardens Established</div>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-white/90">Children Reached</div>
            </div>
            <div className="text-center">
              <Heart className="w-12 h-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-white/90">Community Leaders Trained</div>
            </div>
            <div className="text-center">
              <Target className="w-12 h-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">15</div>
              <div className="text-white/90">Partner Organizations</div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Button variant="secondary" size="lg" className="group">
            <FileText className="w-5 h-5 mr-2" />
            Download Annual Report
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;