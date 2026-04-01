import { BookOpen, Github, Linkedin, Mail, Globe } from "lucide-react";
import { profile } from "../data/profile";

const footerLinks = [
  { href: profile.github, label: "GitHub", icon: Github },
  { href: profile.linkedin, label: "LinkedIn", icon: Linkedin },
  profile.orcid && { href: profile.orcid, label: "ORCID", icon: BookOpen },
  profile.googleScholar && {
    href: profile.googleScholar,
    label: "Google Scholar",
    icon: Globe,
  },
  profile.researchGate && {
    href: profile.researchGate,
    label: "ResearchGate",
    icon: Globe,
  },
  { href: `mailto:${profile.email}`, label: "Email", icon: Mail },
].filter(Boolean) as Array<{ href: string; label: string; icon: typeof Mail }>;

export default function Footer(): React.ReactNode {
  return (
    <footer className="border-t border-slate-200 bg-white/90 py-6 text-sm text-slate-500 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90 dark:text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 sm:flex-row sm:justify-between sm:items-center">
        <p className="text-center text-xs sm:text-sm">
          © {new Date().getFullYear()} {profile.name}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {footerLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-slate-300 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300 dark:hover:border-slate-700 dark:hover:bg-slate-900"
              >
                <Icon className="h-5 w-5" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
