import type { Metadata } from "next";
import { RaylonLocalHomePage } from "@/components/raylon/page";
import { getRaylonPageMetadata } from "@/lib/raylon-site";

export const metadata: Metadata = {
  ...getRaylonPageMetadata("/"),
};

export default function Home() {
  return <RaylonLocalHomePage />;
}
