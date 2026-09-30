import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: {
    absolute: "Privacy | LEGION",
  },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
      <p className="font-sans text-xs tracking-[0.3em] text-gold-deep uppercase">
        Privacy
      </p>
      <h1 className="mt-3 font-display text-3xl tracking-wide text-ink">
        Privacy note
      </h1>
      <div className="mt-6 space-y-4 font-sans text-base leading-relaxed text-ink/75">
        <p>
          Draft privacy summary for the {site.name} site. This static draft does
          not run accounts, search, or a cart.
        </p>
        <p>
          Hosting and analytics providers may collect standard request logs.
          External links (Discord, socials, and the shop) are governed by those
          services&apos; own policies.
        </p>
        <p>
          Replace this page with a full privacy policy before any production
          launch that collects personal data.
        </p>
      </div>
    </div>
  );
}
