import { BookOpen } from "lucide-react";
import { profile } from "../data/profile";
import Card from "../components/ui/Card";

export default function Publications(): React.ReactNode {
  return (
    <section
      id="publications"
      className="scroll-mt-24 bg-slate-50 py-16 dark:bg-slate-950"
      aria-labelledby="publications-heading"
    >
      <div className="mb-8 space-y-4">
        <div className="flex items-center gap-3">
          <BookOpen className="h-6 w-6 text-slate-700 dark:text-slate-300" />
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
              Publications
            </p>
            <h2
              id="publications-heading"
              className="text-3xl font-semibold text-slate-900 dark:text-slate-100"
            >
              Selected scientific contributions
            </h2>
          </div>
        </div>
        <p className="mb-8 max-w-2xl text-sm text-slate-600 dark:text-slate-300">
          Concise examples of interdisciplinary research and analysis.
        </p>

        <div className="space-y-6">
          {profile.publications.map((pub) => (
            <Card
              key={`${pub.year}-${pub.citation.slice(0, 40)}`}
              className="group border-slate-200 dark:border-slate-800"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <p className="text-base font-semibold text-slate-900 dark:text-slate-100">
                  {pub.year}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {pub.citation}{" "}
                  {pub.link ? (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-semibold text-indigo-600 transition duration-200 hover:border-slate-300 hover:bg-slate-50 hover:text-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 dark:border-slate-800 dark:bg-slate-950 dark:text-indigo-200 dark:hover:border-slate-700 dark:hover:bg-slate-900 dark:hover:text-indigo-100"
                    >
                      View
                    </a>
                  ) : null}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
