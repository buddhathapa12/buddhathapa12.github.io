"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const storageKey = "theme";

function getPreferredTheme() {
  if (typeof window === "undefined") {
    return "light";
  }

  const storedTheme = window.localStorage.getItem(storageKey);
  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(theme: "light" | "dark") {
  document.documentElement.classList.toggle("dark", theme === "dark");
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">(() =>
    getPreferredTheme(),
  );

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const handleToggle = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    window.localStorage.setItem(storageKey, nextTheme);
  };

  return (
    // <button
    //   type="button"
    //   onClick={handleToggle}
    //   role="switch"
    //   aria-checked={theme === "dark"}
    //   className="relative inline-flex h-11 w-20 items-center rounded-full border border-slate-300 bg-slate-100 p-1 text-slate-900 transition duration-200 hover:border-slate-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
    // >
    //   <span className="sr-only">Toggle dark mode</span>
    //   <span
    //     className={`relative inline-flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm transition-transform duration-200 ${
    //       theme === "dark" ? "translate-x-9" : "translate-x-0"
    //     }`}
    //   >
    //     {theme === "dark" ? <Moon size={16} /> : <Sun size={16} />}
    //   </span>
    // </button>
    <button
      type="button"
      onClick={handleToggle}
      role="switch"
      aria-checked={theme === "dark"}
      className="
    relative inline-flex h-8 w-14 items-center rounded-full
    border border-slate-300 bg-slate-100 p-0.5
    transition-colors duration-200
    hover:border-slate-400
    focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900
    dark:border-slate-600 dark:bg-slate-800
  "
    >
      <span className="sr-only">Toggle dark mode</span>

      <span
        className={`
      inline-flex h-7 w-7 items-center justify-center rounded-full
      bg-white shadow-sm transition-transform duration-200
      dark:bg-slate-900
      ${theme === "dark" ? "translate-x-6" : "translate-x-0"}
    `}
      >
        {theme === "dark" ? (
          <Moon size={14} className="text-slate-200" />
        ) : (
          <Sun size={14} className="text-amber-500" />
        )}
      </span>
    </button>
  );
}
