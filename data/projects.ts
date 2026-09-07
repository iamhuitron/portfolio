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
    slug: "cfdi-sentinel",
    title: "CFDI Sentinel",
    tagline: "In-browser CFDI 4.0 fiscal auditor & SAT Art. 69-B blacklist sentinel",
    problem:
      "Mexican SMEs and accountants manually reconcile hundreds of XML invoices while facing audit discrepancies and severe legal liabilities from unrecognized EFOS shell-company suppliers.",
    solution:
      "A 100% client-side web application that audits bulk CFDI 4.0 XMLs and ZIPs directly in browser memory, cross-checking RFCs against the official SAT Article 69-B blacklist, validating Anexo 20 math, calculating DIOT obligations, and exporting multi-sheet Excel workbooks with zero server exposure.",
    technicalHighlights: [
      "Privacy-first architecture: In-memory XML parsing and ZIP decompression via Web Workers with zero server dependencies",
      "Regulatory intelligence: Instant offline O(1) cross-reference against SAT Article 69-B EFOS blacklist (Definitivo, Presunto)",
      "Audit engine: Algorithmic validation for Anexo 20 tax formulas, RFC regex compliance, and duplicate UUID detection",
      "Financial automation: Automated VAT reconciliation, withholding calculations, and multi-sheet Excel (.xlsx) workbook generation",
    ],
    categories: ["FinTech", "Data Analytics", "Software Engineering"],
    techStack: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Fast XML Parser", "SheetJS", "Vitest"],
    featured: false,
    selected: true,
    year: "2026",
    images: { useReadme: true },
    links: {
      github: "https://github.com/iamhuitron/cfdi-sentinel",
      live: "https://xaol-website.vercel.app/demo/sat-sentinel.html",
    },
  },
  {
    slug: "nomina-matrix",
    title: "Nomina-Matrix",
    tagline: "Mexican payroll reverse-engineering (Net-to-Gross) & IMSS 2026 labor suite",
    problem:
      "Mexican businesses and HR teams struggle to calculate net-to-gross salaries under complex non-linear tax curves while underestimating escalating IMSS 2026 social costs and severance liabilities.",
    solution:
      "A high-precision client-side payroll engine that inverts progressive income tax curves (ISR Art. 96) using binary search, computes granular 5-branch IMSS employer/employee quotas with 2026 progressive pension reforms, and simulates constitutional severance packages with statutory tax exemptions.",
    technicalHighlights: [
      "Algorithmic optimization: Sub-cent binary search convergence resolving Net-to-Gross salaries in < 25 iterations",
      "Regulatory intelligence: Full compliance with 2026 Mexican social security reforms (IMSS RCV progressive employer tier)",
      "Labor law compliance: Statutory LFT termination simulator (Constitutional 3-month indemnity, 20 days/yr, and 90-UMA tax exemptions)",
      "Financial automation: Batch SME team payroll audit, simulated CFDI Nómina 1.2 vouchers, and multi-tab Excel (.xlsx) export",
    ],
    categories: ["FinTech", "Algorithms", "Software Engineering"],
    techStack: ["Next.js", "TypeScript", "React", "Tailwind CSS", "SheetJS", "Vitest"],
    featured: false,
    selected: true,
    year: "2026",
    images: { useReadme: true },
    links: {
      github: "https://github.com/iamhuitron/nomina-matrix",
    },
  },
  {
    slug: "pyme-manager-core",
    title: "PyME Manager Core",
    tagline: "Deterministic TypeScript & SQL retail engine with SAT Anexo 20 compliance",
    problem:
      "Small-to-medium retail businesses and auto-parts counters face inventory desynchronization and cash-register rounding errors due to weak database constraints and floating-point math.",
    solution:
      "A lightweight, deterministic core engine built on integer-cents financial arithmetic, ACID-compliant relational schemas (PostgreSQL / SQLite), atomic stock checks, and Mexican SAT Anexo 20 tax formulas.",
    technicalHighlights: [
      "Integer-cents precision: Complete elimination of IEEE 754 float drift across lines and discounts",
      "Relational DDL: Complete PostgreSQL and SQLite schemas with CHECK constraints and POS indexes",
      "Tax reconciliation: Multi-rate VAT aggregator (16%, 8% border, 0%, exempt) conforming to SAT rules",
      "Quality engineering: 100% automated test pass rate using Node.js native test runner and GitHub Actions CI",
    ],
    categories: ["Software Engineering", "FinTech", "Databases"],
    techStack: ["TypeScript", "PostgreSQL", "SQLite", "SAT Anexo 20", "Node.js", "CI/CD"],
    featured: false,
    selected: true,
    year: "2026",
    images: { useReadme: true },
    links: {
      github: "https://github.com/Xaol-Studio/pyme-manager-core",
      live: "https://xaol-website.vercel.app/demo/pyme-manager.html",
    },
  },
  {
    slug: "cfdi-sat-engine",
    title: "CFDI SAT Engine",
    tagline: "High-performance Python fiscal auditor & SAT Art. 69-B (EFOS) sentinel",
    problem:
      "Developers, ERPs, and automated accounting workflows need a lightweight, ultra-fast Python engine to audit CFDI 4.0 XMLs and detect blacklisted suppliers without heavy cloud dependencies.",
    solution:
      "A pure standard-library Python package and CLI that validates Anexo 20 math, checks RFC validity, screens against the official SAT Article 69-B EFOS blacklist in O(1) time, and generates automated audit reports.",
    technicalHighlights: [
      "Zero-dependency architecture: Built strictly on Python 3.10+ standard library (xml.etree, decimal, csv, re)",
      "High-throughput screening: O(1) in-memory hash verification against official Mexican tax fraud blacklists",
      "Rigorous Anexo 20 compliance: High-precision decimal arithmetic validation for tax withholding and VAT transfers",
      "Automated CI/CD: Multi-version matrix testing with GitHub Actions and comprehensive unit test coverage",
    ],
    categories: ["FinTech", "Automation", "Software Engineering"],
    techStack: ["Python", "XML", "SAT CFDI 4.0", "GitHub Actions", "CLI"],
    featured: false,
    selected: true,
    year: "2026",
    images: { useReadme: true },
    links: {
      github: "https://github.com/iamhuitron/cfdi-sat-engine",
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
