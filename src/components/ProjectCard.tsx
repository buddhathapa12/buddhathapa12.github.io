import type { Project } from "../types";
import Button from "./ui/Button";
import Card from "./ui/Card";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({
  project,
}: ProjectCardProps): React.ReactNode {
  return (
    <Card className="group transition duration-200 hover:shadow-md">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            {project.name}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            {project.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag: string) => (
            <span
              key={tag}
              className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
            Scientific context
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
            {project.context}
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
            Systems perspective
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
            {project.systems}
          </p>
        </div>
      </div>

      {project.outcome ? (
        <div className="mt-6 rounded-3xl bg-slate-50 px-4 py-4 text-sm text-slate-700 dark:bg-slate-900/90 dark:text-slate-200">
          <p className="font-semibold text-slate-900 dark:text-slate-100">
            Outcome
          </p>
          <p className="mt-2 leading-7 text-slate-600 dark:text-slate-300">
            {project.outcome}
          </p>
        </div>
      ) : null}

      <div className="mt-6">
        <Button
          as="a"
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.name} repository`}
          variant="ghost"
          className="gap-2"
        >
          View repository
          <span aria-hidden>→</span>
        </Button>
      </div>
    </Card>
  );
}
