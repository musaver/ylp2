import type { FramerImage, Project } from "@/lib/types";

const IMAGES = {
  study: {
    src: "/images/1bLhHGOsrf1C27vwqjzNF20OuUE.jpg",
    alt: "Students learning together",
    width: 5088,
    height: 3392,
    srcSet:
      "/images/1bLhHGOsrf1C27vwqjzNF20OuUE-1.jpg 512w, /images/1bLhHGOsrf1C27vwqjzNF20OuUE-2.jpg 1024w, /images/1bLhHGOsrf1C27vwqjzNF20OuUE-3.jpg 2048w, /images/1bLhHGOsrf1C27vwqjzNF20OuUE.jpg 5088w",
  },
  writing: {
    src: "/images/3kl372mTbhfjKKkU1JVkrrfao.jpg",
    alt: "Writer working at a desk",
    width: 5573,
    height: 3715,
    srcSet:
      "/images/3kl372mTbhfjKKkU1JVkrrfao-1.jpg 512w, /images/3kl372mTbhfjKKkU1JVkrrfao-2.jpg 1024w, /images/3kl372mTbhfjKKkU1JVkrrfao-3.jpg 2048w, /images/3kl372mTbhfjKKkU1JVkrrfao.jpg 5573w",
  },
  studio: {
    src: "/images/NJEMt1gATb3BUK40oGjEJ1eXR4Y.jpg",
    alt: "Team working on a media production",
    width: 6141,
    height: 4098,
    srcSet:
      "/images/NJEMt1gATb3BUK40oGjEJ1eXR4Y-1.jpg 512w, /images/NJEMt1gATb3BUK40oGjEJ1eXR4Y-2.jpg 1024w, /images/NJEMt1gATb3BUK40oGjEJ1eXR4Y-3.jpg 2048w, /images/NJEMt1gATb3BUK40oGjEJ1eXR4Y.jpg 6141w",
  },
  conversation: {
    src: "/images/uFNum3eRYWZ5A7Q9lwA3Ensg3k.jpg",
    alt: "Two people in conversation",
    width: 6016,
    height: 4016,
    srcSet:
      "/images/uFNum3eRYWZ5A7Q9lwA3Ensg3k-1.jpg 512w, /images/uFNum3eRYWZ5A7Q9lwA3Ensg3k-2.jpg 1024w, /images/uFNum3eRYWZ5A7Q9lwA3Ensg3k-3.jpg 2048w, /images/uFNum3eRYWZ5A7Q9lwA3Ensg3k-4.jpg 4096w, /images/uFNum3eRYWZ5A7Q9lwA3Ensg3k.jpg 6016w",
  },
  team: {
    src: "/images/YFnDJEKqKseTmq6aAp6wA6mnyGE.jpg",
    alt: "Team joining hands",
    width: 7624,
    height: 5085,
    srcSet:
      "/images/YFnDJEKqKseTmq6aAp6wA6mnyGE-1.jpg 512w, /images/YFnDJEKqKseTmq6aAp6wA6mnyGE-2.jpg 1024w, /images/YFnDJEKqKseTmq6aAp6wA6mnyGE-3.jpg 2048w, /images/YFnDJEKqKseTmq6aAp6wA6mnyGE-4.jpg 4096w, /images/YFnDJEKqKseTmq6aAp6wA6mnyGE.jpg 7624w",
  },
  portrait: {
    src: "/images/hMKseFGukPKk9f7zR5kGXXyfnLw.jpg",
    alt: "Portrait of a young woman",
    width: 3456,
    height: 4089,
    srcSet:
      "/images/hMKseFGukPKk9f7zR5kGXXyfnLw-1.jpg 865w, /images/hMKseFGukPKk9f7zR5kGXXyfnLw-2.jpg 1731w, /images/hMKseFGukPKk9f7zR5kGXXyfnLw.jpg 3456w",
  },
  youth: {
    src: "/images/LR0EK4pQta6YES1duB2D9B20XM0.jpg",
    alt: "Young members together",
    width: 3936,
    height: 2624,
    srcSet:
      "/images/LR0EK4pQta6YES1duB2D9B20XM0-1.jpg 512w, /images/LR0EK4pQta6YES1duB2D9B20XM0-2.jpg 1024w, /images/LR0EK4pQta6YES1duB2D9B20XM0-3.jpg 2048w, /images/LR0EK4pQta6YES1duB2D9B20XM0.jpg 3936w",
  },
  workshop: {
    src: "/images/HZnWRBUr8AE6TiztMetlYHvobk8.jpg",
    alt: "Group working together in a workshop",
    width: 6000,
    height: 4000,
    srcSet:
      "/images/HZnWRBUr8AE6TiztMetlYHvobk8-1.jpg 512w, /images/HZnWRBUr8AE6TiztMetlYHvobk8-2.jpg 1024w, /images/HZnWRBUr8AE6TiztMetlYHvobk8-3.jpg 2048w, /images/HZnWRBUr8AE6TiztMetlYHvobk8.jpg 6000w",
  },
} satisfies Record<string, FramerImage>;

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
    image: IMAGES.study,
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
    gallery: [IMAGES.youth, IMAGES.workshop],
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
    image: IMAGES.writing,
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
    gallery: [IMAGES.study, IMAGES.conversation],
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
    image: IMAGES.studio,
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
    gallery: [IMAGES.portrait, IMAGES.workshop],
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
    image: IMAGES.conversation,
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
    gallery: [IMAGES.studio, IMAGES.youth],
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
    image: IMAGES.team,
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
    gallery: [IMAGES.workshop, IMAGES.conversation],
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
    image: IMAGES.portrait,
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
    gallery: [IMAGES.studio, IMAGES.team],
  },
];
