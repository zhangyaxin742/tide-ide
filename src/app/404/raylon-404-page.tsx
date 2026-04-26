/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { RaylonPageShell } from "@/components/raylon/page-shell";
import { BasicButton } from "@/components/raylon/ui/raylon-button";

const assetBase = "/site-assets/raylon/home/cdn.prod.website-files.com";
const siteAssetBase = `${assetBase}/695f541d5b057db3300c7a71`;
const notFoundAssetBase =
  "/site-assets/raylon/404/cdn.prod.website-files.com/695f541d5b057db3300c7a71";

export const raylon404Metadata: Metadata = {
  title: "Not Found (404)",
  description: "The Vekt page you are looking for could not be found.",
  alternates: {
    canonical: "/404",
  },
  robots: {
    index: false,
    follow: true,
  },
};

function Raylon404Banner() {
  return (
    <section className="section inner-banner">
      <div className="w-layout-blockcontainer container w-container">
        <div className="not-found-wrapper">
          <div className="not-found-image-wrap">
            <img
              src={`${notFoundAssetBase}/696e2b717067a2abf6101da3_not-found-img.svg`}
              alt=""
              width="577"
              height="220"
              className="not-found-image"
            />
          </div>
          <h1 className="not-found-details">
            Oops! Something is not right. Let&apos;s get back on track.
          </h1>
          <div className="button-wrapper">
            <BasicButton href="/">Back to home</BasicButton>
          </div>
        </div>
      </div>
      <div className="banner-light-wrap">
        <img
          src={`${siteAssetBase}/6965e6019fae9d2e8f8aab6d_banner-light-shape.avif`}
          loading="lazy"
          sizes="(max-width: 867px) 100vw, 867px"
          srcSet={`${siteAssetBase}/6965e6019fae9d2e8f8aab6d_banner-light-shape-p-500.png 500w, ${siteAssetBase}/6965e6019fae9d2e8f8aab6d_banner-light-shape.avif 867w`}
          alt="Light Shape"
          className="banner-light"
        />
      </div>
    </section>
  );
}

export function Raylon404PageContent() {
  return (
    <RaylonPageShell pathname="/404">
      <Raylon404Banner />
    </RaylonPageShell>
  );
}
