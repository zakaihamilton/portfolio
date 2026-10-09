import Link from "next/link";
import { Icon } from "@/components/icon";
import { ExternalLink } from "@/components/tooltip";
import { ProjectCard } from "@/components/project-card";
import { ProjectVisual } from "@/components/project-visual";
import { projectCount, projects } from "@/data/projects";
import styles from "./page.module.css";

export default function HomePage() {
  const featuredProjects = [projects[0], projects[6]];

  return (
    <main id="main-content">
      <section aria-labelledby="intro-title" className={styles.hero}>
        <div className={styles.heroCopy} data-reveal suppressHydrationWarning>
          <h1 id="intro-title">
            Big ideas. <em>Software that gets to the point.</em>
          </h1>
          <p className={styles.heroText}>
            I make games, tools, and products that turn complicated systems into
            things people can actually use. Pick a project and see how it works.
          </p>
          <div className={styles.heroActions}>
            <Link className={styles.primaryAction} href="#work">
              See the projects <Icon name="arrow-down" size={18} />
            </Link>
            <ExternalLink
              className={styles.secondaryAction}
              href="https://github.com/zakaihamilton"
              label="Browse Zakai Hamilton’s code on GitHub, opens in a new tab"
            >
              Browse my code <Icon name="arrow-up-right" size={17} />
            </ExternalLink>
          </div>
        </div>
        <div
          aria-hidden="true"
          className={styles.heroArtwork}
          data-reveal
          suppressHydrationWarning
        >
          <div className={styles.heroGlow} />
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
          </div>
          <span className={styles.heroSpark} />
        </div>
      </section>

      <section aria-labelledby="work-title" className={styles.work} id="work">
        <div
          className={styles.sectionHeading}
          data-reveal
          suppressHydrationWarning
        >
          <h2 id="work-title">
            {projectCount} projects. <em>Many ways to make a mess useful.</em>
          </h2>
          <p>
            Games, platforms, and tools rarely start with the same problem. I
            like finding the useful shape inside each one and making the details
            click.
          </p>
        </div>
        <div className={styles.projectGrid}>
          {projects.map((project) => (
            <div data-reveal key={project.slug} suppressHydrationWarning>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </section>

      <section
        aria-labelledby="about-title"
        className={styles.about}
        id="about"
      >
        <div className={styles.aboutShape} aria-hidden="true" />
        <div className={styles.aboutCopy} data-reveal suppressHydrationWarning>
          <h2 id="about-title">
            I like the bit <em>where it clicks.</em>
          </h2>
          <p>
            I’m Zakai Hamilton. I like pulling a system apart, finding the
            useful shape inside it, then building the details that make it feel
            clear.
          </p>
          <p>
            That has led me to strategy games, publishing tools, privacy-minded
            analytics, identity infrastructure, and browser-based developer
            tools.
          </p>
          <ExternalLink
            className={styles.aboutLink}
            href="https://github.com/zakaihamilton"
            label="More experiments by Zakai Hamilton on GitHub, opens in a new tab"
          >
            More experiments on GitHub <Icon name="arrow-up-right" size={17} />
          </ExternalLink>
        </div>
      </section>

      <section
        aria-labelledby="contact-title"
        className={styles.closing}
        data-reveal
        suppressHydrationWarning
      >
        <h2 id="contact-title">
          Got a good <em>problem?</em>
        </h2>
        <p>Browse the code, try a project, or see what I’m building next.</p>
        <div className={styles.closingLinks}>
          <ExternalLink
            href="https://github.com/zakaihamilton"
            label="Browse Zakai Hamilton’s code on GitHub, opens in a new tab"
          >
            GitHub <Icon name="arrow-up-right" size={17} />
          </ExternalLink>
          <ExternalLink
            href="https://shiftingfront.com"
            label="Play Shifting Front, opens in a new tab"
          >
            Play Shifting Front <Icon name="arrow-up-right" size={17} />
          </ExternalLink>
          <ExternalLink
            href="https://hostpresent.com"
            label="Visit Host Present, opens in a new tab"
          >
            Visit Host Present <Icon name="arrow-up-right" size={17} />
          </ExternalLink>
        </div>
      </section>
    </main>
  );
}
