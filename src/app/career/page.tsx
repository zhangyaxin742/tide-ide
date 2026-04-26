import type { Metadata } from "next";
import { RaylonPageShell } from "@/components/raylon/page-shell";
import { CareerSections, InnerBannerSection, TestimonialsSection } from "@/components/raylon/sections";
import { getRaylonPageMetadata } from "@/lib/raylon-site";

export const metadata: Metadata = {
  ...getRaylonPageMetadata("/career"),
};

export default function CareerPage() {
  return (
    <RaylonPageShell pathname="/career">
      <InnerBannerSection
        eyebrow="Career"
        title="Build the future of AI-powered finance"
        body="Join Vekt to help teams turn financial data into confident decisions."
      />
      <CareerSections />
      <TestimonialsSection />
    </RaylonPageShell>
  );
}
