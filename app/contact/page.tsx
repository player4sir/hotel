"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { OptimizedImage } from "@/components/ui/optimized-image";

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* 头部区域 */}
      <div className="relative h-[40vh] flex items-center justify-center">
        <OptimizedImage
          src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b"
          alt="Contact"
          fill
          priority
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />
        <div className="relative text-center text-white space-y-4 px-4 animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
            联系我们
            <span className="block text-2xl md:text-3xl font-light mt-4 text-white/90">
              随时为您提供帮助与支持
            </span>
          </h1>
        </div>
      </div>

      {/* 主要内容区 */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* 左侧联系信息 */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-8">与我们取得联系</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  无论您有任何问题或需求，我们的团队都将随时为您提供专业的支持和帮助。
                </p>
              </div>

              <div className="grid gap-6">
                <Card className="border-none bg-muted/50 backdrop-blur hover:shadow-lg transition-all duration-300">
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="rounded-full p-3 bg-primary/10">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">酒店地址</h3>
                      <p className="text-muted-foreground">上海市浦东新区陆家嘴环路1000号</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none bg-muted/50 backdrop-blur hover:shadow-lg transition-all duration-300">
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="rounded-full p-3 bg-primary/10">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">电话咨询</h3>
                      <p className="text-muted-foreground">+86 21 5888 8888</p>
                      <p className="text-sm text-muted-foreground mt-1">24小时服务热线</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none bg-muted/50 backdrop-blur hover:shadow-lg transition-all duration-300">
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="rounded-full p-3 bg-primary/10">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">电子邮箱</h3>
                      <p className="text-muted-foreground">contact@luxuryhotel.com</p>
                      <p className="text-sm text-muted-foreground mt-1">我们将在24小时内回复</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none bg-muted/50 backdrop-blur hover:shadow-lg transition-all duration-300">
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="rounded-full p-3 bg-primary/10">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">营业时间</h3>
                      <p className="text-muted-foreground">前台：24小时服务</p>
                      <p className="text-muted-foreground">餐厅：06:30 - 22:30</p>
                      <p className="text-muted-foreground">SPA：10:00 - 22:00</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* 右侧联系表单 */}
            <div>
              <Card className="border-none bg-muted/50 backdrop-blur">
                <CardHeader>
                  <CardTitle>在线留言</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">姓氏</Label>
                      <Input id="firstName" placeholder="请输入您的姓氏" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">名字</Label>
                      <Input id="lastName" placeholder="请输入您的名字" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">电子邮箱</Label>
                    <Input id="email" type="email" placeholder="请输入您的电子邮箱" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">手机号码</Label>
                    <Input id="phone" type="tel" placeholder="请输入您的手机号码" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">主题</Label>
                    <Input id="subject" placeholder="请输入留言主题" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">留言内容</Label>
                    <Textarea
                      id="message"
                      placeholder="请输入您的留言内容"
                      rows={4}
                    />
                  </div>
                  
                  <Button size="lg" className="w-full">
                    提交留言
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* 地图区域 */}
          <div className="mt-16">
            <Card className="border-none overflow-hidden">
              <CardContent className="p-0 h-[400px] bg-muted">
                {/* 这里可以嵌入实际的地图组件 */}
                <div className="w-full h-full bg-muted flex items-center justify-center">
                  <p className="text-muted-foreground">地图加载中...</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
} 