'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/components/navbar';

const noNavbarRoutes = [
  '/admin',  // 管理后台路径
];

export default function NavbarWrapper() {
  const pathname = usePathname();
  
  // 检查是否需要显示导航栏
  const shouldShowNavbar = !noNavbarRoutes.some(route => 
    pathname.startsWith(route)
  );

  if (!shouldShowNavbar) {
    return null;
  }

  return <Navbar />;
} 