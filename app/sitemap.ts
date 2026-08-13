import type { MetadataRoute } from "next";
import { SITE } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/projects", "/about", "/contact"];
  return routes.map((route) => ({
    url: `${SITE.siteUrl}${route}`,
    lastModified: new Date(),
  }));
}
