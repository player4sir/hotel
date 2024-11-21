declare module 'sonner' {
  export interface ToasterProps {
    className?: string;
    // 其他需要的类型
  }
  
  export const toast: {
    (message: string, options?: {
      description?: string;
      custom?: (props: { className?: string }) => React.ReactNode;
    }): void;
  };
} 