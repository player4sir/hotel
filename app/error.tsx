'use client';

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* 装饰性背景 */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-destructive/5 rounded-full blur-3xl" />
      
      <div className="relative text-center px-4 animate-fade-up">
        <div className="mb-8">
          <div className="w-20 h-20 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">⚠️</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
            出现错误
          </h1>
          <p className="text-muted-foreground max-w-md mx-auto mb-8">
            抱歉，系统出现了一些问题。请稍后再试，或联系我们的客服团队。
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="rounded-full"
            onClick={() => reset()}
          >
            重试
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="rounded-full"
            asChild
          >
            <a href="mailto:support@luxuryhotel.com">
              联系客服
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
} 