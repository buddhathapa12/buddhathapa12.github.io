export default function SkipLink(): React.ReactNode {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:border focus:border-indigo-400 focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-indigo-900 dark:focus:bg-slate-900 dark:focus:text-indigo-200"
    >
      Skip to content
    </a>
  );
}
