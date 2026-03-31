import { profile } from "../data/profile";

export default function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-24 pt-16 pb-20"
      aria-labelledby="education-heading"
    >
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <div className="flex flex-col gap-6">
          <div>
            <h2
              id="education-heading"
              className="text-2xl font-semibold text-slate-900 dark:text-slate-100 inline-block border-b-2 border-indigo-200/70 pb-2 dark:border-indigo-400/40"
            >
              Education
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-600 dark:text-slate-300">
              Academic background and research focus.
            </p>
          </div>

          <div className="space-y-10">
            {profile.education.map((edu) => (
              <div key={`${edu.institution}-${edu.dates}`}>
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {edu.dates}
                  </p>
                </div>
                <p className="mt-1 text-sm font-medium text-slate-700 dark:text-slate-300">
                  {edu.degree}
                  {edu.location ? ` · ${edu.location}` : ""}
                </p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-600 dark:text-slate-300">
                  {edu.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
