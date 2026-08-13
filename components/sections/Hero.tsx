"use client";

import { motion } from "motion/react";
import { ButtonLink } from "@/components/ui/ButtonLink";
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

      <motion.div
        {...fadeUp(0.1)}
        className="mb-6 inline-flex items-center gap-2 rounded-sm border border-line/40 px-3 py-1 font-mono text-xs uppercase tracking-widest text-muted"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        {SITE.statusLabel}
      </motion.div>

      <motion.h1
        {...fadeUp(0.2)}
        className="font-display font-display-lg text-[clamp(3rem,10vw,7rem)] font-medium leading-[0.95] text-paper"
      >
        {SITE.name}
      </motion.h1>

      <motion.p {...fadeUp(0.35)} className="mt-6 max-w-xl text-lg text-muted sm:text-xl">
        Software developer studying Informatics at UNAM. I build web and
        mobile products end to end — from backtracking algorithms to
        offline-first apps.
      </motion.p>

      <motion.div {...fadeUp(0.5)} className="mt-9 flex flex-wrap gap-4">
        <ButtonLink href="/projects">View projects →</ButtonLink>
        <ButtonLink href="/contact" variant="outline">
          Get in touch
        </ButtonLink>
      </motion.div>
    </section>
  );
}
