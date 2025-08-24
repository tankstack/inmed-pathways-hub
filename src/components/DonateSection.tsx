import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users, Briefcase, Calendar } from "lucide-react";

const DonateSection = () => {
  const involvementOptions = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Donate",
      description: "Support our programs with one-time or monthly donations to create lasting impact in communities.",
      cta: "Donate Now",
      variant: "cta" as const,
      features: ["One-time donations", "Monthly giving options", "Secure payment gateway", "Impact reports"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Partner With Us",
      description: "Join forces as a funder, company, or institution to amplify our community development efforts.",
      cta: "Become a Partner",
      variant: "secondary" as const,
      features: ["Corporate partnerships", "Institutional funding", "Research collaboration", "Joint programs"]
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Work With Us",
      description: "Explore career opportunities and volunteer positions to directly contribute to our mission.",
      cta: "View Opportunities",
      variant: "default" as const,
      features: ["Career opportunities", "Volunteer positions", "Internship programs", "Skills-based volunteering"]
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Events & Webinars",
      description: "Join our educational events, webinars, and community gatherings to learn and connect.",
      cta: "View Events",
      variant: "outline" as const,
      features: ["Educational webinars", "Community events", "Training workshops", "Networking opportunities"]
    }
  ];

  return (
    <section id="donate" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get Involved
          </h2>
          <div className="w-24 h-1 bg-gradient-warm mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join us in building pathways to well-being and self-reliance. 
            There are many ways you can contribute to our mission and make a difference.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {involvementOptions.map((option, index) => (
            <Card key={index} className="p-8 shadow-medium hover:shadow-strong transition-all duration-300 group">
              <div className="text-center mb-6">
                <div className="flex justify-center mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
                  {option.icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {option.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {option.description}
                </p>
              </div>

              <div className="space-y-3 mb-6">
                {option.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Button variant={option.variant} size="lg" className="w-full group">
                {option.cta}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Card>
          ))}
        </div>

        {/* Impact Message */}
        <div className="mt-16 text-center bg-gradient-hero rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Your Support Creates Real Impact</h3>
          <p className="text-xl text-white/90 mb-6 max-w-3xl mx-auto">
            Every donation, partnership, and volunteer hour helps us empower more vulnerable 
            children, families, and communities to achieve lasting well-being and self-reliance.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold mb-1">R100</div>
              <div className="text-white/80">Feeds a child for a month</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-1">R500</div>
              <div className="text-white/80">Establishes a school garden</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-1">R1000</div>
              <div className="text-white/80">Trains a community leader</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;