import Link from "next/link";
import { ArrowRight, ArrowUpRight, Star } from "lucide-react";
import {
  getFeaturedProjects,
  getSelectedProjects,
  type Project,
} from "@/data/projects";
import { getRepoData, getRepoReadmeImage } from "@/lib/github";
import { SITE } from "@/data/site";
import { Chip } from "@/components/ui/Chip";
import { ProjectActions } from "@/components/ui/ProjectActions";
import { ProjectBrief } from "@/components/ui/ProjectBrief";
import { ProductCard } from "@/components/ui/ProductCard";
import { ProjectVisual } from "@/components/ui/ProjectVisual";
import { Reveal } from "@/components/ui/Reveal";

async function enrichProject(project: Project) {
  const localImage = project.images.local?.[0] ?? null;
  const [liveData, readmeImage] = await Promise.all([
    getRepoData(SITE.githubUsername, project.slug),
    !localImage && project.images.useReadme
      ? getRepoReadmeImage(SITE.githubUsername, project.slug)
      : Promise.resolve(null),
  ]);

  return { project, liveData, image: localImage ?? readmeImage };
}

export async function FeaturedProjects() {
  const selected = getSelectedProjects();
  const enriched = await Promise.all(selected.map(enrichProject));
  const featuredSlug = getFeaturedProjects()[0]?.slug;
  const featured =
    enriched.find(({ project }) => project.slug === featuredSlug) ?? enriched[0];
  const supporting = enriched.filter(
    ({ project }) => project.slug !== featured?.project.slug,
  );

  return (
    <section className="mx-auto max-w-6xl px-6 pb-20 pt-8 sm:pb-28">
      <Reveal>
        <div className="flex flex-col gap-4 border-t border-line/25 pt-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-accent">
              Selected projects
            </p>
            <h2 className="mt-3 max-w-xl font-display text-[clamp(2.3rem,5vw,4rem)] font-medium leading-[1.02] text-paper">
              Software built around real constraints.
            </h2>
          </div>
          <Link
            href="/projects"
            className="group flex shrink-0 items-center gap-1 font-mono text-xs uppercase tracking-widest text-muted transition-colors duration-300 hover:text-accent"
          >
            Explore all projects
            <ArrowRight
              size={12}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
              aria-hidden
            />
          </Link>
        </div>
      </Reveal>

      {featured && (
        <Reveal delay={0.08} className="mt-10">
          <article className="group grid overflow-hidden rounded-sm border border-line/35 bg-ink-soft/40 transition-colors duration-300 hover:border-accent md:grid-cols-[1.08fr_0.92fr]">
            <Link
              href={featured.project.links.live ?? featured.project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block md:h-full"
              aria-label={`${featured.project.links.live ? "View product" : "View repository"}: ${featured.project.title}`}
            >
              <ProjectVisual
                project={featured.project}
                image={featured.image}
                featured
                className="rounded-none border-0 border-r border-line/35 md:h-full md:aspect-auto md:rounded-none"
              />
            </Link>

            <div className="flex flex-col p-6 sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <p className="font-mono text-[11px] uppercase tracking-widest text-accent">
                  Featured product · {featured.project.year}
                </p>
                <ArrowUpRight
                  size={18}
                  className="shrink-0 text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  aria-hidden
                />
              </div>

              <h3 className="mt-5 font-display text-[clamp(2rem,4vw,3.5rem)] font-medium leading-none text-paper">
                <Link
                  href={featured.project.links.live ?? featured.project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300 hover:text-accent"
                >
                  {featured.project.title}
                </Link>
              </h3>
              <p className="mt-4 text-base leading-relaxed text-paper/90">
                {featured.project.tagline}
              </p>

              <ProjectBrief project={featured.project} />

              <div className="mt-7 flex flex-wrap gap-1.5">
                {featured.project.techStack.map((tech) => (
                  <Chip key={tech}>{tech}</Chip>
                ))}
              </div>

              <ProjectActions project={featured.project} className="mt-8" />

              <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[10px] uppercase tracking-wide text-muted">
                {featured.liveData?.language && (
                  <span>{featured.liveData.language}</span>
                )}
                {featured.liveData?.language && <span aria-hidden>·</span>}
                {featured.liveData && (
                  <span className="flex items-center gap-1">
                    <Star size={10} aria-hidden />
                    {featured.liveData.stars} stars
                  </span>
                )}
              </div>
            </div>
          </article>
        </Reveal>
      )}

      <div className="mt-16">
        <Reveal>
          <div className="flex items-baseline justify-between border-b border-line/25 pb-4">
            <h3 className="font-mono text-xs uppercase tracking-widest text-muted">
              More selected work
            </h3>
            <span className="font-mono text-[11px] uppercase tracking-widest text-muted">
              {String(supporting.length).padStart(2, "0")} builds
            </span>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-x-8 gap-y-14 md:grid-cols-2">
          {supporting.map(({ project, liveData, image }, i) => (
            <Reveal key={project.slug} delay={Math.min(i * 0.06, 0.24)}>
              <ProductCard project={project} liveData={liveData} image={image} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
