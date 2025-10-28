import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Mail, Phone, Facebook, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <div id="contact" className="py-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch with us. We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 shadow-medium">
            <h3 className="text-2xl font-bold text-foreground mb-6">Send us a message</h3>
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your message..." rows={6} />
              </div>
              <Button variant="primary" className="w-full" size="lg">
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="p-6 shadow-medium">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">Office Location</h4>
                  <p className="text-muted-foreground">
                    123 Main Street, Cape Town<br />
                    South Africa, 8001
                  </p>
                  <Button variant="link" className="mt-2 px-0">Get Directions</Button>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-medium">
              <div className="flex items-start gap-4">
                <div className="bg-secondary/10 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">Email Us</h4>
                  <p className="text-muted-foreground">info@inmedsa.org</p>
                  <p className="text-muted-foreground text-sm mt-1">
                    Office hours: Mon-Fri, 9AM-5PM
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-medium">
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">Call Us</h4>
                  <p className="text-muted-foreground">+27 (0) 21 123 4567</p>
                </div>
              </div>
            </Card>

            {/* Social Media */}
            <Card className="p-6 shadow-medium">
              <h4 className="font-bold text-foreground mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="hover-scale">
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon" className="hover-scale">
                  <Linkedin className="w-5 h-5" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
