import type { Project } from "../types";
import Button from "./ui/Button";
import Card from "./ui/Card";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group transition duration-200 hover:shadow-md">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            {project.name}
          </h3>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">
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

      <div className="mt-6">
        <Button
          as="a"
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View project (opens in new tab)"
          variant="ghost"
          className="gap-2"
        >
          View project
          <span aria-hidden>→</span>
        </Button>
      </div>
    </Card>
  );
}
