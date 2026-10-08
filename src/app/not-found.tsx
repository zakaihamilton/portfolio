import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main className={styles.main} id="main-content">
      <p className={styles.kicker}>Page not found</p>
      <h1>
        This project
        <br />
        <em>is elsewhere.</em>
      </h1>
      <p>
        The page you’re looking for may have moved. The project index is here.
      </p>
      <Link href="/#work">
        Back to all projects <span aria-hidden="true">↗</span>
      </Link>
    </main>
  );
}
