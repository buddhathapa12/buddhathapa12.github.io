import { profile } from "../data/profile";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

function getHandleFromUrl(url: string) {
  try {
    return new URL(url).pathname.replace(/^\/+|\/+$/g, "");
  } catch {
    return url;
  }
}

export default function Contact(): React.ReactNode {
  const githubHandle = getHandleFromUrl(profile.github);
  const linkedinHandle = getHandleFromUrl(profile.linkedin);

  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-slate-50 py-16 dark:bg-slate-950"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.35fr_0.9fr] lg:items-start">
          <div>
            <h2
              id="contact-heading"
              className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100"
            >
              Let’s talk about your next bioinformatics project
            </h2>
            <p className="mt-4 max-w-xl text-sm text-slate-600 dark:text-slate-300">
              Need a reliable pipeline, scalable analysis workflow, or data
              pipeline automation? Send a quick note with what you’re working on
              and I’ll follow up within 1–2 business days.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button as="a" href={`mailto:${profile.email}`} variant="primary">
                Email me
              </Button>
              <Button
                as="a"
                href={profile.cv ?? "/Buddha_Thapa_Magar_CV.pdf"}
                variant="secondary"
              >
                Download CV
              </Button>
            </div>
          </div>

          <Card className="border-slate-200/80 dark:border-slate-800/80">
            <div className="space-y-5 text-sm text-slate-600 dark:text-slate-300">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                  Contact details
                </p>
                <div className="mt-4 space-y-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-medium text-slate-700 dark:text-slate-300">
                      Email
                    </span>
                    <a
                      href={`mailto:${profile.email}`}
                      className="text-slate-600 underline hover:text-slate-900 dark:text-slate-200"
                    >
                      {profile.email}
                    </a>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-medium text-slate-700 dark:text-slate-300">
                      GitHub
                    </span>
                    <a
                      href={profile.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-600 underline hover:text-slate-900 dark:text-slate-200"
                    >
                      {githubHandle}
                    </a>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-medium text-slate-700 dark:text-slate-300">
                      LinkedIn
                    </span>
                    <a
                      href={profile.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-600 underline hover:text-slate-900 dark:text-slate-200"
                    >
                      {linkedinHandle}
                    </a>
                  </div>
                  {profile.phone ? (
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-medium text-slate-700 dark:text-slate-300">
                        Phone
                      </span>
                      <a
                        href={`tel:${profile.phone}`}
                        className="text-slate-600 underline hover:text-slate-900 dark:text-slate-200"
                      >
                        {profile.phone}
                      </a>
                    </div>
                  ) : null}
                </div>
              </div>
              {(profile.orcid ||
                profile.googleScholar ||
                profile.researchGate) && (
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                    Academic profiles
                  </p>
                  <div className="mt-4 space-y-3">
                    {profile.orcid ? (
                      <a
                        href={profile.orcid}
                        target="_blank"
                        rel="noreferrer"
                        className="block rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 transition hover:border-slate-300 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900/90 dark:text-slate-200 dark:hover:border-slate-700 dark:hover:bg-slate-800"
                      >
                        ORCID
                      </a>
                    ) : null}
                    {profile.googleScholar ? (
                      <a
                        href={profile.googleScholar}
                        target="_blank"
                        rel="noreferrer"
                        className="block rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 transition hover:border-slate-300 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900/90 dark:text-slate-200 dark:hover:border-slate-700 dark:hover:bg-slate-800"
                      >
                        Google Scholar
                      </a>
                    ) : null}
                    {profile.researchGate ? (
                      <a
                        href={profile.researchGate}
                        target="_blank"
                        rel="noreferrer"
                        className="block rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 transition hover:border-slate-300 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900/90 dark:text-slate-200 dark:hover:border-slate-700 dark:hover:bg-slate-800"
                      >
                        ResearchGate
                      </a>
                    ) : null}
                  </div>
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
