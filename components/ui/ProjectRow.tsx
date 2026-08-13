import Link from "next/link";
import { ArrowUpRight, Star } from "lucide-react";
import type { Project } from "@/data/projects";
import type { GithubRepoData } from "@/lib/github";
import { Chip } from "./Chip";
import { ProjectVisual } from "./ProjectVisual";
import { timeAgo } from "@/lib/utils";

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
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group grid grid-cols-1 gap-6 border-l-2 border-line/40 py-8 pl-5 transition-colors duration-300 hover:border-accent sm:grid-cols-[1fr_220px] sm:items-start sm:gap-8"
      aria-label={`View ${project.title}`}
    >
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <p className="font-mono text-[11px] uppercase tracking-widest text-accent">
            {project.categories.slice(0, 2).join(" · ")}
          </p>
          <span className="font-mono text-xs text-muted">{project.year}</span>
        </div>

        <h3 className="mt-3 font-display text-2xl font-medium text-paper sm:text-3xl">
          {project.title}
        </h3>
        <p className="mt-1.5 max-w-xl text-sm text-paper/90 sm:text-base">
          {project.tagline}
        </p>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <Chip key={tech}>{tech}</Chip>
          ))}
        </div>

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
          <span className="flex items-center gap-1 text-accent sm:ml-3">
            {linkLabel} <ArrowUpRight size={12} aria-hidden />
          </span>
        </div>
      </div>

      <ProjectVisual project={project} image={image} className="w-full sm:mt-1" />
    </Link>
  );
}
