'use client';

import { usePathname } from 'next/navigation';
import Footer from '@/components/footer';

// 不需要显示页脚的路由
const noFooterRoutes = [
  '/admin',    // 管理后台
  '/booking',  // 预订流程
  '/404',      // 404页面
  '/500',      // 错误页面
  '/login',    // 登录页面
  '/register', // 注册页面
];

// 需要显示简化版页脚的路由
const simpleFooterRoutes = [
  '/virtual-tour',  // 虚拟导览
  '/spa',          // 水疗中心
  '/dining',       // 餐饮服务
];

export default function FooterWrapper() {
  const pathname = usePathname();
  
  // 检查是否需要显示页脚
  const shouldShowFooter = !noFooterRoutes.some(route => 
    pathname.startsWith(route)
  );

  // 检查是否需要显示简化版页脚
  const isSimpleFooter = simpleFooterRoutes.some(route => 
    pathname.startsWith(route)
  );

  if (!shouldShowFooter) {
    return null;
  }

  // 根据路由返回不同版本的页脚
  return <Footer variant={isSimpleFooter ? "simple" : "full"} />;
} 