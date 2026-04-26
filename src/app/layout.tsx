import type { Metadata } from "next";
/* eslint-disable @next/next/no-css-tags */
import localFont from "next/font/local";
import {
  raylonDefaultDescription,
  raylonOgImage,
  raylonSiteName,
  raylonSiteUrl,
} from "@/lib/raylon-site";
import "./globals.css";

const inter = localFont({
  src: [
    {
      path: "../../public/fonts/inter/Inter-VariableFont_opsz,wght.ttf",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../../public/fonts/inter/Inter-Italic-VariableFont_opsz,wght.ttf",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-raylon-sans",
  display: "swap",
});

const interDisplay = localFont({
  src: [
    {
      path: "../../public/site-assets/raylon/home/cdn.prod.website-files.com/695f541d5b057db3300c7a71/6962479130d00c8be7d2f7e2_InterDisplay-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/site-assets/raylon/home/cdn.prod.website-files.com/695f541d5b057db3300c7a71/69624791dbdc7b6afe374ba5_InterDisplay-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/site-assets/raylon/home/cdn.prod.website-files.com/695f541d5b057db3300c7a71/69624791a7fff3eb3d442ca9_InterDisplay-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/site-assets/raylon/home/cdn.prod.website-files.com/695f541d5b057db3300c7a71/6962479191346560dd971f95_InterDisplay-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/site-assets/raylon/home/cdn.prod.website-files.com/695f541d5b057db3300c7a71/696247916e649f915ab3a2f3_InterDisplay-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/site-assets/raylon/home/cdn.prod.website-files.com/695f541d5b057db3300c7a71/69624791246c273d78ec5c3a_InterDisplay-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-raylon-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: raylonSiteUrl,
  title: {
    default: `${raylonSiteName} | AI Financial Intelligence`,
    template: `%s | ${raylonSiteName}`,
  },
  description: raylonDefaultDescription,
  applicationName: raylonSiteName,
  authors: [{ name: raylonSiteName }],
  creator: raylonSiteName,
  publisher: raylonSiteName,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/seo/raylon-favicon.png",
    apple: "/seo/raylon-apple-touch.png",
  },
  openGraph: {
    title: `${raylonSiteName} | AI Financial Intelligence`,
    description: raylonDefaultDescription,
    url: "/",
    siteName: raylonSiteName,
    images: [raylonOgImage],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${raylonSiteName} | AI Financial Intelligence`,
    description: raylonDefaultDescription,
    images: [raylonOgImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${interDisplay.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link
          rel="stylesheet"
          href="/site-assets/raylon/home/cdn.prod.website-files.com/695f541d5b057db3300c7a71/css/raylon.webflow.shared.ff898b51b.css"
        />
      </head>
      <body id="top" className="min-h-full">
        {children}
      </body>
    </html>
  );
}
