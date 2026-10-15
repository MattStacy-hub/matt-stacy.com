import type { Metadata, Viewport } from "next";
import { Archivo, Fraunces } from "next/font/google";
import { SITE_CONFIG, SEO_CONFIG } from "@/data/site";
import "./globals.css";

/*
 * The brand's two families, and no third (guidelines, "Typography").
 * next/font downloads them at build time and serves them from this site, so
 * visitors' browsers never contact Google.
 */
const archivo = Archivo({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: SEO_CONFIG.defaultTitle,
    template: SEO_CONFIG.titleTemplate,
  },
  description: SEO_CONFIG.defaultDescription,
  authors: [{ name: "Matt Stacy", url: SITE_CONFIG.url }],
  creator: "Matt Stacy",
};

export const viewport: Viewport = {
  themeColor: "#2a211c",
  viewportFit: "cover",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${archivo.variable} ${fraunces.variable}`}>
      <body>{children}</body>
    </html>
  );
}
