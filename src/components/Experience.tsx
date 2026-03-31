import { profile } from "../data/profile";
import Card from "./ui/Card";

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 py-16"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <div className="mb-10">
          <h2
            id="experience-heading"
            className="text-3xl font-semibold text-slate-900 dark:text-slate-100"
          >
            Experience
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-slate-600 dark:text-slate-300">
            Work and research roles where I've built products, models, and
            reproducible workflows.
          </p>
        </div>

        <div className="space-y-6">
          {profile.experience.map((exp) => (
            <Card
              key={`${exp.organization}-${exp.dates}`}
              className="group border-slate-200 dark:border-slate-800"
            >
              <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-base font-semibold text-slate-900 dark:text-slate-100">
                    {exp.title}, {exp.organization}
                  </p>
                  {exp.location ? (
                    <p className="mt-1 text-sm font-medium text-slate-700 dark:text-slate-300">
                      {exp.location}
                    </p>
                  ) : null}
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {exp.dates}
                </p>
              </div>
              <ul className="mt-4 space-y-2 pl-5 text-sm text-slate-600 dark:text-slate-300">
                {exp.highlights.map((item) => (
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
