import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="INMED South Africa community impact"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-white/90">
                <Heart className="w-6 h-6" />
                <span className="text-lg font-medium">Building Pathways</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Together, let's build pathways to{" "}
                <span className="text-accent">well-being</span> and{" "}
                <span className="text-secondary">self-reliance</span>
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto lg:mx-0">
                For every child and family in Southern Africa. Empowering vulnerable communities 
                through innovative programs that break cycles of poverty.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="cta" size="lg" className="group">
                Donate Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Partner with Us
                <Users className="w-5 h-5" />
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-col sm:flex-row gap-8 pt-8 border-t border-white/20">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-white">15+</div>
                <div className="text-white/80">Years of Impact</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-white">1000+</div>
                <div className="text-white/80">Families Supported</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-white/80">Communities Reached</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;