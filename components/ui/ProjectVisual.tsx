import Image from "next/image";
import {
  Calendar,
  CheckCircle2,
  Cpu,
  Flame,
  FileSpreadsheet,
  Radio,
  ShieldAlert,
  Zap,
  Terminal,
} from "lucide-react";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

function ProjectGraphicFallback({ project }: { project: Project }) {
  if (project.slug === "UniSched-Optimizer") {
    return (
      <div className="flex h-full w-full flex-col justify-between bg-gradient-to-br from-ink to-ink-soft p-5 font-mono text-xs">
        <div className="flex items-center justify-between border-b border-line/25 pb-2.5">
          <div className="flex items-center gap-2 text-accent">
            <Calendar size={14} />
            <span className="text-[11px] uppercase tracking-wider font-semibold">
              UNAM Course Optimizer
            </span>
          </div>
          <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] text-emerald-400 border border-emerald-500/20">
            0 Conflicts
          </span>
        </div>

        {/* Schedule Grid Simulation */}
        <div className="grid grid-cols-4 gap-2 my-2">
          <div className="space-y-1.5">
            <span className="text-[10px] text-muted">LUN</span>
            <div className="rounded border border-line/40 bg-accent/15 p-1.5 text-[10px] text-paper">
              Estructuras Datos
            </div>
            <div className="rounded border border-line/40 bg-line/20 p-1.5 text-[9px] text-muted">
              Cálculo II
            </div>
          </div>
          <div className="space-y-1.5">
            <span className="text-[10px] text-muted">MAR</span>
            <div className="rounded border border-line/40 bg-line/20 p-1.5 text-[9px] text-muted">
              POO Java
            </div>
            <div className="rounded border border-line/40 bg-accent/15 p-1.5 text-[10px] text-paper">
              Redes
            </div>
          </div>
          <div className="space-y-1.5">
            <span className="text-[10px] text-muted">MIE</span>
            <div className="rounded border border-line/40 bg-accent/15 p-1.5 text-[10px] text-paper">
              Estructuras Datos
            </div>
          </div>
          <div className="space-y-1.5">
            <span className="text-[10px] text-muted">JUE</span>
            <div className="rounded border border-line/40 bg-line/20 p-1.5 text-[9px] text-muted">
              Sistemas Op.
            </div>
            <div className="rounded border border-line/40 bg-accent/15 p-1.5 text-[10px] text-paper">
              Redes
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] text-muted border-t border-line/20 pt-2">
          <span>⚡ Backtracking Search</span>
          <span>100% In-Browser OCR</span>
        </div>
      </div>
    );
  }

  if (project.slug === "cfdi-sentinel") {
    return (
      <div className="flex h-full w-full flex-col justify-between bg-gradient-to-br from-ink to-ink-soft p-5 font-mono text-xs">
        <div className="flex items-center justify-between border-b border-line/25 pb-2.5">
          <div className="flex items-center gap-2 text-accent">
            <ShieldAlert size={14} className="text-amber-400" />
            <span className="text-[11px] uppercase tracking-wider font-semibold">
              CFDI Sentinel · SAT 69-B
            </span>
          </div>
          <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] text-emerald-400 border border-emerald-500/20">
            Client-Side Only
          </span>
        </div>

        <div className="my-auto space-y-2">
          <div className="rounded border border-line/30 bg-ink/60 p-2.5 space-y-1">
            <div className="flex items-center justify-between text-[11px] text-paper">
              <span>Auditoría Fiscal Anexo 20</span>
              <span className="text-emerald-400">0 EFOS Detectados</span>
            </div>
            <p className="text-[10px] text-muted">
              CFDI 4.0 & 3.3 · Conciliación IVA Trasladado/Retenido · DIOT
            </p>
          </div>

          <div className="flex items-center justify-between text-[10px] text-muted px-1">
            <span className="text-accent">⚡ Web Worker Batch Parsing</span>
            <span className="text-paper">Export Multi-tab .XLSX</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] text-muted border-t border-line/20 pt-2">
          <span>React 19 + Fast-XML</span>
          <span>100% In-Memory Privacy</span>
        </div>
      </div>
    );
  }

    if (project.slug === "nomina-matrix") {
    return (
      <div className="flex h-full w-full flex-col justify-between bg-gradient-to-br from-ink to-ink-soft p-5 font-mono text-xs">
        <div className="flex items-center justify-between border-b border-line/25 pb-2.5">
          <div className="flex items-center gap-2 text-accent">
            <Zap size={14} className="text-emerald-400" />
            <span className="text-[11px] uppercase tracking-wider font-semibold">
              Nomina-Matrix · Net-to-Gross
            </span>
          </div>
          <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] text-emerald-400 border border-emerald-500/20">
            IMSS Reform 2026
          </span>
        </div>

        <div className="my-auto space-y-2">
          <div className="rounded border border-line/30 bg-ink/60 p-2.5 space-y-1">
            <div className="flex items-center justify-between text-[11px] text-paper">
              <span>Búsqueda Binaria &lt; 25 Pasos</span>
              <span className="text-emerald-400">Δ &lt; bash.01 Centavos</span>
            </div>
            <p className="text-[10px] text-muted">
              ISR Art. 96 · IMSS 5 Ramos · Infonavit 5% · Finiquitos LFT
            </p>
          </div>

          <div className="flex items-center justify-between text-[10px] text-muted px-1">
            <span className="text-accent">⚡ Multiplicador Costo Social 1.58x</span>
            <span className="text-paper">Export Multi-tab .XLSX</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] text-muted border-t border-line/20 pt-2">
          <span>React 19 + Next.js</span>
          <span>100% In-Browser Privacy</span>
        </div>
      </div>
    );
  }

  if (project.slug === "Flowday") {
    return (
      <div className="flex h-full w-full flex-col justify-between bg-gradient-to-br from-ink to-ink-soft p-5 font-mono text-xs">
        <div className="flex items-center justify-between border-b border-line/25 pb-2.5">
          <div className="flex items-center gap-2 text-accent">
            <Flame size={14} className="text-orange-400" />
            <span className="text-[11px] uppercase tracking-wider font-semibold">
              FlowDay Mobile
            </span>
          </div>
          <span className="flex items-center gap-1 text-[10px] text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Offline-First MMKV
          </span>
        </div>

        {/* Heatmap & streak simulation */}
        <div className="my-auto space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-paper text-[11px]">Racha activa: 28 días</span>
            <span className="text-[10px] text-accent">CI/CD Signed APK</span>
          </div>
          <div className="flex gap-1">
            {Array.from({ length: 14 }).map((_, i) => (
              <div
                key={i}
                className={cn(
                  "h-5 flex-1 rounded-xs",
                  i % 3 === 0
                    ? "bg-accent/80"
                    : i % 2 === 0
                      ? "bg-accent/40"
                      : "bg-line/30",
                )}
              />
            ))}
          </div>
          <div className="rounded border border-line/30 bg-ink/60 p-2 text-[10px] text-muted flex items-center justify-between">
            <span>Expo SDK 52 · NativeWind</span>
            <span className="text-paper">New Architecture ✓</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] text-muted border-t border-line/20 pt-2">
          <span>React Native</span>
          <span>Zustand State</span>
        </div>
      </div>
    );
  }

  if (project.slug === "Statix") {
    return (
      <div className="flex h-full w-full flex-col justify-between bg-gradient-to-br from-ink to-ink-soft p-5 font-mono text-xs">
        <div className="flex items-center justify-between border-b border-line/25 pb-2.5">
          <div className="flex items-center gap-2 text-accent">
            <FileSpreadsheet size={14} />
            <span className="text-[11px] uppercase tracking-wider font-semibold">
              Statix Fiscal Engine
            </span>
          </div>
          <span className="rounded-full bg-accent/15 px-2 py-0.5 text-[10px] text-accent border border-accent/25">
            SAT Audits
          </span>
        </div>

        <div className="my-auto space-y-2">
          <div className="rounded border border-line/30 bg-ink/60 p-2.5 space-y-1">
            <div className="flex items-center justify-between text-[11px] text-paper">
              <span>Conciliación Municipal</span>
              <span className="text-emerald-400">100% Cuadrado</span>
            </div>
            <p className="text-[10px] text-muted">
              1,420 CFDI facturas validadas vs libros contables
            </p>
          </div>

          <div className="flex items-center gap-2 text-[10px] text-muted">
            <CheckCircle2 size={12} className="text-accent" />
            <span>Generación automatizada de reportes PDF con ReportLab</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] text-muted border-t border-line/20 pt-2">
          <span>Python + Streamlit</span>
          <span>Auditoría de Dominio</span>
        </div>
      </div>
    );
  }

  if (project.slug === "NetNaval") {
    return (
      <div className="flex h-full w-full flex-col justify-between bg-gradient-to-br from-ink to-ink-soft p-5 font-mono text-xs">
        <div className="flex items-center justify-between border-b border-line/25 pb-2.5">
          <div className="flex items-center gap-2 text-accent">
            <Radio size={14} />
            <span className="text-[11px] uppercase tracking-wider font-semibold">
              NetNaval LAN Engine
            </span>
          </div>
          <span className="text-[10px] text-emerald-400">P2P Socket Active</span>
        </div>

        <div className="my-auto grid grid-cols-6 gap-1.5 p-2 rounded border border-line/30 bg-ink/70">
          {Array.from({ length: 18 }).map((_, i) => (
            <div
              key={i}
              className={cn(
                "h-4 rounded-xs border border-line/30 text-center text-[8px] flex items-center justify-center",
                i === 3 || i === 4 || i === 5
                  ? "bg-accent/40 text-paper"
                  : i === 12
                    ? "bg-red-500/40 text-red-300"
                    : "bg-line/10 text-muted",
              )}
            >
              {i === 12 ? "X" : ""}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between text-[10px] text-muted border-t border-line/20 pt-2">
          <span>Go + Wails + React</span>
          <span>Real-time Chat Protocol</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full w-full flex-col justify-between bg-gradient-to-br from-ink to-ink-soft p-5 font-mono text-xs">
      <div className="flex items-center justify-between border-b border-line/25 pb-2.5">
        <div className="flex items-center gap-2 text-accent">
          <Terminal size={14} />
          <span className="text-[11px] uppercase tracking-wider font-semibold">
            {project.title}
          </span>
        </div>
        <span className="text-[10px] text-muted">{project.categories[0]}</span>
      </div>

      <div className="my-auto space-y-1.5 p-2 text-[11px] text-paper">
        <p className="text-muted text-[10px]">{`// Tech Stack`}</p>
        <div className="flex flex-wrap gap-1">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-xs border border-line/35 bg-ink/60 px-1.5 py-0.5 text-[9px] text-accent"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between text-[10px] text-muted border-t border-line/20 pt-2">
        <span>Software Engineering</span>
        <span>UNAM</span>
      </div>
    </div>
  );
}

export function ProjectVisual({
  project,
  image,
  featured = false,
  className,
}: {
  project: Project;
  image: string | null;
  featured?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative aspect-video overflow-hidden rounded-sm border border-line/35 bg-ink-soft",
        featured && "aspect-[16/10]",
        className,
      )}
    >
      {image ? (
        <Image
          src={image}
          alt={`${project.title} product screenshot`}
          fill
          sizes={
            featured
              ? "(max-width: 768px) 100vw, 55vw"
              : "(max-width: 768px) 100vw, 33vw"
          }
          className="object-cover grayscale transition duration-500 group-hover:scale-[1.02] group-hover:grayscale-0"
        />
      ) : (
        <ProjectGraphicFallback project={project} />
      )}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between bg-ink/80 px-3.5 py-2 font-mono text-[10px] uppercase tracking-widest text-paper/90 border-t border-line/20 backdrop-blur-xs">
        <span className="flex items-center gap-1.5 text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {image ? "Product preview" : "Interactive Architecture"}
        </span>
        <span className="text-muted">{project.year}</span>
      </div>
    </div>
  );
}
