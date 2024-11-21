import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { OptimizedImage } from "@/components/ui/optimized-image";
import Link from "next/link";

const rooms = [
  {
    id: "deluxe",
    name: "豪华客房",
    description: "40平米宽敞空间，尽享城市美景",
    price: "2,999",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427",
    features: ["特大号定制床", "高层景观", "24小时管家服务", "免费行政酒廊"],
    amenities: ["高速WiFi", "65寸智能电视", "Nespresso咖啡机", "独立浴缸"],
  },
  {
    id: "suite",
    name: "行政套房",
    description: "65平米奢华空间，独立会客厅",
    price: "4,999",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    features: ["独立会客厅", "海景视野", "专属管家", "机场接送"],
    amenities: ["独立衣帽间", "75寸OLED电视", "Bose音响", "双人浴缸"],
  },
  {
    id: "presidential",
    name: "总统套房",
    description: "120平米极致奢华，专属管家服务",
    price: "9,999",
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39",
    features: ["多间套房", "全海景", "私人管家", "专车接送"],
    amenities: ["私人厨房", "会议室", "按摩浴缸", "健身器材"],
  },
];

export default function RoomsPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* 头部区域 */}
      <div className="relative h-[50vh] flex items-center justify-center">
        <OptimizedImage
          src="https://images.unsplash.com/photo-1566665797739-1674de7a421a"
          alt="Luxury Rooms"
          fill
          priority
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />
        <div className="relative text-center text-white space-y-6 px-4 animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
            臻选客房
            <span className="block text-2xl md:text-3xl font-light mt-4 text-white/90">
              为您打造完美入住体验
            </span>
          </h1>
        </div>
      </div>

      {/* 客房列表 */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-16">
          {rooms.map((room, index) => (
            <Card 
              key={room.id}
              className="group overflow-hidden border-none bg-background/50 backdrop-blur hover:shadow-2xl transition-all duration-500"
            >
              <CardContent className="p-0">
                <div className={`grid md:grid-cols-2 gap-0 ${
                  index % 2 === 1 ? 'md:grid-flow-dense' : ''
                }`}>
                  {/* 图片区域 */}
                  <div className="relative h-[400px] overflow-hidden">
                    <OptimizedImage
                      src={room.image}
                      alt={room.name}
                      fill
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* 价格标签 */}
                    <div className="absolute top-6 right-6 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="text-sm font-medium">￥{room.price} 起</span>
                    </div>
                    {/* 渐变遮罩 */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  
                  {/* 内容区域 */}
                  <div className="p-8 md:p-12 flex flex-col justify-center space-y-6">
                    <div>
                      <h2 className="text-3xl font-bold mb-4">{room.name}</h2>
                      <p className="text-lg text-muted-foreground mb-6">
                        {room.description}
                      </p>
                    </div>

                    <div className="space-y-6">
                      {/* 特色服务 */}
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
                          特色服务
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {room.features.map((feature, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-primary/10 rounded-full text-sm hover:bg-primary/20 transition-colors"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* 房间设施 */}
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
                          房间设施
                        </h3>
                        <div className="grid grid-cols-2 gap-3">
                          {room.amenities.map((amenity, i) => (
                            <div 
                              key={i}
                              className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                              <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2">✓</span>
                              {amenity}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4 pt-4">
                      <Button 
                        className="rounded-full flex-1 hover:scale-105 transition-transform" 
                        asChild
                      >
                        <Link href={`/rooms/${room.id}`}>
                          查看详情
                        </Link>
                      </Button>
                      <Button 
                        variant="outline" 
                        className="rounded-full flex-1 hover:scale-105 transition-transform"
                        asChild
                      >
                        <Link href={`/booking?room=${room.id}`}>
                          立即预订
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
} 