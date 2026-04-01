import { profile } from "../data/profile";
import Card from "../components/ui/Card";

export default function Publications(): React.ReactNode {
  return (
    <section
      id="publications"
      className="scroll-mt-24 bg-slate-50 py-16 dark:bg-slate-950"
      aria-labelledby="publications-heading"
    >
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <div className="mb-10">
          <h2
            id="publications-heading"
            className="text-3xl font-semibold text-slate-900 dark:text-slate-100"
          >
            Publications
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-slate-600 dark:text-slate-300">
            Selected peer-reviewed work.
          </p>
        </div>

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
                      className="font-semibold text-indigo-600 hover:text-indigo-700 dark:text-indigo-200 dark:hover:text-indigo-100"
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
