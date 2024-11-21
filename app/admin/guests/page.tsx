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
import { Plus, Search, Edit, Trash2, Mail, Phone } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const guests = [
  {
    id: "G001",
    name: "张先生",
    phone: "138****1234",
    email: "zhang****@email.com",
    level: "钻石会员",
    visits: 12,
    lastVisit: "2024-03-15",
    status: "在住",
  },
  {
    id: "G002",
    name: "李女士",
    phone: "139****5678",
    email: "li****@email.com",
    level: "金卡会员",
    visits: 8,
    lastVisit: "2024-03-10",
    status: "预订中",
  },
  {
    id: "G003",
    name: "王先生",
    phone: "137****9012",
    email: "wang****@email.com",
    level: "银卡会员",
    visits: 5,
    lastVisit: "2024-02-28",
    status: "历史客人",
  },
];

const statusColors = {
  在住: "bg-blue-100 text-blue-800",
  预订中: "bg-yellow-100 text-yellow-800",
  历史客人: "bg-gray-100 text-gray-800",
};

const levelColors = {
  钻石会员: "bg-purple-100 text-purple-800",
  金卡会员: "bg-amber-100 text-amber-800",
  银卡会员: "bg-slate-100 text-slate-800",
};

export default function GuestsManagementPage() {
  return (
    <div className="space-y-8">
      {/* 顶部操作栏 */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
        <div className="flex gap-4 w-full sm:w-auto">
          <div className="relative flex-1 sm:flex-initial">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="搜索客人..."
              className="pl-9 w-full sm:w-[300px]"
            />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="会员等级" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">全部等级</SelectItem>
              <SelectItem value="diamond">钻石会员</SelectItem>
              <SelectItem value="gold">金卡会员</SelectItem>
              <SelectItem value="silver">银卡会员</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button className="w-full sm:w-auto">
          <Plus className="h-4 w-4 mr-2" />
          添加客人
        </Button>
      </div>

      {/* 客人列表 */}
      <Card>
        <CardContent className="p-0">
          <div className="relative w-full overflow-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>客人信息</TableHead>
                  <TableHead>联系方式</TableHead>
                  <TableHead>会员等级</TableHead>
                  <TableHead>到访次数</TableHead>
                  <TableHead>最近到访</TableHead>
                  <TableHead>状态</TableHead>
                  <TableHead className="text-right">操作</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {guests.map((guest) => (
                  <TableRow key={guest.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{guest.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {guest.id}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="flex items-center text-sm">
                          <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                          {guest.phone}
                        </div>
                        <div className="flex items-center text-sm">
                          <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                          {guest.email}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        className={`${
                          levelColors[guest.level as keyof typeof levelColors]
                        }`}
                      >
                        {guest.level}
                      </Badge>
                    </TableCell>
                    <TableCell>{guest.visits}次</TableCell>
                    <TableCell>{guest.lastVisit}</TableCell>
                    <TableCell>
                      <Badge
                        className={`${
                          statusColors[guest.status as keyof typeof statusColors]
                        }`}
                      >
                        {guest.status}
                      </Badge>
                    </TableCell>
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