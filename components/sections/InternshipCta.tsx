import { ArrowUpRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { GithubIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";
import { SITE } from "@/data/site";

export function InternshipCta() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24 pt-4 sm:pb-32">
      <Reveal>
        <div className="grid gap-8 border-y border-line/25 py-12 sm:gap-12 sm:py-16 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-widest text-accent">
              Next step
            </p>
            <h2 className="mt-4 font-display text-[clamp(2.25rem,5vw,4.5rem)] font-medium leading-[0.98] text-paper">
              Looking for a place to contribute.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              I am looking for a software engineering internship or a thoughtful
              collaboration where I can learn quickly, ship carefully, and help
              turn a real problem into a reliable product.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 lg:justify-end">
            <ButtonLink href="/contact">
              Contact me <ArrowUpRight size={14} aria-hidden />
            </ButtonLink>
            <ButtonLink href={SITE.github} external variant="outline">
              <GithubIcon size={14} />
              GitHub
            </ButtonLink>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
