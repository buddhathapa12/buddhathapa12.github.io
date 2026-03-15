import { profile } from "../data/profile";

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 pt-16 pb-24"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h2
              id="contact-heading"
              className="text-2xl font-semibold text-slate-900 dark:text-slate-100"
            >
              Let’s build something together
            </h2>
            <p className="mt-3 max-w-xl text-sm text-slate-600 dark:text-slate-300">
              I’m always open to new opportunities—from genomic data pipelines
              to production‑ready software systems. Whether it’s a research
              tool, a full product build, or architectural guidance, let’s build
              something together. Let’s chat.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
              Contact
            </p>
            <dl className="mt-5 space-y-4 text-sm text-slate-600 dark:text-slate-300">
              <div className="flex justify-between">
                <dt className="font-medium text-slate-700 dark:text-slate-300">
                  Phone
                </dt>
                <dd>
                  <a
                    href={`tel:${profile.phone}`}
                    className="text-slate-600 underline hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
                  >
                    {profile.phone}
                  </a>
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-medium text-slate-700 dark:text-slate-300">
                  Email
                </dt>
                <dd>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-slate-600 underline hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
                  >
                    {profile.email}
                  </a>
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-medium text-slate-700 dark:text-slate-300">
                  GitHub
                </dt>
                <dd>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-600 underline hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
                  >
                    {new URL(profile.github).hostname}
                  </a>
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-medium text-slate-700 dark:text-slate-300">
                  LinkedIn
                </dt>
                <dd>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-600 underline hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
                  >
                    {new URL(profile.linkedin).hostname}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
