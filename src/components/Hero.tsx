import { profile } from "../data/profile";

export default function Hero() {
  return (
    <section
      id="about"
      className="scroll-mt-24 pt-10 pb-16 md:pt-16 md:pb-24"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:items-start">
          <div>
            <h1
              id="hero-heading"
              className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl"
            >
              Hi, I’m {profile.name}.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              {profile.about}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                View projects
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                Contact me
              </a>
            </div>
          </div>

          <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
              Quick details
            </p>
            <dl className="mt-4 space-y-4 text-sm text-slate-600 dark:text-slate-300">
              <div>
                <dt className="font-medium text-slate-700 dark:text-slate-300">
                  Role
                </dt>
                <dd className="mt-1 text-sm text-slate-900 dark:text-slate-100">
                  {profile.title}
                </dd>
              </div>
              <div>
                <dt className="font-medium text-slate-700 dark:text-slate-300">
                  Location
                </dt>
                <dd className="mt-1 text-sm text-slate-900 dark:text-slate-100">
                  {profile.location}
                </dd>
              </div>
              <div>
                <dt className="font-medium text-slate-700 dark:text-slate-300">
                  Email
                </dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-slate-600 underline hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
                  >
                    {profile.email}
                  </a>
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}
