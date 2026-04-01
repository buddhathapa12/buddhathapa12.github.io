import Card from "../components/ui/Card";

const skillGroups = [
  {
    title: "Data & Biology",
    skills: ["Python", "R", "NumPy", "Pandas", "Samtools", "Bowtie2", "FastQC"],
  },
  {
    title: "Software & Engineering",
    skills: ["TypeScript", "React", "Next.js", "C#", "Django", "Docker", "Git"],
  },
  {
    title: "Statistics & ML",
    skills: [
      "scikit-learn",
      "TensorFlow",
      "K-means",
      "Statistical Modeling",
      "Data Visualization",
    ],
  },
  {
    title: "Infrastructure & Tooling",
    skills: [
      "Nextflow",
      "SQL",
      "CI/CD",
      "Containers",
      "Cloud Workflows",
      "Documentation",
    ],
  },
];

export default function Skills(): React.ReactNode {
  return (
    <section
      id="skills"
      className="scroll-mt-24 py-16"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="mb-10">
          <h2
            id="skills-heading"
            className="text-3xl font-semibold text-slate-900 dark:text-slate-100"
          >
            Skills
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-slate-600 dark:text-slate-300">
            Organized by function to show how domain knowledge and engineering
            intersect.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {skillGroups.map((group) => (
            <Card
              key={group.title}
              className="border-slate-200 dark:border-slate-800"
            >
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                  {group.title}
                </h3>
                <div className="mt-5 flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-800 shadow-sm dark:bg-slate-900 dark:text-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
