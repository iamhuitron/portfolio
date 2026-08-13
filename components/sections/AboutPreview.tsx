import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SITE } from "@/data/site";

export function AboutPreview() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
      <Reveal>
        <div className="grid gap-8 border-t border-line/25 pt-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-accent">About</p>
            <h2 className="mt-4 max-w-sm font-display text-[clamp(2rem,4vw,3.25rem)] font-medium leading-[1.03] text-paper">
              Engineering with a practical bias.
            </h2>
          </div>

          <div className="max-w-2xl">
            <p className="text-lg leading-relaxed text-paper/90">
              I am {SITE.name}, an Informatics student at {SITE.university} with
              a background in accounting and reporting. That mix makes me care
              about software that is useful in practice: clear workflows,
              dependable data, and systems that handle edge cases well.
            </p>
            <div className="mt-8 grid gap-5 border-y border-line/20 py-5 sm:grid-cols-3">
              {[
                ["01", "Software engineering", "End-to-end product work"],
                ["02", "Automation + data", "Turning manual work into systems"],
                ["03", "AI + FinTech", "Applied, responsible experimentation"],
              ].map(([number, title, detail]) => (
                <div key={number}>
                  <p className="font-mono text-[11px] text-accent">{number}</p>
                  <p className="mt-2 text-sm text-paper">{title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted">{detail}</p>
                </div>
              ))}
            </div>
            <Link
              href="/about"
              className="group mt-7 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted transition-colors duration-300 hover:text-accent"
            >
              Read the full story
              <ArrowRight
                size={13}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden
              />
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
