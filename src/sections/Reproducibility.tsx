import { profile } from "../data/profile";

export default function Reproducibility(): React.ReactNode {
  return (
    <section
      id="reproducibility"
      className="scroll-mt-24 bg-slate-50 py-12 dark:bg-slate-950"
      aria-labelledby="reproducibility-heading"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
            Reproducibility and systems
          </p>
          <h2
            id="reproducibility-heading"
            className="mt-3 text-3xl font-semibold text-slate-900 dark:text-slate-100"
          >
            Research workflows engineered for repeatability and scale
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-300">
            These practices show how software engineering supports reproducible
            science, from workflow orchestration to CI/CD and containerized
            execution.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {profile.reproducibility.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {item.summary}
              </p>

              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tools used">
                {item.tools.map((tool) => (
                  <li
                    key={tool}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-slate-900 dark:text-slate-200"
                  >
                    {tool}
                  </li>
                ))}
              </ul>

              <a
                href={item.placeholderDiagram}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex text-sm font-semibold text-slate-700 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
              >
                Placeholder diagram
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
