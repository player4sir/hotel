import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import NavbarWrapper from "@/components/navbar-wrapper";
import FooterWrapper from "@/components/footer-wrapper";
import { Suspense } from "react";
import Loading from "@/components/loading";
import { PageTransition } from "@/components/page-transition";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "清雅酒店 | 尊享完美住宿体验",
    template: "%s | 清雅酒店"
  },
  description: "体验至臻奢华与舒适的住宿享受，位于上海陆家嘴核心地段的五星级酒店",
  keywords: ["清雅酒店", "五星级酒店", "上海酒店", "陆家嘴酒店", "奢华住宿"],
  authors: [{ name: "清雅酒店" }],
  creator: "清雅酒店",
  publisher: "清雅酒店",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://www.luxuryhotel.com",
    siteName: "清雅酒店",
    title: "清雅酒店 | 尊享完美住宿体验",
    description: "体验至臻奢华与舒适的住宿享受，位于上海陆家嘴核心地段的五星级酒店",
    images: [
      {
        url: "https://www.luxuryhotel.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "清雅酒店外观",
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <NavbarWrapper />
            <main className="flex-1">
              <Suspense fallback={<Loading />}>
                <PageTransition>{children}</PageTransition>
              </Suspense>
            </main>
            <FooterWrapper />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}