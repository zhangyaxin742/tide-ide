export const raylonTailAssetBase =
  "/site-assets/raylon/home/cdn.prod.website-files.com/695f541d5b057db3300c7a71";

export const raylonBottomCtaContent = {
  eyebrow: "Contact us",
  titlePrefix: "Ready to level up ",
  titleAccent: "your finance?",
  description:
    "Get instant financial insights, automated analysis, and accurate predictions so you can make confident.",
  buttonText: "Book a demo",
  buttonHref: "/contact-us",
} as const;

export const raylonFooterContent = {
  logoSrc: `${raylonTailAssetBase}/6986ec2ef9ed26fbca731c5c_navbar-logo.svg`,
  logoAlt: "Project Logo",
  description:
    "Get instant financial insights, automated analysis, and accurate predictions.",
  companyLinks: [
    { href: "/", label: "Home" },
    { href: "/features", label: "Features" },
    { href: "/pricing-plan", label: "Pricing" },
    { href: "/contact-us", label: "Contact" },
  ],
  socialLinks: [
    { href: "/contact-us#contact-us", label: "Linkedin", icon: "in" },
    { href: "/contact-us#contact-us", label: "Facebook", icon: "fb" },
    { href: "/contact-us#contact-us", label: "Twitter", icon: "x" },
    { href: "/contact-us#contact-us", label: "Youtube", icon: "yt" },
  ],
} as const;
