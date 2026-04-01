import Image from "next/image";
import { profile } from "../data/profile";
import Button from "../components/ui/Button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative scroll-mt-24 overflow-hidden bg-slate-100 py-16 dark:bg-slate-950"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute -right-16 top-0 h-72 w-72 rounded-full bg-slate-300/30 blur-3xl dark:bg-slate-700/20" />
      <div className="pointer-events-none absolute -left-16 top-32 h-72 w-72 rounded-full bg-slate-300/20 blur-3xl dark:bg-slate-600/15" />

      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="rounded-[1.5rem] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-950/95">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
              Bioinformatics engineering
            </p>
            <h1
              id="hero-heading"
              className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl"
            >
              Hi, I’m {profile.name}.
            </h1>
            <p className="mt-4 text-base font-medium text-slate-700 dark:text-slate-300">
              {profile.title}
            </p>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300">
              {profile.about}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm dark:border-slate-800 dark:bg-slate-900/90">
                <p className="font-semibold text-slate-900 dark:text-slate-100">
                  Research-driven workflows
                </p>
                <p className="mt-2 text-slate-600 dark:text-slate-400">
                  Data pipelines, genome assembly, and reproducible analysis.
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm dark:border-slate-800 dark:bg-slate-900/90">
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
              <Button as="a" href="/contact" variant="primary">
                Talk about a project
              </Button>
              <Button as="a" href="/projects" variant="secondary">
                View projects
              </Button>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-950/95">
            <Image
              src="/buddha_thapa_profile.jpg"
              alt={`${profile.name} profile`}
              width={720}
              height={720}
              className="h-full w-full rounded-[1.25rem] object-cover"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
