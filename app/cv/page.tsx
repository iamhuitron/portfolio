"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Download,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Code2,
  FolderGit2,
  Award,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { CopyButton } from "@/components/ui/CopyButton";
import { SITE } from "@/data/site";

export default function CvPage() {
  function handlePrint() {
    if (typeof window !== "undefined") {
      window.print();
    }
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-16 print:max-w-none print:p-0 print:text-black">
      {/* Top Action Bar (Hidden when printing) */}
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-line/25 pb-6 print:hidden">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-accent"
        >
          <ArrowLeft
            size={14}
            className="transition-transform group-hover:-translate-x-1"
          />
          Volver al portafolio
        </Link>

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-2 rounded-sm bg-accent px-4 py-2 font-mono text-xs uppercase tracking-widest text-ink transition-opacity hover:opacity-90"
          >
            <Download size={14} />
            Imprimir / Guardar en PDF
          </button>
        </div>
      </div>

      {/* CV Paper Card */}
      <article className="rounded-sm border border-line/35 bg-ink-soft/40 p-6 sm:p-10 print:border-none print:bg-transparent print:p-0">
        {/* Header */}
        <header className="border-b border-line/30 pb-6 print:border-neutral-300">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h1 className="font-display text-3xl font-bold tracking-tight text-paper sm:text-4xl print:text-black">
                {SITE.fullName}
              </h1>
              <p className="mt-1 font-mono text-sm uppercase tracking-wider text-accent print:text-neutral-700">
                Desarrollador de Software · UNAM Informática · Google Student Ambassador 2026
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 self-start print:hidden">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-blue-400">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                Google Student Ambassador 2026
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Disponible para prácticas / Junior
              </div>
            </div>
          </div>

          {/* Contact Bar */}
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-muted print:text-neutral-700">
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={13} className="text-accent print:text-neutral-600" />
              {SITE.location}
            </span>
            <a
              href={`mailto:${SITE.email}`}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-accent print:text-neutral-800"
            >
              <Mail size={13} className="text-accent print:text-neutral-600" />
              {SITE.email}
            </a>
            <span className="inline-flex items-center gap-1.5">
              <Phone size={13} className="text-accent print:text-neutral-600" />
              {SITE.phone}
            </span>
            <a
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-accent print:text-neutral-800"
            >
              <GithubIcon size={13} />
              github.com/{SITE.githubUsername}
            </a>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-accent print:text-neutral-800"
            >
              <LinkedinIcon size={13} />
              LinkedIn
            </a>
          </div>
        </header>

        {/* Perfil Profesional */}
        <section className="mt-6 border-b border-line/25 pb-6 print:border-neutral-300">
          <h2 className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent print:text-neutral-800">
            <GraduationCap size={14} />
            Perfil Profesional
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-paper/90 print:text-neutral-800">
            Estudiante de la Licenciatura en Informática en la UNAM (FES
            Cuautitlán) con formación técnica y experiencia laboral previa en
            contabilidad y administración pública. Experiencia práctica
            construyendo aplicaciones multiplataforma con <strong>React Native</strong> y{" "}
            <strong>Expo</strong>, arquitectura de persistencia offline-first con{" "}
            <strong>Zustand</strong> y <strong>MMKV</strong>, y pipelines de CI/CD automatizados
            en <strong>GitHub Actions</strong>. Sólida base en programación orientada a
            objetos (Java), estructuras de datos y automatización con Python. Mi
            antecedente contable me dota de un especial rigor para el manejo de
            reglas de negocio, integridad de datos, casos borde y sistemas de alta
            confiabilidad.
          </p>
        </section>

        {/* Proyectos Técnicos Destacados */}
        <section className="mt-6 border-b border-line/25 pb-6 print:border-neutral-300">
          <h2 className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent print:text-neutral-800">
            <FolderGit2 size={14} />
            Proyectos Técnicos
          </h2>

          <div className="mt-4 space-y-5">
            {/* Flowday */}
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-base font-semibold text-paper print:text-black">
                  FlowDay — App Móvil de Productividad Multiplataforma
                </h3>
                <span className="font-mono text-xs text-muted print:text-neutral-600">
                  2025 · React Native · Expo SDK 52 · CI/CD
                </span>
              </div>
              <p className="mt-1 font-mono text-xs text-accent print:text-neutral-700">
                React Native · Expo SDK 52 · Zustand · MMKV · Expo Router · NativeWind · GitHub Actions
              </p>
              <ul className="mt-2 list-inside list-disc space-y-1 text-xs leading-relaxed text-muted print:text-neutral-800">
                <li>
                  Desarrollo integral de una app de productividad offline-first para Android (con arquitectura preparada para Web e iOS): time-blocking, seguimiento de hábitos con rachas, diario con registro anímico y gestor de tareas.
                </li>
                <li>
                  Implementación de pipeline de CI/CD en GitHub Actions para generación y firmado automatizado de builds APK en cada release.
                </li>
                <li>
                  Diseño de capa de almacenamiento de ultra-alta velocidad integrando Zustand con MMKV, resolviendo incompatibilidades con la Nueva Arquitectura de React Native.
                </li>
                <li>
                  Construcción de módulos avanzados: sistema de recordatorios/notificaciones, estadísticas visuales (heatmap y gráficos), importación/exportación de datos y onboarding guiado.
                </li>
              </ul>
            </div>

            {/* CFDI Sentinel */}
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-base font-semibold text-paper print:text-black">
                  CFDI Sentinel — Auditor Fiscal In-Browser y Centinela SAT Art. 69-B
                </h3>
                <span className="font-mono text-xs text-muted print:text-neutral-600">
                  2026 · Next.js · React 19 · Web Workers · FinTech
                </span>
              </div>
              <p className="mt-1 font-mono text-xs text-accent print:text-neutral-700">
                Next.js · TypeScript · Web Workers · Fast-XML · Tailwind CSS · Anexo 20 SAT
              </p>
              <ul className="mt-2 list-inside list-disc space-y-1 text-xs leading-relaxed text-muted print:text-neutral-800">
                <li>
                  Plataforma web de auditoría fiscal masiva que audita paquetes ZIP y XMLs de CFDI 4.0 directamente en memoria de navegador, garantizando 100% de privacidad y cero costo de servidor.
                </li>
                <li>
                  Procesamiento en segundo plano mediante Web Workers para descompresión y parseo concurrente de alta velocidad sin degradar la tasa de refresco (60fps) de la interfaz de usuario.
                </li>
                <li>
                  Motor de búsqueda offline O(1) contra listas negras oficiales de EFOS (SAT Art. 69-B), validación algorítmica de fórmulas de Anexo 20 y conciliación automática de DIOT.
                </li>
              </ul>
            </div>

            {/* UniSched */}
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-base font-semibold text-paper print:text-black">
                  UniSched Optimizer — Planificador Algorítmico de Horarios
                </h3>
                <span className="font-mono text-xs text-muted print:text-neutral-600">
                  2025–2026 · Next.js · TypeScript · Algoritmos
                </span>
              </div>
              <p className="mt-1 font-mono text-xs text-accent print:text-neutral-700">
                Next.js · React · TypeScript · Backtracking · pdf.js · Tesseract.js
              </p>
              <ul className="mt-2 list-inside list-disc space-y-1 text-xs leading-relaxed text-muted print:text-neutral-800">
                <li>
                  Motor de búsqueda que evalúa miles de combinaciones de materias mediante algoritmo de backtracking para generar horarios 100% libres de colisiones.
                </li>
                <li>
                  Procesamiento y extracción de texto de planes de estudio y horarios en PDF o imagen mediante OCR local en el navegador, garantizando cero latencia de servidor y total privacidad de datos.
                </li>
              </ul>
            </div>

            {/* Statix & Automatización */}
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-base font-semibold text-paper print:text-black">
                  Statix — Automatización de Auditorías Fiscales y Reportes
                </h3>
                <span className="font-mono text-xs text-muted print:text-neutral-600">
                  2025 · Python · Streamlit · ReportLab
                </span>
              </div>
              <p className="mt-1 font-mono text-xs text-accent print:text-neutral-700">
                Python · Streamlit · ReportLab · Pandas · Microsoft Excel
              </p>
              <ul className="mt-2 list-inside list-disc space-y-1 text-xs leading-relaxed text-muted print:text-neutral-800">
                <li>
                  Plataforma analítica nacida de la experiencia directa en auditoría gubernamental: automatiza la conciliación de facturas y cotejo de registros fiscales.
                </li>
                <li>
                  Desarrollo de scripts con la librería ReportLab para la generación programática de dictámenes y reportes PDF a partir de datos estructurados, suprimiendo tareas repetitivas de hoja de cálculo.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Experiencia Laboral */}
        <section className="mt-6 border-b border-line/25 pb-6 print:border-neutral-300">
          <h2 className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent print:text-neutral-800">
            <Briefcase size={14} />
            Experiencia Laboral
          </h2>

          <div className="mt-3">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-display text-base font-semibold text-paper print:text-black">
                Auxiliar Contable y Administrativo
              </h3>
              <span className="font-mono text-xs text-muted print:text-neutral-600">
                Abril 2025 – Noviembre 2025
              </span>
            </div>
            <p className="text-xs text-muted print:text-neutral-700">
              Palacio Municipal de Zumpango — Zumpango, Estado de México
            </p>
            <ul className="mt-2 list-inside list-disc space-y-1 text-xs leading-relaxed text-muted print:text-neutral-800">
              <li>
                Gestión y control de libros de contabilidad, cuentas por cobrar y por pagar mediante software especializado (Aspel) y Microsoft Excel, garantizando el registro fidedigno de operaciones.
              </li>
              <li>
                Participación activa en auditorías financieras y conciliaciones de cuentas bancarias municipales con estricta rigurosidad analítica.
              </li>
              <li>
                Cotejo, organización y validación de expedientes fiscales conforme a normatividad administrativa interna.
              </li>
              <li>
                Atención y orientación a contribuyentes y dependencias administrativas en trámites fiscales con enfoque en resolución de problemas.
              </li>
            </ul>
          </div>
        </section>

        {/* Educación y Distinciones */}
        <section className="mt-6 border-b border-line/25 pb-6 print:border-neutral-300">
          <h2 className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent print:text-neutral-800">
            <GraduationCap size={14} />
            Educación y Distinciones
          </h2>

          <div className="mt-3 space-y-3">
            <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-line/15 pb-2">
              <div>
                <h3 className="text-sm font-semibold text-paper print:text-black">
                  Estudiante Embajador de Google 2026 (Google Student Ambassador)
                </h3>
                <p className="text-xs text-muted print:text-neutral-700">
                  Google Developers / Google for Education — Liderazgo y difusión de tecnología, talleres e IA en la UNAM
                </p>
              </div>
              <span className="font-mono text-xs text-blue-400 font-semibold print:text-neutral-600">
                2026 – Actualidad
              </span>
            </div>

            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <h3 className="text-sm font-semibold text-paper print:text-black">
                  Licenciatura en Informática (En curso)
                </h3>
                <p className="text-xs text-muted print:text-neutral-700">
                  Facultad de Estudios Superiores Cuautitlán, UNAM
                </p>
              </div>
              <span className="font-mono text-xs text-muted print:text-neutral-600">
                Agosto 2025 – Actualidad
              </span>
            </div>

            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <h3 className="text-sm font-semibold text-paper print:text-black">
                  Técnico en Computación Fiscal Contable
                </h3>
                <p className="text-xs text-muted print:text-neutral-700">
                  Universidad Bancaria de México (UBAM)
                </p>
              </div>
              <span className="font-mono text-xs text-muted print:text-neutral-600">
                Junio 2022 – Junio 2025
              </span>
            </div>

            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <h3 className="text-sm font-semibold text-paper print:text-black">
                  Auxiliar Técnico en Administración Contable
                </h3>
                <p className="text-xs text-muted print:text-neutral-700">
                  E.S.T.I.C. No. 039
                </p>
              </div>
              <span className="font-mono text-xs text-muted print:text-neutral-600">
                Agosto 2019 – Agosto 2022
              </span>
            </div>
          </div>
        </section>

        {/* Habilidades Técnicas y de Dominio */}
        <section className="mt-6 border-b border-line/25 pb-6 print:border-neutral-300">
          <h2 className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent print:text-neutral-800">
            <Code2 size={14} />
            Habilidades Técnicas y Competencias
          </h2>

          <div className="mt-3 grid gap-3 text-xs sm:grid-cols-2">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wide text-muted print:text-neutral-700">
                Desarrollo &amp; Lenguajes
              </p>
              <p className="mt-1 text-paper/90 print:text-neutral-800">
                React Native, Expo, TypeScript, JavaScript, Python, Java (POO), Go, Next.js, React, HTML/CSS
              </p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wide text-muted print:text-neutral-700">
                Arquitectura &amp; Herramientas
              </p>
              <p className="mt-1 text-paper/90 print:text-neutral-800">
                Zustand, MMKV, GitHub Actions (CI/CD), Git / GitHub, NativeWind / Tailwind CSS, Estructuras de Datos (pilas, colas, BFS, backtracking)
              </p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wide text-muted print:text-neutral-700">
                Dominio Contable &amp; Datos
              </p>
              <p className="mt-1 text-paper/90 print:text-neutral-800">
                Auditoría financiera, conciliación de cuentas, paquetería contable Aspel, ReportLab (automatización PDF), Microsoft Excel avanzado
              </p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wide text-muted print:text-neutral-700">
                Idiomas &amp; Certificación
              </p>
              <p className="mt-1 text-paper/90 print:text-neutral-800">
                Inglés Intermedio (B2) · Certificación en Manejo de Software Contable (UBAM, Mayo 2025)
              </p>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
