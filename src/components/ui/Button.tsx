import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "icon";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition duration-200 hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 min-h-[44px]",
  secondary:
    "inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition duration-200 hover:border-slate-300 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800 min-h-[44px]",
  ghost:
    "inline-flex items-center justify-center rounded-full px-3 py-2 text-sm font-semibold text-slate-700 transition duration-200 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 min-h-[44px]",
  icon: "inline-flex items-center justify-center rounded-full p-2 text-sm font-semibold text-slate-700 transition duration-200 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 min-h-[44px] min-w-[44px]",
};

type BaseProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
};

type ButtonAsButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: "button";
    href?: never;
  };

type ButtonAsAnchorProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: "a";
    href: string;
  };

export type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps;

export default function Button({
  as = "button",
  variant = "secondary",
  className = "",
  children,
  ...props
}: ButtonProps): React.ReactNode {
  const classNames = [variantStyles[variant], className]
    .filter(Boolean)
    .join(" ");

  if (as === "a") {
    const { href, ...rest } = props as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a href={href} className={classNames} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={classNames}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
