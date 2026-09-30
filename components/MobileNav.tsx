"use client";

import { useState } from "react";
import Link from "next/link";
import { site } from "@/content/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="inline-flex h-11 w-11 items-center justify-center border border-gold/40 text-ink"
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="sr-only">{open ? "Close" : "Menu"}</span>
        <span className="flex w-4 flex-col gap-1" aria-hidden="true">
          <span
            className={`block h-px bg-ink transition ${open ? "translate-y-[5px] rotate-45" : ""}`}
          />
          <span className={`block h-px bg-ink transition ${open ? "opacity-0" : ""}`} />
          <span
            className={`block h-px bg-ink transition ${open ? "-translate-y-[5px] -rotate-45" : ""}`}
          />
        </span>
      </button>

      {open ? (
        <nav
          id="mobile-nav"
          className="absolute inset-x-0 top-full z-40 border-b border-gold/30 bg-marble/95 backdrop-blur-sm"
        >
          <ul className="mx-auto flex max-w-6xl flex-col px-4 py-3 sm:px-6">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block min-h-11 px-2 py-3 font-sans text-lg font-bold tracking-wide text-ink hover:text-gold-deep"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </div>
  );
}
