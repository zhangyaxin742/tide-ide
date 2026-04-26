import type { Metadata } from "next";
import { RaylonPageShell } from "@/components/raylon/page-shell";
import { ContactSections, FaqSection, InnerBannerSection } from "@/components/raylon/sections";
import { getRaylonPageMetadata } from "@/lib/raylon-site";

export const metadata: Metadata = {
  ...getRaylonPageMetadata("/contact-us"),
};

export default function ContactUsPage() {
  return (
    <RaylonPageShell pathname="/contact-us">
      <InnerBannerSection
        eyebrow="Contact us"
        title="Book a demo with Vekt"
        body="Tell us what you want to forecast, automate, or understand more clearly."
      />
      <ContactSections />
      <FaqSection />
    </RaylonPageShell>
  );
}
