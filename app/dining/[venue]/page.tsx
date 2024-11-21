import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { OptimizedImage } from "@/components/ui/optimized-image";
import Link from "next/link";
import { notFound } from "next/navigation";

const venueData = {
  restaurant: {
    name: "豪华主餐厅",
    description: "体验我们以本地食材精心打造的国际美食，享受顶级餐饮体验。",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    hours: "06:30 - 22:30",
    menu: {
      前菜: [
        { name: "龙虾浓汤", price: "168", description: "搭配干邑白兰地的浓郁龙虾汤" },
        { name: "生牛肉薄片", price: "188", description: "配松露油的意式生牛肉薄片" },
      ],
      主菜: [
        { name: "和牛肉眼", price: "588", description: "日本A5级和牛" },
        { name: "海鲈鱼", price: "328", description: "香煎海鲈鱼配香草柠檬" },
      ],
      甜点: [
        { name: "焦糖布蕾", price: "108", description: "经典法式香草布蕾" },
        { name: "巧克力舒芙蕾", price: "128", description: "配香草冰淇淋" },
      ],
    },
    features: [
      { icon: "👨‍🍳", name: "米其林星级主厨" },
      { icon: "🍷", name: "精选葡萄酒单" },
      { icon: "🌅", name: "城市景观" },
      { icon: "🎵", name: "现场音乐演奏" },
    ],
    atmosphere: [
      "商务宴请",
      "浪漫约会",
      "家庭聚餐",
      "休闲餐饮",
    ],
  },
  bar: {
    name: "云端酒吧",
    description: "在我们的屋顶酒吧享受精心调制的鸡尾酒，欣赏壮丽的城市全景。",
    image: "https://images.unsplash.com/photo-1560624052-449f5ddf0c31",
    hours: "16:00 - 01:00",
    menu: {
      鸡尾酒: [
        { name: "豪华曼哈顿", price: "158", description: "顶级波本威士忌配苦艾酒" },
        { name: "晚霞马天尼", price: "168", description: "金酒配柑橘和百香果" },
      ],
      小食: [
        { name: "松露薯条", price: "128", description: "配帕玛森芝士和香草" },
        { name: "海鲜拼盘", price: "458", description: "精选新鲜海鲜" },
      ],
    },
    features: [
      { icon: "🍸", name: "调酒师团队" },
      { icon: "🌃", name: "城市夜景" },
      { icon: "🎷", name: "爵士乐演出" },
      { icon: "🛋️", name: "私密卡座" },
    ],
    atmosphere: [
      "休闲社交",
      "商务洽谈",
      "浪漫约会",
      "朋友聚会",
    ],
  },
};

export default function VenuePage({ params }: { params: { venue: string } }) {
  const venue = venueData[params.venue as keyof typeof venueData];

  if (!venue) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-20">
      {/* 头部区域 */}
      <div className="relative h-[60vh]">
        <OptimizedImage
          src={venue.image}
          alt={venue.name}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        {/* 餐厅信息悬浮卡片 */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <Card className="max-w-2xl bg-background/80 backdrop-blur-lg border-none">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h1 className="text-3xl font-bold mb-2">{venue.name}</h1>
                    <p className="text-muted-foreground">{venue.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">营业时间</div>
                    <div className="font-medium">{venue.hours}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* 主要内容区 */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* 左侧菜单 */}
          <div className="lg:col-span-2 space-y-12">
            {Object.entries(venue.menu).map(([category, items]) => (
              <section key={category}>
                <h2 className="text-2xl font-semibold mb-6">{category}</h2>
                <div className="grid gap-4">
                  {items.map((item, index) => (
                    <Card key={index} className="border-none bg-muted/50 backdrop-blur hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                            <p className="text-muted-foreground">{item.description}</p>
                          </div>
                          <div className="text-xl font-bold">￥{item.price}</div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* 右侧信息 */}
          <div className="space-y-8">
            {/* 特色服务 */}
            <Card className="border-none bg-muted/50 backdrop-blur">
              <CardContent className="p-6 space-y-6">
                <h3 className="text-xl font-semibold">特色服务</h3>
                <div className="grid grid-cols-2 gap-4">
                  {venue.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <span className="text-2xl">{feature.icon}</span>
                      <span className="text-sm">{feature.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* 就餐氛围 */}
            <Card className="border-none bg-muted/50 backdrop-blur">
              <CardContent className="p-6 space-y-6">
                <h3 className="text-xl font-semibold">就餐氛围</h3>
                <div className="flex flex-wrap gap-2">
                  {venue.atmosphere.map((item, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/10 rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* 预订按钮 */}
            <Button size="lg" className="w-full rounded-full" asChild>
              <Link href="/booking">在线预订</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 