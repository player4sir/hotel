import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

interface FooterProps {
  variant?: "full" | "simple";
}

export default function Footer({ variant = "full" }: FooterProps) {
  // 简化版页脚
  if (variant === "simple") {
    return (
      <footer className="bg-muted/30 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 清雅酒店. 保留所有权利.
            </p>
            <div className="flex gap-6">
              <Link 
                href="/privacy" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                隐私政策
              </Link>
              <Link 
                href="/terms" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                使用条款
              </Link>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  // 完整版页脚
  return (
    <footer className="bg-muted/30 pt-16 pb-8 mt-auto">
      <div className="container mx-auto px-4">
        {/* 主要内容区 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b">
          {/* 品牌区域 */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold tracking-tight">清雅酒店</h2>
            <p className="text-muted-foreground">
              致力于为您提供极致奢华的住宿体验，让每位宾客感受无与伦比的尊贵服务。
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* 快速链接 */}
          <div>
            <h3 className="font-semibold mb-6">快速链接</h3>
            <ul className="space-y-4">
              <li>
                <Link 
                  href="/rooms" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  客房预订
                </Link>
              </li>
              <li>
                <Link 
                  href="/dining" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  餐饮服务
                </Link>
              </li>
              <li>
                <Link 
                  href="/spa" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  水疗中心
                </Link>
              </li>
              <li>
                <Link 
                  href="/virtual-tour" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  虚拟导览
                </Link>
              </li>
            </ul>
          </div>

          {/* 联系方式 */}
          <div>
            <h3 className="font-semibold mb-6">联系方式</h3>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start space-x-3">
                <span className="text-primary">📍</span>
                <span>上海市浦东新区陆家嘴环路1000号</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-primary">📞</span>
                <span>+86 21 5888 8888</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-primary">✉️</span>
                <span>contact@luxuryhotel.com</span>
              </li>
            </ul>
          </div>

          {/* 订阅区域 */}
          <div>
            <h3 className="font-semibold mb-6">订阅我们</h3>
            <p className="text-muted-foreground mb-4">
              订阅我们的新闻通讯，获取最新优惠和活动资讯
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="请输入您的邮箱"
                className="w-full px-4 py-2 rounded-md bg-background border border-input focus:border-primary transition-colors"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                订阅
              </button>
            </form>
          </div>
        </div>

        {/* 底部版权信息 */}
        <div className="pt-8 text-center text-sm text-muted-foreground">
          <p>© 2024 清雅酒店. 保留所有权利.</p>
          <div className="mt-4 space-x-6">
            <Link 
              href="/privacy" 
              className="hover:text-primary transition-colors"
            >
              隐私政策
            </Link>
            <Link 
              href="/terms" 
              className="hover:text-primary transition-colors"
            >
              使用条款
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}