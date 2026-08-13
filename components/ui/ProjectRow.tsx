import Link from "next/link";
import { Star } from "lucide-react";
import type { Project } from "@/data/projects";
import type { GithubRepoData } from "@/lib/github";
import { timeAgo } from "@/lib/utils";
import { Chip } from "./Chip";
import { ProjectActions } from "./ProjectActions";
import { ProjectBrief } from "./ProjectBrief";
import { ProjectVisual } from "./ProjectVisual";

interface ProjectRowProps {
  project: Project;
  liveData: GithubRepoData | null;
  image: string | null;
}

export function ProjectRow({ project, liveData, image }: ProjectRowProps) {
  const language = liveData?.language ?? null;
  const updated = liveData?.updatedAt ? timeAgo(liveData.updatedAt) : null;
  const href = project.links.live ?? project.links.github;
  const linkLabel = project.links.live ? "View product" : "View repository";

  return (
    <article className="group grid grid-cols-1 gap-6 border-l-2 border-line/40 py-8 pl-5 transition-colors duration-300 hover:border-accent sm:grid-cols-[1fr_220px] sm:items-start sm:gap-8">
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <p className="font-mono text-[11px] uppercase tracking-widest text-accent">
            {project.categories.slice(0, 2).join(" · ")}
          </p>
          <span className="font-mono text-xs text-muted">{project.year}</span>
        </div>

        <h3 className="mt-3 font-display text-2xl font-medium text-paper sm:text-3xl">
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-300 hover:text-accent"
          >
            {project.title}
          </Link>
        </h3>
        <p className="mt-1.5 max-w-xl text-sm text-paper/90 sm:text-base">
          {project.tagline}
        </p>

        <ProjectBrief project={project} compact />

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <Chip key={tech}>{tech}</Chip>
          ))}
        </div>

        <ProjectActions project={project} />

        <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-wide text-muted">
          {language && <span>{language}</span>}
          {language && <span aria-hidden>·</span>}
          {liveData && (
            <span className="flex items-center gap-1">
              <Star size={11} aria-hidden />
              {liveData.stars}
            </span>
          )}
          {updated && (
            <>
              <span aria-hidden>·</span>
              <span>updated {updated}</span>
            </>
          )}
          <span>{linkLabel}</span>
        </div>
      </div>

      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block sm:mt-1"
        aria-label={`${linkLabel}: ${project.title}`}
      >
        <ProjectVisual project={project} image={image} className="w-full" />
      </Link>
    </article>
  );
}
