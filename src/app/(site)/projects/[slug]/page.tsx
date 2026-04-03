import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllProjects, getProjectBySlug } from "../../../../lib/projects";

export function generateStaticParams(): Array<{ slug: string }> {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project not found - Buddha Thapa",
      description: "The requested project page does not exist.",
    };
  }

  return {
    title: `${project.name} - Projects - Buddha Thapa`,
    description: project.description,
    openGraph: {
      title: project.name,
      description: project.description,
      type: "article",
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<React.ReactNode> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="py-10 sm:py-14">
      <article className="mx-auto max-w-5xl px-6 sm:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
          Research and engineering project
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
          {project.name}
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            >
              {tag}
            </span>
          ))}
        </div>

        <section className="mt-10 space-y-6" aria-labelledby="problem-heading">
          <h2
            id="problem-heading"
            className="text-2xl font-semibold text-slate-900 dark:text-slate-100"
          >
            Problem statement
          </h2>
          <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
            {project.problemStatement ?? project.context}
          </p>
        </section>

        <section
          className="mt-10 grid gap-6 md:grid-cols-2"
          aria-label="Data and architecture"
        >
          <div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Data sources and scale
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
              {project.dataScale ??
                "Dataset scale details will be finalized soon (placeholder)."}
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600 dark:text-slate-300">
              {(
                project.dataSources ?? [
                  "Primary and secondary datasets will be listed here (placeholder).",
                ]
              ).map((source) => (
                <li key={source}>{source}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Pipeline and architecture
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
              {project.architecture ?? project.systems}
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600 dark:text-slate-300">
              {(
                project.algorithms ?? [
                  "Algorithmic details will be expanded as the project evolves (placeholder).",
                ]
              ).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section
          className="mt-10 grid gap-6 md:grid-cols-2"
          aria-label="Results and tradeoffs"
        >
          <div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Key results
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600 dark:text-slate-300">
              {(
                project.results ?? [
                  project.outcome ??
                    "Expected outcomes will be published after final validation (placeholder).",
                ]
              ).map((result) => (
                <li key={result}>{result}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Trade-offs and lessons
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600 dark:text-slate-300">
              {[...(project.tradeoffs ?? []), ...(project.lessonsLearned ?? [])]
                .length > 0
                ? [
                    ...(project.tradeoffs ?? []),
                    ...(project.lessonsLearned ?? []),
                  ].map((item) => <li key={item}>{item}</li>)
                : [
                    <li key="placeholder">
                      Trade-off analysis and lessons will be documented after
                      milestone reviews (placeholder).
                    </li>,
                  ]}
            </ul>
          </div>
        </section>

        <section className="mt-10" aria-labelledby="links-heading">
          <h2
            id="links-heading"
            className="text-2xl font-semibold text-slate-900 dark:text-slate-100"
          >
            Links and artifacts
          </h2>
          <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold">
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-slate-800 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
            >
              Repository
            </a>
            <a
              href={
                project.publicationLink ??
                "https://example.com/publication-placeholder"
              }
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-slate-800 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
            >
              Publication / preprint
            </a>
            <a
              href={project.demoLink ?? "https://example.com/demo-placeholder"}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-slate-800 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
            >
              Live demo / tool
            </a>
          </div>
        </section>

        <div className="mt-10">
          <Link
            href="/projects"
            className="text-sm font-semibold text-slate-700 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
          >
            Back to projects
          </Link>
        </div>
      </article>
    </main>
  );
}
