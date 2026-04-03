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
          Publications, talks, and teaching artifacts that connect scientific
          questions with practical engineering decisions.
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

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <Card className="border-slate-200 dark:border-slate-800">
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
              Talks and posters
            </h3>
            <ul className="mt-4 space-y-4">
              {profile.talks.map((item) => (
                <li key={`${item.title}-${item.date}`}>
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                    {item.event} • {item.date} • {item.type}
                  </p>
                  <a
                    href={item.link ?? "https://example.com/talk-placeholder"}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex text-sm font-semibold text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
                  >
                    Slides / artifact
                  </a>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="border-slate-200 dark:border-slate-800">
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
              Teaching and mentorship
            </h3>
            <ul className="mt-4 space-y-4">
              {profile.teaching.map((item) => (
                <li key={`${item.title}-${item.date}`}>
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                    {item.format} • {item.date}
                  </p>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                    {item.summary}
                  </p>
                  <a
                    href={
                      item.link ?? "https://example.com/teaching-placeholder"
                    }
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex text-sm font-semibold text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
                  >
                    Resource
                  </a>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}
