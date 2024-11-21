"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Eye, X, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const bookings = [
  {
    id: "B001",
    guest: {
      name: "张先生",
      phone: "138****1234",
      email: "zhang****@email.com",
    },
    room: {
      type: "豪华客房",
      number: "1201",
    },
    checkIn: "2024-03-20",
    checkOut: "2024-03-22",
    status: "已确认",
    payment: {
      amount: "5,998",
      status: "已支付",
      method: "信用卡",
    },
    createTime: "2024-03-15 14:30",
  },
  {
    id: "B002",
    guest: {
      name: "李女士",
      phone: "139****5678",
      email: "li****@email.com",
    },
    room: {
      type: "行政套房",
      number: "1502",
    },
    checkIn: "2024-03-21",
    checkOut: "2024-03-25",
    status: "待确认",
    payment: {
      amount: "19,996",
      status: "待支付",
      method: "待定",
    },
    createTime: "2024-03-16 09:15",
  },
  {
    id: "B003",
    guest: {
      name: "王先生",
      phone: "137****9012",
      email: "wang****@email.com",
    },
    room: {
      type: "总统套房",
      number: "1801",
    },
    checkIn: "2024-03-22",
    checkOut: "2024-03-24",
    status: "已确认",
    payment: {
      amount: "19,998",
      status: "已支付",
      method: "支付宝",
    },
    createTime: "2024-03-16 16:45",
  },
];

const statusColors = {
  已确认: "bg-green-100 text-green-800",
  待确认: "bg-yellow-100 text-yellow-800",
  已取消: "bg-red-100 text-red-800",
};

const paymentStatusColors = {
  已支付: "bg-blue-100 text-blue-800",
  待支付: "bg-orange-100 text-orange-800",
  已退款: "bg-purple-100 text-purple-800",
};

export default function BookingsManagementPage() {
  return (
    <div className="space-y-8">
      {/* 顶部操作栏 */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
        <div className="flex gap-4 w-full sm:w-auto">
          <div className="relative flex-1 sm:flex-initial">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="搜索预订..."
              className="pl-9 w-full sm:w-[300px]"
            />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="预订状态" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">全部状态</SelectItem>
              <SelectItem value="confirmed">已确认</SelectItem>
              <SelectItem value="pending">待确认</SelectItem>
              <SelectItem value="cancelled">已取消</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex gap-4 w-full sm:w-auto">
          <Button variant="outline" className="flex-1 sm:flex-initial">
            导出数据
          </Button>
          <Button className="flex-1 sm:flex-initial">
            批量操作
          </Button>
        </div>
      </div>

      {/* 预订列表 */}
      <Card>
        <CardContent className="p-0">
          <div className="relative w-full overflow-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>预订信息</TableHead>
                  <TableHead>客人信息</TableHead>
                  <TableHead>房间信息</TableHead>
                  <TableHead>入住日期</TableHead>
                  <TableHead>退房日期</TableHead>
                  <TableHead>支付信息</TableHead>
                  <TableHead>状态</TableHead>
                  <TableHead className="text-right">操作</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {bookings.map((booking) => (
                  <TableRow key={booking.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{booking.id}</div>
                        <div className="text-sm text-muted-foreground">
                          {booking.createTime}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="font-medium">{booking.guest.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {booking.guest.phone}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {booking.guest.email}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium">{booking.room.type}</div>
                        <div className="text-sm text-muted-foreground">
                          房间号：{booking.room.number}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{booking.checkIn}</TableCell>
                    <TableCell>{booking.checkOut}</TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="font-medium">￥{booking.payment.amount}</div>
                        <Badge
                          className={
                            paymentStatusColors[
                              booking.payment.status as keyof typeof paymentStatusColors
                            ]
                          }
                        >
                          {booking.payment.status}
                        </Badge>
                        <div className="text-sm text-muted-foreground">
                          {booking.payment.method}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        className={
                          statusColors[booking.status as keyof typeof statusColors]
                        }
                      >
                        {booking.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon">
                          <Eye className="h-4 w-4" />
                        </Button>
                        {booking.status === "待确认" && (
                          <>
                            <Button variant="ghost" size="icon" className="text-green-600">
                              <Check className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="text-red-600">
                              <X className="h-4 w-4" />
                            </Button>
                          </>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 