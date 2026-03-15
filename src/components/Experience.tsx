import { profile } from "../data/profile";

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 pt-16 pb-20"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-6">
          <div>
            <h2
              id="experience-heading"
              className="text-2xl font-semibold text-slate-900 dark:text-slate-100"
            >
              Experience
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-600 dark:text-slate-300">
              Work and research roles where I've built products, models, and
              reproducible workflows.
            </p>
          </div>

          <div className="space-y-10">
            {profile.experience.map((exp) => (
              <div key={`${exp.organization}-${exp.dates}`}>
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                    {exp.title}, {exp.organization}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {exp.dates}
                  </p>
                </div>
                {exp.location ? (
                  <p className="mt-1 text-sm font-medium text-slate-700 dark:text-slate-300">
                    {exp.location}
                  </p>
                ) : null}
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-600 dark:text-slate-300">
                  {exp.highlights.map((item) => (
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
