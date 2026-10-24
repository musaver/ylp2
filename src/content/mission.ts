import type { FramerImage, IconFeature, MissionPoint } from "@/lib/types";

/** Accordion items of the "Member journey" section on the home page. */
export const memberJourney: MissionPoint[] = [
  {
    number: "01.",
    title: "Discover",
    description: "Media, public groups, projects or referrals.",
  },
  {
    number: "02.",
    title: "Apply",
    description: "Visit the website and complete the joining form.",
  },
  {
    number: "03.",
    title: "Batch",
    description: "Join a structured introductory batch and orientation process.",
  },
  {
    number: "04.",
    title: "Contribute",
    description: "Enter the relevant community, course, project or responsibility pathway.",
  },
];

/** Side photo of the "Member journey" section on the home page. */
export const memberJourneyImage: FramerImage = {
  src: "/images/dvIaPjGj7h6pAC74fvlOA1phULs.jpg",
  srcSet:
    "/images/dvIaPjGj7h6pAC74fvlOA1phULs-1.jpg 682w, /images/dvIaPjGj7h6pAC74fvlOA1phULs-2.jpg 1365w, /images/dvIaPjGj7h6pAC74fvlOA1phULs-3.jpg 2730w, /images/dvIaPjGj7h6pAC74fvlOA1phULs.jpg 4105w",
  alt: "Young members working together at computers",
  width: 4105,
  height: 6157,
};

/** Accordion items in the "Our mission" section (home, why choose us). */
export const missionPoints: MissionPoint[] = [
  {
    number: "01.",
    title: "Empowering communities, one kindness at a time",
    description:
      "Small acts of generosity ripple outward, strengthening neighborhoods and uplifting lives across every corner of our community.",
  },
  {
    number: "02.",
    title: "Rooted in compassion, growing a better tomorrow",
    description:
      "Every compassionate deed plants a seed for the future — shaping a world where dignity, hope, and care are within everyone's reach.",
  },
  {
    number: "03.",
    title: "Together, we build a world where opportunity thrives",
    description:
      "When people unite around a shared vision, barriers fall and doors open — giving everyone the chance to grow, thrive, and succeed.",
  },
  {
    number: "04.",
    title: "Driven by purpose: making a lasting impact on lives",
    description:
      "Our mission goes beyond moments — we work to create deep, meaningful change that echoes through families and communities for generations.",
  },
];

/** Cards in the "Our commitments" section on the home page. */
export const commitments: IconFeature[] = [
  {
    icon: {
      src: "/images/6iGkbWKNT5tT7aOiEWQm9KRQjk.svg",
      alt: "Commitment Icon",
      width: 34,
      height: 34,
    },
    text: "We are committed to promoting healthy lives by providing essential resources, guidance, and support to help people thrive every day.",
  },
  {
    icon: {
      src: "/images/ICaCk0HCDKiJMPkX29TEZPPVIOE.svg",
      alt: "Commitment Icon",
      width: 34,
      height: 34,
    },
    text: "We are committed to offering reliable support and guidance to help individuals navigate challenges and find the right path forward.",
  },
  {
    icon: {
      src: "/images/55qHXDoIX0M1HRzp4GM9jcIEg.svg",
      alt: "Commitment Icon",
      width: 34,
      height: 34,
    },
    text: "We are committed to empowering people through access to quality education, practical knowledge, and tools that inspire growth.",
  },
  {
    icon: {
      src: "/images/6Iy8Egq83486E6ylH9pqR2uRSo.svg",
      alt: "Commitment Icon",
      width: 34,
      height: 34,
    },
    text: "We are dedicated to bringing people together, creating a strong and supportive community built on trust and shared purpose.",
  },
];

/** Cards in the "What we believe" section on the Our mission page ("Why join YouthLink?" benefits). */
export const beliefs: IconFeature[] = [
  {
    icon: { src: "/images/icon-briefcase.svg", alt: "Real work icon", width: 34, height: 34 },
    title: "Real work",
    text: "Exposure to active teams, projects and real responsibilities.",
  },
  {
    icon: {
      src: "/images/6Iy8Egq83486E6ylH9pqR2uRSo.svg",
      alt: "Network icon",
      width: 34,
      height: 34,
    },
    title: "A like-minded network",
    text: "A network of Muslims who share your values and direction.",
  },
  {
    icon: {
      src: "/images/55qHXDoIX0M1HRzp4GM9jcIEg.svg",
      alt: "Learning icon",
      width: 34,
      height: 34,
    },
    title: "Learning and skills",
    text: "Courses, sessions and practical skill development.",
  },
  {
    icon: {
      src: "/images/ICaCk0HCDKiJMPkX29TEZPPVIOE.svg",
      alt: "Contribute icon",
      width: 34,
      height: 34,
    },
    title: "Contribute your way",
    text: "Opportunities to contribute according to your skills and readiness.",
  },
  {
    icon: { src: "/images/icon-map-point.svg", alt: "Local connection icon", width: 34, height: 34 },
    title: "Local connection",
    text: "University, city, area and project based communities.",
  },
  {
    icon: { src: "/images/icon-route.svg", alt: "Journey icon", width: 34, height: 34 },
    title: "A structured journey",
    text: "A clear pathway instead of an unorganised public group.",
  },
];
