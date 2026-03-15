import { profile } from "../data/profile";

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 pt-16 pb-20"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-6">
          <div>
            <h2
              id="skills-heading"
              className="text-2xl font-semibold text-slate-900 dark:text-slate-100 inline-block border-b-2 border-indigo-200/70 pb-2 dark:border-indigo-400/40"
            >
              Skills
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-600 dark:text-slate-300">
              Core tools and technologies I use to ship modern frontend
              experiences.
            </p>
          </div>
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
        </div>
      </div>
    </section>
  );
}
