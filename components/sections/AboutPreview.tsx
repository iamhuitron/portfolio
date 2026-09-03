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
            <p className="font-mono text-xs uppercase tracking-widest text-accent">Differentiator</p>
            <h2 className="mt-4 max-w-sm font-display text-[clamp(2rem,4vw,3.25rem)] font-medium leading-[1.03] text-paper">
              Engineering with fiscal &amp; operational rigor.
            </h2>
          </div>

          <div className="max-w-2xl">
            <p className="text-lg leading-relaxed text-paper/90">
              I am {SITE.fullName}, an Informatics student at {SITE.university}.
              Before focusing on full-stack and mobile software, I worked in municipal government accounting and financial auditing.
            </p>
            <p className="mt-3 text-base leading-relaxed text-muted">
              That experience fundamentally shapes my engineering philosophy: I don&apos;t just build interfaces—I build software that respects strict business rules, guarantees data integrity, automates tedious manual processes, and stays rock-solid under edge cases.
            </p>

            <div className="mt-8 grid gap-5 border-y border-line/20 py-5 sm:grid-cols-3">
              {[
                ["01", "Mobile & Web", "React Native, Expo & Next.js architectures"],
                ["02", "Automation & Data", "Python & ReportLab automating fiscal workflows"],
                ["03", "Systems & Logic", "Backtracking algorithms, OOP Java & Go"],
              ].map(([number, title, detail]) => (
                <div key={number}>
                  <p className="font-mono text-[11px] text-accent">{number}</p>
                  <p className="mt-2 text-sm font-medium text-paper">{title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted">{detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-6">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted transition-colors duration-300 hover:text-accent"
              >
                Read full background
                <ArrowRight
                  size={13}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                  aria-hidden
                />
              </Link>
              <Link
                href="/cv"
                className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent transition-colors duration-300 hover:underline"
              >
                View full CV / Résumé
                <ArrowRight
                  size={13}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                  aria-hidden
                />
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
