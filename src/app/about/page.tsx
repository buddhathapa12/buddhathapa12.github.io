import About from "../../sections/About";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Buddha Thapa",
  description:
    "Discover Buddha Thapa's hybrid profile: computational biology, software engineering, publications, and visual talk artifacts.",
};

export default function AboutPage(): React.ReactNode {
  return (
    <main className="py-10 sm:py-14">
      <About />
    </main>
  );
}
