import * as React from "react";
import { cn } from "@/lib/utils";

// ── Input ──
export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      className={cn(
        "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  )
);
Input.displayName = "Input";

// ── Label ──
export const Label = React.forwardRef<HTMLLabelElement, React.LabelHTMLAttributes<HTMLLabelElement>>(
  ({ className, ...props }, ref) => (
    <label ref={ref} className={cn("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", className)} {...props} />
  )
);
Label.displayName = "Label";

// ── Avatar ──
export const Avatar = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <div className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)}>{children}</div>
);
export const AvatarFallback = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <div className={cn("flex h-full w-full items-center justify-center rounded-full", className)}>{children}</div>
);

// ── Simple Select ──
export const SimpleSelect = React.forwardRef<
  HTMLSelectElement,
  React.SelectHTMLAttributes<HTMLSelectElement> & { placeholder?: string; options: string[] }
>(({ className, placeholder, options, ...props }, ref) => (
  <select
    ref={ref}
    className={cn(
      "flex h-11 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm font-mono shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    {...props}
  >
    {placeholder && <option value="">{placeholder}</option>}
    {options.map((o) => (
      <option key={o} value={o}>{o}</option>
    ))}
  </select>
));
SimpleSelect.displayName = "SimpleSelect";
