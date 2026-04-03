import { profile } from "../data/profile";

export default function ExploringNow(): React.ReactNode {
  return (
    <section
      id="exploring-now"
      className="scroll-mt-24 py-12"
      aria-labelledby="exploring-now-heading"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
            What I am exploring now
          </p>
          <h2
            id="exploring-now-heading"
            className="mt-3 text-2xl font-semibold text-slate-900 dark:text-slate-100"
          >
            Current questions and experiments
          </h2>
          <ul className="mt-5 list-disc space-y-3 pl-5 text-sm leading-7 text-slate-600 dark:text-slate-300">
            {profile.exploringNow.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
