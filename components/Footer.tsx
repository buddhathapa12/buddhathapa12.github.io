import Link from "next/link";
import { navItems } from "../data/navigation";
import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/95 py-10 text-sm text-slate-500 backdrop-blur dark:border-slate-800 dark:bg-slate-950/95 dark:text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 text-slate-600 dark:text-slate-400">
          {navItems.slice(0, 4).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-slate-900 dark:hover:text-slate-100"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
