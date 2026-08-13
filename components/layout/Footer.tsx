import Link from "next/link";
import { GithubIcon } from "@/components/ui/icons";
import { SITE } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line/25 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 font-mono text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {SITE.name}. Built with Next.js, shipped on Vercel.
        </p>
        <Link
          href={SITE.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 transition-colors duration-300 hover:text-paper"
        >
          <GithubIcon size={14} />
          {SITE.handle}
        </Link>
      </div>
    </footer>
  );
}
