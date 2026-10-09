import Link from "next/link";
import { Icon } from "@/components/icon";
import type { Project } from "@/data/projects";
import { ExternalLink, TechnologyTooltip } from "@/components/tooltip";
import { ProjectVisual } from "./project-visual";
import styles from "./project-card.module.css";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={styles.card}>
      <Link
        aria-label={`See how ${project.name} works`}
        className={styles.visualLink}
        href={`/projects/${project.slug}`}
      >
        <ProjectVisual project={project} variant="card" />
      </Link>
      <div className={styles.body}>
        <p className={styles.category}>{project.category}</p>
        <h3>
          <Link href={`/projects/${project.slug}`}>{project.name}</Link>
        </h3>
        <p className={styles.summary}>{project.summary}</p>
        <ul
          aria-label={`${project.name} technologies`}
          className={styles.technologies}
        >
          {project.technologies.map((technology) => (
            <li key={technology}>
              <TechnologyTooltip name={technology} />
            </li>
          ))}
        </ul>
        <div className={styles.actions}>
          <Link
            className={styles.detailLink}
            href={`/projects/${project.slug}`}
          >
            See how it works <Icon name="arrow-up-right" size={17} />
          </Link>
          {project.liveUrl ? (
            <ExternalLink
              className={styles.liveLink}
              href={project.liveUrl}
              label={`Open ${project.name}, opens in a new tab`}
            >
              Try it <Icon name="arrow-up-right" size={17} />
            </ExternalLink>
          ) : null}
        </div>
      </div>
    </article>
  );
}
