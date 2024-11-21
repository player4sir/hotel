import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { notFound } from "next/navigation";

// 定义处理项目的接口
interface Treatment {
  name: string;
  duration: string;
  price: string;
  description: string;
}

// 定义服务数据的接口
interface ServiceInfo {
  name: string;
  description: string;
  image: string;
  duration: string;
  price: string;
  treatments: Treatment[];
}

// 定义服务数据的类型
type ServiceType = 'massage' | 'facial';

// 使用类型定义服务数据
const serviceData: Record<ServiceType, ServiceInfo> = {
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

export function generateStaticParams() {
  return Object.keys(serviceData).map((service) => ({
    service,
  }));
}

interface ServicePageProps {
  params: {
    service: ServiceType;
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const { service } = params;

  // 检查服务是否存在
  if (!serviceData[service]) {
    notFound();
  }

  const serviceInfo = serviceData[service];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="relative aspect-[21/9] mb-8">
          <img
            src={serviceInfo.image}
            alt={serviceInfo.name}
            className="object-cover w-full h-full rounded-lg"
          />
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">{serviceInfo.name}</h1>
          <p className="text-muted-foreground">{serviceInfo.description}</p>
        </div>

        <div className="grid gap-6">
          {serviceInfo.treatments.map((treatment: Treatment, index: number) => (
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

export function generateMetadata({ params }: ServicePageProps) {
  const { service } = params;
  const title = service.charAt(0).toUpperCase() + service.slice(1);

  return {
    title: `${title} Treatment | Luxury Hotel Spa`,
    description: `Experience our luxurious ${title.toLowerCase()} treatment services.`,
  };
} 