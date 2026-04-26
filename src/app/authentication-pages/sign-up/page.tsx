import type { Metadata } from "next";
import { RaylonSignupPage } from "@/components/raylon/signup-page";
import { getRaylonPageMetadata } from "@/lib/raylon-site";

export const metadata: Metadata = {
  ...getRaylonPageMetadata("/authentication-pages/sign-up"),
};

export default function SignUpPage() {
  return <RaylonSignupPage />;
}
