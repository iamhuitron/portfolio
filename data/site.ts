// Single source of truth for identity, nav, and contact info.
// Edit the values below — nothing else in the app needs to change.

export type PageTheme = "home" | "projects" | "about" | "contact";

export const SITE = {
  name: "Miguel Delgado",
  fullName: "Ian Miguel Delgado Huitron",
  handle: "@iamhuitron",
  githubUsername: "iamhuitron",
  role: "Informatics Student & Software Developer",
  statusLabel: "Open to internships & collabs",
  location: "Estado de México, México",
  university: "UNAM — FES Cuautitlán",
  degree: "Licenciatura en Informática",

  // TODO: fill these in — left blank on purpose rather than guessed.
  email: "",
  linkedin: "",
  resumeUrl: "",

  github: "https://github.com/iamhuitron",
  siteUrl: "https://portfolio.vercel.app", // TODO: swap for your real production domain
} as const;

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
