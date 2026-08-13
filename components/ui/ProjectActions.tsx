import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { ButtonLink } from "./ButtonLink";
import { cn } from "@/lib/utils";

export function ProjectActions({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  return (
    <div className={cn("mt-7 flex flex-wrap gap-2.5", className)}>
      {project.links.live ? (
        <ButtonLink href={project.links.live} external className="px-3.5 py-2">
          Live Demo <ArrowUpRight size={13} aria-hidden />
        </ButtonLink>
      ) : (
        <button
          type="button"
          disabled
          className="inline-flex cursor-not-allowed items-center rounded-sm border border-dashed border-line/35 px-3.5 py-2 font-mono text-[10px] uppercase tracking-widest text-muted/60"
          title="No verified live demo URL has been configured for this project"
        >
          Live Demo unavailable
        </button>
      )}
      <ButtonLink
        href={project.links.github}
        external
        variant={project.links.live ? "outline" : "filled"}
        className="px-3.5 py-2"
      >
        GitHub <ArrowUpRight size={13} aria-hidden />
      </ButtonLink>
    </div>
  );
}
