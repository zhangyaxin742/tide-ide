export const raylonRouteMap: Record<string, string> = {
  home: "/",
  "about-us": "/about-us",
  pricing: "/pricing-plan",
  career: "/career",
  features: "/features",
  "contact-us": "/contact-us",
  "sign-up": "/authentication-pages/sign-up",
};

export function rewriteRaylonMirrorRoutes(html: string) {
  return html.replace(
    /href="\/mirrors\/raylon\/([^/]+)\/index\.html(#.*?)?"/g,
    (_match, slug: string, hash = "") =>
      `href="${raylonRouteMap[slug] ? `${raylonRouteMap[slug]}${hash}` : "#top"}"`,
  );
}
