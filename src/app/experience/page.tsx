import Experience from "../../sections/Experience";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience — Buddha Thapa",
  description:
    "Explore Buddha Thapa's professional experience in bioinformatics and software engineering.",
};

export default function ExperiencePage(): React.ReactNode {
  return (
    <main className="py-10 sm:py-14">
      <Experience />
    </main>
  );
}
