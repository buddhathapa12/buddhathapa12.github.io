import Link from "next/link";
import Card from "./ui/Card";
import type { BlogPostSummary } from "../lib/blog";

type BlogCardProps = {
  post: BlogPostSummary;
};

export default function BlogCard({ post }: BlogCardProps): React.ReactNode {
  return (
    <Card className="group border-slate-200 transition duration-200 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800">
      <div className="flex flex-col gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-slate-900 dark:text-slate-100">
            {post.title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
            {post.excerpt ?? post.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            >
              {tag}
            </span>
          ))}
        </div>

        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition hover:text-slate-700 dark:text-slate-100 dark:hover:text-slate-200"
        >
          Read post <span aria-hidden>→</span>
        </Link>
      </div>
    </Card>
  );
}
