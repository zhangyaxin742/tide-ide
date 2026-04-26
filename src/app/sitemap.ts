import type { MetadataRoute } from "next";
import { raylonDiscoverableRoutes, raylonSiteUrl } from "@/lib/raylon-site";

export default function sitemap(): MetadataRoute.Sitemap {
  return raylonDiscoverableRoutes.map((route) => ({
    url: new URL(route, raylonSiteUrl).toString(),
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
