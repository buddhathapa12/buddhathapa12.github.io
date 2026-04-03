import Image from "next/image";
import { profile } from "../data/profile";
import Button from "../components/ui/Button";

export default function Hero(): React.ReactNode {
  return (
    <section
      id="hero"
      className="relative scroll-mt-24 overflow-hidden bg-slate-100 py-12 dark:bg-slate-950"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute -right-16 top-0 h-72 w-72 rounded-full bg-slate-300/30 blur-3xl dark:bg-slate-700/20" />
      <div className="pointer-events-none absolute -left-16 top-32 h-72 w-72 rounded-full bg-slate-300/20 blur-3xl dark:bg-slate-600/15" />

      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
              Computational Biology + Software Systems
            </p>
            <h1
              id="hero-heading"
              className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl"
            >
              Computational Biologist &amp; Software Engineer
            </h1>
            <p className="mt-4 text-base font-medium text-slate-700 dark:text-slate-300">
              {profile.title}
            </p>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300">
              {profile.about}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div>
                <p className="font-semibold text-slate-900 dark:text-slate-100">
                  Data-driven biology
                </p>
                <p className="mt-2 text-slate-600 dark:text-slate-400">
                  Reproducible pipelines and validated workflows for biological
                  data.
                </p>
              </div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-slate-100">
                  Scalable software systems
                </p>
                <p className="mt-2 text-slate-600 dark:text-slate-400">
                  Engineering resilient services and automation for science and
                  product teams.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button as="a" href="/about" variant="primary">
                About my approach
              </Button>
              <Button as="a" href="/projects" variant="secondary">
                View projects
              </Button>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <a
                href="/experience"
                className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 transition-all duration-200 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 dark:border-slate-800 dark:bg-slate-900/90 dark:text-slate-100 dark:focus-visible:outline-slate-100"
              >
                Experience
              </a>
              <a
                href="/education"
                className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 transition-all duration-200 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 dark:border-slate-800 dark:bg-slate-900/90 dark:text-slate-100 dark:focus-visible:outline-slate-100"
              >
                Education
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <a
                href="/contact"
                className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 transition-all duration-200 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 dark:border-slate-800 dark:bg-slate-900/90 dark:text-slate-100 dark:focus-visible:outline-slate-100"
              >
                Contact
              </a>
              <a
                href="/Buddha_Thapa_Magar_CV.pdf"
                className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 transition-all duration-200 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 dark:border-slate-800 dark:bg-slate-900/90 dark:text-slate-100 dark:focus-visible:outline-slate-100"
              >
                Download CV
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-slate-900 transition-all duration-200 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100 dark:focus-visible:outline-slate-100"
              >
                GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-slate-900 transition-all duration-200 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100 dark:focus-visible:outline-slate-100"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div>
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
