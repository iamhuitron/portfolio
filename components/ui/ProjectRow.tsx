import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Star } from "lucide-react";
import type { Project } from "@/data/projects";
import type { GithubRepoData } from "@/lib/github";
import { Chip } from "./Chip";
import { timeAgo } from "@/lib/utils";

interface ProjectRowProps {
  project: Project;
  liveData: GithubRepoData | null;
  image: string | null;
}

export function ProjectRow({ project, liveData, image }: ProjectRowProps) {
  const language = liveData?.language ?? null;
  const stars = liveData?.stars ?? 0;
  const updated = liveData?.updatedAt ? timeAgo(liveData.updatedAt) : null;

  return (
    <Link
      href={project.links.github}
      target="_blank"
      rel="noopener noreferrer"
      className="group grid grid-cols-1 gap-5 border-l-2 border-line/40 py-6 pl-5 transition-colors duration-300 hover:border-accent sm:grid-cols-[1fr_auto] sm:items-center md:gap-8"
    >
      <div className="min-w-0">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-display text-xl font-medium text-paper sm:text-2xl">
            {project.title}
          </h3>
          <span className="hidden shrink-0 font-mono text-xs text-muted sm:block">
            {project.year}
          </span>
        </div>

        <p className="mt-1.5 max-w-xl text-sm text-muted sm:text-base">{project.tagline}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <Chip key={tech}>{tech}</Chip>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-wide text-muted">
          {language && <span>{language}</span>}
          {language && <span aria-hidden>·</span>}
          <span className="flex items-center gap-1">
            <Star size={11} aria-hidden />
            {stars}
          </span>
          {updated && (
            <>
              <span aria-hidden>·</span>
              <span>updated {updated}</span>
            </>
          )}
          <span className="flex items-center gap-1 text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:ml-3">
            View on GitHub <ArrowUpRight size={12} aria-hidden />
          </span>
        </div>
      </div>

      {image && (
        <div className="relative hidden aspect-video w-48 shrink-0 overflow-hidden rounded-sm border border-line/40 md:block lg:w-56">
          <Image
            src={image}
            alt=""
            fill
            sizes="224px"
            className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
          />
        </div>
      )}
    </Link>
  );
}
