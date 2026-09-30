import type { Metadata } from "next";
import Link from "next/link";
import { getPosts } from "@/lib/news";

export const metadata: Metadata = {
  title: {
    absolute: "News | LEGION",
  },
};

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

export default function NewsPage() {
  const posts = getPosts();

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="font-sans text-xs tracking-[0.3em] text-gold-deep uppercase">
        News
      </p>
      <h1 className="mt-3 font-display text-3xl tracking-wide text-ink sm:text-4xl">
        Latest from LEGION
      </h1>
      <p className="mt-4 max-w-xl font-sans text-base leading-relaxed text-ink/75">
        Announcements, community notes, and merch spotlights from the
        collective.
      </p>

      <ul className="mt-12 divide-y divide-gold/25 border-y border-gold/25">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/news/${post.slug}`}
              className="group block py-8 transition-colors hover:bg-gold/5"
            >
              <p className="font-sans text-xs tracking-[0.25em] text-gold-deep uppercase">
                {post.heroLabel}
                {post.date ? (
                  <>
                    <span className="mx-2 text-gold/50" aria-hidden>
                      ·
                    </span>
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                  </>
                ) : null}
              </p>
              <h2 className="mt-2 font-display text-2xl tracking-wide text-ink group-hover:text-gold-deep">
                {post.title}
              </h2>
              {post.excerpt ? (
                <p className="mt-2 font-sans text-base leading-relaxed text-ink/70">
                  {post.excerpt}
                </p>
              ) : null}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
