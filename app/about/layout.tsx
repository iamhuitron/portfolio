import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "From reconciliation and reporting in municipal accounting to Informatics at UNAM — education, experience, and the skills in between.",
};

export default function AboutLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div data-theme="about">{children}</div>;
}
