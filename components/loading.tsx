export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* 装饰性背景 */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="relative flex flex-col items-center gap-6">
        {/* 加载动画 */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-primary/20" />
          <div className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent animate-spin" />
        </div>
        
        {/* 加载文字 */}
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">正在加载</h2>
          <p className="text-sm text-muted-foreground">
            请稍候片刻，精彩即将呈现...
          </p>
        </div>
      </div>
    </div>
  );
} 