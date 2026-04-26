import type { Metadata } from "next";
import { RaylonPageShell } from "@/components/raylon/page-shell";
import { AboutSections, InnerBannerSection, TestimonialsSection } from "@/components/raylon/sections";
import { getRaylonPageMetadata } from "@/lib/raylon-site";

export const metadata: Metadata = {
  ...getRaylonPageMetadata("/about-us"),
};

export default function AboutUsPage() {
  return (
    <RaylonPageShell pathname="/about-us">
      <InnerBannerSection
        eyebrow="About us"
        title="AI financial intelligence for clearer decisions"
        body="Vekt helps teams understand performance, forecast outcomes, and move with confidence."
      />
      <AboutSections />
      <TestimonialsSection />
    </RaylonPageShell>
  );
}
