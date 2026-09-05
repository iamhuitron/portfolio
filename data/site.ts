// Single source of truth for identity, nav, and contact info.
// Edit the values below — nothing else in the app needs to change.

export type PageTheme = "home" | "projects" | "about" | "contact";

export const SITE = {
  name: "Miguel Delgado",
  fullName: "Ian Miguel Delgado Huitron",
  handle: "@iamhuitron",
  githubUsername: "iamhuitron",
  role: "Software Developer · Informatics at UNAM · Google Student Ambassador 2026",
  statusLabel: "Google Student Ambassador 2026 · Open to Internships & Junior Roles",
  location: "Zumpango, Estado de México",
  university: "UNAM — FES Cuautitlán",
  degree: "Licenciatura en Informática",

  email: "ianhuitron0687@gmail.com",
  linkedin: "https://www.linkedin.com/in/ian-miguel-delgado-huitron-18b035349/",
  resumeUrl: "/cv",
  phone: "+52 593 126 9253",

  github: "https://github.com/iamhuitron",
  siteUrl: "https://portfolio.vercel.app",
} as const;

export const CORE_STACK = [
  { name: "React Native / Expo", category: "Mobile" },
  { name: "TypeScript", category: "Language" },
  { name: "Next.js & React", category: "Web" },
  { name: "Python", category: "Automation & Data" },
  { name: "Java (POO)", category: "Systems" },
  { name: "Go", category: "Systems" },
  { name: "Zustand & MMKV", category: "Architecture" },
  { name: "GitHub Actions (CI/CD)", category: "DevOps" },
] as const;

export const NAV_ITEMS: { href: string; label: string; theme: PageTheme }[] = [
  { href: "/", label: "Home", theme: "home" },
  { href: "/projects", label: "Projects", theme: "projects" },
  { href: "/about", label: "About", theme: "about" },
  { href: "/contact", label: "Contact", theme: "contact" },
];

// Each page's accent maps to a static Tailwind utility (defined in
// globals.css under @theme) so the nav can show every page's color as a
// legend dot, regardless of which page is currently active.
export const THEME_DOT_CLASS: Record<PageTheme, string> = {
  home: "bg-marigold",
  projects: "bg-cobalt",
  about: "bg-plum",
  contact: "bg-verdigris",
};

export const THEME_TEXT_CLASS: Record<PageTheme, string> = {
  home: "text-marigold",
  projects: "text-cobalt",
  about: "text-plum",
  contact: "text-verdigris",
};
