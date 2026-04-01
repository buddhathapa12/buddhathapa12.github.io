import type { HTMLAttributes, ReactNode } from "react";

type CardVariant = "default" | "soft";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  variant?: CardVariant;
};

const variantStyles: Record<CardVariant, string> = {
  default:
    "rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:shadow-md dark:border-slate-800 dark:bg-slate-950",
  soft: "rounded-[1.5rem] border border-slate-200/80 bg-slate-50 p-6 shadow-sm dark:border-slate-800/80 dark:bg-slate-950/80",
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
