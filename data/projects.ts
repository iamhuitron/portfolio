// The modular project registry. To swap a project out: change the `slug`
// (must match the GitHub repo name exactly — everything else, stars,
// language, last-updated date, is fetched live) and rewrite the copy below
// it. To add or remove one: add or remove an object from this array. Order
// here is display order on /projects. `featured` is the main Home project;
// `selected` controls the wider selection shown below it.

export interface Project {
  /** Exact GitHub repo name under github.com/iamhuitron — used for API calls. */
  slug: string;
  title: string;
  tagline: string;
  description: string;
  categories: string[];
  techStack: string[];
  featured: boolean;
  selected: boolean;
  year: string;
  images: {
    /** Paths under /public/projects, tried before anything fetched live. */
    local?: string[];
    /** If true and no local image exists, try pulling the first image out of the repo's README. */
    useReadme?: boolean;
  };
  links: {
    github: string;
    live?: string;
  };
}

export const PROJECTS: Project[] = [
  {
    slug: "UniSched-Optimizer",
    title: "UniSched Optimizer",
    tagline: "Conflict-free class schedules, solved automatically",
    description:
      "Upload a course-catalog PDF or photo and a backtracking solver works through every valid combination of sections to find schedules with zero conflicts that fit your constraints — or build one manually with live clash detection as you go. PDF parsing and OCR both run locally in the browser, seeded with a verified course catalog for FES Cuautitlán's Informática program.",
    categories: ["Software Engineering", "Algorithms", "Productivity"],
    techStack: ["Next.js", "TypeScript", "React", "pdf.js", "Tesseract.js"],
    featured: true,
    selected: true,
    year: "2025–2026",
    images: { useReadme: true },
    links: { github: "https://github.com/iamhuitron/UniSched-Optimizer" },
  },
  {
    slug: "Flowday",
    title: "Flowday",
    tagline: "Habits, routines, and a five-phase roadmap — offline-first",
    description:
      "A cross-platform productivity app built around daily scheduling, habit tracking with heatmaps, a five-phase career roadmap, and a mood journal. State lives in Zustand backed by MMKV for near-instant reads, and a GitHub Actions pipeline ships signed Android builds automatically.",
    categories: ["Mobile", "Productivity"],
    techStack: ["React Native", "Expo", "Zustand", "MMKV", "NativeWind"],
    featured: false,
    selected: true,
    year: "2025",
    images: { useReadme: true },
    links: { github: "https://github.com/iamhuitron/Flowday" },
  },
  {
    slug: "Statix",
    title: "Statix",
    tagline: "Tax audits, automated — from raw invoices to reconciled reports",
    description:
      "A financial analytics engine for invoice reconciliation, validation, and tax-audit reporting, built with Python and Streamlit. The kind of manual reconciliation work I used to do by hand in a municipal accounting office — now a repeatable pipeline instead of a spreadsheet.",
    categories: ["FinTech", "Data Analytics"],
    techStack: ["Python", "Streamlit"],
    featured: false,
    selected: true,
    year: "2025",
    images: { useReadme: true },
    links: { github: "https://github.com/iamhuitron/Statix" },
  },
  {
    slug: "NetNaval",
    title: "NetNaval",
    tagline: "Battleship meets real-time chat, built for LAN play",
    description:
      "A hybrid desktop Battleship game with real-time chat, written in Go with a React front end wired through Wails. Supports LAN multiplayer, peer-to-peer networking, and AI opponents for solo games.",
    categories: ["Software Engineering", "Systems & Networking", "Games"],
    techStack: ["Go", "React", "Wails"],
    featured: false,
    selected: true,
    year: "2025",
    images: { useReadme: true },
    links: { github: "https://github.com/iamhuitron/NetNaval" },
  },
  {
    slug: "ai-insights",
    title: "AI Insights",
    tagline: "AI and machine learning, explained through interaction",
    description:
      "An educational site exploring artificial intelligence, machine learning, and emerging tech through a modern, responsive interface — built to teach the concepts visually instead of just writing about them.",
    categories: ["Web Development", "Education"],
    techStack: ["JavaScript", "SCSS"],
    featured: false,
    selected: true,
    year: "2025",
    images: { useReadme: true },
    links: { github: "https://github.com/iamhuitron/ai-insights" },
  },
  {
    slug: "titulacion-ai",
    title: "Titulación AI",
    tagline: "Streamlining graduation paperwork with AI-assisted tracking",
    description:
      "Built during a hackathon at FES Cuautitlán: a platform for document verification, application tracking, and academic completion workflows, aimed at cutting through the graduation process's usual paperwork bottleneck.",
    categories: ["Web Development", "AI/Automation"],
    techStack: ["PHP", "HTML"],
    featured: false,
    selected: true,
    year: "2025",
    images: { useReadme: true },
    links: { github: "https://github.com/iamhuitron/titulacion-ai" },
  },
  {
    slug: "java-rpg-game",
    title: "Java RPG",
    tagline: "A turn-based RPG built to put OOP into practice",
    description:
      "A Java RPG with custom combat mechanics, character systems, and game-state management — built as a hands-on way to explore object-oriented design beyond classroom exercises.",
    categories: ["Software Engineering", "Games"],
    techStack: ["Java"],
    featured: false,
    selected: false,
    year: "2025",
    images: { useReadme: true },
    links: { github: "https://github.com/iamhuitron/java-rpg-game" },
  },
];

export function getFeaturedProjects(): Project[] {
  return PROJECTS.filter((p) => p.featured);
}

export function getSelectedProjects(): Project[] {
  return PROJECTS.filter((p) => p.selected);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
