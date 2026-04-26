import type { Metadata } from "next";

export const raylonSiteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://raylon.ai",
);

export const raylonSiteName = "Vekt";

export const raylonDefaultDescription =
  "Vekt is an AI-powered financial platform for real-time insights, automated analysis, and smarter financial decisions.";

export const raylonOgImage = "/seo/raylon-og.jpg";

export const raylonDiscoverableRoutes = [
  "/",
  "/features",
  "/pricing-plan",
  "/contact-us",
  "/authentication-pages/sign-up",
] as const;

export const raylonPagePaths = [
  ...raylonDiscoverableRoutes,
  "/about-us",
  "/career",
] as const;

export type RaylonPagePath = (typeof raylonPagePaths)[number];

const pageMetadata: Record<
  RaylonPagePath,
  {
    title: string;
    description: string;
  }
> = {
  "/": {
    title: "AI Financial Intelligence",
    description:
      "Use Vekt to forecast cash flow, surface risks, and turn financial data into faster decisions.",
  },
  "/about-us": {
    title: "About Us",
    description:
      "Learn how Vekt helps teams use AI-powered finance workflows to understand performance and plan ahead.",
  },
  "/features": {
    title: "Features",
    description:
      "Explore Vekt features for forecasting, fraud detection, payments, integrations, and financial reporting.",
  },
  "/pricing-plan": {
    title: "Pricing",
    description:
      "Compare Vekt pricing plans for AI-powered financial insights, automation, and team workflows.",
  },
  "/contact-us": {
    title: "Contact Us",
    description:
      "Contact the Vekt team to discuss AI-powered financial forecasting, analytics, and automation.",
  },
  "/career": {
    title: "Careers",
    description:
      "Explore Vekt career opportunities and help build AI-powered financial tools for modern teams.",
  },
  "/authentication-pages/sign-up": {
    title: "Sign Up",
    description:
      "Create a Vekt account to start using AI-powered financial insights and smarter money management tools.",
  },
};

export function getRaylonPageMetadata(pathname: RaylonPagePath): Metadata {
  const page = pageMetadata[pathname];

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: pathname,
    },
    openGraph: {
      title: `${page.title} | ${raylonSiteName}`,
      description: page.description,
      url: pathname,
      siteName: raylonSiteName,
      images: [raylonOgImage],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${page.title} | ${raylonSiteName}`,
      description: page.description,
      images: [raylonOgImage],
    },
  };
}
