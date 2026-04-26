import type { Metadata } from "next";
import { RaylonPageShell } from "@/components/raylon/page-shell";
import { FaqSection, InnerBannerSection, PricingPlanSection } from "@/components/raylon/sections";
import { getRaylonPageMetadata } from "@/lib/raylon-site";

export const metadata: Metadata = {
  ...getRaylonPageMetadata("/pricing-plan"),
};

export default function PricingPlanPage() {
  return (
    <RaylonPageShell pathname="/pricing-plan">
      <InnerBannerSection
        eyebrow="Pricing"
        title="Simple plans for smarter financial operations"
        body="Start with essential workflows and scale into advanced automation as your team grows."
      />
      <PricingPlanSection />
      <FaqSection />
    </RaylonPageShell>
  );
}
