import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, getPosts } from "@/lib/news";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) {
    return { title: { absolute: "News | LEGION" } };
  }
  return {
    title: {
      absolute: `${post.title} | LEGION`,
    },
    description: post.excerpt || undefined,
  };
}

function formatDate(date: string): string {
  if (!date) return "";
  const parsed = new Date(`${date}T00:00:00`);
  if (Number.isNaN(parsed.getTime())) return date;
  return parsed.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Small sanitized markdown → HTML for trusted local posts (no CMS). */
function markdownToHtml(markdown: string): string {
  const escaped = escapeHtml(markdown.trim());
  const withInline = escaped
    .replace(
      /\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g,
      '<a href="$2" rel="noopener noreferrer" class="text-gold-deep underline-offset-2 hover:underline">$1</a>',
    )
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>");

  return withInline
    .split(/\n{2,}/)
    .map((block) => {
      const trimmed = block.trim();
      if (!trimmed) return "";
      const heading = trimmed.match(/^(#{1,3})\s+(.+)$/);
      if (heading && !trimmed.includes("\n")) {
        const level = heading[1].length;
        return `<h${level} class="font-display tracking-wide text-ink">${heading[2]}</h${level}>`;
      }
      const paragraph = trimmed.replace(/\n/g, "<br />");
      return `<p>${paragraph}</p>`;
    })
    .filter(Boolean)
    .join("\n");
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const html = markdownToHtml(post.content);

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="font-sans text-xs tracking-[0.3em] text-gold-deep uppercase">
        <Link href="/news" className="hover:underline">
          News
        </Link>
        {post.heroLabel ? (
          <>
            <span className="mx-2 text-gold/50" aria-hidden>
              ·
            </span>
            {post.heroLabel}
          </>
        ) : null}
      </p>
      <h1 className="mt-3 font-display text-3xl tracking-wide text-ink sm:text-4xl">
        {post.title}
      </h1>
      {post.date ? (
        <time
          dateTime={post.date}
          className="mt-3 block font-sans text-sm text-ink/60"
        >
          {formatDate(post.date)}
        </time>
      ) : null}

      <div
        className="mt-10 space-y-4 font-sans text-base leading-relaxed text-ink/80 [&_a]:text-gold-deep [&_em]:italic [&_h2]:mt-8 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:tracking-wide [&_h2]:text-ink [&_h3]:mt-6 [&_h3]:font-display [&_h3]:text-xl [&_h3]:tracking-wide [&_h3]:text-ink [&_strong]:font-semibold [&_strong]:text-ink"
        dangerouslySetInnerHTML={{ __html: html }}
      />

      <p className="mt-12 border-t border-gold/25 pt-8">
        <Link
          href="/news"
          className="font-sans text-sm tracking-wide text-gold-deep underline-offset-2 hover:underline"
        >
          ← All news
        </Link>
      </p>
    </article>
  );
}
