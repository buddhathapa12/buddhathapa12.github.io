import type { HTMLAttributes, ReactNode } from "react";

type CardVariant = "default" | "soft";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  variant?: CardVariant;
};

const variantStyles: Record<CardVariant, string> = {
  default:
    "rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-xl transition duration-300 hover:-translate-y-0.5 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-950",
  soft: "rounded-[1.75rem] border border-indigo-100/60 bg-indigo-50/60 p-6 shadow-lg backdrop-blur dark:border-slate-800 dark:bg-slate-950/70",
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
