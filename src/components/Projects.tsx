import { Suspense } from "react";
import { profile } from "../data/profile";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 pt-16 pb-20"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-6">
          <div>
            <h2
              id="projects-heading"
              className="text-2xl font-semibold text-slate-900 dark:text-slate-100"
            >
              Selected projects
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-600 dark:text-slate-300">
              A curated selection of recent work that highlights technical
              craftsmanship and UX focus.
            </p>
          </div>

          <Suspense
            fallback={
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Loading projects…
              </p>
            }
          >
            <div className="grid gap-6 md:grid-cols-2">
              {profile.projects.map((project) => (
                <ProjectCard key={project.name} project={project} />
              ))}
            </div>
          </Suspense>
        </div>
      </div>
    </section>
  );
}
