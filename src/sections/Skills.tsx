import { profile } from "../data/profile";
import Card from "../components/ui/Card";

export default function Skills(): React.ReactNode {
  return (
    <section
      id="skills"
      className="scroll-mt-24 py-16"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <div className="mb-10">
          <h2
            id="skills-heading"
            className="text-3xl font-semibold text-slate-900 dark:text-slate-100"
          >
            Skills
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-slate-600 dark:text-slate-300">
            Core tools and technologies I use to ship modern software and data
            workflows.
          </p>
        </div>

        <Card className="border-slate-200 dark:border-slate-800">
          <div className="flex flex-wrap gap-3">
            {profile.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-800 shadow-sm dark:bg-slate-900 dark:text-slate-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
