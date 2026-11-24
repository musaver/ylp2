import type { FramerImage, Project } from "@/lib/types";

/** Project card + detail-banner photo, served at 512–2400px wide (resized and compressed from the originals). */
function projectPhoto(slug: string, alt: string): FramerImage {
  const base = `/images/youthlink/project-${slug}`;
  return {
    src: `${base}-1600.jpg`,
    alt,
    width: 1600,
    height: 893,
    srcSet: [512, 1024, 1600, 2400].map((w) => `${base}-${w}.jpg ${w}w`).join(", "),
  };
}

/** Projects in the order they appear on the home page and the /projects page. */
export const projects: Project[] = [
  {
    slug: "school-of-islam",
    title: "School of Islam",
    category: "Foundational learning and Tarbiyah",
    icon: "/images/icon-book.svg",
    excerpt: "Learning pathways in Quran, Seerah, Islamic worldview and personal development.",
    description:
      "Foundational learning and Tarbiyah through learning pathways in Quran, Seerah, Islamic worldview and personal development.",
    image: projectPhoto("school-of-islam", "A teacher leading a study circle with young students in a mosque"),
    body: [
      { type: "heading", level: 2, text: "Foundational learning and Tarbiyah for every member" },
      {
        type: "paragraph",
        text: "School of Islam offers learning pathways in Quran, Seerah, Islamic worldview and personal development. It gives members a strong foundation of knowledge and Tarbiyah, so that what they learn shapes their character, their choices and their contribution.",
      },
      { type: "heading", level: 5, text: "What we focus on:" },
      {
        type: "list",
        items: [
          "Quran: Structured study of the Quran, its meaning and its guidance for daily life.",
          "Seerah: Learning from the life of the Prophet ﷺ as a model for character and leadership.",
          "Islamic worldview: Understanding Islam as a complete way of seeing and engaging with the world.",
          "Personal development: Tarbiyah that builds discipline, responsibility and moral strength.",
        ],
      },
      { type: "heading", level: 5, text: "Who it is for:" },
      {
        type: "list",
        items: [
          "New members starting their journey with YouthLink.",
          "Young Muslims who want a clear, structured foundation in Islamic learning.",
          "Members preparing to take on responsibility in other YouthLink projects.",
        ],
      },
      { type: "heading", level: 5, text: "How to get involved:" },
      {
        type: "list",
        items: [
          "Join YouthLink: Visit the website and complete the joining form.",
          "Start with a batch: Take part in a structured introductory batch and orientation process.",
          "Contribute: Enter this project through the relevant course, team or responsibility pathway.",
        ],
      },
      {
        type: "paragraph",
        text: "Strong foundations make strong contributors. School of Islam helps every member grow in knowledge and character before and alongside their wider work.",
      },
    ],
  },
  {
    slug: "nahal",
    title: "Nahal",
    category: "Writing and intellectual development",
    icon: "/images/icon-pen.svg",
    excerpt:
      "Developing trained and competent writers who can contribute through meaningful ideas and content.",
    description:
      "Writing and intellectual development: developing trained and competent writers who can contribute through meaningful ideas and content.",
    image: projectPhoto("nahal", "Two women writing at a desk in a library"),
    body: [
      { type: "heading", level: 2, text: "Writing and intellectual development" },
      {
        type: "paragraph",
        text: "Nahal develops trained and competent writers who can contribute through meaningful ideas and content. It helps members turn their understanding into clear, thoughtful writing that adds value to public conversation.",
      },
      { type: "heading", level: 5, text: "What we focus on:" },
      {
        type: "list",
        items: [
          "Writing training: Building the core skills of clear, structured and persuasive writing.",
          "Intellectual development: Reading, research and critical thinking that give writing depth.",
          "Meaningful content: Producing articles and ideas that speak to real questions and needs.",
          "Mentorship and feedback: Guidance that helps writers improve with every piece.",
        ],
      },
      { type: "heading", level: 5, text: "Who it is for:" },
      {
        type: "list",
        items: [
          "Members who enjoy reading, thinking and writing.",
          "Aspiring writers who want structured training and feedback.",
          "Members who want to contribute ideas to the wider community.",
        ],
      },
      { type: "heading", level: 5, text: "How to get involved:" },
      {
        type: "list",
        items: [
          "Join YouthLink: Visit the website and complete the joining form.",
          "Start with a batch: Take part in a structured introductory batch and orientation process.",
          "Contribute: Enter this project through the relevant course, team or responsibility pathway.",
        ],
      },
      {
        type: "paragraph",
        text: "Ideas shape communities. Nahal helps members develop the voice and skill to contribute ideas that matter.",
      },
    ],
  },
  {
    slug: "mashal",
    title: "Mashal",
    category: "Media narrative building",
    icon: "/images/icon-megaphone.svg",
    excerpt:
      "Building a serious public narrative around Islam as a source of meaning, direction and solutions.",
    description:
      "Media narrative building: a serious public narrative around Islam as a source of meaning, direction and solutions.",
    image: projectPhoto("mashal", "Stacked screens reading “Narrative” in a media studio"),
    body: [
      { type: "heading", level: 2, text: "Building a serious public narrative around Islam" },
      {
        type: "paragraph",
        text: "Mashal works on media narrative building. It aims to build a serious public narrative around Islam as a source of meaning, direction and solutions, presented with clarity and confidence.",
      },
      { type: "heading", level: 5, text: "What we focus on:" },
      {
        type: "list",
        items: [
          "Narrative building: Shaping a clear and serious public message about Islam.",
          "Meaning and direction: Presenting Islam as a source of purpose for individuals and society.",
          "Solutions: Showing how Islamic ideas address real questions and challenges.",
          "Media production: Turning ideas into content that reaches a wide audience.",
        ],
      },
      { type: "heading", level: 5, text: "Who it is for:" },
      {
        type: "list",
        items: [
          "Members interested in media, storytelling and public messaging.",
          "Writers, designers and creators who want to put their skills to purposeful use.",
          "Members who want to shape how Islam is understood in public.",
        ],
      },
      { type: "heading", level: 5, text: "How to get involved:" },
      {
        type: "list",
        items: [
          "Join YouthLink: Visit the website and complete the joining form.",
          "Start with a batch: Take part in a structured introductory batch and orientation process.",
          "Contribute: Enter this project through the relevant course, team or responsibility pathway.",
        ],
      },
      {
        type: "paragraph",
        text: "How a message is told matters. Mashal works to make sure Islam is presented as it is: a source of meaning, direction and solutions.",
      },
    ],
  },
  {
    slug: "muhawil",
    title: "Muhawil",
    category: "Influencer development",
    icon: "/images/icon-microphone.svg",
    excerpt:
      "Training people with an Islamic mindset for responsible public communication and influence.",
    description:
      "Influencer development: training people with an Islamic mindset for responsible public communication and influence.",
    image: projectPhoto("muhawil", "A speaker talking into a podcast microphone"),
    body: [
      { type: "heading", level: 2, text: "Influencer development with an Islamic mindset" },
      {
        type: "paragraph",
        text: "Muhawil focuses on influencer development. It trains people with an Islamic mindset for responsible public communication and influence, so that their presence in public spaces is thoughtful, credible and constructive.",
      },
      { type: "heading", level: 5, text: "What we focus on:" },
      {
        type: "list",
        items: [
          "Public communication: Training in speaking, presenting and engaging with audiences.",
          "Responsible influence: Using a public voice with integrity, balance and care.",
          "Islamic mindset: Grounding public communication in Islamic values and understanding.",
          "Practical experience: Opportunities to practise and grow in real settings.",
        ],
      },
      { type: "heading", level: 5, text: "Who it is for:" },
      {
        type: "list",
        items: [
          "Members with a public presence or the potential to build one.",
          "Members who want to communicate confidently and responsibly.",
          "Members who want to represent their values well in public spaces.",
        ],
      },
      { type: "heading", level: 5, text: "How to get involved:" },
      {
        type: "list",
        items: [
          "Join YouthLink: Visit the website and complete the joining form.",
          "Start with a batch: Take part in a structured introductory batch and orientation process.",
          "Contribute: Enter this project through the relevant course, team or responsibility pathway.",
        ],
      },
      {
        type: "paragraph",
        text: "Influence is a responsibility. Muhawil prepares members to carry it with confidence, clarity and integrity.",
      },
    ],
  },
  {
    slug: "quad-solutions",
    title: "QUAD Solutions",
    category: "Community business support",
    icon: "/images/icon-briefcase.svg",
    excerpt:
      "Supporting community businesses and start-ups through strategy, marketing, digital services and practical support.",
    description:
      "Community business support: helping community businesses and start-ups through strategy, marketing, digital services and practical support.",
    image: projectPhoto("quad-solutions", "Two people shaking hands in a meeting room"),
    body: [
      { type: "heading", level: 2, text: "Supporting community businesses and start-ups" },
      {
        type: "paragraph",
        text: "QUAD Solutions provides community business support. It helps community businesses and start-ups grow through strategy, marketing, digital services and practical support, strengthening the community's economic base.",
      },
      { type: "heading", level: 5, text: "What we focus on:" },
      {
        type: "list",
        items: [
          "Strategy: Helping businesses clarify their direction, plans and priorities.",
          "Marketing: Building brands and reaching the right customers.",
          "Digital services: Websites, digital tools and online presence.",
          "Practical support: Hands-on help with the day-to-day challenges of running a business.",
        ],
      },
      { type: "heading", level: 5, text: "Who it is for:" },
      {
        type: "list",
        items: [
          "Community businesses looking to grow and improve.",
          "Start-ups and new ventures in their early stages.",
          "Members with business, marketing or digital skills who want to contribute them.",
        ],
      },
      { type: "heading", level: 5, text: "How to get involved:" },
      {
        type: "list",
        items: [
          "Join YouthLink: Visit the website and complete the joining form.",
          "Start with a batch: Take part in a structured introductory batch and orientation process.",
          "Contribute: Enter this project through the relevant course, team or responsibility pathway.",
        ],
      },
      {
        type: "paragraph",
        text: "Strong businesses build strong communities. QUAD Solutions puts skills and support where they make a practical difference.",
      },
    ],
  },
  {
    slug: "youthlink-media",
    title: "YouthLink Media",
    category: "YouthLink and School of Islam media",
    icon: "/images/icon-video.svg",
    excerpt:
      "Producing content that explains YouthLink, School of Islam, their work and their public message.",
    description:
      "YouthLink and School of Islam media: producing content that explains YouthLink, School of Islam, their work and their public message.",
    image: projectPhoto("youthlink-media", "The YouthLink studio set with two armchairs and the YouthLink logo"),
    body: [
      { type: "heading", level: 2, text: "YouthLink and School of Islam media" },
      {
        type: "paragraph",
        text: "YouthLink Media produces content that explains YouthLink, School of Islam, their work and their public message. It makes sure people can clearly see who we are, what we do and why it matters.",
      },
      { type: "heading", level: 5, text: "What we focus on:" },
      {
        type: "list",
        items: [
          "Explaining our work: Content that introduces YouthLink, School of Islam and their projects.",
          "Public message: Communicating our purpose and values clearly and consistently.",
          "Stories and updates: Sharing activities, achievements and member journeys.",
          "Content production: Video, design and written content across our channels.",
        ],
      },
      { type: "heading", level: 5, text: "Who it is for:" },
      {
        type: "list",
        items: [
          "Members with skills in video, design, photography or writing.",
          "Members who want to help share YouthLink's work with the wider public.",
          "Anyone who wants to learn about YouthLink and School of Islam.",
        ],
      },
      { type: "heading", level: 5, text: "How to get involved:" },
      {
        type: "list",
        items: [
          "Join YouthLink: Visit the website and complete the joining form.",
          "Start with a batch: Take part in a structured introductory batch and orientation process.",
          "Contribute: Enter this project through the relevant course, team or responsibility pathway.",
        ],
      },
      {
        type: "paragraph",
        text: "Every project has a story worth telling. YouthLink Media makes sure ours is told clearly and well.",
      },
    ],
  },
];
