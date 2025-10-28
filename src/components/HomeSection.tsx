import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HomeSection = () => {
  return (
    <div id="home" className="py-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Banner */}
        <div className="relative rounded-2xl overflow-hidden mb-16 h-[400px]">
          <img 
            src={heroImage}
            alt="INMED South Africa Impact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 flex items-center">
            <div className="max-w-3xl mx-auto px-8 text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                Building Pathways to Well-Being
              </h1>
              <p className="text-xl md:text-2xl mb-8 animate-fade-in">
                Empowering vulnerable children, families, and communities across Southern Africa
              </p>
              <div className="flex gap-4 justify-center flex-wrap animate-fade-in">
                <Button variant="hero" size="lg">
                  Donate Now
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg" className="bg-white/10 text-white border-white hover:bg-white hover:text-primary">
                  Get Involved
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Short Intro */}
          <Card className="lg:col-span-2 p-8 shadow-medium">
            <h2 className="text-3xl font-bold text-foreground mb-6">Who We Are</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              INMED South Africa is a non-profit humanitarian development organisation 
              established in 2009 to serve vulnerable children and families in Southern Africa.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We build effective systems that deliver innovative and sustainable approaches 
              to breaking complex cycles of poverty for current and future generations.
            </p>
            <Button variant="primary" className="group">
              Learn More About Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Card>

          {/* Mini Events Calendar */}
          <Card className="p-6 shadow-medium">
            <div className="flex items-center gap-2 mb-6">
              <Calendar className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-bold text-foreground">Upcoming Events</h3>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4 py-2">
                <p className="font-semibold text-foreground">Community Workshop</p>
                <p className="text-sm text-muted-foreground">March 15, 2025</p>
              </div>
              <div className="border-l-4 border-secondary pl-4 py-2">
                <p className="font-semibold text-foreground">Nutrition Training</p>
                <p className="text-sm text-muted-foreground">March 22, 2025</p>
              </div>
              <div className="border-l-4 border-accent pl-4 py-2">
                <p className="font-semibold text-foreground">Annual Fundraiser</p>
                <p className="text-sm text-muted-foreground">April 5, 2025</p>
              </div>
            </div>
            <Button variant="link" className="w-full mt-4">View All Events</Button>
          </Card>
        </div>

        {/* Featured Story */}
        <Card className="p-8 mb-16 shadow-medium bg-gradient-to-br from-secondary/5 to-accent/5">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-foreground mb-4">Featured Project</h2>
            <div className="w-24 h-1 bg-gradient-secondary mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                School Garden Initiative: Growing Hope
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our adaptive agriculture program has established 500+ school gardens, 
                providing fresh produce and nutrition education to over 10,000 children 
                across Eastern Cape communities.
              </p>
              <Button variant="secondary" className="group">
                Read Full Story
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="bg-muted rounded-lg aspect-video flex items-center justify-center">
              <MapPin className="w-16 h-16 text-muted-foreground" />
            </div>
          </div>
        </Card>

        {/* Newsletter Signup */}
        <Card className="p-8 shadow-medium text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">Stay Updated</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest updates, stories, and impact from our programs.
          </p>
          <div className="flex gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1"
            />
            <Button variant="primary">Subscribe</Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default HomeSection;
