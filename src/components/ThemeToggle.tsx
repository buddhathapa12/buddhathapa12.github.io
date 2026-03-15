import type { MouseEventHandler } from "react";
import Button from "./ui/Button";

interface ThemeToggleProps {
  theme: "light" | "dark";
  onToggle: MouseEventHandler<HTMLButtonElement>;
}

export default function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  return (
    <Button onClick={onToggle} variant="icon" aria-label="Toggle theme">
      <span className="mr-2">{theme === "dark" ? "🌙" : "☀️"}</span>
      <span className="hidden sm:inline">
        {theme === "dark" ? "Dark" : "Light"}
      </span>
    </Button>
  );
}
