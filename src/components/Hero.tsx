import { profile } from "../data/profile";
import Button from "./ui/Button";

export default function Hero() {
  return (
    <section
      id="about"
      className="relative scroll-mt-24 overflow-hidden bg-gradient-to-br from-indigo-50 via-fuchsia-50 to-emerald-50 py-14 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute -right-16 top-0 h-72 w-72 rounded-full bg-indigo-300/30 blur-3xl dark:bg-indigo-500/20" />
      <div className="pointer-events-none absolute -left-16 top-32 h-72 w-72 rounded-full bg-emerald-300/30 blur-3xl dark:bg-emerald-500/20" />

      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.25fr_0.9fr] lg:items-center">
          <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-xl shadow-slate-200/50 backdrop-blur dark:border-slate-800 dark:bg-slate-950/85">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-indigo-600 dark:text-indigo-300">
              Bioinformatics engineering
            </p>
            <h1
              id="hero-heading"
              className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl"
            >
              Hi, I’m {profile.name}.
            </h1>
            <p className="mt-4 text-lg font-semibold text-slate-700 dark:text-slate-300">
              {profile.title}
            </p>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300">
              {profile.about}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm dark:border-slate-800 dark:bg-slate-900">
                <p className="font-semibold text-slate-900 dark:text-slate-100">
                  Research-driven workflows
                </p>
                <p className="mt-2 text-slate-600 dark:text-slate-400">
                  Data pipelines, genome assembly, and reproducible analysis.
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm dark:border-slate-800 dark:bg-slate-900">
                <p className="font-semibold text-slate-900 dark:text-slate-100">
                  Product-focused delivery
                </p>
                <p className="mt-2 text-slate-600 dark:text-slate-400">
                  Building software that scales for research teams and
                  enterprise systems.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button as="a" href="#contact" variant="primary">
                Talk about a project
              </Button>
              <Button as="a" href="#projects" variant="secondary">
                View projects
              </Button>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-6 shadow-xl shadow-slate-200/40 backdrop-blur dark:border-slate-800 dark:bg-slate-950/85">
            <img
              src="/buddha_thapa_profile.jpg"
              alt={`${profile.name} profile`}
              className="h-full w-full rounded-3xl object-cover shadow-2xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
