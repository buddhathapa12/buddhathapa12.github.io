import { getAllPosts } from "../../lib/blog";
import BlogCard from "../../components/BlogCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Buddha Thapa",
  description:
    "Read articles about bioinformatics, software systems, and reproducible data workflows.",
};

export default async function BlogPage(): Promise<React.ReactNode> {
  const posts = getAllPosts();

  return (
    <main className="py-10 sm:py-14">
      <section className="mx-auto max-w-5xl px-6 sm:px-8">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
            Blog
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
            Insights for research-driven software and data workflows.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
            Explore practical articles, technical notes, and examples from
            bioinformatics engineering.
          </p>
        </div>

        <div className="grid gap-6">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </main>
  );
}
