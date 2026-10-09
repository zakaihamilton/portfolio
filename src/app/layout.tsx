import type { Metadata } from "next";
import { Newsreader, Source_Sans_3 } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const portfolioBootstrap = `(()=>{var root=document.documentElement;var theme="system";try{var stored=localStorage.getItem("portfolio-theme");if(stored==="light"||stored==="dark"||stored==="system")theme=stored}catch{}root.dataset.theme=theme;if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches&&"IntersectionObserver"in window&&"MutationObserver"in window){root.dataset.motion="ready";var observer=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(entry.isIntersecting){entry.target.setAttribute("data-visible","true");observer.unobserve(entry.target)}})},{threshold:.12,rootMargin:"0px 0px -5% 0px"});var observe=function(node){if(node.nodeType!==1)return;if(node.matches("[data-reveal]")&&!node.hasAttribute("data-visible"))observer.observe(node);node.querySelectorAll("[data-reveal]:not([data-visible])").forEach(function(item){observer.observe(item)})};var start=function(){observe(document.body);var changes=new MutationObserver(function(records){records.forEach(function(record){record.addedNodes.forEach(observe)})});changes.observe(document.body,{childList:true,subtree:true})};if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",start,{once:true});else start()}})();`;

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-newsreader",
  axes: ["opsz"],
});

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans-3",
});

export const metadata: Metadata = {
  title: {
    default: "Zakai Hamilton — Software with a curious streak",
    template: "%s — Zakai Hamilton",
  },
  description:
    "Games, developer tools, publishing, analytics, and other useful systems by Zakai Hamilton.",
  openGraph: {
    title: "Zakai Hamilton — Software with a curious streak",
    description:
      "Games, developer tools, publishing, analytics, and other useful systems by Zakai Hamilton.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${newsreader.variable} ${sourceSans3.variable}`}
      data-theme="system"
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: portfolioBootstrap }}
          id="portfolio-preferences"
        />
      </head>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
