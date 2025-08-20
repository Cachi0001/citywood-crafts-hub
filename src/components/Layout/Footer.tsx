import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Smartphone
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 wood-gradient rounded-lg flex items-center justify-center text-white font-bold text-xl">
                C
              </div>
              <div>
                <h3 className="text-xl font-bold">Citywood</h3>
                <p className="text-sm text-primary-foreground/80">Premium Tools & Furniture</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Your trusted partner for premium woodworking tools, furniture fittings, 
              and quality boards since 1995.
            </p>
            <div className="flex gap-3">
              <Button size="icon" variant="ghost" className="text-primary-foreground hover:bg-white/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-primary-foreground hover:bg-white/10">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-primary-foreground hover:bg-white/10">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                "Power Tools",
                "Furniture Fittings", 
                "Premium Boards",
                "Hand Tools",
                "Factory Request",
                "Bulk Orders"
              ].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-primary-foreground/80 hover:text-white transition-smooth"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Customer Service</h4>
            <ul className="space-y-3">
              {[
                "About Us",
                "Contact Us",
                "Privacy Policy",
                "Terms & Conditions",
                "Shipping Info",
                "Returns & Exchanges"
              ].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-primary-foreground/80 hover:text-white transition-smooth"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Get In Touch</h4>
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary-foreground/60" />
                <span className="text-primary-foreground/80 text-sm">
                  123 Craft Street, Workshop District, Lagos, Nigeria
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary-foreground/60" />
                <span className="text-primary-foreground/80 text-sm">
                  +234 (0) 123 456 7890
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary-foreground/60" />
                <span className="text-primary-foreground/80 text-sm">
                  support@citywood.com
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary-foreground/60" />
                <span className="text-primary-foreground/80 text-sm">
                  Mon-Sat: 8AM-6PM
                </span>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h5 className="font-medium mb-3">Newsletter</h5>
              <div className="flex gap-2">
                <Input
                  placeholder="Your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
                <Button className="wood-gradient hover:opacity-90 transition-smooth">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/80 text-sm">
            © 2025 Citywood. All rights reserved. | Developed with ❤️ by{" "}
            <a 
              href="https://wa.me/2348158025887" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-smooth"
            >
              Caleb
            </a>
          </p>
          <div className="flex items-center gap-4">
            <span className="text-primary-foreground/60 text-sm">Secure payments with:</span>
            <div className="flex gap-2">
              {["Paystack", "Visa", "Mastercard"].map((payment) => (
                <div 
                  key={payment}
                  className="bg-white/10 px-3 py-1 rounded text-xs font-medium"
                >
                  {payment}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};