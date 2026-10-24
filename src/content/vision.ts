import type { FramerImage } from "@/lib/types";

/** One of the three growth directions shown in the home page's vision section. */
export interface VisionPillar {
  /** One of the theme's icons from public/images. */
  icon: FramerImage;
  title: string;
  points: string[];
}

/** Home page "Vision and community" section (rendered in the Our Commitment section design). */
export const vision = {
  label: "Vision and community",
  heading: "Building an active community, not a crowd",
  intro:
    "YouthLink brings young Muslims together to grow in three connected directions. Every course, project and responsibility is designed to develop one or more of these.",
  pillars: [
    {
      // Heart
      icon: {
        src: "/images/6iGkbWKNT5tT7aOiEWQm9KRQjk.svg",
        alt: "Character Icon",
        width: 34,
        height: 34,
      },
      title: "Character and spiritual growth",
      points: ["Tazkiyah", "Islamic understanding", "Responsibility and moral strength"],
    },
    {
      // Education
      icon: {
        src: "/images/55qHXDoIX0M1HRzp4GM9jcIEg.svg",
        alt: "Knowledge Icon",
        width: 34,
        height: 34,
      },
      title: "Knowledge and skills",
      points: [
        "Academia and research",
        "Technology",
        "Communication and leadership",
        "Practical skills",
      ],
    },
    {
      // Community
      icon: {
        src: "/images/6Iy8Egq83486E6ylH9pqR2uRSo.svg",
        alt: "Community Icon",
        width: 34,
        height: 34,
      },
      title: "Collective capacity",
      points: [
        "Like-minded networks and projects",
        "Service to society",
        "Economic and political awareness",
        "Community problem solving",
      ],
    },
  ] satisfies VisionPillar[],
};
