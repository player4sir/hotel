import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import Link from "next/link";
import { OptimizedImage } from "@/components/ui/optimized-image";

const spaServices = [
  {
    id: "massage",
    name: "奢享按摩",
    description: "体验我们标志性的按摩护理，让身心完全放松",
    duration: "60-90分钟",
    price: "1,580起",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874",
    treatments: [
      {
        name: "东方臻享",
        duration: "90分钟",
        price: "1,880",
        description: "结合传统东方按摩技法，帮助身心放松，恢复活力",
      },
      {
        name: "热石疗法",
        duration: "75分钟",
        price: "1,680",
        description: "使用温热火山石，深层放松肌肉，改善血液循环",
      },
      {
        name: "香薰理疗",
        duration: "60分钟",
        price: "1,580",
        description: "精选天然香薰精油，带来身心灵的完美平衡",
      },
    ],
  },
  {
    id: "facial",
    name: "面部护理",
    description: "使用顶级护肤品牌，为您带来极致护理体验",
    duration: "45-60分钟",
    price: "1,280起",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881",
    treatments: [
      {
        name: "奢宠焕颜",
        duration: "60分钟",
        price: "1,680",
        description: "使用La Mer尊贵产品线，带来奢华护理体验",
      },
      {
        name: "紧致提升",
        duration: "60分钟",
        price: "1,580",
        description: "改善肌肤弹性，提升轮廓，恢复年轻活力",
      },
      {
        name: "深层补水",
        duration: "45分钟",
        price: "1,280",
        description: "深层补充水分，让肌肤重现润泽光彩",
      },
    ],
  },
  {
    id: "body",
    name: "身体护理",
    description: "全身护理项目，带来深层净化与焕新体验",
    duration: "60-90分钟",
    price: "1,380起",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef",
    treatments: [
      {
        name: "身体磨砂",
        duration: "60分钟",
        price: "1,380",
        description: "温和去除角质，让肌肤重现丝滑光泽",
      },
      {
        name: "海藻裹身",
        duration: "90分钟",
        price: "1,880",
        description: "使用深海海藻，帮助排毒，紧致身体线条",
      },
      {
        name: "芳香裹身",
        duration: "75分钟",
        price: "1,680",
        description: "使用精选香薰，滋养肌肤，放松身心",
      },
    ],
  },
];

export default function SpaPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* 头部区域 */}
      <div className="relative h-[50vh] flex items-center justify-center">
        <OptimizedImage
          src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874"
          alt="SPA"
          fill
          priority
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />
        <div className="relative text-center text-white space-y-6 px-4 animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
            臻享养生
            <span className="block text-2xl md:text-3xl font-light mt-4 text-white/90">
              让身心沉浸在极致放松之中
            </span>
          </h1>
        </div>
      </div>

      {/* 主要内容区 */}
      <div className="container mx-auto px-4 py-16">
        <Tabs defaultValue="massage" className="max-w-5xl mx-auto">
          <TabsList className="w-full justify-center mb-12">
            <TabsTrigger value="massage" className="text-lg px-8">按摩护理</TabsTrigger>
            <TabsTrigger value="facial" className="text-lg px-8">面部护理</TabsTrigger>
            <TabsTrigger value="body" className="text-lg px-8">身体护理</TabsTrigger>
          </TabsList>

          {spaServices.map((service) => (
            <TabsContent key={service.id} value={service.id}>
              <div className="grid lg:grid-cols-2 gap-12">
                {/* 左侧图片 */}
                <div className="relative h-[400px] lg:h-full rounded-2xl overflow-hidden">
                  <OptimizedImage
                    src={service.image}
                    alt={service.name}
                    fill
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                {/* 右侧内容 */}
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold mb-4">{service.name}</h2>
                    <p className="text-lg text-muted-foreground">{service.description}</p>
                  </div>

                  <div className="space-y-6">
                    {service.treatments.map((treatment, index) => (
                      <Card key={index} className="border-none bg-muted/50 backdrop-blur">
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h3 className="text-xl font-semibold">{treatment.name}</h3>
                              <p className="text-muted-foreground mt-2">{treatment.description}</p>
                            </div>
                            <div className="text-right">
                              <div className="text-lg font-bold">￥{treatment.price}</div>
                              <div className="text-sm text-muted-foreground">{treatment.duration}</div>
                            </div>
                          </div>
                          <Button className="w-full rounded-full" asChild>
                            <Link href="/booking?service=spa">立即预约</Link>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* 特色介绍 */}
        <div className="mt-32 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-16">
            尊享礼遇
            <span className="block text-xl font-normal text-muted-foreground mt-4">
              为您打造专属养生体验
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none bg-muted/50 backdrop-blur hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🌺</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">私密空间</h3>
                <p className="text-muted-foreground">
                  独立的护理空间，让您享受私密放松时光
                </p>
              </CardContent>
            </Card>

            <Card className="border-none bg-muted/50 backdrop-blur hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">💆</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">专业团队</h3>
                <p className="text-muted-foreground">
                  资深理疗师为您提供专业贴心的服务
                </p>
              </CardContent>
            </Card>

            <Card className="border-none bg-muted/50 backdrop-blur hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🍵</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">养生茶点</h3>
                <p className="text-muted-foreground">
                  精选养生茶饮，为您的身心注入能量
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
} 