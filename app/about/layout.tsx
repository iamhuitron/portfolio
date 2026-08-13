import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Miguel Delgado, a UNAM Informatics student and software developer focused on practical, reliable products.",
};

export default function AboutLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div data-theme="about">{children}</div>;
}
