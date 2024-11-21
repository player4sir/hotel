import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { notFound } from "next/navigation";

const serviceData = {
  massage: {
    name: "Luxury Massage",
    description: "Indulge in our signature massage treatments designed to relax and rejuvenate.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874",
    duration: "60-90 min",
    price: "from $150",
    treatments: [
      {
        name: "Swedish Massage",
        duration: "60 min",
        price: "150",
        description: "Classic relaxation massage using long, flowing strokes",
      },
      {
        name: "Deep Tissue Massage",
        duration: "90 min",
        price: "180",
        description: "Intensive massage targeting deep muscle tension",
      },
      {
        name: "Hot Stone Therapy",
        duration: "90 min",
        price: "200",
        description: "Therapeutic massage using heated volcanic stones",
      },
    ],
  },
  facial: {
    name: "Facial Treatments",
    description: "Expert skincare treatments using premium products for radiant results.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881",
    duration: "45-60 min",
    price: "from $120",
    treatments: [
      {
        name: "Anti-Aging Facial",
        duration: "60 min",
        price: "150",
        description: "Advanced treatment to reduce fine lines and wrinkles",
      },
      {
        name: "Hydrating Facial",
        duration: "45 min",
        price: "120",
        description: "Deep hydration for dry or tired skin",
      },
      {
        name: "Deep Cleansing Facial",
        duration: "60 min",
        price: "130",
        description: "Thorough cleansing and purification treatment",
      },
    ],
  },
};

export default function ServicePage({ params }: { params: { service: string } }) {
  const service = serviceData[params.service as keyof typeof serviceData];

  if (!service) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="relative aspect-[21/9] mb-8">
          <img
            src={service.image}
            alt={service.name}
            className="object-cover w-full h-full rounded-lg"
          />
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">{service.name}</h1>
          <p className="text-muted-foreground">{service.description}</p>
        </div>

        <div className="grid gap-6">
          {service.treatments.map((treatment, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{treatment.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {treatment.duration}
                    </p>
                  </div>
                  <p className="font-semibold">${treatment.price}</p>
                </div>
                <p className="text-muted-foreground">{treatment.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Button asChild size="lg">
            <Link href="/booking">Book Treatment</Link>
          </Button>
        </div>
      </div>
    </div>
  );
} 