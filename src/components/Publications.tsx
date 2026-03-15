import { profile } from "../data/profile";

export default function Publications() {
  return (
    <section
      id="publications"
      className="scroll-mt-24 pt-16 pb-20"
      aria-labelledby="publications-heading"
    >
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-6">
          <div>
            <h2
              id="publications-heading"
              className="text-2xl font-semibold text-slate-900 dark:text-slate-100 inline-block border-b-2 border-indigo-200/70 pb-2 dark:border-indigo-400/40"
            >
              Publications
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-600 dark:text-slate-300">
              Selected peer-reviewed work.
            </p>
          </div>

          <div className="space-y-8">
            {profile.publications.map((pub) => (
              <div key={`${pub.year}-${pub.citation.slice(0, 40)}`}>
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                  {pub.year}
                </p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
