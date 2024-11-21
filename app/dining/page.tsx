import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { OptimizedImage } from "@/components/ui/optimized-image";

const restaurants = [
  {
    id: "restaurant",
    name: "豪华主餐厅",
    description: "体验米其林星级主厨精心打造的环球美食",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    hours: "06:30 - 22:30",
    type: "环球美食",
    features: ["米其林星级主厨", "开放式厨房", "城市景观"],
  },
  {
    id: "chinese",
    name: "江南府",
    description: "精致淮扬菜，演绎东方美食艺术",
    image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c",
    hours: "11:30 - 14:30, 17:30 - 22:00",
    type: "中式餐厅",
    features: ["淮扬名厨", "私密包厢", "茶艺体验"],
  },
  {
    id: "bar",
    name: "云端酒吧",
    description: "臻选美酒，尽享城市夜景",
    image: "https://images.unsplash.com/photo-1560624052-449f5ddf0c31",
    hours: "17:00 - 01:00",
    type: "酒吧",
    features: ["调酒师团队", "露台座位", "现场音乐"],
  },
];

export default function DiningPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* 头部区域 */}
      <div className="relative h-[50vh] flex items-center justify-center">
        <OptimizedImage
          src="https://images.unsplash.com/photo-1514933651103-005eec06c04b"
          alt="餐饮服务"
          fill
          priority
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />
        <div className="relative text-center text-white space-y-6 px-4 animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
            臻享美馔
            <span className="block text-2xl md:text-3xl font-light mt-4 text-white/90">
              探索舌尖上的奢华体验
            </span>
          </h1>
        </div>
      </div>

      {/* 餐厅列表 */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-16">
          {restaurants.map((restaurant, index) => (
            <Card 
              key={restaurant.id}
              className="overflow-hidden border-none bg-background/50 backdrop-blur hover:shadow-xl transition-all duration-500"
            >
              <CardContent className="p-0">
                <div className={`grid md:grid-cols-2 gap-0 ${
                  index % 2 === 1 ? 'md:grid-flow-dense' : ''
                }`}>
                  {/* 图片区域 */}
                  <div className="relative h-[300px] md:h-[500px] overflow-hidden">
                    <OptimizedImage
                      src={restaurant.image}
                      alt={restaurant.name}
                      fill
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  
                  {/* 内容区域 */}
                  <div className="p-8 md:p-12 flex flex-col justify-center space-y-6">
                    <div className="space-y-4">
                      <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm">
                        {restaurant.type}
                      </div>
                      <h2 className="text-3xl font-bold">{restaurant.name}</h2>
                      <p className="text-lg text-muted-foreground">
                        {restaurant.description}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="text-primary">🕒</span>
                        营业时间：{restaurant.hours}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {restaurant.features.map((feature, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 rounded-full bg-muted text-sm"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4 pt-4">
                      <Button 
                        className="rounded-full" 
                        asChild
                      >
                        <Link href={`/dining/${restaurant.id}`}>
                          了解更多
                        </Link>
                      </Button>
                      <Button 
                        variant="outline" 
                        className="rounded-full"
                        asChild
                      >
                        <Link href="/booking">
                          在线预订
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 特色服务 */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold mb-16">
            特色服务
            <span className="block text-xl font-normal text-muted-foreground mt-4">
              为您打造专属用餐体验
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none bg-muted/50 backdrop-blur hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">👨‍🍳</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">私人定制</h3>
                <p className="text-muted-foreground">
                  专属主厨为您量身定制独特的美食体验
                </p>
              </CardContent>
            </Card>

            <Card className="border-none bg-muted/50 backdrop-blur hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🍷</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">品酒会</h3>
                <p className="text-muted-foreground">
                  定期举办美酒品鉴，邀您共享美酒佳肴
                </p>
              </CardContent>
            </Card>

            <Card className="border-none bg-muted/50 backdrop-blur hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🎵</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">现场音乐</h3>
                <p className="text-muted-foreground">
                  精选现场音乐演出，营造完美用餐氛围
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
} 