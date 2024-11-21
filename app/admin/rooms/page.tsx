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
import { Plus, Search, Edit, Trash2 } from "lucide-react";
import { OptimizedImage } from "@/components/ui/optimized-image";

const rooms = [
  {
    id: "R001",
    type: "豪华客房",
    number: "1201",
    floor: "12",
    status: "空闲",
    price: "2,999",
    lastCleaned: "2024-03-20",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427",
  },
  {
    id: "R002",
    type: "行政套房",
    number: "1502",
    floor: "15",
    status: "已预订",
    price: "4,999",
    lastCleaned: "2024-03-21",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
  },
  {
    id: "R003",
    type: "总统套房",
    number: "1801",
    floor: "18",
    status: "入住中",
    price: "9,999",
    lastCleaned: "2024-03-19",
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39",
  },
];

const statusColors = {
  空闲: "text-green-600 bg-green-100",
  已预订: "text-yellow-600 bg-yellow-100",
  入住中: "text-blue-600 bg-blue-100",
  维护中: "text-red-600 bg-red-100",
};

export default function RoomsManagementPage() {
  return (
    <div className="space-y-8">
      {/* 顶部操作栏 */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
        <div className="flex gap-4 w-full sm:w-auto">
          <div className="relative flex-1 sm:flex-initial">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="搜索房间..."
              className="pl-9 w-full sm:w-[300px]"
            />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="房间状态" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">全部状态</SelectItem>
              <SelectItem value="vacant">空闲</SelectItem>
              <SelectItem value="booked">已预订</SelectItem>
              <SelectItem value="occupied">入住中</SelectItem>
              <SelectItem value="maintenance">维护中</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button className="w-full sm:w-auto">
          <Plus className="h-4 w-4 mr-2" />
          添加房间
        </Button>
      </div>

      {/* 房间列表 */}
      <Card>
        <CardContent className="p-0">
          <div className="relative w-full overflow-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>房间信息</TableHead>
                  <TableHead>房型</TableHead>
                  <TableHead>楼层</TableHead>
                  <TableHead>状态</TableHead>
                  <TableHead>价格/晚</TableHead>
                  <TableHead>最后清扫</TableHead>
                  <TableHead className="text-right">操作</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {rooms.map((room) => (
                  <TableRow key={room.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="relative w-12 h-12 rounded-lg overflow-hidden">
                          <OptimizedImage
                            src={room.image}
                            alt={room.type}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-medium">{room.number}</div>
                          <div className="text-sm text-muted-foreground">
                            {room.id}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{room.type}</TableCell>
                    <TableCell>{room.floor}层</TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          statusColors[room.status as keyof typeof statusColors]
                        }`}
                      >
                        {room.status}
                      </span>
                    </TableCell>
                    <TableCell>￥{room.price}</TableCell>
                    <TableCell>{room.lastCleaned}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="text-red-600">
                          <Trash2 className="h-4 w-4" />
                        </Button>
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