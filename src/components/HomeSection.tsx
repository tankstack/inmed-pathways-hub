import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Heart, Users, BookOpen, Mail, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HomeSection = () => {
  return (
    <div id="home" className="py-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Banner */}
        <div className="relative rounded-2xl overflow-hidden mb-16 h-[500px]">
          <img 
            src={heroImage}
            alt="INMED South Africa - Building Pathways to Well-Being"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 flex items-center">
            <div className="max-w-4xl mx-auto px-8 text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                Building Pathways to Well-Being
              </h1>
              <p className="text-xl md:text-2xl mb-8 animate-fade-in">
                Empowering vulnerable children, families, and communities to achieve lasting well-being and self-reliance.
              </p>
              <div className="flex gap-4 justify-center flex-wrap animate-fade-in">
                <Button variant="hero" size="lg" className="group">
                  <Heart className="w-5 h-5 mr-2" />
                  Donate Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" className="bg-white/10 text-white border-white hover:bg-white hover:text-primary">
                  <Users className="w-5 h-5 mr-2" />
                  Get Involved
                </Button>
                <Button variant="outline" size="lg" className="bg-white/10 text-white border-white hover:bg-white hover:text-primary">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Learn More
                </Button>
                <Button variant="outline" size="lg" className="bg-white/10 text-white border-white hover:bg-white hover:text-primary">
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Short Intro */}
        <Card className="p-8 mb-16 shadow-medium">
          <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Who We Are</h2>
          <div className="w-24 h-1 bg-gradient-warm mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4 max-w-4xl mx-auto text-center">
            INMED South Africa is a non-profit humanitarian development organisation established in 2009 
            to serve vulnerable children and families in Southern Africa.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto text-center">
            We build effective systems that deliver innovative and sustainable approaches to breaking 
            complex cycles of poverty for current and future generations.
          </p>
        </Card>

        {/* Latest Project / Featured Story */}
        <Card className="p-8 mb-16 shadow-medium bg-gradient-to-br from-secondary/5 to-accent/5">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Featured Project</h2>
            <div className="w-24 h-1 bg-gradient-secondary mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                School Garden Initiative: Growing Hope & Nutrition
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our adaptive agriculture program has established over 500 school gardens, providing 
                fresh produce and nutrition education to more than 10,000 children across Eastern 
                Cape communities. This initiative not only addresses food security but also teaches 
                sustainable farming practices and healthy eating habits.
              </p>
              <Button variant="secondary" className="group">
                Read Full Story
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="bg-muted rounded-lg aspect-video flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground font-semibold">[Project Image Placeholder]</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Partner Logos */}
        <Card className="p-8 mb-16 shadow-medium">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">Our Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-muted rounded-lg aspect-video flex items-center justify-center">
                <p className="text-muted-foreground text-sm font-semibold">[Partner Logo {i}]</p>
              </div>
            ))}
          </div>
        </Card>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Maps Placeholder */}
          <Card className="p-8 shadow-medium">
            <div className="flex items-center gap-2 mb-6">
              <MapPin className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Maps</h3>
            </div>
            <div className="bg-muted rounded-lg aspect-video flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground font-semibold">Interactive Map Integration</p>
                <p className="text-sm text-muted-foreground mt-2">Project areas will be displayed here</p>
              </div>
            </div>
          </Card>

          {/* Newsletter Signup */}
          <Card className="p-8 shadow-medium">
            <h3 className="text-2xl font-bold text-foreground mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter for the latest updates, stories, and impact from our programs.
            </p>
            <div className="space-y-4">
              <Input 
                type="email" 
                placeholder="Enter your email address" 
              />
              <Button variant="primary" className="w-full">
                <Mail className="w-4 h-4 mr-2" />
                Subscribe to Newsletter
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
