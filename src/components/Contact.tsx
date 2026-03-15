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
              className="text-2xl font-semibold text-slate-900 dark:text-slate-100"
            >
              Let’s talk about your next bioinformatics project
            </h2>
            <p className="mt-3 max-w-xl text-sm text-slate-600 dark:text-slate-300">
              Need a reliable pipeline, scalable analysis workflow, or data
              pipeline automation? Send a quick note with what you’re working on
              and I’ll follow up within 1–2 business days.
            </p>
          </div>
          <Card>
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
              Reach me
            </p>
            <dl className="mt-5 space-y-4 text-sm text-slate-600 dark:text-slate-300">
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
