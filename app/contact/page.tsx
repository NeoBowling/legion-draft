import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: {
    absolute: "Contact | LEGION",
  },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
      <p className="font-sans text-xs tracking-[0.3em] text-gold-deep uppercase">
        Contact
      </p>
      <h1 className="mt-3 font-display text-3xl tracking-wide text-ink">
        Reach LEGION
      </h1>
      <p className="mt-4 font-sans text-base leading-relaxed text-ink/75">
        Draft contact page. For community chat, join Discord. For business or
        partnership notes, use the channels listed on{" "}
        <a
          href="https://legionorg.com/"
          className="text-gold-deep underline-offset-2 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          legionorg.com
        </a>{" "}
        until a dedicated inbox is published here.
      </p>
      <a
        href={site.discordCta.href}
        className="mt-8 inline-flex border border-gold/50 px-5 py-2.5 font-sans text-sm tracking-wide text-ink hover:bg-gold/10"
        target="_blank"
        rel="noopener noreferrer"
      >
        {site.discordCta.label}
      </a>
    </div>
  );
}
