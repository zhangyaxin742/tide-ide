/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { LottieBlock } from "@/components/raylon/media";
import { RainbowButton } from "@/components/raylon/ui/raylon-button";
import {
  raylonBottomCtaContent,
  raylonFooterContent,
} from "@/lib/raylon-page-tail";

function classNames(...values: Array<string | false | undefined>) {
  return values.filter(Boolean).join(" ");
}

function isCurrentPath(pathname: string, href: string) {
  return pathname === href;
}

function FooterTextLink({
  href,
  label,
  pathname,
}: {
  href: string;
  label: string;
  pathname: string;
}) {
  const isCurrent = isCurrentPath(pathname, href);

  return (
    <Link
      href={href}
      aria-current={isCurrent ? "page" : undefined}
      className={classNames(
        "single-footer-link w-inline-block",
        isCurrent && "w--current",
      )}
    >
      <div className="button-text-wrap">
        <div button-text="" className="button-text">
          {label}
        </div>
      </div>
    </Link>
  );
}

function FooterSocialLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: string;
}) {
  return (
    <Link href={href} className="single-social-media-link w-inline-block">
      <div className="single-social-media-flex-wrap">
        <div className="social-media-icon-wrap">
          <div button-text="" className="social-media-icon">
            {icon}
          </div>
        </div>
        <div className="button-text-wrap">
          <div button-text="" className="button-text">
            {label}
          </div>
        </div>
      </div>
    </Link>
  );
}

export function RaylonBottomCta() {
  return (
    <section className="section cta">
      <div className="w-layout-blockcontainer container w-container">
        <div className="section-title-wrapper">
          <div className="section-title-flex-wrap">
            <div className="cta-title-wrap">
              <div className="subtitle-wrapper">
                <div className="subtitle-wrap">
                  <div className="subtitle-text">
                    {raylonBottomCtaContent.eyebrow}
                  </div>
                </div>
              </div>
              <h2 className="section-title">
                {raylonBottomCtaContent.titlePrefix}
                <span className="linner-color">
                  {raylonBottomCtaContent.titleAccent}
                </span>
              </h2>
            </div>
            <div className="cta-details-wrapper">
              <div className="section-details-wrap margin-2-5rem">
                <p className="section-details">
                  {raylonBottomCtaContent.description}
                </p>
              </div>
              <div id="BookADemo" className="button-wrapper">
                <RainbowButton href={raylonBottomCtaContent.buttonHref}>
                  {raylonBottomCtaContent.buttonText}
                </RainbowButton>
              </div>
            </div>
          </div>
        </div>
        <div className="cta-chart-wrapper">
          <LottieBlock
            className="cta-chart"
            label="Animated CTA finance chart"
            variant="chart"
          />
        </div>
      </div>
      <div className="linner-shape-wrap">
        <LottieBlock
          className="linner-shape"
          label="Animated gradient accent"
          variant="orb"
        />
      </div>
    </section>
  );
}

export function RaylonFooter({ pathname }: { pathname: string }) {
  const homeCurrent = isCurrentPath(pathname, "/");

  return (
    <section className="section footer">
      <div className="w-layout-blockcontainer container w-container">
        <div className="footer-top-wrapper">
          <div className="footer-top-flex-wrap">
            <div className="footer-top-left-wrap">
              <div className="footer-logo-wrap">
                <Link
                  href="/"
                  aria-current={homeCurrent ? "page" : undefined}
                  className={classNames(
                    "footer-logo-link w-inline-block",
                    homeCurrent && "w--current",
                  )}
                >
                  <img
                    src={raylonFooterContent.logoSrc}
                    loading="lazy"
                    width="106"
                    height="44"
                    alt={raylonFooterContent.logoAlt}
                    className="footer-logo"
                  />
                </Link>
              </div>
              <div className="section-details-wrap">
                <p className="section-details">
                  {raylonFooterContent.description}
                </p>
              </div>
            </div>
            <div className="footer-top-right-wrap">
              <div className="footer-card">
                <div className="footer-card-contant">
                  <div className="footer-links-row">
                    <div className="footer-links-title-wrap">
                      <div className="footer-links-title">Company:</div>
                    </div>
                    <div className="footer-links-flex-wrap">
                      {raylonFooterContent.companyLinks.map((link) => (
                        <FooterTextLink
                          key={link.href}
                          href={link.href}
                          label={link.label}
                          pathname={pathname}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="footer-divider" />
                  <div className="footer-links-row">
                    <div className="footer-links-title-wrap">
                      <div className="footer-links-title">Social Links:</div>
                    </div>
                    <div className="footer-links-flex-wrap">
                      {raylonFooterContent.socialLinks.map((link) => (
                        <FooterSocialLink
                          key={`${link.label}-${link.icon}`}
                          href={link.href}
                          label={link.label}
                          icon={link.icon}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom-wrapper">
          <div className="footer-bottom-flex-wrap" aria-hidden="true" />
          <div className="section-divider top" />
        </div>
      </div>
    </section>
  );
}

export function RaylonPageTail({ pathname }: { pathname: string }) {
  return (
    <>
      <RaylonBottomCta />
      <RaylonFooter pathname={pathname} />
    </>
  );
}
