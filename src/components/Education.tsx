import { profile } from "../data/profile";
import Card from "./ui/Card";

export default function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-24 bg-slate-50 py-16 dark:bg-slate-950"
      aria-labelledby="education-heading"
    >
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <div className="mb-10">
          <h2
            id="education-heading"
            className="text-3xl font-semibold text-slate-900 dark:text-slate-100"
          >
            Education
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-slate-600 dark:text-slate-300">
            Academic background and research focus.
          </p>
        </div>

        <div className="space-y-6">
          {profile.education.map((edu) => (
            <Card
              key={`${edu.institution}-${edu.dates}`}
              className="group border-slate-200 dark:border-slate-800"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-base font-semibold text-slate-900 dark:text-slate-100">
                  {edu.institution}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {edu.dates}
                </p>
              </div>
              <p className="mt-3 text-sm font-medium text-slate-700 dark:text-slate-300">
                {edu.degree}
                {edu.location ? ` · ${edu.location}` : ""}
              </p>
              <ul className="mt-4 space-y-2 pl-5 text-sm text-slate-600 dark:text-slate-300">
                {edu.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
