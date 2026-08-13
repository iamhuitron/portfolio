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
  problem: string;
  solution: string;
  technicalHighlights: string[];
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
    problem:
      "Planning from course-catalog PDFs or photos makes it difficult to compare valid combinations and catch schedule conflicts.",
    solution:
      "A browser-based scheduler parses the input, searches valid section combinations with backtracking, and supports manual planning with live clash detection.",
    technicalHighlights: [
      "Optimization: backtracking across section combinations",
      "Data processing: PDF parsing and local OCR",
      "Validation: live conflict detection and a verified course catalog",
      "Client-side architecture: parsing and OCR run in the browser",
    ],
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
    problem:
      "Daily scheduling, habits, career planning, and mood notes need one mobile workflow that remains useful offline.",
    solution:
      "A cross-platform productivity app combines those workflows with locally persisted state for fast, offline-first use.",
    technicalHighlights: [
      "Mobile architecture: React Native with Expo",
      "Offline-first state: Zustand backed by MMKV",
      "Automation: GitHub Actions ships signed Android builds",
      "Product surface: scheduling, heatmaps, roadmap, and mood journal",
    ],
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
    problem:
      "Invoice reconciliation and tax-audit reporting can become repetitive, manual, and difficult to validate consistently.",
    solution:
      "A Python and Streamlit analytics engine turns invoice data into a repeatable workflow for validation, reconciliation, and audit reporting.",
    technicalHighlights: [
      "Data processing: invoice reconciliation",
      "Validation: checks before reporting",
      "Automation: repeatable workflow instead of spreadsheet work",
      "FinTech context: tax-audit reporting",
    ],
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
    problem:
      "A LAN game needs gameplay, real-time chat, networking, and solo play to work together in one desktop product.",
    solution:
      "A Wails desktop app combines a Go system layer with a React interface for LAN multiplayer, peer-to-peer play, chat, and AI opponents.",
    technicalHighlights: [
      "Architecture: Go and React connected through Wails",
      "Networking: LAN and peer-to-peer multiplayer",
      "Real-time features: chat alongside game state",
      "Game systems: AI opponents for solo play",
    ],
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
    problem:
      "AI and machine-learning concepts are difficult to learn when the material is limited to text and static explanations.",
    solution:
      "An interactive, responsive educational site uses visual presentation to explain AI, machine learning, and emerging technology.",
    technicalHighlights: [
      "Information architecture: concepts organized as a learning experience",
      "Front-end delivery: responsive web interface",
      "Visual communication: interaction supports explanation",
      "Implementation: JavaScript and SCSS",
    ],
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
    problem:
      "Graduation paperwork creates bottlenecks across document verification, application tracking, and academic completion.",
    solution:
      "A hackathon platform organizes document verification, application tracking, and academic completion workflows in one place.",
    technicalHighlights: [
      "Workflow architecture: verification, tracking, and completion",
      "Automation: AI-assisted tracking for paperwork-heavy processes",
      "Product scope: academic completion workflow",
      "Implementation: PHP and HTML",
    ],
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
    problem:
      "Object-oriented design is easier to understand when it has to support a complete, stateful game system.",
    solution:
      "A turn-based Java RPG applies OOP through combat mechanics, character systems, and game-state management.",
    technicalHighlights: [
      "Architecture: object-oriented game systems",
      "State management: persistent game state across turns",
      "Domain logic: combat and character systems",
      "Implementation: Java",
    ],
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
