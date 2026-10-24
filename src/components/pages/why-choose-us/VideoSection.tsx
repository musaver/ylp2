"use client";

import { useEffect, useRef } from "react";
import { REVEAL_STYLE } from "@/components/sections/framer-shared";

/** Background video of the page as exported (Pexels source + poster frame). */
export const WHY_VIDEO = {
  src: "https://www.pexels.com/download/video/6893741/",
  poster: "/images/gJMpwguJ7LQG1Yc1TeoUurWrvqk.png",
} as const;

export interface VideoSectionProps {
  src?: string;
  poster?: string;
}

/**
 * "Video Section" of /why-choose-us (hash 11e4390427, section.framer-bl8uge).
 *
 * The markup is Framer's video component verbatim (`preload="none"`, muted, looping). As in
 * Framer's runtime, the video is switched to `preload="auto"` and muted once mounted (React
 * does not serialise `muted` on the server), plays while it is in view and pauses when it
 * scrolls out.
 */
export function VideoSection({
  src = WHY_VIDEO.src,
  poster = WHY_VIDEO.poster,
}: VideoSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.preload = "auto";
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      }
    });
    observer.observe(video);
    return () => {
      observer.disconnect();
      video.pause();
    };
  }, []);

  return (
    <section className="framer-bl8uge" data-framer-name="Video Section">
      <div className="framer-381omz" data-framer-name="Base Container">
        <div className="framer-131xgvb-container" style={REVEAL_STYLE}>
          <video
            ref={videoRef}
            src={src}
            loop
            preload="none"
            poster={poster}
            muted
            playsInline
            style={{
              cursor: "auto",
              width: "100%",
              height: "100%",
              borderRadius: "10px",
              display: "block",
              objectFit: "cover",
              backgroundColor:
                "var(--token-962b08ec-1191-4463-bda2-ee2e93c272db, rgba(0, 0, 0, 0))",
              objectPosition: "50% 50%",
            }}
          ></video>
        </div>
      </div>
    </section>
  );
}
