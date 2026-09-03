"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { FileText, Mail, Check, Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { SITE, CORE_STACK } from "@/data/site";

const EASE = [0.16, 1, 0.3, 1] as const;

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: EASE },
  };
}

export function Hero() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(SITE.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      // fallback
    }
  }

  return (
    <section className="mx-auto max-w-6xl px-6 pb-20 pt-16 sm:pt-24">
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.9, ease: EASE }}
        style={{ transformOrigin: "left" }}
        className="mb-10 h-px w-full bg-line/40"
      />

      <motion.div {...fadeUp(0.1)} className="mb-7 flex flex-wrap items-center gap-3">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">
          Full-Stack &amp; Mobile Developer · UNAM Informatics
        </p>
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-xs uppercase tracking-widest text-emerald-400">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          {SITE.statusLabel}
        </div>
      </motion.div>

      <motion.h1
        {...fadeUp(0.2)}
        className="font-display font-display-lg text-[clamp(2.75rem,8.5vw,6.5rem)] font-medium leading-[0.95] text-paper"
      >
        {SITE.fullName}
      </motion.h1>

      <motion.p
        {...fadeUp(0.35)}
        className="mt-6 max-w-3xl text-lg leading-relaxed text-muted sm:text-xl"
      >
        I build production-grade software end to end: cross-platform mobile apps with{" "}
        <strong className="text-paper">React Native &amp; Expo</strong>, performant web platforms with{" "}
        <strong className="text-paper">Next.js &amp; TypeScript</strong>, and algorithmic data tools with{" "}
        <strong className="text-paper">Python</strong>. Backed by public accounting and municipal audit experience, I write code that handles business logic, edge cases, and data integrity with extreme care.
      </motion.p>

      {/* Recruiter Quick-Action Bar */}
      <motion.div {...fadeUp(0.42)} className="mt-8 flex flex-wrap items-center gap-3">
        <ButtonLink href="/cv" variant="filled" className="font-semibold shadow-sm">
          <FileText size={14} />
          View CV / Résumé
        </ButtonLink>

        <button
          type="button"
          onClick={handleCopyEmail}
          className="inline-flex items-center gap-2 rounded-sm border border-line/50 px-4 py-2.5 font-mono text-xs uppercase tracking-widest text-paper transition-all duration-300 hover:border-accent hover:text-accent"
          aria-label="Copy email address"
        >
          {copiedEmail ? (
            <Check size={14} className="text-emerald-400" />
          ) : (
            <Mail size={14} />
          )}
          {copiedEmail ? "Email copied!" : "Copy email"}
        </button>

        <ButtonLink href={SITE.linkedin} external variant="outline">
          <LinkedinIcon size={14} />
          LinkedIn
        </ButtonLink>

        <ButtonLink href={SITE.github} external variant="outline">
          <GithubIcon size={14} />
          GitHub
        </ButtonLink>

        <ButtonLink href="/projects" variant="outline">
          All projects
        </ButtonLink>
      </motion.div>

      {/* Core Engineering Stack & ATS Keyword Snapshot */}
      <motion.div
        {...fadeUp(0.5)}
        className="mt-12 rounded-sm border border-line/35 bg-ink-soft/30 p-5 sm:p-6"
      >
        <div className="flex flex-col gap-3 border-b border-line/25 pb-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent">
            <Sparkles size={13} />
            Core Engineering Stack (ATS Snapshot)
          </div>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] text-muted">
            <span>🎓 UNAM FES Cuautitlán</span>
            <span aria-hidden>·</span>
            <span>📍 {SITE.location}</span>
            <span aria-hidden>·</span>
            <span>🌐 English (B2)</span>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {CORE_STACK.map((tech) => (
            <span
              key={tech.name}
              className="inline-flex items-center gap-1.5 rounded-sm border border-line/35 bg-ink/60 px-3 py-1 font-mono text-xs text-paper/90 transition-colors hover:border-accent hover:text-accent"
            >
              <span className="text-[10px] text-muted">{tech.category}:</span>
              <span className="font-medium">{tech.name}</span>
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-start gap-2 rounded-sm bg-accent/5 border border-accent/20 px-3.5 py-2.5 text-xs leading-relaxed text-muted">
          <span className="font-mono text-accent">Differentiator:</span>
          <span>
            Hybrid profile combining <strong className="text-paper">UNAM Informatics</strong> with <strong className="text-paper">public accounting &amp; fiscal audit</strong> background. Strong grasp of financial reconciliation, data consistency, and production constraints.
          </span>
        </div>
      </motion.div>
    </section>
  );
}

