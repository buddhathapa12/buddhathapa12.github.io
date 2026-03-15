import { useEffect, useMemo, useState } from "react";
import { profile } from "../data/profile";
import Button from "./ui/Button";
import ThemeToggle from "./ThemeToggle";

interface HeaderProps {
  theme: "light" | "dark";
  onToggleTheme: () => void;
}

export default function Header({ theme, onToggleTheme }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = useMemo(
    () => [
      { id: "about", label: "About" },
      { id: "education", label: "Education" },
      { id: "experience", label: "Experience" },
      { id: "skills", label: "Skills" },
      { id: "projects", label: "Projects" },
      { id: "publications", label: "Publications" },
      { id: "contact", label: "Contact" },
    ],
    [],
  );

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/60">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4">
        <a
          href="#"
          onClick={(event) => {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            setIsOpen(false);
          }}
          className="flex items-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-emerald-500 text-sm font-semibold text-white shadow-sm">
            BT
          </div>
          <div className="flex flex-col leading-tight">
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
              {profile.name}
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-3 text-sm font-medium text-slate-600 dark:text-slate-300 md:flex">
          {navLinks.map((link) => (
            <Button
              key={link.id}
              as="a"
              href={`#${link.id}`}
              variant="ghost"
              className="px-3 py-2"
            >
              {link.label}
            </Button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />

          <Button
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
            className="md:hidden"
            variant="icon"
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
          </Button>
        </div>
      </div>

      {isOpen ? (
        <div className="border-t border-slate-200 bg-white/90 px-6 py-4 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80 md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Button
                key={link.id}
                as="a"
                href={`#${link.id}`}
                variant="ghost"
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Button>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
