import type { Project } from "../data/profile";
import Button from "./ui/Button";
import Card from "./ui/Card";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group transition hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            {project.name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            {project.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag: string) => (
            <span
              key={tag}
              className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <Button as="a" href={project.link} variant="ghost" className="gap-2">
          View project
          <span aria-hidden>→</span>
        </Button>
      </div>
    </Card>
  );
}
