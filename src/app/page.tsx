import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { ProjectVisual } from "@/components/project-visual";
import { formattedProjectCount, projectCount, projects } from "@/data/projects";
import styles from "./page.module.css";

export default function HomePage() {
  const featuredProjects = [projects[0], projects[1], projects[5]];

  return (
    <main id="main-content">
      <section aria-labelledby="intro-title" className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            Independent software maker
          </p>
          <h1 id="intro-title">
            I build software that makes complex ideas feel <em>simple.</em>
          </h1>
          <p className={styles.heroText}>
            Products, games, and tools shaped around the people who use them.
            Here are {projectCount} projects that take very different ideas from
            system to something real.
          </p>
          <div className={styles.heroActions}>
            <Link className={styles.primaryAction} href="#work">
              Explore the work <span aria-hidden="true">↓</span>
            </Link>
            <a
              className={styles.secondaryAction}
              href="https://github.com/zakaihamilton"
              rel="noreferrer"
              target="_blank"
            >
              Find me on GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className={styles.heroNote}>
            <span>{projectCount} independent projects</span>
            <span aria-hidden="true">·</span>
            <span>Products, platforms & play</span>
          </div>
        </div>
        <div aria-hidden="true" className={styles.heroArtwork}>
          <div className={styles.heroArtworkLabel}>
            <span>Selected work</span>
            <span>01 — {formattedProjectCount}</span>
          </div>
          <div className={styles.heroBackCard}>
            <ProjectVisual
              decorative
              project={featuredProjects[1]}
              variant="hero"
            />
          </div>
          <div className={styles.heroFrontCard}>
            <ProjectVisual
              decorative
              priority
              project={featuredProjects[0]}
              variant="hero"
            />
            <span className={styles.heroImageCaption}>
              A world in four digits
            </span>
          </div>
          <div className={styles.heroSeal}>
            <span>ZH</span>
            <small>Build / Play / Repeat</small>
          </div>
          <div className={styles.heroArtworkFoot}>
            <span>Independent builds</span>
            <span>2023 — now</span>
          </div>
        </div>
        <div aria-hidden="true" className={styles.heroRule} />
      </section>

      <section aria-labelledby="work-title" className={styles.work} id="work">
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.kicker}>The portfolio</p>
            <h2 id="work-title">
              A few different <em>worlds.</em>
            </h2>
          </div>
          <p>
            Each project starts with a different problem. The common thread is
            making the underlying system useful, understandable, and a little
            more human.
          </p>
        </div>
        <div className={styles.projectGrid}>
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section
        aria-labelledby="about-title"
        className={styles.about}
        id="about"
      >
        <div className={styles.aboutNumber}>
          <span>ABOUT</span>
          <span>ZH / 2026</span>
        </div>
        <div className={styles.aboutCopy}>
          <p className={styles.kicker}>A note on the work</p>
          <h2 id="about-title">
            One curious mind. <em>Many systems.</em>
          </h2>
          <p>
            I’m Zakai Hamilton. I like taking a complicated idea and working it
            all the way through: the model underneath, the product around it,
            and the small details that make it feel clear.
          </p>
          <p>
            That can mean deterministic game worlds, thoughtful publishing
            tools, privacy-minded analytics, or the infrastructure that lets
            products share identity and access.
          </p>
          <a
            className={styles.aboutLink}
            href="https://github.com/zakaihamilton"
            rel="noreferrer"
            target="_blank"
          >
            More on GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div aria-hidden="true" className={styles.aboutStamp}>
          <span>Curiosity</span>
          <span className={styles.stampMark}>✳</span>
          <span>Into craft</span>
        </div>
      </section>

      <section aria-labelledby="contact-title" className={styles.closing}>
        <p className={styles.kicker}>Keep exploring</p>
        <h2 id="contact-title">
          Good ideas deserve <em>good systems.</em>
        </h2>
        <p>
          Browse the code, try a live project, or follow along with what comes
          next.
        </p>
        <div className={styles.closingLinks}>
          <a
            href="https://github.com/zakaihamilton"
            rel="noreferrer"
            target="_blank"
          >
            GitHub <span aria-hidden="true">↗</span>
          </a>
          <a href="https://shiftingfront.com" rel="noreferrer" target="_blank">
            Play Shifting Front <span aria-hidden="true">↗</span>
          </a>
          <a href="https://hostpresent.com" rel="noreferrer" target="_blank">
            Visit Host Present <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </main>
  );
}
