"use client";

/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Link from "next/link";
import { ArrowButton, BasicButton, RainbowButton } from "@/components/raylon/ui/raylon-button";
import { LottieBlock, VideoBackground } from "@/components/raylon/media";

const assetBase =
  "/site-assets/raylon/home/cdn.prod.website-files.com/695f541d5b057db3300c7a71";
const planAssetBase =
  "/site-assets/raylon/home/cdn.prod.website-files.com/696724777621ae090b49a49d";

const partnerLogos = [
  "6965ef5dd0feb6add7682b11_partners-logo-1.svg",
  "6965ef69297dbc312e6bd690_partners-logo-2.svg",
  "6965ef72460517418a6a2588_partners-logo-3.svg",
  "6965ef7bb1dc9b1f103ff3d0_partners-logo-4.svg",
  "6965ef84e84a1564d2d82318_partners-logo-5.svg",
  "6965ef8c2aa311a1dcf6623b_partners-logo-6.svg",
] as const;

const features = [
  {
    title: "Financial forecasting",
    body: "Predict cash flow, revenue shifts, and upcoming risks before they disrupt the business.",
  },
  {
    title: "Automated reporting",
    body: "Turn transactions into clear reports with trend summaries and exception alerts.",
  },
  {
    title: "AI transaction tagging",
    body: "Classify expenses, identify patterns, and keep your operating picture current.",
  },
] as const;

const howItWorks = [
  {
    title: "Connect your data",
    body: "Bring accounts, transactions, and planning inputs into one secure workspace.",
  },
  {
    title: "Let AI analyze",
    body: "Vekt reads activity, detects changes, and turns raw financial movement into decisions.",
  },
  {
    title: "Act with confidence",
    body: "Use forecasts and alerts to plan expenses, reduce risk, and move faster.",
  },
] as const;

const pricingPlans = [
  {
    name: "Free",
    monthly: "$0",
    annual: "$0",
    description: "Get started with essential finance management tools.",
    cta: "Get started",
    featured: false,
    features: ["Basic card", "Limited transfers", "Unified dashboard", "Expense categorization", "Monthly reports"],
  },
  {
    name: "Premium",
    monthly: "$24.99",
    annual: "$20.99",
    description: "Upgrade with deeper automation and reporting.",
    cta: "Upgrade to premium",
    featured: true,
    features: ["No FX fees", "Insurance benefits", "Real-time alerts", "Secure cloud sync", "AI tagging"],
  },
  {
    name: "Business",
    monthly: "$36.99",
    annual: "$30.99",
    description: "Advanced finance intelligence for teams and operators.",
    cta: "Upgrade to business",
    featured: false,
    features: ["Team cards", "API access", "Cash flow tracking", "Budget recommendations", "Insights feed"],
  },
] as const;

const testimonials = [
  {
    quote: "Their customer service is top-notch and the insights helped our team plan cash faster.",
    name: "Honei Jack",
    metric: "2M+",
    image: "69678b1fa13c7ab9c6c2d5dc_testimonials-clint-img-1.avif",
  },
  {
    quote: "I get asked who we use for finance every week. Vekt is finally the answer I can share.",
    name: "Emon Hanchez",
    metric: "3M+",
    image: "69678e5983b1052f643ea43f_testimonials-clint-img-2.avif",
  },
  {
    quote: "Vekt brought financial clarity to our operations in a way spreadsheets never could.",
    name: "Unseten Khan",
    metric: "2.9M+",
    image: "69678e65aa0b65cb677ed0df_testimonials-clint-img-3.avif",
  },
  {
    quote: "The forecasting workflow made month-end planning feel immediate instead of reactive.",
    name: "Turmare HK",
    metric: "6M+",
    image: "69678e6ed36438ba5388c1c7_testimonials-clint-img-4.avif",
  },
] as const;

const faqs = [
  {
    question: "How does the AI improve financial decision-making?",
    answer:
      "It analyzes financial data quickly, identifies risks, and surfaces forecasts your team can act on.",
  },
  {
    question: "Is the platform suitable for small businesses?",
    answer:
      "Yes. Vekt is structured for small teams that need budgeting, forecasting, and cash-flow clarity without heavy operations.",
  },
  {
    question: "How often is financial data updated?",
    answer:
      "Connected financial activity can be reviewed continuously so your reports and alerts stay current.",
  },
  {
    question: "Can I access the platform on mobile?",
    answer:
      "Yes. The experience is responsive and built for checking decisions, alerts, and summaries on the go.",
  },
  {
    question: "Are pricing plans flexible or fixed?",
    answer:
      "Plans support different usage levels, from starter workflows to more advanced team automation.",
  },
] as const;

const jobs = [
  ["Product Designer", "London, England", "Hybrid", "$55,000 - $90,000 /year"],
  ["iOS Developer", "California, USA", "Remote", "$45,000 - $80,000 /year"],
  ["Marketing Manager", "Liverpool, England", "Onsite", "$55,000 - $80,000 /year"],
  ["Business Analyst", "Paris, France", "Remote", "$40,000 - $80,000 /year"],
] as const;

function SectionHeader({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="raylon-section-header">
      <div className="subtitle-wrapper">
        <div className="subtitle-wrap">
          <div className="subtitle-text">{eyebrow}</div>
        </div>
      </div>
      <h2 className="section-title">{title}</h2>
      {body ? <p className="section-details">{body}</p> : null}
    </div>
  );
}

export function InnerBannerSection({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <section className="section inner-banner raylon-inner-banner">
      <div className="w-layout-blockcontainer container w-container">
        <div className="raylon-inner-banner__content">
          <div className="subtitle-wrapper">
            <div className="subtitle-wrap">
              <div className="subtitle-text">{eyebrow}</div>
            </div>
          </div>
          <h1 className="inner-banner-title">{title}</h1>
          <p className="section-details">{body}</p>
        </div>
      </div>
      <div className="banner-light-wrap">
        <img
          src={`${assetBase}/6965e6019fae9d2e8f8aab6d_banner-light-shape.avif`}
          loading="lazy"
          alt="Light Shape"
          className="banner-light"
        />
      </div>
    </section>
  );
}

export function HeroBannerSection() {
  return (
    <section className="section banner raylon-hero">
      <div className="w-layout-blockcontainer container w-container">
        <div className="banner-top-wrapper">
          <div className="banner-review-wrapper">
            <div className="banner-review-flex-wrap">
              <div className="banner-review-ratting-wrap">
                <img
                  src={`${assetBase}/696377812eb00a587d61948b_banner-review-icon.svg`}
                  alt="Banner Review Icon"
                  width="28"
                  height="28"
                  className="banner-review-icon"
                />
                <div className="banner-review-ratting-info">5 Star</div>
              </div>
              <div className="banner-review-divider" />
              <div className="banner-review-info">2000+ reviews</div>
            </div>
          </div>
          <div className="banner-title-wrap">
            <h1 className="text">
              AI that powers smarter <span className="linner-color">financial decisions</span>
            </h1>
          </div>
          <div className="section-details-wrap margin-2-5rem max-width-29-813rem">
            <p className="section-details">
              Get instant financial insights, automated analysis, and accurate predictions so you can make confident decisions.
            </p>
          </div>
          <div className="two-button-wrapper">
            <RainbowButton href="/contact-us">Book a Demo</RainbowButton>
            <BasicButton href="/pricing-plan">Get started</BasicButton>
          </div>
        </div>
      </div>
      <div className="raylon-hero__animation">
        <LottieBlock label="Animated financial dashboard" variant="cards" />
      </div>
      <div className="banner-light-wrap">
        <img
          src={`${assetBase}/6965e6019fae9d2e8f8aab6d_banner-light-shape.avif`}
          alt="Light Shape"
          className="banner-light"
        />
      </div>
    </section>
  );
}

export function PartnersCounterSection() {
  return (
    <section className="section partners-counter" id="partners-counter">
      <div className="w-layout-blockcontainer container w-container">
        <div className="partner-ticker-wrapper">
          <div className="partner-ticker-wrap">
            {[0, 1].map((group) => (
              <div className="partner-ticker-item-wrap" key={group}>
                {partnerLogos.map((logo) => (
                  <img
                    key={`${group}-${logo}`}
                    src={`${assetBase}/${logo}`}
                    loading="lazy"
                    alt="Partners Logo"
                    className="partner-logo"
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function FeatureSection() {
  const [active, setActive] = useState(0);
  const selected = features[active];

  return (
    <section className="section feature" id="features">
      <div className="w-layout-blockcontainer container w-container">
        <SectionHeader
          eyebrow="Features"
          title="Financial intelligence that works while you do"
          body="Forecast, categorize, report, and act from one AI-powered finance workspace."
        />
        <div className="raylon-feature-grid">
          <div className="raylon-feature-tabs">
            {features.map((feature, index) => (
              <button
                type="button"
                className={index === active ? "raylon-feature-tab is-active" : "raylon-feature-tab"}
                key={feature.title}
                onClick={() => setActive(index)}
              >
                <span>{feature.title}</span>
                <small>{feature.body}</small>
              </button>
            ))}
          </div>
          <div className="raylon-feature-card">
            <LottieBlock label={`${selected.title} animation`} variant="chart" />
            <h3>{selected.title}</h3>
            <p>{selected.body}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CoreFeatureSection() {
  return (
    <section className="section core-feature">
      <div className="w-layout-blockcontainer container w-container">
        <SectionHeader
          eyebrow="Core feature"
          title="A single operating picture for every finance decision"
          body="Vekt combines automation, forecasting, and visual reporting so teams can see what changed and why it matters."
        />
        <div className="raylon-card-grid">
          {["Revenue tracking", "Risk alerts", "Budget intelligence"].map((title, index) => (
            <article className="raylon-info-card" key={title}>
              <img
                src={`${assetBase}/69662${index === 0 ? "8e9f67c2ff2f8577e37_core-feature-chart-1" : index === 1 ? "a6ef8b6473ed0e1bd4e_core-feature-chart-2" : "cd7826f804dd2653484_core-feature-chart-3"}.avif`}
                alt=""
                className="raylon-info-card__image"
              />
              <h3>{title}</h3>
              <p>Monitor performance with focused cards designed for fast financial review.</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HowItWorkSection() {
  return (
    <section className="section how-it-work">
      <div className="w-layout-blockcontainer container w-container">
        <SectionHeader eyebrow="How it works" title="From raw activity to clear next steps" />
        <div className="raylon-card-grid raylon-card-grid--three">
          {howItWorks.map((item) => (
            <article className="raylon-info-card" key={item.title}>
              <LottieBlock label={`${item.title} animation`} variant="orb" />
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PerformanceMetricsSection() {
  return (
    <section className="section performance-metrics">
      <div className="w-layout-blockcontainer container w-container">
        <SectionHeader
          eyebrow="Performance metrics"
          title="Measure what changes, not just what happened"
        />
        <div className="raylon-metrics-grid">
          {[
            ["98%", "Forecast clarity"],
            ["2.8M+", "Transactions analyzed"],
            ["24/7", "Automated monitoring"],
            ["42%", "Faster reporting"],
          ].map(([value, label]) => (
            <div className="raylon-metric-card" key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PricingPlanSection() {
  const [annual, setAnnual] = useState(false);

  return (
    <section className="section pricing-plan" id="pricing-plan">
      <div className="w-layout-blockcontainer container w-container">
        <SectionHeader
          eyebrow="Pricing"
          title="Plans built for modern finance teams"
          body="Choose the plan that matches your current workflow and scale when your data needs grow."
        />
        <div className="raylon-pricing-toggle">
          <button type="button" className={!annual ? "is-active" : ""} onClick={() => setAnnual(false)}>
            Monthly
          </button>
          <button type="button" className={annual ? "is-active" : ""} onClick={() => setAnnual(true)}>
            Annual
          </button>
        </div>
        <div className="raylon-pricing-grid">
          {pricingPlans.map((plan) => (
            <article
              className={plan.featured ? "raylon-pricing-card is-featured" : "raylon-pricing-card"}
              key={plan.name}
            >
              <img
                src={`${planAssetBase}/${plan.featured ? "696745a1f160ce1f2c044f82_plan-card-bg-active-1-.avif" : "69674592c7468b43625c59ea_plan-card-bg-1-.avif"}`}
                alt=""
                className="raylon-pricing-card__bg"
              />
              <div className="raylon-pricing-card__content">
                <h3>{plan.name}</h3>
                <p>{plan.description}</p>
                <div className="raylon-pricing-card__price">
                  {annual ? plan.annual : plan.monthly}
                  <span>/{annual ? "Annually" : "Monthly"}</span>
                </div>
                <RainbowButton href="/contact-us">{plan.cta}</RainbowButton>
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <img src={`${planAssetBase}/696728f9c5c880ab6be1874c_plan-feature-icon.svg`} alt="" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <section className="section testimonials">
      <div className="w-layout-blockcontainer container w-container">
        <SectionHeader eyebrow="Testimonials" title="Results that speak through real workflows" />
        <div className="raylon-testimonials-grid">
          <div className="raylon-testimonials-list">
            {testimonials.map((testimonial) => (
              <article className="raylon-testimonial-card" key={testimonial.name}>
                <p>&quot;{testimonial.quote}&quot;</p>
                <div className="raylon-testimonial-card__person">
                  <img src={`${assetBase}/${testimonial.image}`} alt={`${testimonial.name} avatar`} />
                  <div>
                    <h3>{testimonial.name}</h3>
                    <span>{testimonial.metric}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <VideoBackground
            className="testimonials-video"
            label="Raylon testimonials background video"
            posterSrc={`${assetBase}/6974a80a80a64dd80d687714_Testimonials-Video_poster.0000000.jpg`}
            mp4Src={`${assetBase}/6974a80a80a64dd80d687714_Testimonials-Video_mp4.mp4`}
            webmSrc={`${assetBase}/6974a80a80a64dd80d687714_Testimonials-Video_webm.webm`}
          />
        </div>
      </div>
    </section>
  );
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section faq">
      <div className="w-layout-blockcontainer container w-container">
        <SectionHeader eyebrow="FAQ" title="Frequently asked questions." />
        <div className="raylon-faq-list">
          {faqs.map((faq, index) => {
            const open = index === openIndex;

            return (
              <div className={open ? "raylon-faq-item is-open" : "raylon-faq-item"} key={faq.question}>
                <button type="button" aria-expanded={open} onClick={() => setOpenIndex(open ? -1 : index)}>
                  {faq.question}
                  <span>{open ? "-" : "+"}</span>
                </button>
                <p>{faq.answer}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function AboutSections() {
  return (
    <>
      <section className="section raylon-content-section">
        <div className="w-layout-blockcontainer container w-container">
          <SectionHeader
            eyebrow="Our story"
            title="Built for teams that need finance to move at decision speed"
            body="Vekt turns complex financial activity into clear forecasts, automated reports, and practical alerts for modern operators."
          />
          <div className="raylon-card-grid raylon-card-grid--three">
            {["Clarity", "Automation", "Confidence"].map((item) => (
              <article className="raylon-info-card" key={item}>
                <h3>{item}</h3>
                <p>Every workflow is designed to reduce manual review and make the next financial move easier to defend.</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <PerformanceMetricsSection />
    </>
  );
}

export function ContactSections() {
  return (
    <section className="section raylon-content-section" id="contact-us">
      <div className="w-layout-blockcontainer container w-container">
        <div className="raylon-contact-grid">
          <SectionHeader
            eyebrow="Book a demo"
            title="Talk with the Vekt team"
            body="Share what your finance workflow needs and we will map the right automation path."
          />
          <form className="raylon-contact-form">
            <label>
              Name
              <input type="text" name="name" placeholder="Enter your name" required />
            </label>
            <label>
              Email
              <input type="email" name="email" placeholder="name@example.com" required />
            </label>
            <label>
              Message
              <textarea name="message" placeholder="Tell us what you want to automate" rows={5} />
            </label>
            <BasicButton type="submit">Submit request</BasicButton>
          </form>
        </div>
      </div>
    </section>
  );
}

export function CareerSections() {
  return (
    <section className="section raylon-content-section">
      <div className="w-layout-blockcontainer container w-container">
        <SectionHeader
          eyebrow="Open roles"
          title="Help build AI finance tools for faster teams"
          body="Join a team focused on making financial intelligence more useful, responsive, and clear."
        />
        <div className="raylon-career-list">
          {jobs.map(([title, location, arrangement, salary]) => (
            <article className="raylon-career-card" key={title}>
              <div>
                <h3>{title}</h3>
                <p>{location} | {arrangement} | {salary}</p>
              </div>
              <ArrowButton href="/contact-us" ariaLabel={`Apply for ${title}`} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeaturesRouteSections() {
  return (
    <>
      <FeatureSection />
      <CoreFeatureSection />
      <HowItWorkSection />
      <PerformanceMetricsSection />
    </>
  );
}

export function HomeSections() {
  return (
    <>
      <HeroBannerSection />
      <PartnersCounterSection />
      <FeatureSection />
      <CoreFeatureSection />
      <HowItWorkSection />
      <PerformanceMetricsSection />
      <PricingPlanSection />
      <TestimonialsSection />
      <FaqSection />
    </>
  );
}

export function ChangelogSections() {
  return (
    <section className="section raylon-content-section">
      <div className="w-layout-blockcontainer container w-container">
        <SectionHeader eyebrow="Changelog" title="Product updates" body="A concise record of Vekt improvements." />
        <div className="raylon-career-list">
          {["Initial React rebuild", "Local media wiring", "Vercel-ready route cleanup"].map((item) => (
            <article className="raylon-career-card" key={item}>
              <div>
                <h3>{item}</h3>
                <p>Completed as part of the local Raylon to Vekt migration.</p>
              </div>
              <Link href="/" className="single-footer-link w-inline-block">
                View site
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
