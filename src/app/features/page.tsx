import type { Metadata } from "next";
import { RaylonPageShell } from "@/components/raylon/page-shell";
import { FaqSection, FeaturesRouteSections, InnerBannerSection } from "@/components/raylon/sections";
import { getRaylonPageMetadata } from "@/lib/raylon-site";

export const metadata: Metadata = {
  ...getRaylonPageMetadata("/features"),
};

export default function FeaturesPage() {
  return (
    <RaylonPageShell pathname="/features">
      <InnerBannerSection
        eyebrow="Features"
        title="Everything finance teams need to see what matters"
        body="Explore forecasting, reporting, automation, and alerts built for faster financial decisions."
      />
      <FeaturesRouteSections />
      <FaqSection />
    </RaylonPageShell>
  );
}
