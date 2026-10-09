import Link from "next/link";
import { Icon } from "@/components/icon";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main
      className={styles.main}
      data-reveal
      id="main-content"
      suppressHydrationWarning
    >
      <h1>Looks like this page wandered off.</h1>
      <p>There’s nothing at this address. The projects are still right here.</p>
      <Link href="/#work">
        See all projects <Icon name="arrow-up-right" size={17} />
      </Link>
    </main>
  );
}
