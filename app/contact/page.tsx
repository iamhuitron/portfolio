import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";
import { CopyButton } from "@/components/ui/CopyButton";
import { SITE } from "@/data/site";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16 sm:py-24">
      <p className="font-mono text-xs uppercase tracking-widest text-muted">Contact</p>
      <h1 className="font-display font-display-lg mt-3 text-[clamp(2.5rem,7vw,4.5rem)] font-medium leading-[0.98] text-paper">
        Let&apos;s talk.
      </h1>

      <Reveal>
        <p className="mt-6 max-w-md text-lg text-muted">
          Best way to reach me is email — I usually get back within a day or
          two.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-12 space-y-3">
        {SITE.email ? (
          <div className="flex items-center justify-between gap-4 rounded-sm border border-line/40 px-5 py-4">
            <Link
              href={`mailto:${SITE.email}`}
              className="flex items-center gap-3 text-paper transition-colors duration-300 hover:text-accent"
            >
              <Mail size={16} aria-hidden />
              {SITE.email}
            </Link>
            <CopyButton value={SITE.email} />
          </div>
        ) : (
          <div className="rounded-sm border border-dashed border-line/40 px-5 py-4 font-mono text-xs text-muted">
            Add your email in <code className="text-paper">data/site.ts</code>
          </div>
        )}

        <Link
          href={SITE.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-sm border border-line/40 px-5 py-4 text-paper transition-colors duration-300 hover:border-accent hover:text-accent"
        >
          <GithubIcon size={16} />
          github.com/{SITE.githubUsername}
        </Link>

        {SITE.linkedin && (
          <Link
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-sm border border-line/40 px-5 py-4 text-paper transition-colors duration-300 hover:border-accent hover:text-accent"
          >
            <LinkedinIcon size={16} />
            LinkedIn
          </Link>
        )}
      </Reveal>
    </div>
  );
}
