import Link from "next/link";
import { Monitor, Sparkles } from "lucide-react";
import { profile } from "../data/profile";

export default function AboutPosters(): React.ReactNode {
  return (
    <section
      id="posters"
      aria-labelledby="posters-heading"
      className="scroll-mt-24 bg-slate-50 py-16 dark:bg-slate-950"
    >
      <div className="mb-8 space-y-4">
        <div className="flex items-center gap-3">
          <Monitor className="h-6 w-6 text-slate-700 dark:text-slate-300" />
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
              Posters & Talks
            </p>
            <h2
              id="posters-heading"
              className="text-3xl font-semibold text-slate-900 dark:text-slate-100"
            >
              Visual artifacts and conference reflections
            </h2>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {profile.talks.map((poster) => (
            <a
              key={poster.title}
              href={poster.link ?? "https://example.com/poster-placeholder"}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${poster.title}`}
              className="group rounded-3xl border border-slate-200 bg-white p-6 transition duration-200 hover:border-slate-300 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 dark:border-slate-800 dark:bg-slate-950 dark:hover:border-slate-700 dark:hover:bg-slate-900"
            >
              <div className="flex items-center justify-between gap-3">
                <p className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-700 dark:bg-slate-900 dark:text-slate-200">
                  {poster.type}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {poster.date}
                </p>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-slate-100">
                {poster.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                Presented at {poster.event}. Placeholder thumbnails, conference
                logos, and final downloadable assets will be added here.
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-indigo-600 transition group-hover:text-indigo-700 dark:text-indigo-300 dark:group-hover:text-indigo-200">
                <span>Open PDF</span>
                <Sparkles className="h-4 w-4" />
              </div>
              <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
                Also reflected in the blog post you can read after viewing.
              </p>
            </a>
          ))}
        </div>
        <div className="mt-6 text-sm text-slate-600 dark:text-slate-300">
          <Link
            href="/blog/bioinformatics-workflows"
            className="font-semibold text-indigo-600 hover:text-indigo-700 dark:text-indigo-300 dark:hover:text-indigo-100"
          >
            Read the workflow reflection post
          </Link>
        </div>
      </div>
    </section>
  );
}
