import type { HTMLAttributes, ReactNode } from "react";

type CardVariant = "default" | "soft";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  variant?: CardVariant;
};

const variantStyles: Record<CardVariant, string> = {
  default:
    "rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900",
  soft: "rounded-3xl border border-indigo-100/60 bg-indigo-50/50 p-6 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-950/60",
};

export default function Card({
  className = "",
  children,
  variant = "default",
  ...props
}: CardProps) {
  return (
    <div className={`${variantStyles[variant]} ${className}`} {...props}>
      {children}
    </div>
  );
}
