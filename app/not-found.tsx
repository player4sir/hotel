import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* 装饰性背景 */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="relative text-center px-4 animate-fade-up">
        <div className="mb-8">
          <h1 className="text-[120px] md:text-[180px] font-bold leading-none tracking-tight text-primary/20">
            404
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold -mt-8 mb-4">
            页面未找到
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-8">
            抱歉，您访问的页面不存在或已被移除。
            您可以返回首页，或浏览我们的其他内容。
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="rounded-full" asChild>
            <Link href="/">返回首页</Link>
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="rounded-full"
            asChild
          >
            <Link href="/rooms">浏览客房</Link>
          </Button>
        </div>
      </div>
    </div>
  );
} 