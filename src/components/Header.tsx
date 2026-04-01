"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { profile } from "../data/profile";
import { pageLinks } from "../data/page-links";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur dark:border-slate-800 dark:bg-slate-950/95">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-2xl px-3 py-2 transition hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 dark:hover:bg-slate-800"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-sm font-semibold text-white shadow-sm">
            BT
          </div>
          <div className="hidden flex-col leading-tight sm:flex">
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
              {profile.name}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Bioinformatics & software systems
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 text-sm font-medium md:flex">
          {pageLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname?.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-3 py-2 transition duration-200 ease-out transform focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 ${
                  isActive
                    ? "bg-slate-100 text-slate-900 font-semibold dark:bg-slate-800 dark:text-slate-100"
                    : "text-slate-600 dark:text-slate-400 md:hover:-translate-y-0.5 md:hover:bg-slate-100 md:hover:text-slate-900 dark:md:hover:bg-slate-800 dark:md:hover:text-slate-100 active:translate-y-0 active:scale-[0.995] active:bg-slate-200 dark:active:bg-slate-800"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
            className="md:hidden rounded-full p-2 text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
            >
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {isOpen ? (
        <div className="border-t border-slate-200 bg-white/95 px-6 py-4 backdrop-blur dark:border-slate-800 dark:bg-slate-950/95 md:hidden">
          <div className="flex flex-col gap-3">
            {pageLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname?.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-2xl px-3 py-3 text-sm font-medium min-h-[44px] transition duration-200 ease-out transform focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 ${
                    isActive
                      ? "bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-100"
                      : "text-slate-700 dark:text-slate-200 active:scale-[0.995] active:bg-slate-100 active:text-slate-900 dark:active:bg-slate-800 dark:active:text-slate-100"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      ) : null}
    </header>
  );
}
