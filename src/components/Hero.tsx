import { profile } from "../data/profile";
import Button from "./ui/Button";

export default function Hero() {
  return (
    <section
      id="about"
      className="scroll-mt-24 pt-10 pb-16 md:pt-16 md:pb-24 bg-gradient-to-br from-indigo-50 via-fuchsia-50 to-emerald-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <div className="grid gap-8 lg:gap-10 lg:grid-cols-10 lg:items-start">
          <div className="flex items-start justify-center lg:col-span-4">
            <img
              src="/buddha_thapa_profile.jpg"
              alt={`${profile.name} profile`}
              className="w-full max-w-[320px] rounded-3xl border-4 border-indigo-200 object-cover shadow-lg dark:border-indigo-500/50"
              loading="lazy"
            />
          </div>

          <div className="lg:col-span-6">
            <h1
              id="hero-heading"
              className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl inline-block border-b-4 border-indigo-200/70 pb-2 dark:border-indigo-400/40"
            >
              Hi, I’m {profile.name}.
            </h1>
            <p className="mt-3 text-base font-semibold text-slate-600 dark:text-slate-400">
              {profile.title}
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              {profile.about}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button as="a" href="#contact" variant="primary">
                Talk about a project
              </Button>
              <Button as="a" href="#projects" variant="secondary">
                View projects
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
