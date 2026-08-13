import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

export function ProjectBrief({
  project,
  compact = false,
}: {
  project: Project;
  compact?: boolean;
}) {
  const highlights = compact
    ? project.technicalHighlights.slice(0, 3)
    : project.technicalHighlights;

  return (
    <dl className={cn("grid gap-5", compact ? "mt-5" : "mt-7")}>
      <div>
        <dt className="font-mono text-[10px] uppercase tracking-widest text-accent">
          Problem
        </dt>
        <dd className="mt-2 text-sm leading-relaxed text-muted">{project.problem}</dd>
      </div>

      <div>
        <dt className="font-mono text-[10px] uppercase tracking-widest text-accent">
          Solution
        </dt>
        <dd className="mt-2 text-sm leading-relaxed text-muted">{project.solution}</dd>
      </div>

      <div>
        <dt className="font-mono text-[10px] uppercase tracking-widest text-accent">
          Technical highlights
        </dt>
        <dd className="mt-2">
          <ul className="space-y-1.5 text-sm leading-relaxed text-muted">
            {highlights.map((highlight) => (
              <li key={highlight} className="flex gap-2">
                <span className="text-accent" aria-hidden>
                  +
                </span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </dd>
      </div>
    </dl>
  );
}
