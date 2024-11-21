import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { OptimizedImage } from "@/components/ui/optimized-image";
import Link from "next/link";
import { notFound } from "next/navigation";

// 首先定义类型
interface MenuItem {
  name: string;
  description: string;
  price: number;
}

interface MenuCategory {
  [category: string]: MenuItem[];
}

interface Feature {
  icon: string;
  name: string;
}

interface Venue {
  name: string;
  description: string;
  type: string;
  hours: string;
  features: Feature[];  // 修改为包含 icon 和 name 的对象数组
  atmosphere: string[];
  image: string;
  menu: MenuCategory;  // 添加菜单数据
}

// 更新数据结构
const venueData: Record<string, Venue> = {
  restaurant: {
    name: "星光餐厅",
    description: "享受精致的国际美食",
    type: "国际餐厅",
    hours: "06:30 - 22:30",
    features: [
      { icon: "🍳", name: "早午餐" },
      { icon: "🍽️", name: "自助晚餐" },
      { icon: "📜", name: "单点菜单" },
      { icon: "🏰", name: "包厢服务" }
    ],
    atmosphere: ["浪漫", "优雅", "休闲"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    menu: {
      "特色推荐": [
        {
          name: "和牛牛排",
          description: "澳洲M9和牛，配季节蔬菜",
          price: 688
        },
        {
          name: "龙虾意面",
          description: "波士顿龙虾配自制意面",
          price: 368
        }
      ],
      "主菜": [
        {
          name: "烤三文鱼",
          description: "挪威三文鱼配芦笋",
          price: 268
        }
      ]
    }
  },
  lounge: {
    name: "云端酒廊",
    description: "品味精选美酒与茶点",
    type: "酒廊",
    hours: "14:00 - 00:00",
    features: [
      { icon: "🫖", name: "下午茶" },
      { icon: "🍸", name: "鸡尾酒" },
      { icon: "🍱", name: "小食" },
      { icon: "🎵", name: "现场音乐" }
    ],
    atmosphere: ["时尚", "轻松", "社交"],
    image: "https://images.unsplash.com/photo-1560624052-449f5ddf0c31",
    menu: {
      "特调鸡尾酒": [
        {
          name: "东方明珠",
          description: "伏特加基底，配以荔枝和玫瑰",
          price: 128
        }
      ],
      "下午茶": [
        {
          name: "豪华双人下午茶",
          description: "精选甜点和茶点拼盘",
          price: 488
        }
      ]
    }
  },
  chinese: {
    name: "江南府",
    description: "正宗的江南风味",
    type: "中餐厅",
    hours: "11:30 - 14:30, 17:30 - 22:00",
    features: [
      { icon: "🥟", name: "粤式点心" },
      { icon: "🍜", name: "江浙菜" },
      { icon: "🏮", name: "私人宴会" },
      { icon: "🍵", name: "茶室" }
    ],
    atmosphere: ["典雅", "传统", "精致"],
    image: "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd",
    menu: {
      "点心": [
        {
          name: "虾饺皇",
          description: "鲜虾配以竹笋",
          price: 68
        }
      ],
      "主菜": [
        {
          name: "东坡肉",
          description: "传统配方慢炖",
          price: 188
        }
      ]
    }
  }
};

type VenueType = keyof typeof venueData;

export async function generateStaticParams(): Promise<{ venue: string }[]> {
  return [
    { venue: 'restaurant' },
    { venue: 'lounge' },
    { venue: 'chinese' }
  ];
}

export default function VenuePage({ params }: { params: { venue: string } }) {
  const venue = venueData[params.venue as VenueType];

  if (!venue) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-20">
      {/* 头部区域 - 修改图片展示部分 */}
      <div className="relative h-[60vh] w-full overflow-hidden">
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
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-3">
                      {venue.type}
                    </div>
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