import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { OptimizedImage } from "@/components/ui/optimized-image";

const tourSpots = [
  {
    title: "豪华大堂",
    description: "气势恢宏的大堂设计，彰显非凡品味",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a",
    features: ["24小时礼宾服务", "艺术装置展示", "休息区"],
  },
  {
    title: "无边际泳池",
    description: "俯瞰城市天际线的绝美泳池",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    features: ["恒温控制", "池畔服务", "日光浴区"],
  },
  {
    title: "空中酒吧",
    description: "品味美酒，尽享城市夜景",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427",
    features: ["特色鸡尾酒", "现场音乐", "私密包厢"],
  },
];

export default function VirtualTourPage() {
  return (
    <div className="min-h-screen">
      {/* 头部区域 */}
      <div className="relative h-[50vh] flex items-center justify-center">
        <OptimizedImage
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb"
          alt="Virtual Tour"
          fill
          priority
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />
        <div className="relative text-center text-white space-y-6 px-4 animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
            虚拟导览
            <span className="block text-2xl md:text-3xl font-light mt-4 text-white/90">
              足不出户，体验我们酒店的奢华空间
            </span>
          </h1>
        </div>
      </div>

      {/* 导览内容 */}
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
          <Carousel className="relative">
            <CarouselContent>
              {tourSpots.map((spot, index) => (
                <CarouselItem key={index}>
                  <Card className="overflow-hidden border-none bg-background/50 backdrop-blur">
                    <CardContent className="p-0">
                      <div className="grid md:grid-cols-2 gap-0">
                        {/* 图片区域 */}
                        <div className="relative h-[300px] md:h-[500px] overflow-hidden group">
                          <OptimizedImage
                            src={spot.image}
                            alt={spot.title}
                            fill
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                        
                        {/* 内容区域 */}
                        <div className="p-8 md:p-12 flex flex-col justify-center space-y-6">
                          <div>
                            <h3 className="text-3xl font-semibold mb-4">{spot.title}</h3>
                            <p className="text-lg text-muted-foreground">{spot.description}</p>
                          </div>
                          
                          <div className="space-y-4">
                            <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                              特色服务
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {spot.features.map((feature, i) => (
                                <span
                                  key={i}
                                  className="px-3 py-1 bg-primary/10 rounded-full text-sm"
                                >
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          <Button 
                            className="w-full md:w-auto rounded-full"
                            asChild
                          >
                            <a href="#" target="_blank" rel="noopener noreferrer">
                              360° 全景体验
                            </a>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2" />
          </Carousel>
          
          {/* 导览提示 */}
          <div className="mt-12 text-center text-muted-foreground">
            <p className="text-sm">
              左右滑动或使用箭头按钮浏览更多空间
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 