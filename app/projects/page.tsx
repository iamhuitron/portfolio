import { PROJECTS } from "@/data/projects";
import { getRepoData, getRepoReadmeImage } from "@/lib/github";
import { SITE } from "@/data/site";
import { ProjectRow } from "@/components/ui/ProjectRow";
import { Reveal } from "@/components/ui/Reveal";

export default async function ProjectsPage() {
  const enriched = await Promise.all(
    PROJECTS.map(async (project) => {
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
    <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <header className="max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-muted">
          {String(PROJECTS.length).padStart(2, "0")} builds
        </p>
        <h1 className="font-display font-display-lg mt-3 text-[clamp(2.5rem,7vw,4.5rem)] font-medium leading-[0.98] text-paper">
          Projects
        </h1>
        <p className="mt-5 text-lg text-muted">
          A selection of software products, experiments, and systems work. Each
          one is presented with the problem, product direction, and technical
          decisions behind it; repository activity is pulled live from GitHub.
        </p>
      </header>

      <div className="mt-12 divide-y divide-line/20">
        {enriched.map(({ project, liveData, image }, i) => (
          <Reveal key={project.slug} delay={Math.min(i * 0.05, 0.3)}>
            <ProjectRow project={project} liveData={liveData} image={image} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
