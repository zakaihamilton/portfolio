import Link from "next/link";
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
            ZH
          </span>
          <span>Zakai Hamilton</span>
        </Link>
        <nav aria-label="Primary navigation" className={styles.nav}>
          <Link href="/#work">Work</Link>
          <Link href="/#about">About</Link>
          <a
            href="https://github.com/zakaihamilton"
            rel="noreferrer"
            target="_blank"
          >
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
