"use client";

import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  BedDouble,
  Users,
  Calendar,
  Settings,
  LogOut,
  Menu,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";

const sidebarItems = [
  {
    title: "仪表盘",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "房间管理",
    href: "/admin/rooms",
    icon: BedDouble,
  },
  {
    title: "客人管理",
    href: "/admin/guests",
    icon: Users,
  },
  {
    title: "预订管理",
    href: "/admin/bookings",
    icon: Calendar,
  },
  {
    title: "系统设置",
    href: "/admin/settings",
    icon: Settings,
  },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-muted/30">
      {/* 移动端顶部导航 */}
      <div className="lg:hidden flex items-center justify-between p-4 bg-background border-b">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <Menu className="h-5 w-5" />
        </Button>
        <h1 className="text-lg font-semibold">管理后台</h1>
        <div className="w-10" /> {/* 占位，保持标题居中 */}
      </div>

      <div className="flex">
        {/* 侧边栏 */}
        <aside
          className={cn(
            "fixed inset-y-0 left-0 z-50 w-64 bg-background border-r transform transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static",
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          {/* Logo */}
          <div className="h-16 flex items-center px-6 border-b">
            <h2 className="text-lg font-semibold">清雅酒店管理系统</h2>
          </div>

          {/* 导航菜单 */}
          <nav className="p-4 space-y-2">
            {sidebarItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Button
                  key={item.href}
                  variant={isActive ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  asChild
                >
                  <Link href={item.href}>
                    <item.icon className="mr-2 h-4 w-4" />
                    {item.title}
                  </Link>
                </Button>
              );
            })}
          </nav>

          {/* 底部操作区 */}
          <div className="absolute bottom-4 left-0 right-0 px-4">
            <Button
              variant="ghost"
              className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
            >
              <LogOut className="mr-2 h-4 w-4" />
              退出登录
            </Button>
          </div>
        </aside>

        {/* 主要内容区 */}
        <main className="flex-1 min-h-screen">
          {/* 顶部标题栏 */}
          <div className="h-16 border-b bg-background flex items-center px-6">
            <h1 className="text-lg font-semibold">
              {sidebarItems.find((item) => item.href === pathname)?.title || "仪表盘"}
            </h1>
          </div>

          {/* 内容区域 */}
          <div className="p-6">{children}</div>
        </main>
      </div>

      {/* 遮罩层 - 移动端侧边栏打开时显示 */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 lg:hidden z-40"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}