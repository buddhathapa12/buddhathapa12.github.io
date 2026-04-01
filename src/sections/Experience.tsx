import { Briefcase } from "lucide-react";
import { profile } from "../data/profile";
import Card from "../components/ui/Card";

export default function Experience(): React.ReactNode {
  return (
    <section
      id="experience"
      className="scroll-mt-24 bg-slate-50 py-16 dark:bg-slate-950"
      aria-labelledby="experience-heading"
    >
      <div className="mb-8 space-y-4">
        <div className="flex items-center gap-3">
          <Briefcase className="h-6 w-6 text-slate-700 dark:text-slate-300" />
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
              Experience
            </p>
            <h2
              id="experience-heading"
              className="text-3xl font-semibold text-slate-900 dark:text-slate-100"
            >
              Work that spans research and product delivery
            </h2>
          </div>
        </div>
        <p className="mb-8 max-w-2xl text-sm text-slate-600 dark:text-slate-300">
          Roles where I delivered scientific value and engineering reliability
          side by side.
        </p>

        <div className="space-y-6">
          {profile.experience.map((exp) => (
            <Card
              key={`${exp.organization}-${exp.dates}`}
              className="group border-slate-200 dark:border-slate-800"
            >
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div className="min-w-0">
                  <p className="text-base font-semibold text-slate-900 dark:text-slate-100">
                    {exp.title}, {exp.organization}
                  </p>
                  {exp.location ? (
                    <p className="mt-1 text-sm font-medium text-slate-700 dark:text-slate-300">
                      {exp.location}
                    </p>
                  ) : null}
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {exp.roleSummary}
                  </p>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {exp.dates}
                </p>
              </div>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
                    Domain & scientific impact
                  </p>
                  <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                    {exp.domainHighlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
                    Engineering & systems impact
                  </p>
                  <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                    {exp.engineeringHighlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
