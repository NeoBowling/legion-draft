import Link from "next/link";
import type { NewsPostMeta } from "@/lib/news";

export function HomeLatestStory({ post }: { post: NewsPostMeta }) {
  return (
    <section className="border-b border-gold/25 bg-[#e9e0d2]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="font-poster text-4xl font-bold tracking-wide text-gold uppercase sm:text-6xl">
          Latest story
        </h2>
        <article className="mt-8 overflow-hidden rounded-3xl border border-gold/45 bg-white/75 px-6 py-8 shadow-[0_18px_40px_rgba(138,106,47,0.08)] sm:px-10 sm:py-12">
          <p className="font-sans text-xs tracking-[0.22em] text-gold-deep uppercase">
            {post.heroLabel}
            {post.date ? (
              <>
                <span className="mx-2 text-gold/60" aria-hidden="true">
                  ·
                </span>
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </>
            ) : null}
          </p>
          <h3 className="mt-4 max-w-3xl font-poster text-3xl leading-[0.95] font-bold tracking-wide text-ink uppercase sm:text-5xl">
            <Link href={`/news/${post.slug}`} className="transition hover:text-gold-deep">
              {post.title}
            </Link>
          </h3>
          <p className="mt-5 max-w-xl font-sans text-base leading-relaxed text-ink/70 sm:text-lg">
            {post.excerpt}
          </p>
          <Link
            href={`/news/${post.slug}`}
            className="mt-8 inline-flex rounded-lg border-2 border-gold bg-marble px-5 py-3 font-rationale text-lg font-bold tracking-wide text-gold transition hover:bg-white"
          >
            Read story →
          </Link>
        </article>
      </div>
    </section>
  );
}

function formatDate(date: string) {
  const parsed = new Date(`${date}T00:00:00`);
  if (Number.isNaN(parsed.getTime())) {
    return date;
  }
  return parsed.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
