import Link from "next/link";

export default function NotFound(): React.ReactNode {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-20 text-center">
      <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
        Page not found
      </p>
      <h1 className="mt-4 text-3xl font-semibold text-slate-900 dark:text-slate-100">
        We couldn't find that page.
      </h1>
      <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-300">
        The page you're looking for either moved or doesn't exist. Return to the
        homepage to continue exploring.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-950"
      >
        Back to home
      </Link>
    </main>
  );
}
