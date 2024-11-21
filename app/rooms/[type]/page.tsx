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
import Link from "next/link";
import { notFound } from "next/navigation";

const roomsData = {
  deluxe: {
    name: "豪华客房",
    description: "在我们宽敞的豪华客房体验奢华享受",
    price: "2,999",
    size: "40㎡",
    bedType: "特大号定制床",
    maxGuests: "2人",
    view: "城市景观",
    images: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    ],
    amenities: [
      { icon: "🛏️", name: "豪华寝具" },
      { icon: "🖥️", name: "65寸智能电视" },
      { icon: "☕", name: "Nespresso咖啡机" },
      { icon: "🛁", name: "独立浴缸" },
      { icon: "🚿", name: "雨林花洒" },
      { icon: "👔", name: "熨衣服务" },
      { icon: "🧴", name: "高端洗护用品" },
      { icon: "📶", name: "高速WiFi" },
    ],
    highlights: [
      "位于酒店高层，享有绝佳城市景观",
      "配备高端定制家具和设施",
      "24小时客房服务",
      "免费享用行政酒廊",
    ],
  },
  suite: {
    name: "行政套房",
    description: "尽情享受我们行政套房的奢华体验",
    price: "4,999",
    size: "65㎡",
    bedType: "特大号定制床",
    maxGuests: "2-3人",
    view: "海景",
    images: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a",
    ],
    amenities: [
      { icon: "🛋️", name: "独立客厅" },
      { icon: "🛏️", name: "豪华寝具" },
      { icon: "🖥️", name: "75寸OLED电视" },
      { icon: "☕", name: "全自动咖啡机" },
      { icon: "🛁", name: "独立浴缸" },
      { icon: "🚿", name: "智能马桶" },
      { icon: "👔", name: "管家服务" },
      { icon: "🥂", name: "迷你吧台" },
    ],
    highlights: [
      "独立会客厅和餐饮区",
      "专属管家服务",
      "免费机场接送",
      "行政酒廊特权",
    ],
  },
};

export default function RoomDetailPage({ params }: { params: { type: string } }) {
  const room = roomsData[params.type as keyof typeof roomsData];

  if (!room) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-20">
      {/* 头部区域 */}
      <div className="relative h-[60vh]">
        <Carousel className="h-full">
          <CarouselContent>
            {room.images.map((image, index) => (
              <CarouselItem key={index} className="h-full">
                <div className="relative h-full">
                  <OptimizedImage
                    src={image}
                    alt={`${room.name} - 图片 ${index + 1}`}
                    fill
                    priority={index === 0}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>

        {/* 房型信息悬浮卡片 */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <Card className="max-w-2xl bg-background/80 backdrop-blur-lg border-none">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h1 className="text-3xl font-bold mb-2">{room.name}</h1>
                    <p className="text-muted-foreground">{room.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">￥{room.price}</div>
                    <div className="text-sm text-muted-foreground">每晚起</div>
                  </div>
                </div>
                <div className="flex gap-4 text-sm">
                  <span className="flex items-center gap-1">
                    <span className="text-primary">📏</span> {room.size}
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="text-primary">👥</span> {room.maxGuests}
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="text-primary">🏞️</span> {room.view}
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* 主要内容区 */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* 左侧详情 */}
          <div className="lg:col-span-2 space-y-12">
            {/* 房间亮点 */}
            <section>
              <h2 className="text-2xl font-semibold mb-6">房间亮点</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {room.highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted/80 transition-colors"
                  >
                    <span className="text-primary">✨</span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* 设施与服务 */}
            <section>
              <h2 className="text-2xl font-semibold mb-6">设施与服务</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {room.amenities.map((amenity, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center p-4 rounded-lg bg-muted/50 hover:bg-muted/80 transition-colors"
                  >
                    <span className="text-2xl mb-2">{amenity.icon}</span>
                    <span className="text-sm">{amenity.name}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* 右侧预订卡片 */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 border-none bg-muted/50 backdrop-blur">
              <CardContent className="p-6 space-y-6">
                <div className="text-center pb-6 border-b">
                  <div className="text-3xl font-bold mb-2">￥{room.price}</div>
                  <div className="text-sm text-muted-foreground">每晚起</div>
                </div>

                <div className="space-y-4">
                  <Button className="w-full rounded-full" size="lg" asChild>
                    <Link href={`/booking?room=${params.type}`}>立即预订</Link>
                  </Button>
                  <Button variant="outline" className="w-full rounded-full" size="lg">
                    加入收藏
                  </Button>
                </div>

                <div className="text-sm text-muted-foreground space-y-2">
                  <p>• 免费取消（提前24小时）</p>
                  <p>• 入住即可享受会员积分</p>
                  <p>• 预付款可享受额外优惠</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
} 