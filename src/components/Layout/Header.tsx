import { useState } from "react";
import { Search, Heart, Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CartSheet } from "@/components/ui/cart-sheet";
import { AuthSheet } from "@/components/ui/auth-sheet";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-card shadow-elegant border-b border-border sticky top-0 z-50">
      {/* Top bar with contact info */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Phone className="h-4 w-4" />
              <span>+234 (0) 123 456 7890</span>
            </div>
            <span className="hidden md:block">support@citywood.com</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:block">Free Shipping on Orders ₦200,000+</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 wood-gradient rounded-lg flex items-center justify-center text-white font-bold text-xl">
              C
            </div>
            <div>
              <h1 className="text-2xl font-bold text-primary">Citywood</h1>
              <p className="text-xs text-muted-foreground">Premium Tools & Furniture</p>
            </div>
          </div>

          {/* Search bar */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search for tools, furniture, boards..."
                className="pl-10 pr-4 h-12 border-border focus:ring-2 focus:ring-primary/20"
              />
              <Button className="absolute right-1 top-1 h-10 px-6 wood-gradient hover:opacity-90 transition-smooth">
                Search
              </Button>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hover-lift">
              <Heart className="h-5 w-5" />
            </Button>
            <CartSheet />
            <AuthSheet />
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile search */}
        <div className="md:hidden mt-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search products..."
              className="pl-10 pr-4 h-12"
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center justify-center mt-4 gap-8">
          <a href="/" className="text-foreground hover:text-primary transition-smooth font-medium">
            Home
          </a>
          <a href="/tools" className="text-foreground hover:text-primary transition-smooth font-medium">
            Power Tools
          </a>
          <a href="/furniture" className="text-foreground hover:text-primary transition-smooth font-medium">
            Furniture Fittings
          </a>
          <a href="/boards" className="text-foreground hover:text-primary transition-smooth font-medium">
            Boards
          </a>
          <a href="/accessories" className="text-foreground hover:text-primary transition-smooth font-medium">
            Accessories
          </a>
          <a href="/factory-request" className="text-foreground hover:text-primary transition-smooth font-medium">
            Factory Request
          </a>
        </nav>
      </div>
    </header>
  );
};