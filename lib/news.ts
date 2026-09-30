import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type NewsPostMeta = {
  title: string;
  date: string;
  slug: string;
  excerpt: string;
  heroLabel: string;
};

export type NewsPost = NewsPostMeta & {
  content: string;
};

const newsDirectory = path.join(process.cwd(), "content", "news");

function parsePost(fileName: string): NewsPost {
  const fullPath = path.join(newsDirectory, fileName);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);

  const slug =
    typeof data.slug === "string"
      ? data.slug
      : fileName.replace(/\.md$/, "");

  return {
    title: String(data.title ?? slug),
    date: String(data.date ?? ""),
    slug,
    excerpt: String(data.excerpt ?? ""),
    heroLabel: String(data.heroLabel ?? "News"),
    content: content.trim(),
  };
}

export function getPosts(): NewsPostMeta[] {
  if (!fs.existsSync(newsDirectory)) {
    return [];
  }

  return fs
    .readdirSync(newsDirectory)
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const { content: _content, ...meta } = parsePost(fileName);
      return meta;
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): NewsPost | undefined {
  if (!fs.existsSync(newsDirectory)) {
    return undefined;
  }

  const match = fs
    .readdirSync(newsDirectory)
    .filter((fileName) => fileName.endsWith(".md"))
    .map(parsePost)
    .find((post) => post.slug === slug);

  return match;
}
