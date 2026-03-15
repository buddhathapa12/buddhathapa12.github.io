import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/80 px-6 py-10 text-center text-sm text-slate-500 dark:border-slate-800 dark:bg-slate-950/60 dark:text-slate-400">
      <p>
        Built with React + TypeScript + Tailwind • © {new Date().getFullYear()}{" "}
        {profile.name}
      </p>
      <p className="mt-2">
        Designed with accessibility and performance in mind.
      </p>
    </footer>
  );
}
