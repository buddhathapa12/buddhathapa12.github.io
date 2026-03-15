import { profile } from "../data/profile";
import Card from "./ui/Card";

function getHandleFromUrl(url: string) {
  try {
    return new URL(url).pathname.replace(/^\/+|\/+$/g, "");
  } catch {
    return url;
  }
}

export default function Contact() {
  const githubHandle = getHandleFromUrl(profile.github);
  const linkedinHandle = getHandleFromUrl(profile.linkedin);

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
              className="text-2xl font-semibold text-slate-900 dark:text-slate-100 inline-block border-b-2 border-indigo-200/70 pb-2 dark:border-indigo-400/40"
            >
              Let’s talk about your next bioinformatics project
            </h2>
            <p className="mt-3 max-w-xl text-sm text-slate-600 dark:text-slate-300">
              Need a reliable pipeline, scalable analysis workflow, or data
              pipeline automation? Send a quick note with what you’re working on
              and I’ll follow up within 1–2 business days.
            </p>
          </div>
          <Card variant="soft">
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
              Reach me
            </p>
            <dl className="mt-5 space-y-4 text-sm text-slate-600 dark:text-slate-300">
              <div className="flex justify-between">
                <dt className="flex items-center gap-2 font-medium text-slate-700 dark:text-slate-300">
                  <span
                    className="h-4 w-4 text-indigo-500 dark:text-indigo-400"
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                      <path
                        d="M4 6.75C4 5.784 4.784 5 5.75 5h12.5c.966 0 1.75.784 1.75 1.75v11.5c0 .966-.784 1.75-1.75 1.75H5.75A1.75 1.75 0 0 1 4 18.25V6.75Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="m19 7-7 5-7-5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
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
                <dt className="flex items-center gap-2 font-medium text-slate-700 dark:text-slate-300">
                  <span
                    className="h-4 w-4 text-indigo-500 dark:text-indigo-400"
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                      <path
                        d="M5.25 4.75h13.5a1 1 0 0 1 1 1v12.5a1 1 0 0 1-1 1H5.25a1 1 0 0 1-1-1V5.75a1 1 0 0 1 1-1Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M8.75 8.75h6.5M8.75 12h6.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
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
                <dt className="flex items-center gap-2 font-medium text-slate-700 dark:text-slate-300">
                  <span
                    className="h-4 w-4 text-indigo-500 dark:text-indigo-400"
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                      <path
                        d="M12 2a10 10 0 0 0-3.16 19.5c.5.1.68-.22.68-.5v-1.7c-2.77.6-3.36-1.3-3.36-1.3-.45-1.16-1.1-1.48-1.1-1.48-.9-.62.07-.6.07-.6 1 .07 1.53 1.04 1.53 1.04.9 1.53 2.36 1.08 2.94.83.1-.64.35-1.08.63-1.33-2.22-.25-4.55-1.12-4.55-4.97 0-1.1.39-2 1.03-2.7-.1-.25-.45-1.28.1-2.67 0 0 .84-.27 2.75 1.03a9.52 9.52 0 0 1 5 0c1.9-1.3 2.75-1.03 2.75-1.03.55 1.39.2 2.42.1 2.67.64.7 1.03 1.6 1.03 2.7 0 3.86-2.34 4.72-4.57 4.97.36.3.68.89.68 1.8v2.66c0 .28.18.6.69.5A10 10 0 0 0 12 2Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  GitHub
                </dt>
                <dd>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-600 underline hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
                  >
                    {githubHandle}
                  </a>
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="flex items-center gap-2 font-medium text-slate-700 dark:text-slate-300">
                  <span
                    className="h-4 w-4 text-indigo-500 dark:text-indigo-400"
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                      <path
                        d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm.02 7.5H2v11h3V11Zm7.5 0h-3v11h3v-6.25c0-1.66 2-1.79 2 0V22h3v-6.75c0-3.67-3.94-3.53-5 0V11Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  LinkedIn
                </dt>
                <dd>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-600 underline hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
                  >
                    {linkedinHandle}
                  </a>
                </dd>
              </div>
            </dl>
          </Card>
        </div>
      </div>
    </section>
  );
}
