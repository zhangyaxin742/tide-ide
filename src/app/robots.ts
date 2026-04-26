import type { MetadataRoute } from "next";
import { raylonSiteUrl } from "@/lib/raylon-site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: new URL("/sitemap.xml", raylonSiteUrl).toString(),
  };
}
