import Link from "next/link";
import { Icon } from "@/components/icon";
import { ExternalLink } from "@/components/tooltip";
import { ThemeControl } from "@/components/theme-control";
import styles from "./site-header.module.css";

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <a className={styles.skipLink} href="#main-content">
        Skip to content
      </a>
      <div className={styles.inner}>
        <Link
          aria-label="Zakai Hamilton home"
          className={styles.brand}
          href="/"
        >
          <span aria-hidden="true" className={styles.mark}>
            Z
          </span>
          <span>Zakai Hamilton</span>
        </Link>
        <nav aria-label="Primary navigation" className={styles.nav}>
          <Link href="/#work">Work</Link>
          <Link href="/#about">About</Link>
          <ExternalLink
            className={styles.github}
            href="https://github.com/zakaihamilton"
            label="GitHub, opens in a new tab"
          >
            <span className={styles.githubLabel}>GitHub</span>
            <Icon name="arrow-up-right" size={16} />
          </ExternalLink>
          <ThemeControl />
        </nav>
      </div>
    </header>
  );
}
