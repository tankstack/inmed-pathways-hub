import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, Send, Facebook, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <div id="contact" className="py-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Contact Form */}
          <Card className="p-8 shadow-medium">
            <h3 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h3>
            <form className="space-y-4">
              <Input placeholder="Your Name *" required />
              <Input type="email" placeholder="Your Email *" required />
              <Textarea placeholder="Your Message *" rows={6} required />
              <Button variant="primary" size="lg" className="w-full group">
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="p-6 shadow-medium">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Office Address</h4>
                  <p className="text-muted-foreground">[Address Placeholder]</p>
                </div>
              </div>
            </Card>
            <Card className="p-6 shadow-medium">
              <div className="flex items-start gap-4">
                <div className="bg-secondary/10 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Email</h4>
                  <p className="text-muted-foreground">[Email Placeholder]</p>
                </div>
              </div>
            </Card>
            <Card className="p-6 shadow-medium">
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Phone</h4>
                  <p className="text-muted-foreground">[Phone Placeholder]</p>
                </div>
              </div>
            </Card>
            <Card className="p-6 shadow-medium">
              <div className="flex items-start gap-4">
                <div className="bg-success/10 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-success" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Office Hours</h4>
                  <p className="text-muted-foreground">Mon-Fri: [Hours]</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Map and Social */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 shadow-medium">
            <h3 className="text-xl font-bold text-foreground mb-6">Office Location</h3>
            <div className="bg-muted rounded-lg aspect-video flex items-center justify-center mb-6">
              <MapPin className="w-16 h-16 text-muted-foreground" />
            </div>
            <Button variant="secondary" className="w-full">Get Directions</Button>
          </Card>
          <Card className="p-8 shadow-medium">
            <h3 className="text-xl font-bold text-foreground mb-6">Follow Us</h3>
            <div className="space-y-3 mb-6">
              <Button variant="outline" className="w-full justify-start" size="lg">
                <Facebook className="w-5 h-5 mr-3" />
                Facebook
              </Button>
              <Button variant="outline" className="w-full justify-start" size="lg">
                <Linkedin className="w-5 h-5 mr-3" />
                LinkedIn
              </Button>
            </div>
            <Input type="email" placeholder="Subscribe to newsletter" />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
