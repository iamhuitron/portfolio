import type { Metadata } from "next";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { Hero } from "@/components/sections/Hero";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { InternshipCta } from "@/components/sections/InternshipCta";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: `${SITE.name} — Portfolio`,
  description:
    "Portfolio of Miguel Delgado, a software developer and UNAM Informatics student building web, mobile, automation, data, and FinTech products.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "/",
    title: `${SITE.name} — Portfolio`,
    description:
      "Software developer and UNAM Informatics student building practical web, mobile, automation, data, and FinTech products.",
  },
};

export default function HomePage() {
  return (
    <div data-theme="home">
      <Hero />
      <FeaturedProjects />
      <AboutPreview />
      <InternshipCta />
    </div>
  );
}
