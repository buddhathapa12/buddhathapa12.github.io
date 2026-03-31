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
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <a
          href="#"
          onClick={(event) => {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            setIsOpen(false);
          }}
          className="flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-3xl bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-emerald-500 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20">
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

        <div className="flex items-center gap-2">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <Button
            as="a"
            href="#contact"
            variant="primary"
            className="hidden md:inline-flex"
          >
            Contact
          </Button>
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
        <div className="border-t border-slate-200 bg-white/95 px-6 py-4 backdrop-blur dark:border-slate-800 dark:bg-slate-950/95 md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Button
                key={link.id}
                as="a"
                href={`#${link.id}`}
                variant="ghost"
                className="rounded-2xl px-3 py-3 text-sm font-medium text-slate-700 dark:text-slate-200"
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
