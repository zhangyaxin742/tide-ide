"use client";

/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BasicButton } from "@/components/raylon/ui/raylon-button";

const raylonAssetBase =
  "/site-assets/raylon/home/cdn.prod.website-files.com/695f541d5b057db3300c7a71";

const publicNavLinks = [
  { href: "/", label: "Home" },
  { href: "/pricing-plan", label: "Pricing" },
  { href: "/features", label: "Features" },
  { href: "/contact-us", label: "Contact" },
] as const;

function classNames(...values: Array<string | false | undefined>) {
  return values.filter(Boolean).join(" ");
}

function isCurrentPath(pathname: string, href: string) {
  return pathname === href;
}

function RaylonTextLink({
  href,
  label,
  current,
  className,
}: {
  href: string;
  label: string;
  current: boolean;
  className: string;
}) {
  return (
    <Link
      href={href}
      aria-current={current ? "page" : undefined}
      className={classNames(className, current && "w--current")}
    >
      <div className="button-text-wrap">
        <div button-text="" className="button-text">
          {label}
        </div>
      </div>
    </Link>
  );
}

function NavbarActionButton() {
  return <BasicButton href="/authentication-pages/sign-up">Book a demo</BasicButton>;
}

export function RaylonNavbar() {
  const pathname = usePathname();
  const homeCurrent = isCurrentPath(pathname, "/");
  const [open, setOpen] = useState(false);

  return (
    <div
      data-animation="over-left"
      data-collapse="medium"
      data-duration="400"
      data-easing="ease"
      data-easing2="ease"
      role="banner"
      className="navbar w-nav"
    >
      <div className="w-layout-blockcontainer navbar-container w-container">
        <div className="navbar-wrapper">
          <div className="navbar-flex-wrap">
            <div className="split-contant navbar-left">
              <Link
                href="/"
                aria-current={homeCurrent ? "page" : undefined}
                className={classNames(
                  "navbar-logo-wrap w-nav-brand",
                  homeCurrent && "w--current",
                )}
              >
                <img
                  width="106"
                  height="44"
                  alt="Project Logo"
                  src={`${raylonAssetBase}/6986ec2ef9ed26fbca731c5c_navbar-logo.svg`}
                  loading="lazy"
                  className="navbar-logo"
                />
              </Link>
            </div>
            <div className="split-contant navbar-right">
              <nav
                role="navigation"
                className={classNames("nav-menu-wrapper w-nav-menu", open && "w--open")}
              >
                <div className="nav-menu-links-wrap">
                  {publicNavLinks.map((link) => (
                    <RaylonTextLink
                      key={link.href}
                      href={link.href}
                      label={link.label}
                      current={isCurrentPath(pathname, link.href)}
                      className="single-nav-link w-inline-block"
                    />
                  ))}
                </div>
                <div className="navbar-button-wrap desktop">
                  <NavbarActionButton />
                </div>
              </nav>
              <div className="navbar-button-wrap mobile">
                <NavbarActionButton />
              </div>
              <div
                className={classNames("hamburger-menu-wrapper w-nav-button", open && "w--open")}
                aria-label="menu"
                aria-expanded={open}
                role="button"
                tabIndex={0}
                onClick={() => setOpen((value) => !value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setOpen((value) => !value);
                  }
                }}
              >
                <div className="hamburger-menu-lines">
                  <div className="hamburger-menu-bar top" />
                  <div className="hamburger-menu-bar middle" />
                  <div className="hamburger-menu-bar bottom" />
                </div>
              </div>
            </div>
          </div>
          <div className="navbar-blur" />
        </div>
      </div>
    </div>
  );
}
