import type { Metadata } from "next";
import { RaylonChangelogPage } from "@/components/raylon/changelog-page";

export const metadata: Metadata = {
  title: "Changelog",
  description:
    "Review the latest Vekt product updates, releases, and version history.",
  alternates: {
    canonical: "/utility-pages/changelog",
  },
  openGraph: {
    title: "Changelog | Vekt",
    description:
      "Review the latest Vekt product updates, releases, and version history.",
    url: "/utility-pages/changelog",
    siteName: "Vekt",
    images: ["/seo/raylon-og.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Changelog | Vekt",
    description:
      "Review the latest Vekt product updates, releases, and version history.",
    images: ["/seo/raylon-og.jpg"],
  },
};

export default function ChangelogPage() {
  return <RaylonChangelogPage />;
}
