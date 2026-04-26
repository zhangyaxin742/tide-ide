"use client";

import type { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronRight } from "lucide-react";

type RaylonButtonProps = {
  href?: string;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
  target?: string;
  rel?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
};

type ButtonElementProps = Pick<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "type" | "disabled"
>;

function classNames(...values: Array<string | false | undefined>) {
  return values.filter(Boolean).join(" ");
}

function isExternalHref(href: string) {
  return /^(?:[a-z][a-z\d+.-]*:)?\/\//i.test(href) || href.startsWith("mailto:");
}

function ButtonShell({
  href,
  children,
  className,
  ariaLabel,
  target,
  rel,
  onClick,
  variant,
  buttonProps,
}: RaylonButtonProps & {
  variant: "basic" | "rainbow";
  buttonProps?: ButtonElementProps;
}) {
  const content = (
    <>
      <span className="raylon-button__surface">
        <span className="raylon-button__content">
          <span className="raylon-button__text" data-label={children}>
            <span className="raylon-button__text-line">{children}</span>
            <span className="raylon-button__text-line" aria-hidden="true">
              {children}
            </span>
          </span>
          <span className="raylon-button__icon" aria-hidden="true">
            <span className="raylon-button__icon-line">
              <ChevronRight size={14} strokeWidth={2.5} />
            </span>
            <span className="raylon-button__icon-line">
              <ChevronRight size={14} strokeWidth={2.5} />
            </span>
          </span>
        </span>
      </span>
      {variant === "rainbow" ? <span className="raylon-button__stroke" /> : null}
    </>
  );
  const computedClassName = classNames(
    "raylon-button",
    variant === "rainbow" ? "raylon-button--rainbow" : "raylon-button--basic",
    className,
  );

  if (href) {
    const safeRel = target === "_blank" ? (rel ?? "noreferrer") : rel;

    if (!isExternalHref(href) && href.startsWith("/")) {
      return (
        <Link
          href={href}
          className={computedClassName}
          aria-label={ariaLabel}
          target={target}
          rel={safeRel}
          onClick={onClick as MouseEventHandler<HTMLAnchorElement>}
        >
          {content}
        </Link>
      );
    }

    return (
      <a
        href={href}
        className={computedClassName}
        aria-label={ariaLabel}
        target={target}
        rel={safeRel}
        onClick={onClick as MouseEventHandler<HTMLAnchorElement>}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={buttonProps?.type ?? "button"}
      disabled={buttonProps?.disabled}
      className={computedClassName}
      aria-label={ariaLabel}
      onClick={onClick as MouseEventHandler<HTMLButtonElement>}
    >
      {content}
    </button>
  );
}

export function BasicButton(props: RaylonButtonProps & ButtonElementProps) {
  const { type, disabled, ...rest } = props;

  return (
    <ButtonShell
      {...rest}
      variant="basic"
      buttonProps={{ type, disabled }}
    />
  );
}

export function RainbowButton(props: RaylonButtonProps & ButtonElementProps) {
  const { type, disabled, ...rest } = props;

  return (
    <ButtonShell
      {...rest}
      variant="rainbow"
      buttonProps={{ type, disabled }}
    />
  );
}

export function ArrowButton({
  href,
  className,
  ariaLabel,
  target,
  rel,
  onClick,
  type,
  disabled,
}: Omit<RaylonButtonProps, "children"> & ButtonElementProps) {
  if (!ariaLabel) {
    throw new Error("ArrowButton requires ariaLabel.");
  }

  const content = (
    <>
      <span className="raylon-arrow-button__icon" aria-hidden="true">
        <ArrowUpRight size={21} strokeWidth={2.2} />
      </span>
      <span className="raylon-arrow-button__icon raylon-arrow-button__icon--hover" aria-hidden="true">
        <ArrowUpRight size={21} strokeWidth={2.2} />
      </span>
    </>
  );
  const computedClassName = classNames("raylon-arrow-button", className);

  if (href) {
    const safeRel = target === "_blank" ? (rel ?? "noreferrer") : rel;

    if (!isExternalHref(href) && href.startsWith("/")) {
      return (
        <Link
          href={href}
          className={computedClassName}
          aria-label={ariaLabel}
          target={target}
          rel={safeRel}
          onClick={onClick as MouseEventHandler<HTMLAnchorElement>}
        >
          {content}
        </Link>
      );
    }

    return (
      <a
        href={href}
        className={computedClassName}
        aria-label={ariaLabel}
        target={target}
        rel={safeRel}
        onClick={onClick as MouseEventHandler<HTMLAnchorElement>}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type ?? "button"}
      disabled={disabled}
      className={computedClassName}
      aria-label={ariaLabel}
      onClick={onClick as MouseEventHandler<HTMLButtonElement>}
    >
      {content}
    </button>
  );
}
