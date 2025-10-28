import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-background shadow-soft sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-primary">INMED South Africa</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => window.location.href = '/auth'}
            >
              Login
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => window.location.href = '/auth'}
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;