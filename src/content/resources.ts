import type { Resource, ResourceCategory } from "@/lib/types";

/** Resources in the order they appear on the /resources page. */
export const resources: Resource[] = [
  {
    slug: "local-businesses-powering-community-impact",
    title: "Local businesses powering strong community impact",
    excerpt:
      "Local business partnerships have expanded our reach, bringing more resources to families in need.",
    date: "2026-03-09",
    image: {
      src: "/images/1HDL20PbDZlkNREH91ogZUxQ.jpg",
      alt: "Resource Thumbnail",
      width: 5760,
      height: 3840,
      srcSet:
        "/images/1HDL20PbDZlkNREH91ogZUxQ-1.jpg 512w, /images/1HDL20PbDZlkNREH91ogZUxQ-2.jpg 1024w, /images/1HDL20PbDZlkNREH91ogZUxQ-3.jpg 2048w, /images/1HDL20PbDZlkNREH91ogZUxQ-4.jpg 4096w, /images/1HDL20PbDZlkNREH91ogZUxQ.jpg 5760w",
      objectPosition: "50% 80%",
    },
    tags: ["help", "business", "families", "partners"],
    body: [
      { type: "heading", level: 2, text: "Strengthening Communities Together" },
      {
        type: "paragraph",
        text: "At YouthLink, we believe that lasting change happens when communities work together. By partnering with local businesses, we create powerful collaborations that benefit those in need and strengthen the community as a whole.",
      },
      {
        type: "paragraph",
        text: "Local businesses bring more than financial support — they offer resources, expertise, and a shared commitment to making a difference. Whether it’s providing job training opportunities, donating essential supplies, or sponsoring community events, their contributions create meaningful impact.",
      },
      {
        type: "paragraph",
        text: "One example is our partnership with a local grocery store that donates fresh food to our meal programs. Thanks to their generosity, we’ve been able to provide nutritious meals to countless families, ensuring no one goes hungry.",
      },
      {
        type: "paragraph",
        text: "These partnerships not only help individuals but also foster a sense of unity and shared responsibility within the community. Together, we can achieve more than we ever could alone.",
      },
      {
        type: "image",
        image: {
          src: "/images/GfbfPynAmtqBl6Yj9pxYrZ6WeU.jpg",
          alt: "Rich Text Image",
          width: 6000,
          height: 4000,
          srcSet:
            "/images/GfbfPynAmtqBl6Yj9pxYrZ6WeU-1.jpg 512w, /images/GfbfPynAmtqBl6Yj9pxYrZ6WeU-2.jpg 1024w, /images/GfbfPynAmtqBl6Yj9pxYrZ6WeU-3.jpg 2048w, /images/GfbfPynAmtqBl6Yj9pxYrZ6WeU-4.jpg 4096w, /images/GfbfPynAmtqBl6Yj9pxYrZ6WeU.jpg 6000w",
          objectPosition: "center top",
        },
      },
    ],
  },
  {
    slug: "growing-our-support-new-community-programs",
    title: "Expanding support through new community programs",
    excerpt:
      "Our new programs support communities through food drives, workshops, and housing assistance.",
    date: "2026-03-17",
    image: {
      src: "/images/hegkPsqZCvfV6oRcTjXmWeyAB8.jpg",
      alt: "Resource Thumbnail",
      width: 5260,
      height: 3507,
      srcSet:
        "/images/hegkPsqZCvfV6oRcTjXmWeyAB8-1.jpg 512w, /images/hegkPsqZCvfV6oRcTjXmWeyAB8-2.jpg 1024w, /images/hegkPsqZCvfV6oRcTjXmWeyAB8-3.jpg 2048w, /images/hegkPsqZCvfV6oRcTjXmWeyAB8-4.jpg 4096w, /images/hegkPsqZCvfV6oRcTjXmWeyAB8.jpg 5260w",
    },
    tags: ["volunteer", "help", "community", "education"],
    body: [
      { type: "heading", level: 2, text: "Opportunities to Make a Difference" },
      {
        type: "paragraph",
        text: "At YouthLink, we’re excited to introduce new volunteer initiatives designed to create more opportunities for meaningful impact. Whether you’re passionate about supporting education, community outreach, or environmental sustainability, there’s a way for everyone to get involved and make a difference.",
      },
      { type: "paragraph", text: "Here’s what’s new:" },
      {
        type: "list",
        items: [
          "Mentorship Program - Volunteer as a mentor to guide and inspire young individuals, helping them build confidence, develop skills, and reach their full potential.",
          "Community Care Days - Join us for special events focused on neighborhood beautification, food distribution, or providing essential supplies to those in need.",
          "Skill-Sharing Workshops - Share your expertise in areas like job training, financial literacy, or creative arts to empower others with valuable skills.",
          "Wellness Outreach Team - Help support physical and mental well-being by volunteering with our wellness outreach team, offering resources and companionship to those in need.",
        ],
      },
      {
        type: "paragraph",
        text: "No matter your skills or schedule, your time and energy can create lasting change. Join us in these new initiatives to make a positive impact in the community.",
      },
      {
        type: "image",
        image: {
          src: "/images/7qo1ya4yjrBocI3ZuUUvPRLsFWs.jpg",
          alt: "Rich Text Image",
          width: 5260,
          height: 3506,
          srcSet:
            "/images/7qo1ya4yjrBocI3ZuUUvPRLsFWs-1.jpg 512w, /images/7qo1ya4yjrBocI3ZuUUvPRLsFWs-2.jpg 1024w, /images/7qo1ya4yjrBocI3ZuUUvPRLsFWs-3.jpg 2048w, /images/7qo1ya4yjrBocI3ZuUUvPRLsFWs-4.jpg 4096w, /images/7qo1ya4yjrBocI3ZuUUvPRLsFWs.jpg 5260w",
          objectPosition: "center top",
        },
      },
    ],
  },
  {
    slug: "real-stories-of-lives-transformed",
    title: "Stories of lives changed by compassion and support",
    excerpt:
      "Discover how care and support have helped individuals overcome challenges and rebuild lives.",
    date: "2026-03-25",
    image: {
      src: "/images/YZ1nQNkm4TXI0qCa0aDVEfKwvvg.jpg",
      alt: "Resource Thumbnail",
      width: 6192,
      height: 4128,
      srcSet:
        "/images/YZ1nQNkm4TXI0qCa0aDVEfKwvvg-1.jpg 512w, /images/YZ1nQNkm4TXI0qCa0aDVEfKwvvg-2.jpg 1024w, /images/YZ1nQNkm4TXI0qCa0aDVEfKwvvg-3.jpg 2048w, /images/YZ1nQNkm4TXI0qCa0aDVEfKwvvg-4.jpg 4096w, /images/YZ1nQNkm4TXI0qCa0aDVEfKwvvg.jpg 6192w",
      objectPosition: "50% 60%",
    },
    tags: ["families", "partners", "community", "education"],
    body: [
      { type: "heading", level: 2, text: "Hope in Action" },
      {
        type: "paragraph",
        text: "At YouthLink, every success story is a testament to the power of compassion, resilience, and community support. Behind each person we help is a journey of challenges overcome and hope restored. These stories remind us why we do what we do and they inspire us to continue making a difference.",
      },
      {
        type: "paragraph",
        text: "Take Maria, for example, who came to us after losing her job. With our support, she received job training, secured stable employment, and regained her confidence. Today, she mentors others facing similar challenges, paying forward the kindness she received.",
      },
      {
        type: "paragraph",
        text: "Then there's David, a young student who struggled in school due to lack of resources. Through our educational programs, he not only caught up academically but also discovered a deep and lasting love for learning. He now dreams of becoming a teacher to inspire and uplift others.",
      },
      {
        type: "paragraph",
        text: "These are just two of the many lives transformed through the meaningful work we do every day. Each story reflects the incredible potential within every individual when given the right support. Together, we can continue to turn struggles into success and challenges into opportunities.",
      },
      {
        type: "paragraph",
        text: "Join us in making more stories like these possible — because every life touched is a step toward a brighter future.",
      },
      {
        type: "image",
        image: {
          src: "/images/HclC6xSyLoPUPmtEvsL7Mb3AJPc.jpg",
          alt: "Rich Text Image",
          width: 6192,
          height: 3729,
          srcSet:
            "/images/HclC6xSyLoPUPmtEvsL7Mb3AJPc-1.jpg 512w, /images/HclC6xSyLoPUPmtEvsL7Mb3AJPc-2.jpg 1024w, /images/HclC6xSyLoPUPmtEvsL7Mb3AJPc-3.jpg 2048w, /images/HclC6xSyLoPUPmtEvsL7Mb3AJPc-4.jpg 4096w, /images/HclC6xSyLoPUPmtEvsL7Mb3AJPc.jpg 6192w",
          objectPosition: "center top",
        },
      },
    ],
  },
  {
    slug: "how-small-actions-make-a-big-impact",
    title: "How small actions can create a big lasting impact",
    excerpt:
      "Even simple acts of support can lead to meaningful, lasting change for those in need.",
    date: "2026-04-02",
    image: {
      src: "/images/lSklpgMAosmUFRq8OwnlvtAJ4zw.jpg",
      alt: "Resource Thumbnail",
      width: 7513,
      height: 5011,
      srcSet:
        "/images/lSklpgMAosmUFRq8OwnlvtAJ4zw-1.jpg 512w, /images/lSklpgMAosmUFRq8OwnlvtAJ4zw-2.jpg 1024w, /images/lSklpgMAosmUFRq8OwnlvtAJ4zw-3.jpg 2048w, /images/lSklpgMAosmUFRq8OwnlvtAJ4zw-4.jpg 4096w, /images/lSklpgMAosmUFRq8OwnlvtAJ4zw.jpg 7513w",
      objectPosition: "50% 10%",
    },
    tags: ["community", "help", "volunteer", "partners"],
    body: [
      { type: "heading", level: 2, text: "The Ripple Effect of Kindness" },
      {
        type: "paragraph",
        text: "Sometimes, it’s the smallest actions that create the most profound changes. At YouthLink, we’ve seen firsthand how simple gestures — offering a meal, lending a listening ear, or sharing a kind word — can transform lives and spark hope.",
      },
      {
        type: "paragraph",
        text: "Consider the story of James, who felt invisible in his struggles. One day, a volunteer spent time talking with him, offering kindness and encouragement. That small act gave James the courage to seek the support he needed, setting him on a path to a better life.",
      },
      {
        type: "paragraph",
        text: "Another example is Mia, a young student who received school supplies from a donation drive. Though it seemed like a small gift, it gave her the tools and confidence to succeed in school and dream of a brighter future.",
      },
      {
        type: "paragraph",
        text: "Small actions, like donating, volunteering, or simply showing kindness, create ripples that extend far beyond the initial act. They inspire hope, build resilience, and remind us all that even the smallest gestures can lead to big changes.",
      },
      {
        type: "image",
        image: {
          src: "/images/KiuTqkB8cmRnjC3u5RhxxiwEGpc.jpg",
          alt: "Rich Text Image",
          width: 7751,
          height: 5170,
          srcSet:
            "/images/KiuTqkB8cmRnjC3u5RhxxiwEGpc-1.jpg 512w, /images/KiuTqkB8cmRnjC3u5RhxxiwEGpc-2.jpg 1024w, /images/KiuTqkB8cmRnjC3u5RhxxiwEGpc-3.jpg 2048w, /images/KiuTqkB8cmRnjC3u5RhxxiwEGpc-4.jpg 4096w, /images/KiuTqkB8cmRnjC3u5RhxxiwEGpc.jpg 7751w",
          objectPosition: "center top",
        },
      },
    ],
  },
  {
    slug: "stories-of-compassion-and-hope",
    title: "Stories of compassion, strength, and hope in action",
    excerpt:
      "Real stories that highlight how kindness and resilience can change lives and uplift communities.",
    date: "2026-04-10",
    image: {
      src: "/images/CzUmGnvK0BO2wx5lzRlTc8qstGA.jpg",
      alt: "Resource Thumbnail",
      width: 9504,
      height: 6336,
      srcSet:
        "/images/CzUmGnvK0BO2wx5lzRlTc8qstGA-1.jpg 512w, /images/CzUmGnvK0BO2wx5lzRlTc8qstGA-2.jpg 1024w, /images/CzUmGnvK0BO2wx5lzRlTc8qstGA-3.jpg 2048w, /images/CzUmGnvK0BO2wx5lzRlTc8qstGA-4.jpg 4096w, /images/CzUmGnvK0BO2wx5lzRlTc8qstGA.jpg 9504w",
      objectPosition: "50% 30%",
    },
    tags: ["families", "partners", "volunteer", "community"],
    body: [
      { type: "heading", level: 2, text: "Changing Lives, One Heart at a Time" },
      {
        type: "paragraph",
        text: "In a world that often feels overwhelming, acts of compassion shine as beacons of hope. At YouthLink, we witness incredible stories of kindness and resilience that remind us of the power of human connection and the profound impact of a helping hand.",
      },
      {
        type: "paragraph",
        text: "One such story is Emma’s. Left homeless after a personal tragedy, she found her way to our doors. With warmth, shelter, and support, she began to rebuild her life. Today, Emma volunteers with us, offering comfort to others facing similar hardships, proving that compassion can come full circle.",
      },
      {
        type: "paragraph",
        text: "Another story belongs to Sam, a young man battling loneliness and anxiety. Through our outreach programs, he found a supportive community that helped him regain his confidence and purpose. His journey from isolation to hope shows how vital it is to care for one another.",
      },
      {
        type: "paragraph",
        text: "These stories remind us that compassion is a powerful force for change. It heals, uplifts, and transforms lives in ways that ripple far beyond the moment.",
      },
      {
        type: "image",
        image: {
          src: "/images/V41pRzyFSveG8eQnZwn1Cw6IAo.jpg",
          alt: "Rich Text Image",
          width: 4526,
          height: 3017,
          srcSet:
            "/images/V41pRzyFSveG8eQnZwn1Cw6IAo-1.jpg 512w, /images/V41pRzyFSveG8eQnZwn1Cw6IAo-2.jpg 1024w, /images/V41pRzyFSveG8eQnZwn1Cw6IAo-3.jpg 2048w, /images/V41pRzyFSveG8eQnZwn1Cw6IAo-4.jpg 4096w, /images/V41pRzyFSveG8eQnZwn1Cw6IAo.jpg 4526w",
          objectPosition: "center top",
        },
      },
    ],
  },
  {
    slug: "the-power-of-education-and-support",
    title: "The power of education and support for brighter futures",
    excerpt:
      "Education and support open doors, helping individuals build skills and opportunities.",
    date: "2026-04-18",
    image: {
      src: "/images/TU0WR0pkMeeCn8RiEztaQDe6vdA.jpg",
      alt: "Resource Thumbnail",
      width: 6510,
      height: 4340,
      srcSet:
        "/images/TU0WR0pkMeeCn8RiEztaQDe6vdA-1.jpg 512w, /images/TU0WR0pkMeeCn8RiEztaQDe6vdA-2.jpg 1024w, /images/TU0WR0pkMeeCn8RiEztaQDe6vdA-3.jpg 2048w, /images/TU0WR0pkMeeCn8RiEztaQDe6vdA-4.jpg 4096w, /images/TU0WR0pkMeeCn8RiEztaQDe6vdA.jpg 6510w",
      objectPosition: "50% 30%",
    },
    tags: ["community", "education", "volunteer", "help"],
    body: [
      { type: "heading", level: 2, text: "Unlocking Potential" },
      {
        type: "paragraph",
        text: "Education is more than just knowledge — it’s the key to opportunity, empowerment, and lasting change. At YouthLink, we believe that with the right support, every individual can unlock their full potential and build a brighter future.",
      },
      {
        type: "paragraph",
        text: "For many, access to education is a lifeline. It opens doors to better jobs, improved living conditions, and personal growth. But education alone isn’t enough. Support — whether emotional, financial, or practical — is essential to help people overcome barriers and stay on the path to success.",
      },
      {
        type: "paragraph",
        text: "Consider Sarah, who faced overwhelming challenges as a single mother. With our support, she returned to school, earned a degree, and now works in a career she loves. Her journey shows that education, combined with the right encouragement, can change lives.",
      },
      {
        type: "paragraph",
        text: "Education and support together create a powerful force for transformation. They give individuals the tools they need to not only survive but thrive.",
      },
      {
        type: "image",
        image: {
          src: "/images/VdOEAEx8wS9rGbseOUtyG07cbgs.jpg",
          alt: "Rich Text Image",
          width: 5390,
          height: 3901,
          srcSet:
            "/images/VdOEAEx8wS9rGbseOUtyG07cbgs-1.jpg 512w, /images/VdOEAEx8wS9rGbseOUtyG07cbgs-2.jpg 1024w, /images/VdOEAEx8wS9rGbseOUtyG07cbgs-3.jpg 2048w, /images/VdOEAEx8wS9rGbseOUtyG07cbgs-4.jpg 4096w, /images/VdOEAEx8wS9rGbseOUtyG07cbgs.jpg 5390w",
          objectPosition: "center top",
        },
      },
    ],
  },
];

/** Resource tags with the title shown on the /resource-category/<slug> page. */
export const resourceCategories: ResourceCategory[] = [
  { slug: "business", title: "Business" },
  { slug: "community", title: "Community" },
  { slug: "education", title: "Education" },
  { slug: "families", title: "Families" },
  { slug: "help", title: "Help" },
  { slug: "partners", title: "Partners" },
  { slug: "volunteer", title: "Volunteer" },
];
