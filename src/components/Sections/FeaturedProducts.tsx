import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart, Star } from "lucide-react";

const featuredProducts = [
  {
    id: 1,
    name: "Professional Circular Saw",
    price: 299.99,
    originalPrice: 349.99,
    rating: 4.8,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1583743089695-4b816a340f82?w=400&h=300&fit=crop",
    badge: "Best Seller",
    badgeColor: "bg-accent"
  },
  {
    id: 2,
    name: "Premium Wood Board Set",
    price: 189.99,
    originalPrice: null,
    rating: 4.9,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
    badge: "Premium",
    badgeColor: "bg-wood-primary"
  },
  {
    id: 3,
    name: "Heavy Duty Drill Set",
    price: 159.99,
    originalPrice: 199.99,
    rating: 4.7,
    reviews: 76,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    badge: "Sale",
    badgeColor: "bg-destructive"
  },
  {
    id: 4,
    name: "Cabinet Hardware Kit",
    price: 89.99,
    originalPrice: null,
    rating: 4.6,
    reviews: 152,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
    badge: "New",
    badgeColor: "bg-steel-blue"
  }
];

export const FeaturedProducts = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured <span className="cinematic-text">Products</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular tools and equipment, trusted by professionals
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Card 
              key={product.id}
              className="group hover-lift cursor-pointer border-border/50 overflow-hidden bg-card"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
                />
                <Badge 
                  className={`absolute top-3 left-3 ${product.badgeColor} text-white border-0`}
                >
                  {product.badge}
                </Badge>
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-0"
                >
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating)
                          ? "text-accent fill-current"
                          : "text-muted-foreground/30"
                      }`}
                    />
                  ))}
                  <span className="text-sm text-muted-foreground ml-1">
                    ({product.reviews})
                  </span>
                </div>
                
                <h3 className="font-semibold text-foreground mb-3 group-hover:text-primary transition-smooth">
                  {product.name}
                </h3>
                
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl font-bold text-foreground">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
                
                <Button className="w-full wood-gradient hover:opacity-90 transition-smooth group">
                  <ShoppingCart className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="hover-lift">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};