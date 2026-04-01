import Hero from "../sections/Hero";
import Skills from "../sections/Skills";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buddha Thapa | Bioinformatics Engineer",
  description:
    "Buddha Thapa builds reproducible bioinformatics workflows and software systems for research-driven teams.",
};

export default function HomePage() {
  return (
    <main className="py-10 sm:py-14">
      <Hero />
      <Skills />
    </main>
  );
}
