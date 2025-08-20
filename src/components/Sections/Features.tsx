import { Truck, Shield, Percent, Award, Clock, Headphones } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Truck,
    title: "Nationwide Shipping",
    description: "Free delivery on orders over ₦200,000. Fast, reliable shipping across the country.",
    color: "text-steel-blue"
  },
  {
    icon: Shield,
    title: "100% Security",
    description: "Secure payments with bank-grade encryption. Your data is always protected.",
    color: "text-wood-primary"
  },
  {
    icon: Percent,
    title: "Best Prices",
    description: "Competitive pricing with regular sales. Get premium quality for less.",
    color: "text-accent"
  },
  {
    icon: Award,
    title: "Quality Guarantee",
    description: "All products backed by our quality promise. Excellence in every purchase.",
    color: "text-steel-blue"
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock customer service. We're here when you need us.",
    color: "text-wood-primary"
  },
  {
    icon: Headphones,
    title: "Expert Advice",
    description: "Professional guidance from our tool experts. Make informed decisions.",
    color: "text-accent"
  }
];

export const Features = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose <span className="cinematic-text">Citywood</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the difference with our premium service and quality commitment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="hover-wood group cursor-pointer border-border/50 bg-card/80 backdrop-blur-sm"
            >
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center group-hover:scale-110 transition-bounce`}>
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};