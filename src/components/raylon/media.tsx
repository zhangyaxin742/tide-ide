"use client";

import { useRef, useState } from "react";

type LottieBlockProps = {
  label: string;
  variant?: "orb" | "chart" | "cards" | "map";
  className?: string;
};

function classNames(...values: Array<string | false | undefined>) {
  return values.filter(Boolean).join(" ");
}

export function LottieBlock({
  label,
  variant = "orb",
  className,
}: LottieBlockProps) {
  return (
    <div
      className={classNames("raylon-lottie-block", `raylon-lottie-block--${variant}`, className)}
      role="img"
      aria-label={label}
    >
      <span className="raylon-lottie-block__glow" />
      <span className="raylon-lottie-block__grid" />
      <span className="raylon-lottie-block__pulse raylon-lottie-block__pulse--one" />
      <span className="raylon-lottie-block__pulse raylon-lottie-block__pulse--two" />
      <span className="raylon-lottie-block__pulse raylon-lottie-block__pulse--three" />
    </div>
  );
}

type VideoBackgroundProps = {
  mp4Src: string;
  webmSrc?: string;
  posterSrc: string;
  label: string;
  className?: string;
};

export function VideoBackground({
  mp4Src,
  webmSrc,
  posterSrc,
  label,
  className,
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);

  const togglePlayback = () => {
    const video = videoRef.current;

    if (!video) return;

    if (video.paused) {
      void video.play();
      setPlaying(true);
      return;
    }

    video.pause();
    setPlaying(false);
  };

  return (
    <div className={classNames("raylon-video", className)}>
      <video
        ref={videoRef}
        className="raylon-video__media"
        autoPlay
        loop
        muted
        playsInline
        poster={posterSrc}
        aria-label={label}
      >
        {webmSrc ? <source src={webmSrc} type="video/webm" /> : null}
        <source src={mp4Src} type="video/mp4" />
      </video>
      <button
        type="button"
        className="raylon-video__control"
        aria-label={playing ? "Pause testimonials video" : "Play testimonials video"}
        onClick={togglePlayback}
      >
        {playing ? "Pause" : "Play"}
      </button>
    </div>
  );
}
