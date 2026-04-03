"use client";

import { useMemo, useState } from "react";
import BlogCard from "./BlogCard";
import type { BlogPostSummary } from "../lib/blog";

type BlogFiltersProps = {
  posts: BlogPostSummary[];
};

export default function BlogFilters({
  posts,
}: BlogFiltersProps): React.ReactNode {
  const [query, setQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string>("All");

  const tags = useMemo(() => {
    const values = new Set<string>();
    posts.forEach((post) => {
      post.tags.forEach((tag) => values.add(tag));
    });

    return ["All", ...Array.from(values).sort((a, b) => a.localeCompare(b))];
  }, [posts]);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const normalizedQuery = query.trim().toLowerCase();
      const matchesQuery =
        normalizedQuery.length === 0 ||
        `${post.title} ${post.description} ${post.tags.join(" ")}`
          .toLowerCase()
          .includes(normalizedQuery);
      const matchesTag =
        selectedTag === "All" || post.tags.includes(selectedTag);

      return matchesQuery && matchesTag;
    });
  }, [posts, query, selectedTag]);

  return (
    <div>
      <div className="mb-8 grid gap-4 rounded-3xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-950 md:grid-cols-[1fr_auto]">
        <label className="block">
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
            Search posts
          </span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search biology, algorithms, systems, tooling..."
            className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
          />
        </label>

        <label className="block md:min-w-52">
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
            Filter by tag
          </span>
          <select
            value={selectedTag}
            onChange={(event) => setSelectedTag(event.target.value)}
            className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
          >
            {tags.map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>
        </label>
      </div>

      {filteredPosts.length > 0 ? (
        <div className="grid gap-6">
          {filteredPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-6 text-sm text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
          No posts matched your search yet. Try another term or tag.
        </div>
      )}
    </div>
  );
}
