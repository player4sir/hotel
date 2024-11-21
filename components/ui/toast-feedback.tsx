"use client";

import { useToast } from "@/hooks/use-toast";
import { Check, X, AlertCircle, Info } from "lucide-react";

interface FeedbackProps {
  type: "success" | "error" | "warning" | "info";
  title: string;
  description?: string;
}

export function showFeedback({ type, title, description }: FeedbackProps) {
  const { toast } = useToast();

  const icons = {
    success: <Check className="h-4 w-4 text-green-500" />,
    error: <X className="h-4 w-4 text-red-500" />,
    warning: <AlertCircle className="h-4 w-4 text-yellow-500" />,
    info: <Info className="h-4 w-4 text-blue-500" />,
  };

  toast({
    title,
    description,
    icon: icons[type],
  });
} 