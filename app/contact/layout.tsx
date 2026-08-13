import type { Metadata } from "next";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Miguel Delgado about software engineering internships and focused collaborations.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    url: "/contact",
    title: `Contact — ${SITE.name}`,
    description:
      "Contact Miguel Delgado about software engineering internships and focused collaborations.",
  },
};

export default function ContactLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div data-theme="contact">{children}</div>;
}
