import { RaylonPageShell } from "@/components/raylon/page-shell";
import { HomeSections } from "@/components/raylon/sections";

export function RaylonLocalHomePage() {
  return (
    <RaylonPageShell pathname="/">
      <HomeSections />
    </RaylonPageShell>
  );
}
