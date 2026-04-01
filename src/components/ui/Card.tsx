import type { HTMLAttributes, ReactNode } from "react";

type CardVariant = "default" | "soft";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  variant?: CardVariant;
};

const baseCardStyles =
  "rounded-[1.5rem] border bg-white p-6 shadow-sm transition duration-200 will-change-transform will-change-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 dark:bg-slate-950";

const variantStyles: Record<CardVariant, string> = {
  default: `${baseCardStyles} border-slate-200 bg-white hover:-translate-y-1 hover:shadow-lg active:translate-y-0 active:scale-[0.998] dark:border-slate-800`,
  soft: `${baseCardStyles} border-slate-200/80 bg-slate-50 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.998] dark:border-slate-800/80 dark:bg-slate-950/80`,
};

export default function Card({
  className = "",
  children,
  variant = "default",
  ...props
}: CardProps): React.ReactNode {
  return (
    <div className={`${variantStyles[variant]} ${className}`} {...props}>
      {children}
    </div>
  );
}
