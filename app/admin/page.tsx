import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BedDouble, Users, TrendingUp, DollarSign } from "lucide-react";

const stats = [
  {
    title: "今日营收",
    value: "¥128,960",
    change: "+12.5%",
    icon: DollarSign,
  },
  {
    title: "入住率",
    value: "85.2%",
    change: "+4.3%",
    icon: BedDouble,
  },
  {
    title: "新增预订",
    value: "24",
    change: "+8.1%",
    icon: TrendingUp,
  },
  {
    title: "在住客人",
    value: "156",
    change: "+2.5%",
    icon: Users,
  },
];

const recentBookings = [
  {
    id: "B001",
    guest: "张先生",
    room: "豪华客房",
    checkIn: "2024-03-20",
    checkOut: "2024-03-22",
    status: "已确认",
  },
  {
    id: "B002",
    guest: "李女士",
    room: "行政套房",
    checkIn: "2024-03-21",
    checkOut: "2024-03-25",
    status: "待确认",
  },
  {
    id: "B003",
    guest: "王先生",
    room: "总统套房",
    checkIn: "2024-03-22",
    checkOut: "2024-03-24",
    status: "已确认",
  },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      {/* 统计卡片 */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between space-x-4">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {stat.title}
                    </p>
                    <h3 className="text-2xl font-bold">{stat.value}</h3>
                  </div>
                </div>
                <div className="text-sm text-green-600">
                  {stat.change}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 图表区域 */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {/* 营收趋势 */}
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>营收趋势</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center text-muted-foreground">
              图表加载中...
            </div>
          </CardContent>
        </Card>

        {/* 房型分布 */}
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>房型分布</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center text-muted-foreground">
              图表加载中...
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 最近预订 */}
      <Card>
        <CardHeader>
          <CardTitle>最近预订</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative w-full overflow-auto">
            <table className="w-full caption-bottom text-sm">
              <thead>
                <tr className="border-b">
                  <th className="h-12 px-4 text-left align-middle font-medium">订单号</th>
                  <th className="h-12 px-4 text-left align-middle font-medium">客人</th>
                  <th className="h-12 px-4 text-left align-middle font-medium">房型</th>
                  <th className="h-12 px-4 text-left align-middle font-medium">入住日期</th>
                  <th className="h-12 px-4 text-left align-middle font-medium">退房日期</th>
                  <th className="h-12 px-4 text-left align-middle font-medium">状态</th>
                </tr>
              </thead>
              <tbody>
                {recentBookings.map((booking) => (
                  <tr key={booking.id} className="border-b">
                    <td className="p-4 align-middle">{booking.id}</td>
                    <td className="p-4 align-middle">{booking.guest}</td>
                    <td className="p-4 align-middle">{booking.room}</td>
                    <td className="p-4 align-middle">{booking.checkIn}</td>
                    <td className="p-4 align-middle">{booking.checkOut}</td>
                    <td className="p-4 align-middle">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        booking.status === "已确认" 
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}>
                        {booking.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}