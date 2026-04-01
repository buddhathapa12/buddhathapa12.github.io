import Projects from "../../sections/Projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Buddha Thapa",
  description:
    "Browse selected projects that showcase software engineering, data workflows, and bioinformatics solutions.",
};

export default function ProjectsPage(): React.ReactNode {
  return (
    <main className="py-10 sm:py-14">
      <Projects />
    </main>
  );
}
