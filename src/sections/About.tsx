import { profile } from "../data/profile";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 py-16"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <div className="mb-10 space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
            About
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
            Building bioinformatics systems with precision and product focus.
          </h1>
          <p className="max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300">
            {profile.about}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <Card className="border-slate-200 dark:border-slate-800">
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                  Core expertise
                </p>
                <ul className="grid gap-3 text-sm text-slate-600 dark:text-slate-300 sm:grid-cols-2">
                  {profile.skills.slice(0, 8).map((skill) => (
                    <li
                      key={skill}
                      className="rounded-2xl bg-slate-50 px-4 py-3 dark:bg-slate-900/80"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>

            <Card className="border-slate-200 dark:border-slate-800">
              <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                  Quick facts
                </p>
                <div className="grid gap-3">
                  <div className="grid gap-1 rounded-3xl bg-slate-50 p-4 dark:bg-slate-900/80">
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
                      Location
                    </p>
                    <p className="text-base font-semibold text-slate-900 dark:text-slate-100">
                      {profile.location}
                    </p>
                  </div>
                  <div className="grid gap-1 rounded-3xl bg-slate-50 p-4 dark:bg-slate-900/80">
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
                      Email
                    </p>
                    <a
                      href={`mailto:${profile.email}`}
                      className="text-base font-semibold text-slate-900 hover:text-slate-700 dark:text-slate-100"
                    >
                      {profile.email}
                    </a>
                  </div>
                  <div className="grid gap-1 rounded-3xl bg-slate-50 p-4 dark:bg-slate-900/80">
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
                      GitHub
                    </p>
                    <a
                      href={profile.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-base font-semibold text-slate-900 hover:text-slate-700 dark:text-slate-100"
                    >
                      {profile.github.replace("https://", "")}
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="border-slate-200 dark:border-slate-800">
              <div className="space-y-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                <p>
                  I help research teams and product organizations turn genomic
                  and biological data into repeatable software workflows, from
                  data ingestion through analysis, reporting, and production
                  deployment.
                </p>
                <p>
                  My work combines algorithm design, pipeline automation, and
                  cloud-aware engineering to deliver robust tools that
                  researchers can trust and scale.
                </p>
              </div>
            </Card>

            <div className="flex flex-wrap gap-3">
              <Button as="a" href="/contact" variant="primary">
                Contact me
              </Button>
              <Button as="a" href="/projects" variant="secondary">
                Explore projects
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
