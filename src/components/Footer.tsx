import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/80 px-6 py-10 text-center text-sm text-slate-500 dark:border-slate-800 dark:bg-slate-950/60 dark:text-slate-400">
      <p>
        © {new Date().getFullYear()} {profile.name}
      </p>
    </footer>
  );
}
