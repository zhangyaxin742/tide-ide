import { RaylonPageShell } from "@/components/raylon/page-shell";
import { ChangelogSections, InnerBannerSection } from "@/components/raylon/sections";

export function RaylonChangelogPage() {
  return (
    <RaylonPageShell pathname="/utility-pages/changelog">
      <InnerBannerSection
        eyebrow="Changelog"
        title="What is new at Vekt"
        body="A concise record of product updates in the local React rebuild."
      />
      <ChangelogSections />
    </RaylonPageShell>
  );
}
