import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { OptimizedImage } from "@/components/ui/optimized-image";

export default function HomePage() {
  return (
    <div>
      {/* 英雄区域 - 更现代的设计 */}
      <div className="relative h-[90vh] flex items-center justify-center group">
        <OptimizedImage
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb"
          alt="豪华酒店外观"
          fill
          priority
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        <div className="relative text-center text-white space-y-8 max-w-4xl px-4 animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tighter">
            尽享奢华体验
            <span className="block mt-3 text-4xl md:text-6xl text-primary-foreground/90">成就完美假期</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto font-light">
            在我们的豪华酒店体验无与伦比的舒适与优雅，让每一刻都值得铭记
          </p>
          <div className="flex gap-6 justify-center">
            <Button 
              size="lg" 
              className="text-lg px-8 rounded-full hover:scale-105 transition-transform bg-white text-black hover:bg-white/90" 
              asChild
            >
              <Link href="/booking">立即预订</Link>
            </Button>
            <Button 
              size="lg" 
              className="text-lg px-8 rounded-full hover:scale-105 transition-transform bg-white text-black hover:bg-white/90"
              asChild
            >
              <Link href="/virtual-tour">虚拟导览</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* 尊享服务 - 更现代的设计 */}
      <div className="container mx-auto px-4 py-32">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
          尊享服务
          <span className="block text-xl font-normal text-muted-foreground mt-6">
            为您打造独特的入住体验
          </span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 尊贵客房 */}
          <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 border-none bg-gradient-to-br from-background/80 to-background/30 backdrop-blur">
            <CardContent className="p-8">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full -ml-16 -mb-16" />
              
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <span className="text-4xl">🌟</span>
                </div>
                
                <h3 className="text-2xl font-semibold mb-4">尊贵客房</h3>
                <p className="text-muted-foreground text-lg mb-6">
                  精心打造的豪华客房与套房，为您带来舒适尊贵的住宿体验
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-3">✓</span>
                    特大号定制床垫
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-3">✓</span>
                    高层景观视野
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-3">✓</span>
                    24小时管家服务
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 精致美食 */}
          <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 border-none bg-gradient-to-br from-background/80 to-background/30 backdrop-blur">
            <CardContent className="p-8">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full -ml-16 -mb-16" />
              
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <span className="text-4xl">🍽️</span>
                </div>
                
                <h3 className="text-2xl font-semibold mb-4">精致美食</h3>
                <p className="text-muted-foreground text-lg mb-6">
                  多家特色餐厅，为您呈现环球美食与本地特色佳肴
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-3">✓</span>
                    米其林星级主厨
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-3">✓</span>
                    特色主题餐厅
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-3">✓</span>
                    24小时客房服务
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 休闲养生 */}
          <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 border-none bg-gradient-to-br from-background/80 to-background/30 backdrop-blur">
            <CardContent className="p-8">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full -ml-16 -mb-16" />
              
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <span className="text-4xl">💆</span>
                </div>
                
                <h3 className="text-2xl font-semibold mb-4">休闲养生</h3>
                <p className="text-muted-foreground text-lg mb-6">
                  高端SPA与健身中心，让您在旅途中享受身心放松
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-3">✓</span>
                    专业SPA护理
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-3">✓</span>
                    无边际泳池
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-3">✓</span>
                    瑜伽冥想课程
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* 客房展示 - 更现代的卡片设计 */}
      <div className="bg-muted/30 py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
            精选客房
            <span className="block text-xl font-normal text-muted-foreground mt-6">
              为您精选种舒适住宿选择
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 豪华客房 */}
            <Card className="group relative overflow-hidden border-none bg-background/50 backdrop-blur hover:shadow-2xl transition-all duration-500">
              <CardContent className="p-0">
                <div className="relative h-[400px] overflow-hidden">
                  <OptimizedImage
                    src="https://images.unsplash.com/photo-1590490360182-c33d57733427"
                    alt="豪华客房"
                    fill
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* 价格标签 */}
                  <div className="absolute top-6 right-6 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-sm font-medium">￥2,999 起</span>
                  </div>
                  
                  {/* 房型信息 - 悬停时显示 */}
                  <div className="absolute inset-x-0 bottom-0 p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="space-y-2 text-white">
                      <h3 className="text-2xl font-semibold">豪华客房</h3>
                      <p className="text-white/90">40平米宽敞空间，尽享城市美景</p>
                      <div className="pt-4 flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">特大床</span>
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">城市景观</span>
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">高层</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* 底部操作区 */}
                <div className="p-6 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Button variant="outline" size="icon" className="rounded-full">
                      <span className="sr-only">查看详情</span>
                      <span className="text-xl">👁️</span>
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <span className="sr-only">收藏</span>
                      <span className="text-xl">❤️</span>
                    </Button>
                  </div>
                  <Button 
                    className="rounded-full px-6" 
                    asChild
                  >
                    <Link href="/rooms/deluxe">立即预订</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* 行政套房 */}
            <Card className="group relative overflow-hidden border-none bg-background/50 backdrop-blur hover:shadow-2xl transition-all duration-500">
              <CardContent className="p-0">
                <div className="relative h-[400px] overflow-hidden">
                  <OptimizedImage
                    src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b"
                    alt="行政套房"
                    fill
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* 价格标签 */}
                  <div className="absolute top-6 right-6 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-sm font-medium">￥4,999 起</span>
                  </div>
                  
                  {/* 房型信息 - 悬停时显示 */}
                  <div className="absolute inset-x-0 bottom-0 p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="space-y-2 text-white">
                      <h3 className="text-2xl font-semibold">行政套房</h3>
                      <p className="text-white/90">65平米奢华空间，独立会客厅</p>
                      <div className="pt-4 flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">海景</span>
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">管家服务</span>
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">行政礼遇</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* 底部操作区 */}
                <div className="p-6 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Button variant="outline" size="icon" className="rounded-full">
                      <span className="sr-only">查看详情</span>
                      <span className="text-xl">👁️</span>
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <span className="sr-only">收藏</span>
                      <span className="text-xl">❤️</span>
                    </Button>
                  </div>
                  <Button 
                    className="rounded-full px-6" 
                    asChild
                  >
                    <Link href="/rooms/suite">立即预订</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* 总统套房 */}
            <Card className="group relative overflow-hidden border-none bg-background/50 backdrop-blur hover:shadow-2xl transition-all duration-500">
              <CardContent className="p-0">
                <div className="relative h-[400px] overflow-hidden">
                  <OptimizedImage
                    src="https://images.unsplash.com/photo-1618773928121-c32242e63f39"
                    alt="总统套房"
                    fill
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* 价格标签 */}
                  <div className="absolute top-6 right-6 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-sm font-medium">￥9,999 起</span>
                  </div>
                  
                  {/* 房型信息 - 悬停时显示 */}
                  <div className="absolute inset-x-0 bottom-0 p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="space-y-2 text-white">
                      <h3 className="text-2xl font-semibold">总统套房</h3>
                      <p className="text-white/90">120平米极致奢华，专属管家服务</p>
                      <div className="pt-4 flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">全海景</span>
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">私人管家</span>
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">专车接送</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* 底部操作区 */}
                <div className="p-6 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Button variant="outline" size="icon" className="rounded-full">
                      <span className="sr-only">查看详情</span>
                      <span className="text-xl">👁️</span>
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <span className="sr-only">收藏</span>
                      <span className="text-xl">❤️</span>
                    </Button>
                  </div>
                  <Button 
                    className="rounded-full px-6" 
                    asChild
                  >
                    <Link href="/rooms/presidential">立即预订</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}