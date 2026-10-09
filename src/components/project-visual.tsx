import Image from "next/image";
import type { Project } from "@/data/projects";
import styles from "./project-visual.module.css";

type ProjectVisualProps = {
  project: Project;
  variant: "card" | "hero" | "detail";
  priority?: boolean;
  decorative?: boolean;
  imageSrc?: string;
  imageFit?: Project["imageFit"];
};

const toneClasses: Record<Project["mediaTone"], string> = {
  ink: styles.ink,
  paper: styles.paper,
  sand: styles.sand,
  slate: styles.slate,
  forest: styles.forest,
};

export function ProjectVisual({
  project,
  variant,
  priority = false,
  decorative = false,
  imageSrc,
  imageFit,
}: ProjectVisualProps) {
  const source = imageSrc ?? project.image;
  const fit = imageFit ?? project.imageFit;
  const frameClasses = [
    styles.frame,
    styles[variant],
    toneClasses[project.mediaTone],
    fit === "contain" ? styles.contain : styles.cover,
  ].join(" ");

  return (
    <div className={frameClasses}>
      <Image
        alt={decorative ? "" : project.imageAlt}
        className={styles.image}
        fill
        priority={priority}
        sizes={
          variant === "hero"
            ? "(max-width: 760px) 88vw, 45vw"
            : variant === "detail"
              ? "(max-width: 760px) 100vw, 88vw"
              : "(max-width: 760px) 100vw, 50vw"
        }
        src={source}
        unoptimized={source.endsWith(".svg")}
      />
    </div>
  );
}
