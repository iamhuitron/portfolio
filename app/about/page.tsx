import { GraduationCap, Briefcase, Sparkles } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Chip } from "@/components/ui/Chip";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SITE } from "@/data/site";

const SKILLS: Record<string, string[]> = {
  Languages: ["TypeScript", "JavaScript", "Python", "Java", "Go", "PHP"],
  "Frameworks & tools": [
    "Next.js",
    "React",
    "React Native / Expo",
    "Tailwind CSS",
    "Streamlit",
    "Wails",
    "Git",
  ],
  "Currently exploring": [
    "German",
    "Backtracking & constraint solving",
    "Mobile CI/CD",
  ],
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <p className="font-mono text-xs uppercase tracking-widest text-muted">About</p>
      <h1 className="font-display font-display-lg mt-3 text-[clamp(2.5rem,7vw,4.5rem)] font-medium leading-[0.98] text-paper">
        Ledgers first.
        <br />
        Then logic.
      </h1>

      <Reveal>
        <p className="mt-8 text-lg leading-relaxed text-muted">
          I started in accounting, not code. Two years of reconciliation and
          reporting for a municipal government office — closing books,
          matching invoices, chasing discrepancies to zero — before switching
          into Informatics at {SITE.university}. That background still shows
          up in how I build: I default to structure, edge cases, and things
          that have to be exactly right, not just mostly right.
        </p>
      </Reveal>

      {SITE.resumeUrl && (
        <Reveal delay={0.1} className="mt-6">
          <ButtonLink href={SITE.resumeUrl} external variant="outline">
            Download résumé
          </ButtonLink>
        </Reveal>
      )}

      <Reveal delay={0.1}>
        <section className="mt-16 border-t border-line/25 pt-10">
          <div className="mb-5 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent">
            <GraduationCap size={14} aria-hidden />
            Education
          </div>
          <h2 className="font-display text-xl text-paper">{SITE.university}</h2>
          <p className="mt-1 text-muted">{SITE.degree} · 3rd semester, in progress</p>
          <p className="mt-3 max-w-lg text-sm text-muted">
            Planning a semester exchange abroad once I clear the credit
            threshold — currently weighing Germany and South Korea, and
            picking up German alongside my coursework in the meantime.
          </p>
        </section>
      </Reveal>

      <Reveal delay={0.15}>
        <section className="mt-12 border-t border-line/25 pt-10">
          <div className="mb-5 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent">
            <Briefcase size={14} aria-hidden />
            Experience
          </div>
          <h2 className="font-display text-xl text-paper">
            Accounting &amp; Administrative Assistant
          </h2>
          <p className="mt-1 text-muted">Municipal government office</p>
          <p className="mt-3 max-w-lg text-sm text-muted">
            Reconciliation, reporting, and day-to-day administrative finance
            work, backed by a technical certification in Fiscal-Accounting
            Computing. Statix, one of the projects on this site, grew
            directly out of that work.
          </p>
        </section>
      </Reveal>

      <Reveal delay={0.2}>
        <section className="mt-12 border-t border-line/25 pt-10">
          <div className="mb-6 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent">
            <Sparkles size={14} aria-hidden />
            Skills
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {Object.entries(SKILLS).map(([group, items]) => (
              <div key={group}>
                <h3 className="font-mono text-[11px] uppercase tracking-wide text-muted">
                  {group}
                </h3>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {items.map((item) => (
                    <Chip key={item}>{item}</Chip>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal delay={0.25}>
        <p className="mt-16 border-t border-line/25 pt-10 text-sm text-muted">
          Outside of code: weightlifting three times a week, boxing on the
          side — same discipline, different muscle.
        </p>
      </Reveal>
    </div>
  );
}
