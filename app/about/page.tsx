import About from "../../sections/About";
import Publications from "../../sections/Publications";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Buddha Thapa",
  description:
    "Learn more about Buddha Thapa's bioinformatics and software systems experience.",
};

export default function AboutPage() {
  return (
    <main className="py-10 sm:py-14">
      <About />
      <Publications />
    </main>
  );
}
