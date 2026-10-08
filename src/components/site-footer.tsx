import Link from "next/link";
import styles from "./site-footer.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p>Built with curiosity, care, and a lot of iteration.</p>
        <Link
          href="https://github.com/zakaihamilton"
          rel="noreferrer"
          target="_blank"
        >
          Zakai Hamilton on GitHub <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </footer>
  );
}
