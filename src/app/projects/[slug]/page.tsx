import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@/components/icon";
import { ExternalLink, TechnologyTooltip } from "@/components/tooltip";
import { ProjectVisual } from "@/components/project-visual";
import { getProject, getProjectNeighbors, projects } from "@/data/projects";
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
      <Link className={styles.backLink} href="/#work">
        <Icon name="arrow-left" size={18} /> Browse all projects
      </Link>

      <section
        aria-labelledby="project-title"
        className={styles.intro}
        data-reveal
        suppressHydrationWarning
      >
        <p className={styles.category}>{project.category}</p>
        <h1 id="project-title">{project.name}</h1>
        <p className={styles.summary}>{project.summary}</p>
        <p className={styles.description}>{project.description}</p>
        <div className={styles.links}>
          {project.liveUrl ? (
            <ExternalLink
              className={styles.primaryLink}
              href={project.liveUrl}
              label={`Open ${project.name}, opens in a new tab`}
            >
              Open the project <Icon name="arrow-up-right" size={17} />
            </ExternalLink>
          ) : null}
          <ExternalLink
            className={project.liveUrl ? styles.textLink : styles.primaryLink}
            href={project.repositoryUrl}
            label={`${project.name} source code on GitHub, opens in a new tab`}
          >
            See the code <Icon name="arrow-up-right" size={17} />
          </ExternalLink>
          {project.resourceUrl && project.resourceLabel ? (
            <ExternalLink
              className={styles.textLink}
              href={project.resourceUrl}
              label={`${project.resourceLabel}, opens in a new tab`}
            >
              {project.resourceLabel} <Icon name="arrow-up-right" size={17} />
            </ExternalLink>
          ) : null}
        </div>
      </section>

      <div className={styles.visualWrap} data-reveal suppressHydrationWarning>
        <ProjectVisual project={project} variant="detail" priority />
      </div>

      <section
        aria-labelledby="details-title"
        className={styles.details}
        data-reveal
        suppressHydrationWarning
      >
        <div className={styles.detailIntro}>
          <h2 id="details-title">{project.detailHeading}</h2>
          <p>{project.approach}</p>
        </div>
        <div className={styles.highlights}>
          <h3>Highlights</h3>
          <ul>
            {project.highlights.map((highlight) => (
              <li key={highlight}>
                <Icon name="spark" size={16} />
                {highlight}
              </li>
            ))}
          </ul>
          <div className={styles.stack}>
            <h3>Built with</h3>
            <ul aria-label="Technologies used">
              {project.technologies.map((technology) => (
                <li key={technology}>
                  <TechnologyTooltip name={technology} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="more-title"
        className={styles.moreProjects}
        data-reveal
        suppressHydrationWarning
      >
        <div className={styles.moreHeading}>
          <h2 id="more-title">Keep exploring</h2>
          <Link href="/#work">
            All projects <Icon name="arrow-up-right" size={17} />
          </Link>
        </div>
        <div className={styles.neighbors}>
          {neighbors.previous ? (
            <Link
              className={styles.neighbor}
              href={`/projects/${neighbors.previous.slug}`}
            >
              <span className={styles.neighborLabel}>
                <Icon name="arrow-left" size={17} /> Previous
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
              href={`/projects/${neighbors.next.slug}`}
            >
              <span className={styles.neighborLabel}>
                Next <Icon name="arrow-right" size={17} />
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
