import {
  Bed,
  UtensilsCrossed,
  Wifi,
  Car,
  Waves,
  Dumbbell,
} from "lucide-react";

const features = [
  {
    name: "Luxury Rooms",
    description: "Spacious rooms with premium amenities",
    icon: Bed,
  },
  {
    name: "Fine Dining",
    description: "World-class restaurants and bars",
    icon: UtensilsCrossed,
  },
  {
    name: "Free Wi-Fi",
    description: "High-speed internet throughout",
    icon: Wifi,
  },
  {
    name: "Valet Parking",
    description: "Secure parking with valet service",
    icon: Car,
  },
  {
    name: "Swimming Pool",
    description: "Indoor and outdoor pools",
    icon: Waves,
  },
  {
    name: "Fitness Center",
    description: "State-of-the-art gym equipment",
    icon: Dumbbell,
  },
];

export default function Features() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Hotel Features</h2>
          <p className="mt-4 text-muted-foreground">
            Experience luxury with our premium amenities and services
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.name}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}