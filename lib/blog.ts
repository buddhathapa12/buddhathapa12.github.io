import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import gfm from "remark-gfm";

export type BlogPostFrontMatter = {
  title: string;
  description: string;
  date: string;
  tags: string[];
  excerpt?: string;
};

export type BlogPostSummary = BlogPostFrontMatter & {
  slug: string;
};

export type BlogPost = BlogPostSummary & {
  contentHtml: string;
};

const blogDirectory = path.join(process.cwd(), "content", "blog");

export function getBlogPostSlugs() {
  return fs
    .readdirSync(blogDirectory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export function getAllPosts(): BlogPostSummary[] {
  return getBlogPostSlugs()
    .map((slug) => {
      const source = fs.readFileSync(
        path.join(blogDirectory, `${slug}.md`),
        "utf8",
      );
      const { data } = matter(source);
      return {
        slug,
        title: data.title as string,
        description: data.description as string,
        date: data.date as string,
        tags: (data.tags as string[]) ?? [],
        excerpt: data.excerpt as string | undefined,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getBlogPostBySlug(
  slug: string,
): Promise<BlogPost | null> {
  const fullPath = path.join(blogDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const source = fs.readFileSync(fullPath, "utf8");
  const { content, data } = matter(source);
  const processedContent = await remark().use(gfm).use(html).process(content);

  return {
    slug,
    title: data.title as string,
    description: data.description as string,
    date: data.date as string,
    tags: (data.tags as string[]) ?? [],
    excerpt: data.excerpt as string | undefined,
    contentHtml: processedContent.toString(),
  };
}
