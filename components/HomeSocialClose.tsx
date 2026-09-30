import { site } from "@/content/site";
import { Laurel } from "@/components/Laurel";

export function HomeSocialClose() {
  const { discordCta, socials } = site;

  return (
    <section
      className="mx-auto w-[1186px] max-w-full bg-cover bg-center"
      style={{ backgroundImage: "url(/marble-discord.png)" }}
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="font-poster text-4xl font-bold tracking-wide text-gold uppercase sm:text-6xl">
          {discordCta.headline}
        </h2>
        <div className="mt-8 rounded-3xl border border-gold/45 bg-white/75 px-6 py-8 text-center shadow-[0_18px_40px_rgba(138,106,47,0.08)] sm:px-10 sm:py-12">
          <Laurel className="mx-auto h-16 w-16" />
          <p className="mx-auto mt-6 max-w-md font-sans text-base leading-relaxed text-ink/70 sm:text-lg">
            {discordCta.body}
          </p>
          <a
            href={discordCta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-lg border-2 border-gold bg-marble px-5 py-3 font-rationale text-lg font-bold tracking-wide text-gold transition hover:bg-white"
          >
            {discordCta.label}
          </a>
          <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {socials.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center px-2 font-sans text-sm tracking-wide text-ink/70 transition hover:text-gold-deep"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
