import { GraduationCap } from "lucide-react";
import { profile } from "../data/profile";
import Card from "../components/ui/Card";

export default function Education(): React.ReactNode {
  return (
    <section
      id="education"
      className="scroll-mt-24 bg-slate-50 py-16 dark:bg-slate-950"
      aria-labelledby="education-heading"
    >
      <div className="mb-8 space-y-4">
        <div className="flex items-center gap-3">
          <GraduationCap className="h-6 w-6 text-slate-700 dark:text-slate-300" />
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
              Education
            </p>
            <h2
              id="education-heading"
              className="text-3xl font-semibold text-slate-900 dark:text-slate-100"
            >
              Formal training in computation and biology
            </h2>
          </div>
        </div>
        <p className="mb-8 max-w-2xl text-sm text-slate-600 dark:text-slate-300">
          Academic experience that supports both scientific interpretation and
          software practice.
        </p>

        <div className="space-y-6">
          {profile.education.map((edu) => (
            <Card key={edu.institution} variant="soft" className="p-6">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-base font-semibold text-slate-900 dark:text-slate-100">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {edu.dates}
                  </p>
                </div>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  {edu.degree}
                  {edu.location ? ` · ${edu.location}` : ""}
                </p>
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
                    Highlights
                  </p>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600 dark:text-slate-300">
                    {edu.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
