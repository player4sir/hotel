"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navigation = [
  { title: "首页", href: "/" },
  { title: "客房", href: "/rooms" },
  { title: "餐饮", href: "/dining" },
  { title: "水疗", href: "/spa" },
  { title: "虚拟导览", href: "/virtual-tour" },
  { title: "联系我们", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // 监听滚动事件来改变导航栏样式
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className={`text-xl font-bold tracking-tight transition-colors ${
              isScrolled || pathname !== "/" 
                ? "text-foreground" 
                : "text-white"
            }`}
          >
            清雅酒店
          </Link>

          {/* 桌面端导航 */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  relative text-sm font-medium transition-colors
                  ${isScrolled || pathname !== "/" 
                    ? "text-foreground hover:text-primary" 
                    : "text-white/90 hover:text-white"
                  }
                  group
                `}
              >
                {item.title}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform" />
              </Link>
            ))}
          </nav>

          {/* 功能区 */}
          <div className="flex items-center space-x-4">
            <ModeToggle />
            <Button 
              className={`hidden md:inline-flex transition-all ${
                isScrolled || pathname !== "/"
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "bg-white text-black hover:bg-white/90"
              }`} 
              asChild
            >
              <Link href="/booking">预订客房</Link>
            </Button>

            {/* 移动端菜单 */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant={isScrolled || pathname !== "/" ? "outline" : "secondary"} 
                  size="icon" 
                  className="md:hidden"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-80">
                <SheetHeader className="border-b pb-4">
                  <SheetTitle>菜单导航</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-3 mt-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`px-4 py-2 rounded-md transition-colors ${
                        pathname === item.href
                          ? "bg-secondary text-secondary-foreground"
                          : "hover:bg-secondary/50"
                      }`}
                    >
                      {item.title}
                    </Link>
                  ))}
                  <Button className="mt-4" asChild>
                    <Link href="/booking" onClick={() => setIsOpen(false)}>
                      预订客房
                    </Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}