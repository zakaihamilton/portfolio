import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Zakai Hamilton — Independent software maker",
    template: "%s — Zakai Hamilton",
  },
  description:
    "A portfolio of products, games, and developer tools built by Zakai Hamilton.",
  openGraph: {
    title: "Zakai Hamilton — Independent software maker",
    description:
      "A portfolio of products, games, and developer tools built by Zakai Hamilton.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
