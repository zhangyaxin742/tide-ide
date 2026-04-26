export const raylonSectionNames = [
  "header",
  "banner",
  "partnersCounter",
  "feature",
  "coreFeature",
  "howItWork",
  "performanceMetrics",
  "pricingPlan",
  "testimonials",
  "faq",
] as const;

export type RaylonSectionName = (typeof raylonSectionNames)[number];

export type RaylonInteractionModel =
  | "static"
  | "hover-driven"
  | "click-driven"
  | "time-driven"
  | "mixed";

export interface RaylonFragmentSpec {
  name: RaylonSectionName;
  selector: string;
  interactionModel: RaylonInteractionModel;
}

export const raylonFragmentSpecs: RaylonFragmentSpec[] = [
  { name: "header", selector: ".navbar", interactionModel: "mixed" },
  { name: "banner", selector: "section.banner", interactionModel: "hover-driven" },
  { name: "partnersCounter", selector: "section.partners-counter", interactionModel: "time-driven" },
  { name: "feature", selector: "section.feature", interactionModel: "click-driven" },
  { name: "coreFeature", selector: "section.core-feature", interactionModel: "static" },
  { name: "howItWork", selector: "section.how-it-work", interactionModel: "time-driven" },
  { name: "performanceMetrics", selector: "section.performance-metrics", interactionModel: "time-driven" },
  { name: "pricingPlan", selector: "section.pricing-plan", interactionModel: "click-driven" },
  { name: "testimonials", selector: "section.testimonials", interactionModel: "time-driven" },
  { name: "faq", selector: "section.faq", interactionModel: "click-driven" },
];
