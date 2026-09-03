"use client";

import { useState } from "react";
import { ArrowUpRight, Check, FileText, Mail } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";
import { SITE } from "@/data/site";

export function InternshipCta() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(SITE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  }

  return (
    <section className="mx-auto max-w-6xl px-6 pb-24 pt-4 sm:pb-32">
      <Reveal>
        <div className="grid gap-8 border-y border-line/25 py-12 sm:gap-12 sm:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-xs uppercase tracking-widest text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Immediate Availability
            </div>
            <h2 className="mt-4 font-display text-[clamp(2.25rem,5vw,4.25rem)] font-medium leading-[0.98] text-paper">
              Ready to build, learn, and deliver.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              I am actively seeking a Software Engineering internship or Junior developer position where I can ship clean, reliable code, master complex architectures, and solve real business problems.
            </p>
            <p className="mt-3 font-mono text-xs text-muted">
              📍 {SITE.location} · Open to Remote, Hybrid &amp; On-Site
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:items-start lg:items-end">
            <div className="flex flex-wrap gap-2.5">
              <ButtonLink href="/cv" variant="filled">
                <FileText size={14} />
                View CV / Résumé
              </ButtonLink>
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-2 rounded-sm border border-line/50 px-4 py-2.5 font-mono text-xs uppercase tracking-widest text-paper transition-all duration-300 hover:border-accent hover:text-accent"
                aria-label="Copy email address"
              >
                {copied ? (
                  <Check size={14} className="text-emerald-400" />
                ) : (
                  <Mail size={14} />
                )}
                {copied ? "Email Copied!" : SITE.email}
              </button>
            </div>

            <div className="flex flex-wrap gap-2.5">
              <ButtonLink href={SITE.linkedin} external variant="outline">
                <LinkedinIcon size={14} />
                LinkedIn
              </ButtonLink>
              <ButtonLink href={SITE.github} external variant="outline">
                <GithubIcon size={14} />
                GitHub
              </ButtonLink>
              <ButtonLink href="/contact" variant="outline">
                Contact Form <ArrowUpRight size={14} aria-hidden />
              </ButtonLink>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
