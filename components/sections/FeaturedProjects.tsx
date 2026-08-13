import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getFeaturedProjects } from "@/data/projects";
import { getRepoData, getRepoReadmeImage } from "@/lib/github";
import { SITE } from "@/data/site";
import { ProjectRow } from "@/components/ui/ProjectRow";
import { Reveal } from "@/components/ui/Reveal";

export async function FeaturedProjects() {
  const projects = getFeaturedProjects();

  const enriched = await Promise.all(
    projects.map(async (project) => {
      const localImage = project.images.local?.[0] ?? null;
      const [liveData, readmeImage] = await Promise.all([
        getRepoData(SITE.githubUsername, project.slug),
        !localImage && project.images.useReadme
          ? getRepoReadmeImage(SITE.githubUsername, project.slug)
          : Promise.resolve(null),
      ]);
      return { project, liveData, image: localImage ?? readmeImage };
    }),
  );

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <Reveal>
        <div className="mb-2 flex items-baseline justify-between">
          <h2 className="font-mono text-xs uppercase tracking-widest text-muted">
            Selected work
          </h2>
          <Link
            href="/projects"
            className="group flex items-center gap-1 font-mono text-xs uppercase tracking-widest text-muted transition-colors duration-300 hover:text-accent"
          >
            All projects
            <ArrowRight
              size={12}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </Reveal>

      <div className="mt-6 divide-y divide-line/20">
        {enriched.map(({ project, liveData, image }, i) => (
          <Reveal key={project.slug} delay={i * 0.06}>
            <ProjectRow project={project} liveData={liveData} image={image} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
