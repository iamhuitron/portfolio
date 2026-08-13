import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Software engineering, mobile, automation, data, AI, and FinTech projects by Miguel Delgado.",
};

export default function ProjectsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div data-theme="projects">{children}</div>;
}
