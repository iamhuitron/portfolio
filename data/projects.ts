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
    tagline: "Conflict-free class schedules, solved automatically with backtracking",
    problem:
      "UNAM students face conflicting schedules across hundreds of course sections published only in PDF catalogs or photos.",
    solution:
      "A client-side optimizer that parses catalogs in the browser, searches conflict-free combinations via backtracking, and detects time clashes in real time.",
    technicalHighlights: [
      "Optimization: Backtracking & constraint satisfaction across section combinations",
      "Data processing: In-browser PDF parsing and client-side OCR without backend latency",
      "Validation: Instant clash detection with verified university course catalog",
      "Client-side architecture: Zero server dependencies — 100% private in-browser computation",
    ],
    categories: ["Algorithms", "Web Development", "Productivity"],
    techStack: ["Next.js", "TypeScript", "React", "pdf.js", "Tesseract.js"],
    featured: true,
    selected: true,
    year: "2025–2026",
    images: { useReadme: true },
    links: {
      github: "https://github.com/iamhuitron/UniSched-Optimizer",
      live: "https://uni-sched-optimizer.vercel.app/",
    },
  },
  {
    slug: "whatsapp-networking-hub",
    title: "WhatsApp Networking Hub",
    tagline: "Client-side networking directory from WhatsApp group chats",
    problem:
      "Networking in large WhatsApp community groups is chaotic and unstructured, with member introductions buried across thousands of messages.",
    solution:
      "A 100% client-side web application that parses exported chat logs locally in browser memory, building a searchable directory with one-click social profiles without storing data on any server.",
    technicalHighlights: [
      "Privacy-first architecture: Zero backend and zero telemetry — processed entirely in-browser via File API",
      "Local persistence: Client-side storage using IndexedDB and localStorage",
      "Performance: High-speed in-memory text parsing and normalization without external API latency",
      "Data portability: Export filtered networking sessions directly to CSV and Excel",
    ],
    categories: ["Web Development", "Privacy", "Productivity"],
    techStack: ["Next.js", "TypeScript", "React", "IndexedDB", "Tailwind CSS"],
    featured: false,
    selected: true,
    year: "2026",
    images: { useReadme: true },
    links: {
      github: "https://github.com/iamhuitron/whatsapp-networking-hub",
      live: "https://whatsapp-networking-hub.vercel.app",
    },
  },
  {
    slug: "Flowday",
    title: "Flowday",
    tagline: "Offline-first mobile productivity with automated CI/CD pipeline",
    problem:
      "Daily time-blocking, habit streaks, mood journaling, and career roadmaps require instant, reliable mobile access with zero offline degradation.",
    solution:
      "A cross-platform React Native / Expo application built on the New Architecture with high-performance local storage (MMKV + Zustand) and automated APK releases via GitHub Actions.",
    technicalHighlights: [
      "Mobile architecture: React Native & Expo SDK 52 with Expo Router and NativeWind",
      "Offline-first state: High-performance Zustand store persisted with MMKV",
      "DevOps / CI/CD: Automated GitHub Actions pipeline building and signing Android APKs",
      "Complex problem solving: Overcame JDK version conflicts and New Architecture C++ bridge constraints",
    ],
    categories: ["Mobile", "Productivity", "DevOps"],
    techStack: ["React Native", "Expo", "TypeScript", "Zustand", "MMKV", "GitHub Actions"],
    featured: false,
    selected: true,
    year: "2025",
    images: { useReadme: true },
    links: {
      github: "https://github.com/iamhuitron/Flowday",
      live: "https://flowday-rho.vercel.app/",
    },
  },
  {
    slug: "Statix",
    title: "Statix",
    tagline: "Automated tax audits & invoice reconciliation from raw fiscal data",
    problem:
      "Manual invoice reconciliation and municipal tax-audit reporting are repetitive, error-prone, and create compliance bottlenecks.",
    solution:
      "A Python analytics and reporting engine born directly out of municipal government accounting experience that parses raw invoices, runs reconciliation algorithms, and generates compliance audit reports.",
    technicalHighlights: [
      "Domain expertise: Direct application of municipal public accounting & audit procedures",
      "Data automation: Automated invoice reconciliation replacing hours of spreadsheet work",
      "Report generation: Automated PDF generation with ReportLab from structured fiscal data",
      "Validation engine: Algorithmic checks for discrepancy detection and tax calculation",
    ],
    categories: ["FinTech", "Data Analytics", "Automation"],
    techStack: ["Python", "Streamlit", "ReportLab", "Pandas", "Microsoft Excel"],
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
    links: {
      github: "https://github.com/iamhuitron/ai-insights",
      live: "https://iamhuitron.github.io/ai-insights/",
    },
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
    links: {
      github: "https://github.com/iamhuitron/titulacion-ai",
      live: "https://2026-2-fes-ia-hack-hackathon-plataf.vercel.app/",
    },
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
