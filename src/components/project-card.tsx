import Link from "next/link";
import type { Project } from "@/data/projects";
import { ProjectVisual } from "./project-visual";
import styles from "./project-card.module.css";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={styles.card}>
      <Link
        aria-label={"Read about " + project.name}
        className={styles.visualLink}
        href={"/projects/" + project.slug}
      >
        <ProjectVisual project={project} variant="card" />
        <span className={styles.visualIndex}>{project.number}</span>
      </Link>
      <div className={styles.body}>
        <div className={styles.meta}>
          <span>{project.category}</span>
          <span aria-hidden="true">—</span>
          <span>{project.technologies[0]}</span>
        </div>
        <h3>
          <Link href={"/projects/" + project.slug}>{project.name}</Link>
        </h3>
        <p>{project.summary}</p>
        <div className={styles.actions}>
          <Link
            className={styles.detailLink}
            href={"/projects/" + project.slug}
          >
            Explore project <span aria-hidden="true">↗</span>
          </Link>
          {project.liveUrl ? (
            <a
              className={styles.liveLink}
              href={project.liveUrl}
              rel="noreferrer"
              target="_blank"
            >
              Live site
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
