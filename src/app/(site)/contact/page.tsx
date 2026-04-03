import Contact from "../../../sections/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Buddha Thapa",
  description:
    "Get in touch with Buddha Thapa for bioinformatics, software, and data workflow projects.",
};

export default function ContactPage(): React.ReactNode {
  return (
    <main className="py-10 sm:py-14">
      <Contact />
    </main>
  );
}
