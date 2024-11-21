"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <Tabs defaultValue="general" className="space-y-6">
        <TabsList>
          <TabsTrigger value="general">基本设置</TabsTrigger>
          <TabsTrigger value="notification">通知设置</TabsTrigger>
          <TabsTrigger value="security">安全设置</TabsTrigger>
          <TabsTrigger value="api">API设置</TabsTrigger>
        </TabsList>

        {/* 基本设置 */}
        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>基本设置</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>酒店名称</Label>
                  <Input placeholder="请输入酒店名称" defaultValue="清雅酒店" />
                </div>
                <div className="space-y-2">
                  <Label>联系电话</Label>
                  <Input placeholder="请输入联系电话" defaultValue="+86 21 5888 8888" />
                </div>
                <div className="space-y-2">
                  <Label>电子邮箱</Label>
                  <Input placeholder="请输入电子邮箱" defaultValue="contact@luxuryhotel.com" />
                </div>
                <div className="space-y-2">
                  <Label>时区设置</Label>
                  <Select defaultValue="Asia/Shanghai">
                    <SelectTrigger>
                      <SelectValue placeholder="选择时区" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Asia/Shanghai">上海 (GMT+8)</SelectItem>
                      <SelectItem value="Asia/Hong_Kong">香港 (GMT+8)</SelectItem>
                      <SelectItem value="Asia/Tokyo">东京 (GMT+9)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">系统维护</h3>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>维护模式</Label>
                    <div className="text-sm text-muted-foreground">
                      启用后网站将显示维护页面
                    </div>
                  </div>
                  <Switch />
                </div>
              </div>

              <Separator />

              <div className="flex justify-end">
                <Button>保存更改</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* 通知设置 */}
        <TabsContent value="notification">
          <Card>
            <CardHeader>
              <CardTitle>通知设置</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>新预订通知</Label>
                    <div className="text-sm text-muted-foreground">
                      收到新预订时发送通知
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>取消预订通知</Label>
                    <div className="text-sm text-muted-foreground">
                      预订被取消时发送通知
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>系统警告通知</Label>
                    <div className="text-sm text-muted-foreground">
                      系统出现异常时发送通知
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">通知方式</h3>
                <div className="space-y-2">
                  <Label>通知邮箱</Label>
                  <Input placeholder="请输入通知邮箱" defaultValue="admin@luxuryhotel.com" />
                </div>
              </div>

              <Separator />

              <div className="flex justify-end">
                <Button>保存更改</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* 安全设置 */}
        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>安全设置</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>双因素认证</Label>
                    <div className="text-sm text-muted-foreground">
                      启用双因素认证以提高账户安全性
                    </div>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>登录通知</Label>
                    <div className="text-sm text-muted-foreground">
                      新设备登录时发送通知
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">密码策略</h3>
                <div className="space-y-2">
                  <Label>密码有效期</Label>
                  <Select defaultValue="90">
                    <SelectTrigger>
                      <SelectValue placeholder="选择密码有效期" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="30">30天</SelectItem>
                      <SelectItem value="60">60天</SelectItem>
                      <SelectItem value="90">90天</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Separator />

              <div className="flex justify-end">
                <Button>保存更改</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* API设置 */}
        <TabsContent value="api">
          <Card>
            <CardHeader>
              <CardTitle>API设置</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>API密钥</Label>
                  <div className="flex gap-2">
                    <Input
                      readOnly
                      value="sk_live_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                      type="password"
                    />
                    <Button variant="outline">重新生成</Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Webhook URL</Label>
                  <Input placeholder="请输入Webhook URL" />
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">API访问控制</h3>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>IP白名单</Label>
                    <div className="text-sm text-muted-foreground">
                      限制API访问来源IP
                    </div>
                  </div>
                  <Switch />
                </div>
              </div>

              <Separator />

              <div className="flex justify-end">
                <Button>保存更改</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
} 