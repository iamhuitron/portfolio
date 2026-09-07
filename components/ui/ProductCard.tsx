import Link from "next/link";
import { ArrowUpRight, Star } from "lucide-react";
import type { Project } from "@/data/projects";
import type { GithubRepoData } from "@/lib/github";
import { timeAgo } from "@/lib/utils";
import { Chip } from "./Chip";
import { ProjectActions } from "./ProjectActions";
import { ProjectBrief } from "./ProjectBrief";
import { ProjectVisual } from "./ProjectVisual";

export function ProductCard({
  project,
  liveData,
  image,
}: {
  project: Project;
  liveData: GithubRepoData | null;
  image: string | null;
}) {
  const language = liveData?.language;
  const updated = liveData?.updatedAt ? timeAgo(liveData.updatedAt) : null;
  const href = project.links.live ?? project.links.github;
  const linkLabel = project.links.live ? "View product" : "View repository";

  return (
    <article className="group">
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
        aria-label={`${linkLabel}: ${project.title}`}
        tabIndex={-1}
        aria-hidden="true"
      >
        <ProjectVisual project={project} image={image} />
      </Link>

      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-widest text-accent">
            {project.categories.slice(0, 2).join(" · ")}
          </p>
          <h3 className="mt-2 font-display text-2xl font-medium text-paper">
            <Link
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${linkLabel}: ${project.title}`}
              className="transition-colors duration-300 hover:text-accent rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              {project.title}
            </Link>
          </h3>
        </div>
        <ArrowUpRight
          size={18}
          className="mt-1 shrink-0 text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
          aria-hidden
        />
      </div>

      <p className="mt-2 text-sm leading-relaxed text-muted">{project.tagline}</p>
      <ProjectBrief project={project} compact />

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.techStack.slice(0, 4).map((tech) => (
          <Chip key={tech}>{tech}</Chip>
        ))}
      </div>

      <ProjectActions project={project} />

      <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[10px] uppercase tracking-wide text-muted">
        {language && <span>{language}</span>}
        {language && <span aria-hidden>·</span>}
        {liveData && (
          <span className="flex items-center gap-1">
            <Star size={10} aria-hidden />
            {liveData.stars}
          </span>
        )}
        {updated && (
          <>
            <span aria-hidden>·</span>
            <span>updated {updated}</span>
          </>
        )}
      </div>
    </article>
  );
}
