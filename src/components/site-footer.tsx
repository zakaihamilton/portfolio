import { Icon } from "@/components/icon";
import { ExternalLink } from "@/components/tooltip";
import styles from "./site-footer.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p>Made with curiosity. Refined one detail at a time.</p>
        <ExternalLink
          href="https://github.com/zakaihamilton"
          label="Zakai Hamilton on GitHub, opens in a new tab"
        >
          Find me on GitHub <Icon name="arrow-up-right" size={17} />
        </ExternalLink>
      </div>
    </footer>
  );
}
