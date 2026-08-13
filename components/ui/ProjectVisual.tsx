import Image from "next/image";
import { ImageIcon } from "lucide-react";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

export function ProjectVisual({
  project,
  image,
  featured = false,
  className,
}: {
  project: Project;
  image: string | null;
  featured?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative aspect-video overflow-hidden rounded-sm border border-line/35 bg-ink-soft",
        featured && "aspect-[16/10]",
        className,
      )}
    >
      {image ? (
        <Image
          src={image}
          alt={`${project.title} product screenshot`}
          fill
          sizes={
            featured
              ? "(max-width: 768px) 100vw, 55vw"
              : "(max-width: 768px) 100vw, 33vw"
          }
          className="object-cover grayscale transition duration-500 group-hover:scale-[1.02] group-hover:grayscale-0"
        />
      ) : (
        <div className="flex h-full flex-col items-center justify-center gap-3 px-6 text-center text-muted">
          <ImageIcon size={22} strokeWidth={1.25} aria-hidden />
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-paper/75">
              Product screenshot
            </p>
            <p className="mt-1 max-w-xs text-xs leading-relaxed">
              A real preview can be added when one is ready.
            </p>
          </div>
        </div>
      )}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between bg-ink/75 px-3 py-2 font-mono text-[10px] uppercase tracking-widest text-paper/80">
        <span>{image ? "Product preview" : "Screenshot slot"}</span>
        <span>{project.year}</span>
      </div>
    </div>
  );
}
