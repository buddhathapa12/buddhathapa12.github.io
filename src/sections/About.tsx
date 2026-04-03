import Button from "../components/ui/Button";
import AboutOverview from "./AboutOverview";
import AboutPosters from "./AboutPosters";
import Card from "../components/ui/Card";
import Experience from "./Experience";
import Education from "./Education";
import Publications from "./Publications";

const sectionLinks = [
  { href: "#overview", label: "Overview" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#publications", label: "Publications" },
  { href: "#posters", label: "Posters & Talks" },
];

export default function About(): React.ReactNode {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-slate-50 py-12 dark:bg-slate-950"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="mb-12 space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
            About
          </p>
          <h1
            id="about-heading"
            className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl"
          >
            Computational biology meets engineering practice.
          </h1>
          <p className="max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300">
            I turn complex biological data into trusted results by combining
            research-informed analysis with production-grade software systems.
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-slate-600 dark:text-slate-300">
            <span className="rounded-full bg-slate-100 px-3 py-1 font-semibold text-slate-800 dark:bg-slate-900 dark:text-slate-200">
              Bioinformatics
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1 font-semibold text-slate-800 dark:bg-slate-900 dark:text-slate-200">
              Reproducible workflows
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1 font-semibold text-slate-800 dark:bg-slate-900 dark:text-slate-200">
              Systems engineering
            </span>
          </div>
        </div>

        <div className="mb-12 flex flex-wrap gap-3 text-sm">
          {sectionLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:hover:border-slate-700 dark:hover:bg-slate-900"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="space-y-6">
          <AboutOverview />
          <Experience />
          <Education />
          <Publications />
          <AboutPosters />
          <Card
            variant="soft"
            className="border-slate-200 dark:border-slate-800"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Want a narrower view? Explore projects or start a conversation
                about your next biology system.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button as="a" href="/projects" variant="secondary">
                  View projects
                </Button>
                <Button as="a" href="/contact" variant="ghost">
                  Contact
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
