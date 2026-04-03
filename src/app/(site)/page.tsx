import Hero from "../../sections/Hero";
import Skills from "../../sections/Skills";
import Reproducibility from "../../sections/Reproducibility";
import ExploringNow from "../../sections/ExploringNow";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buddha Thapa | Computational Biologist & Software Engineer",
  description:
    "Buddha Thapa builds reproducible bioinformatics workflows and scalable software systems for research and engineering teams.",
};

export default function HomePage(): React.ReactNode {
  return (
    <main className="pb-10 sm:pb-14">
      <Hero />
      <Skills />
      <Reproducibility />
      <ExploringNow />
    </main>
  );
}
