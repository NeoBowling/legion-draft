export function HomeUpcomingEvents() {
  return (
    <section className="border-b border-gold/25 bg-[#f7f3ec]">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
        <div className="flex items-center justify-between gap-4">
          <h2 className="font-poster text-3xl font-bold tracking-wide text-gold uppercase sm:text-4xl">
            Upcoming events
          </h2>
          <div className="flex shrink-0 items-center gap-1" aria-hidden="true">
            <span className="inline-flex h-9 w-9 cursor-pointer items-center justify-center text-2xl leading-none text-gold transition-colors hover:text-gold-soft">
              ←
            </span>
            <span className="inline-flex h-9 w-9 cursor-pointer items-center justify-center text-2xl leading-none text-gold transition-colors hover:text-gold-soft">
              →
            </span>
          </div>
        </div>
        <div className="mt-5 w-fit max-w-full rounded-3xl border border-gold/45 bg-white/75 px-6 py-6 shadow-[0_18px_40px_rgba(138,106,47,0.08)] sm:px-8">
          <p className="font-sans text-base leading-relaxed text-ink/75 sm:text-lg">
            Tune in regularly to find out what is happening in Legion next.
          </p>
        </div>
      </div>
    </section>
  );
}
