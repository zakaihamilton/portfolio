import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectVisual } from "@/components/project-visual";
import {
  formattedProjectCount,
  getProject,
  getProjectNeighbors,
  projects,
} from "@/data/projects";
import styles from "./page.module.css";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {};
  }

  return {
    title: project.name,
    description: project.summary,
    openGraph: {
      title: project.name + " — Zakai Hamilton",
      description: project.summary,
      type: "article",
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const neighbors = getProjectNeighbors(project.slug);

  return (
    <main className={styles.main} id="main-content">
      <div className={styles.topline}>
        <Link href="/#work">
          <span aria-hidden="true">←</span> All projects
        </Link>
        <span>
          PROJECT {project.number} <span aria-hidden="true">/</span>{" "}
          {formattedProjectCount}
        </span>
      </div>

      <section aria-labelledby="project-title" className={styles.intro}>
        <p className={styles.category}>{project.category}</p>
        <h1 id="project-title">{project.name}</h1>
        <p className={styles.summary}>{project.summary}</p>
        <p className={styles.description}>{project.description}</p>
        <div className={styles.links}>
          {project.liveUrl ? (
            <a
              className={styles.primaryLink}
              href={project.liveUrl}
              rel="noreferrer"
              target="_blank"
            >
              Visit live project <span aria-hidden="true">↗</span>
            </a>
          ) : null}
          <a
            className={project.liveUrl ? styles.textLink : styles.primaryLink}
            href={project.repositoryUrl}
            rel="noreferrer"
            target="_blank"
          >
            View source on GitHub <span aria-hidden="true">↗</span>
          </a>
          {project.resourceUrl && project.resourceLabel ? (
            <a
              className={styles.textLink}
              href={project.resourceUrl}
              rel="noreferrer"
              target="_blank"
            >
              {project.resourceLabel} <span aria-hidden="true">↗</span>
            </a>
          ) : null}
        </div>
      </section>

      <div className={styles.visualWrap}>
        <ProjectVisual project={project} variant="detail" priority />
        <span className={styles.imageNumber}>
          {project.number} / {formattedProjectCount}
        </span>
      </div>

      <section aria-labelledby="details-title" className={styles.details}>
        <div className={styles.detailIntro}>
          <p className={styles.category}>How it works</p>
          <h2 id="details-title">{project.detailHeading}</h2>
          <p>{project.approach}</p>
        </div>
        <div className={styles.highlights}>
          <h3>What it does</h3>
          <ul>
            {project.highlights.map((highlight) => (
              <li key={highlight}>
                <span aria-hidden="true">✳</span>
                {highlight}
              </li>
            ))}
          </ul>
          <div className={styles.stack}>
            <h3>Made with</h3>
            <ul aria-label="Technologies used">
              {project.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section aria-label="More projects" className={styles.moreProjects}>
        <div className={styles.moreHeading}>
          <p className={styles.category}>Continue browsing</p>
          <Link href="/#work">
            View all projects <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className={styles.neighbors}>
          {neighbors.previous ? (
            <Link
              className={styles.neighbor}
              href={"/projects/" + neighbors.previous.slug}
            >
              <span className={styles.neighborLabel}>
                <span aria-hidden="true">←</span> Previous project
              </span>
              <span className={styles.neighborName}>
                {neighbors.previous.name}
              </span>
            </Link>
          ) : (
            <span />
          )}
          {neighbors.next ? (
            <Link
              className={[styles.neighbor, styles.next].join(" ")}
              href={"/projects/" + neighbors.next.slug}
            >
              <span className={styles.neighborLabel}>
                Next project <span aria-hidden="true">→</span>
              </span>
              <span className={styles.neighborName}>{neighbors.next.name}</span>
            </Link>
          ) : (
            <span />
          )}
        </div>
      </section>
    </main>
  );
}
