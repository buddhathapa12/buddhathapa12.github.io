import Link from "next/link";
import { pageLinks } from "../data/page-links";
import { profile } from "../data/profile";

export default function Footer(): React.ReactNode {
  return (
    <footer className="border-t border-slate-200 bg-white/95 py-10 text-sm text-slate-500 backdrop-blur dark:border-slate-800 dark:bg-slate-950/95 dark:text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 text-slate-600 dark:text-slate-400">
          {pageLinks.slice(0, 4).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-2 py-2 transition duration-200 ease-out transform focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 md:hover:-translate-y-0.5 md:hover:bg-slate-100 md:hover:text-slate-900 md:hover:underline dark:md:hover:bg-slate-800 dark:md:hover:text-slate-100 active:scale-[0.995] active:bg-slate-100 dark:active:bg-slate-800"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
