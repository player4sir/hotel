'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

interface InputOTPProps {
  value: string;
  onChange: (value: string) => void;
  maxLength?: number;
  className?: string;
  disabled?: boolean;
  autoFocus?: boolean;
  placeholder?: string;
  'aria-label'?: string;
}

const InputOTP = React.forwardRef<HTMLInputElement, InputOTPProps>(
  ({ 
    className,
    maxLength = 6,
    value,
    onChange,
    disabled,
    autoFocus,
    placeholder,
    'aria-label': ariaLabel,
    ...props
  }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value.replace(/[^0-9]/g, '').slice(0, maxLength);
      onChange(newValue);
    };

    const digits = value.split('');
    while (digits.length < maxLength) {
      digits.push('');
    }

    return (
      <div 
        className="flex gap-2 items-center justify-center"
        role="group"
        aria-label={ariaLabel || "OTP Input"}
      >
        {digits.map((digit, index) => (
          <div
            key={index}
            className={cn(
              "relative w-10 h-14",
              "flex items-center justify-center",
              "border-2 rounded-md",
              "bg-background",
              digit ? "border-primary" : "border-input",
              disabled ? "opacity-50 cursor-not-allowed" : "",
              className
            )}
          >
            {digit ? (
              <span className="text-lg font-semibold">{digit}</span>
            ) : (
              <div className="w-2 h-2 rounded-full bg-muted animate-pulse" />
            )}
            {index === 0 && (
              <input
                ref={ref}
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                autoComplete="one-time-code"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                value={value}
                onChange={handleChange}
                disabled={disabled}
                autoFocus={autoFocus}
                placeholder={placeholder}
                aria-label={ariaLabel}
              />
            )}
          </div>
        ))}
      </div>
    );
  }
);

InputOTP.displayName = "InputOTP";

export { InputOTP };
