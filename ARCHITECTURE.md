# 🏛️ Portfolio Architecture & System Topology

High-performance personal engineering portfolio built with Next.js 15 App Router, React 19, and Tailwind CSS v4. Designed with an editorial, Swiss-style architectural aesthetic and strict data modeling.

---

## 1. Technology Stack

| Layer | Technology | Details |
| :--- | :--- | :--- |
| **Framework** | Next.js 15 (App Router) | Server Components by default, selective Client Components |
| **Language** | TypeScript 5 (Strict Mode) | Full type safety across data layers and props |
| **Styling** | Tailwind CSS v4 | OKLCH color spaces, CSS variables, `@theme` tokens |
| **Motion & Animation** | `motion/react` | Smooth signature bezier easing, zero bouncing AI gimmicks |
| **Icons** | `lucide-react` | Monochrome, semantic stroke icons |
| **Data Fetching** | GitHub REST API | Cached star counts and repository metadata |
| **Deployment** | Vercel Edge Network | Global CDN edge caching |

---

## 2. System Topology & Component Graph

```mermaid
flowchart TD
    subgraph RootLayout["app/layout.tsx"]
        Nav["Navigation (components/layout/Navigation.tsx)"]
        Footer["Footer (components/layout/Footer.tsx)"]
    end

    subgraph Pages["App Routes"]
        Home["app/page.tsx (Home)"]
        Projects["app/projects/page.tsx (Projects)"]
        About["app/about/page.tsx (About)"]
        Contact["app/contact/page.tsx (Contact)"]
        CV["app/cv/page.tsx (CV / Résumé)"]
    end

    subgraph HomeSections["Home Page Sections"]
        Hero["Hero.tsx (ATS Stack & Differentiator)"]
        Featured["FeaturedProjects.tsx (Top Case Studies)"]
        AboutPrev["AboutPreview.tsx (Pillars & Rigor)"]
        CTA["InternshipCta.tsx (Availability & Contact)"]
    end

    subgraph DataLayer["Data & Utility Layer"]
        SiteData["data/site.ts (Metadata & Tech Stack)"]
        ProjectsData["data/projects.ts (Project Registry)"]
        GithubAPI["lib/github.ts (Live Stars & Readme Scraping)"]
    end

    RootLayout --> Pages
    Home --> HomeSections
    Featured --> ProjectsData
    Featured --> GithubAPI
    Hero --> SiteData
    AboutPrev --> SiteData
    CTA --> SiteData
```

---

## 3. Data Flow

```mermaid
sequenceDiagram
    autonumber
    actor Recruiter as Recruiter / Visitor
    participant Browser as Browser Client
    participant NextServer as Next.js Server Component
    participant GitHub as GitHub REST API
    participant StaticData as Static Registry (data/projects.ts)

    Recruiter->>Browser: Requests iamhuitron.vercel.app
    Browser->>NextServer: GET /
    NextServer->>StaticData: getSelectedProjects()
    NextServer->>GitHub: Fetch live repo metadata & stars (lib/github.ts)
    GitHub-->>NextServer: JSON repo payload (cached)
    NextServer->>NextServer: Enrich projects with live GitHub stats
    NextServer-->>Browser: Stream rendered SSR HTML & CSS
    Browser->>Browser: Hydrate motion transitions & client actions (copy email)
```

---

## 4. Directory Structure & Module Responsibilities

```
portfolio/
├── app/                  # Next.js App Router (pages, layouts, metadata)
│   ├── globals.css       # Design tokens, ledger-grid texture, OKLCH palette
│   ├── layout.tsx        # Base HTML shell, custom webfonts (Fraunces, Space Grotesk)
│   ├── page.tsx          # Home page composing Hero, Featured, About, CTA
│   ├── projects/         # Full project archive with search/filter
│   ├── about/            # Extended background, UNAM Informatics & audit experience
│   ├── contact/          # Direct contact channels and scheduling
│   └── cv/               # Printable web CV / Résumé
├── components/           # Reusable UI component library
│   ├── layout/           # Global Navigation and Footer
│   ├── sections/         # Composed page sections (Hero, FeaturedProjects, CTA)
│   └── ui/               # Atomic primitives (ProductCard, Chip, ButtonLink)
├── data/                 # Source of truth for portfolio content
│   ├── site.ts           # Site identity, socials, ATS keywords, contact
│   └── projects.ts       # Structured case study catalogue
└── lib/                  # Utilities & API clients
    ├── github.ts         # GitHub repository metadata and image resolvers
    └── utils.ts          # Class merging and formatting utilities
```
