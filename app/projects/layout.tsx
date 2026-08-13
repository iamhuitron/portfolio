import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Software engineering, data, and mobile projects — algorithms, offline-first apps, and a few things built just to learn something.",
};

export default function ProjectsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div data-theme="projects">{children}</div>;
}
