import Education from "../../../sections/Education";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education — Buddha Thapa",
  description:
    "Learn more about Buddha Thapa's academic background and research focus.",
};

export default function EducationPage(): React.ReactNode {
  return (
    <main className="py-10 sm:py-14">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Education />
      </div>
    </main>
  );
}
