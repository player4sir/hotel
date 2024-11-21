"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { OptimizedImage } from "@/components/ui/optimized-image";

export default function BookingPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="min-h-screen pt-20">
      {/* 头部区域 */}
      <div className="relative h-[40vh] flex items-center justify-center">
        <OptimizedImage
          src="https://images.unsplash.com/photo-1566665797739-1674de7a421a"
          alt="Booking"
          fill
          priority
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />
        <div className="relative text-center text-white space-y-4 px-4 animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
            预订客房
            <span className="block text-2xl md:text-3xl font-light mt-4 text-white/90">
              为您的完美假期预订理想住所
            </span>
          </h1>
        </div>
      </div>

      {/* 预订表单 */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Card className="border-none shadow-lg bg-background/60 backdrop-blur-lg">
            <CardHeader>
              <CardTitle className="text-2xl">选择您的入住信息</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* 日期选择 */}
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <Label className="text-lg mb-4 block">选择日期</Label>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                    disabled={(date) => date < new Date()}
                  />
                </div>
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="nights">入住天数</Label>
                    <Select>
                      <SelectTrigger id="nights" className="mt-2">
                        <SelectValue placeholder="选择入住天数" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1晚</SelectItem>
                        <SelectItem value="2">2晚</SelectItem>
                        <SelectItem value="3">3晚</SelectItem>
                        <SelectItem value="4">4晚</SelectItem>
                        <SelectItem value="5">5晚</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="guests">入住人数</Label>
                    <Select>
                      <SelectTrigger id="guests" className="mt-2">
                        <SelectValue placeholder="选择入住人数" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1人</SelectItem>
                        <SelectItem value="2">2人</SelectItem>
                        <SelectItem value="3">3人</SelectItem>
                        <SelectItem value="4">4人</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="roomType">房型选择</Label>
                    <Select>
                      <SelectTrigger id="roomType" className="mt-2">
                        <SelectValue placeholder="选择房型" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="deluxe">豪华客房</SelectItem>
                        <SelectItem value="suite">行政套房</SelectItem>
                        <SelectItem value="presidential">总统套房</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* 客人信息 */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold">客人信息</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">姓���</Label>
                    <Input id="firstName" placeholder="请输入姓氏" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">名字</Label>
                    <Input id="lastName" placeholder="请输入名字" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">电子邮箱</Label>
                  <Input id="email" type="email" placeholder="请输入电子邮箱" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">手机号码</Label>
                  <Input id="phone" type="tel" placeholder="请输入手机号码" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="specialRequests">特殊要求</Label>
                  <textarea
                    id="specialRequests"
                    className="w-full px-4 py-2 rounded-md bg-background border border-input focus:border-primary transition-colors min-h-[100px]"
                    placeholder="如有特殊要求请在此说明"
                  />
                </div>
              </div>

              {/* 提交按钮 */}
              <Button size="lg" className="w-full">
                确认预订
              </Button>
            </CardContent>
          </Card>

          {/* 预订说明 */}
          <div className="mt-8 text-sm text-muted-foreground space-y-2">
            <p>* 预订确认后将发送确认邮件至您的邮箱</p>
            <p>* 入住时间为下午14:00后，退房时间为次日中午12:00前</p>
            <p>* 如需提前入住或延迟退房，请提前与酒店联系</p>
          </div>
        </div>
      </div>
    </div>
  );
} 