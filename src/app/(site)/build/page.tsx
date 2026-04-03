import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How This Site Is Built - Buddha Thapa",
  description:
    "A concise overview of the technical stack and architecture decisions behind this computational biology and software engineering portfolio.",
};

const architectureItems = [
  {
    title: "Framework and rendering",
    detail:
      "Next.js App Router with static generation for content-first pages and predictable SEO metadata.",
  },
  {
    title: "Content model",
    detail:
      "Typed TypeScript data objects and Markdown posts to keep updates fast, auditable, and version-controlled.",
  },
  {
    title: "Design system",
    detail:
      "Tailwind utility styles with reusable card and button primitives for a minimal academic-professional UI.",
  },
  {
    title: "Quality and reliability",
    detail:
      "Strict TypeScript configuration and workflow-oriented content structure to reduce drift and regression risk.",
  },
];

export default function BuildPage(): React.ReactNode {
  return (
    <main className="py-10 sm:py-14">
      <section className="mx-auto max-w-5xl px-6 sm:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
          Build notes
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
          How this site is built
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300">
          This portfolio is intentionally simple: a reproducible, content-first
          architecture that highlights computational biology and engineering
          practice without visual noise.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {architectureItems.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950"
            >
              <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {item.detail}
              </p>
            </article>
          ))}
        </div>

        <section className="mt-10 rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-6 text-sm text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
          Placeholder note: architecture diagram links, deployment details, and
          benchmark snapshots will be added when final assets are ready.
        </section>
      </section>
    </main>
  );
}
