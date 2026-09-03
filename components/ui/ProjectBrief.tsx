import type { Project } from "@/data/projects";

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

  if (compact) {
    return (
      <div className="mt-4 space-y-3">
        <p className="text-xs leading-relaxed text-paper/85">
          {project.solution}
        </p>

        <div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-accent">
            Key Architecture &amp; Impact
          </p>
          <ul className="mt-1.5 space-y-1 text-xs leading-relaxed text-muted">
            {highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-1.5">
                <span className="text-accent shrink-0 font-mono" aria-hidden>
                  +
                </span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <dl className="mt-7 grid gap-5">
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
