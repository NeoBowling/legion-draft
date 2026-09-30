import type { Metadata } from "next";
import { Cinzel, MedievalSharp, Oswald, Outfit, Rationale } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/content/site";
import "./globals.css";

const display = Cinzel({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const body = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const rationale = Rationale({
  variable: "--font-rationale-family",
  subsets: ["latin"],
  weight: "400",
});

const poster = Oswald({
  variable: "--font-poster-family",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const medieval = MedievalSharp({
  variable: "--font-medieval-family",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: `${site.shortName} — ${site.phase}`,
    template: `%s · ${site.shortName}`,
  },
  description: site.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${rationale.variable} ${poster.variable} ${medieval.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
