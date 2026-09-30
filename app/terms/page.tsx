import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: {
    absolute: "Terms | LEGION",
  },
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
      <p className="font-sans text-xs tracking-[0.3em] text-gold-deep uppercase">
        Terms
      </p>
      <h1 className="mt-3 font-display text-3xl tracking-wide text-ink">
        Terms of use
      </h1>
      <div className="mt-6 space-y-4 font-sans text-base leading-relaxed text-ink/75">
        <p>
          This is draft placeholder copy for the {site.name} website. It is not
          legal advice and does not replace a reviewed terms of service.
        </p>
        <p>
          Content on this site is provided for informational purposes. Merch
          purchases are handled on the live store at legionorg.com under that
          store&apos;s checkout terms.
        </p>
        <p>
          Sample player names and partner slots are placeholders and do not
          imply real affiliations.
        </p>
      </div>
    </div>
  );
}
