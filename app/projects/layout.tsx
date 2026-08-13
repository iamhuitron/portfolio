import type { Metadata } from "next";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Software engineering, mobile, automation, data, AI, and FinTech projects by Miguel Delgado.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    url: "/projects",
    title: `Projects — ${SITE.name}`,
    description:
      "Software engineering, mobile, automation, data, AI, and FinTech projects by Miguel Delgado.",
  },
};

export default function ProjectsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div data-theme="projects">{children}</div>;
}
