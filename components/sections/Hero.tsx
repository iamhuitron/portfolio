"use client";

import { motion } from "motion/react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { GithubIcon } from "@/components/ui/icons";
import { SITE } from "@/data/site";

const EASE = [0.16, 1, 0.3, 1] as const;

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: EASE },
  };
}

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20 pt-16 sm:pt-24">
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.9, ease: EASE }}
        style={{ transformOrigin: "left" }}
        className="mb-10 h-px w-full bg-line/40"
      />

      <motion.div {...fadeUp(0.1)} className="mb-7 space-y-3">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">
          {SITE.role}
        </p>
        <div className="inline-flex items-center gap-2 rounded-sm border border-line/40 px-3 py-1 font-mono text-xs uppercase tracking-widest text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {SITE.statusLabel}
        </div>
      </motion.div>

      <motion.h1
        {...fadeUp(0.2)}
        className="font-display font-display-lg text-[clamp(3rem,10vw,7rem)] font-medium leading-[0.95] text-paper"
      >
        {SITE.name}
      </motion.h1>

      <motion.p
        {...fadeUp(0.35)}
        className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl"
      >
        I build practical software products end to end: reliable web and
        mobile experiences, workflow automation, and data-driven tools with an
        interest in AI and FinTech.
      </motion.p>

      <motion.div
        {...fadeUp(0.42)}
        className="mt-10 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-5 border-y border-line/25 py-5 sm:grid-cols-4"
      >
        {[
          { label: "Based in", value: SITE.location },
          { label: "Studying", value: "Informatics at UNAM" },
          { label: "Building", value: "Web + mobile" },
          { label: "Interested in", value: "Data, AI + FinTech" },
        ].map((item) => (
          <div key={item.label}>
            <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
              {item.label}
            </p>
            <p className="mt-1 text-sm leading-snug text-paper">{item.value}</p>
          </div>
        ))}
      </motion.div>

      <motion.div {...fadeUp(0.5)} className="mt-9 flex flex-wrap gap-3">
        <ButtonLink href="/projects">View projects</ButtonLink>
        <ButtonLink href={SITE.github} external variant="outline">
          <GithubIcon size={14} />
          GitHub
        </ButtonLink>
        <ButtonLink href="/contact" variant="outline">
          Contact me
        </ButtonLink>
      </motion.div>
    </section>
  );
}
