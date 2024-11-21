"use client";

import { toast, type ToasterProps } from 'sonner';
import { CheckCircle2, AlertCircle, Info, AlertTriangle } from 'lucide-react';

type ToastType = 'success' | 'error' | 'info' | 'warning';

interface FeedbackProps {
  type: ToastType;
  title: string;
  description?: string;
}

// 定义自定义组件的 props 类型
interface CustomToastProps {
  className?: string;
}

const icons = {
  success: <CheckCircle2 className="h-5 w-5 text-green-500" />,
  error: <AlertCircle className="h-5 w-5 text-red-500" />,
  info: <Info className="h-5 w-5 text-blue-500" />,
  warning: <AlertTriangle className="h-5 w-5 text-yellow-500" />
};

export function showFeedback({ type, title, description }: FeedbackProps) {
  toast(title, {
    description,
    // 添加类型声明
    custom: ({ className }: CustomToastProps) => (
      <div className="flex items-center gap-3">
        {icons[type]}
        <div>
          <div className="font-semibold">{title}</div>
          {description && <div className="text-sm text-muted-foreground">{description}</div>}
        </div>
      </div>
    )
  });
} 