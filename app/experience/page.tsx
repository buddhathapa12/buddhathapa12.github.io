import Education from "../../sections/Education";
import Experience from "../../sections/Experience";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience — Buddha Thapa",
  description:
    "Explore Buddha Thapa's education and professional experience in bioinformatics and software engineering.",
};

export default function ExperiencePage() {
  return (
    <main className="py-10 sm:py-14">
      <Education />
      <Experience />
    </main>
  );
}
