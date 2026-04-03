import { BookOpen, Briefcase, Info, Sparkles } from "lucide-react";
import Card from "../components/ui/Card";

export default function AboutOverview(): React.ReactNode {
  return (
    <section
      id="overview"
      aria-labelledby="overview-heading"
      className="scroll-mt-24 py-12"
    >
      <div className="mb-8 space-y-4">
        <div className="flex items-center gap-3">
          <Info className="h-6 w-6 text-slate-700 dark:text-slate-300" />
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
              Overview
            </p>
            <h2
              id="overview-heading"
              className="text-3xl font-semibold text-slate-900 dark:text-slate-100"
            >
              Background and value proposition
            </h2>
          </div>
        </div>
        <p className="max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300">
          I bring biology and production systems together by designing workflows
          that are traceable, software-friendly, and built to move from analysis
          into real-world use.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.9fr_0.9fr]">
        <Card variant="soft" className="p-6">
          <div className="flex items-center gap-3 text-slate-700 dark:text-slate-200">
            <Sparkles className="h-5 w-5" />
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
              Overview
            </p>
          </div>
          <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-slate-100">
            Hybrid identity
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
            I help teams move from raw biology and messy data to stable,
            auditable systems that support both research and production.
          </p>
        </Card>

        <Card variant="soft" className="p-6">
          <div className="flex items-center gap-3 text-slate-700 dark:text-slate-200">
            <Briefcase className="h-5 w-5" />
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
              Value
            </p>
          </div>
          <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-slate-100">
            Credible delivery
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
            I build tools and workflows that help teams trust results, ship
            faster, and keep biology domain knowledge intact.
          </p>
        </Card>

        <Card variant="soft" className="p-6">
          <div className="flex items-center gap-3 text-slate-700 dark:text-slate-200">
            <BookOpen className="h-5 w-5" />
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
              Approach
            </p>
          </div>
          <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-slate-100">
            Practical, research-driven systems
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
            I blend domain-aware methods with product-grade practices:
            reproducibility, automation, and strong documentation.
          </p>
        </Card>
      </div>
    </section>
  );
}
