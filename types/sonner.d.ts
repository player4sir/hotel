declare module 'sonner' {
  import { ReactNode } from 'react';

  export interface ToasterProps {
    theme?: 'light' | 'dark' | 'system';
    className?: string;
    toastOptions?: {
      classNames?: {
        toast?: string;
        description?: string;
        actionButton?: string;
        cancelButton?: string;
      };
    };
    [key: string]: any;
  }

  export const Toaster: React.FC<ToasterProps>;

  export interface ToastOptions {
    description?: string | ReactNode;
    duration?: number;
    icon?: ReactNode;
    className?: string;
    custom?: (props: { className?: string }) => ReactNode;
  }

  export const toast: {
    (message: string | ReactNode, options?: ToastOptions): void;
    success: (message: string | ReactNode, options?: ToastOptions) => void;
    error: (message: string | ReactNode, options?: ToastOptions) => void;
    warning: (message: string | ReactNode, options?: ToastOptions) => void;
    info: (message: string | ReactNode, options?: ToastOptions) => void;
  };
} 