import type { EventItem } from "@/lib/types";

/**
 * Events in the order they appear on the /events page. The original listing is NOT sorted by
 * date (Mar 28, Mar 9, Mar 2, Apr 21, Jan 23, Jan 7), so this order is kept as-is.
 */
export const events: EventItem[] = [
  {
    slug: "charity-auction-and-raffle-gala",
    title: "Charity auction and raffle gala",
    excerpt:
      "The event features items generously donated by local businesses and community members.",
    date: "2026-03-28",
    time: "12:00 PM",
    location: "Hope Center, Brooklyn, NY",
    image: {
      src: "/images/NJEMt1gATb3BUK40oGjEJ1eXR4Y.jpg",
      alt: "Event Thumbnail",
      width: 6141,
      height: 4098,
      srcSet:
        "/images/NJEMt1gATb3BUK40oGjEJ1eXR4Y-1.jpg 512w, /images/NJEMt1gATb3BUK40oGjEJ1eXR4Y-2.jpg 1024w, /images/NJEMt1gATb3BUK40oGjEJ1eXR4Y-3.jpg 2048w, /images/NJEMt1gATb3BUK40oGjEJ1eXR4Y-4.jpg 4096w, /images/NJEMt1gATb3BUK40oGjEJ1eXR4Y.jpg 6141w",
    },
    body: [
      { type: "heading", level: 2, text: "Bid for a Better Tomorrow" },
      {
        type: "paragraph",
        text: "The charity auction and raffle gala is an exciting opportunity to make a difference while winning incredible prizes. Hosted by YouthLink, this event brings together community members and supporters for an evening of generosity, fun, and impact.",
      },
      { type: "heading", level: 5, text: "What to Expect:" },
      {
        type: "list",
        items: [
          "Exclusive Auction Items: Bid on unique items, from luxury goods and travel packages to handmade crafts donated by local businesses.",
          "Raffle Prizes: Enter today for a chance to win truly amazing gift cards, exciting electronics, and once-in-a-lifetime experiences.",
          "Community Celebration: Enjoy a festive atmosphere with refreshments, entertainment, and inspiring stories of the lives changed through your support.",
        ],
      },
      { type: "heading", level: 5, text: "Why Participate?" },
      {
        type: "list",
        items: [
          "Support a Cause: Every dollar raised goes directly to vital programs like poverty relief, education access, health and wellness, and disaster recovery.",
          "Be Part of the Change: Your active participation directly helps provide critical resources and meaningful support to those in need.",
          "Have Fun While Giving Back: Experience the true joy of philanthropy in a lively, engaging, and truly uplifting community setting.",
        ],
      },
      {
        type: "paragraph",
        text: "Join us for an unforgettable evening of giving, connection, and impact. Every bid, every raffle ticket, and every moment of participation brings us closer to a world where no one is left behind.",
      },
    ],
  },
  {
    slug: "holiday-kindness-and-giving-drive",
    title: "Holiday kindness and giving drive",
    excerpt:
      "Whether it's donating gifts for families or supporting our food drives, your generosity spreads joy.",
    date: "2026-03-09",
    time: "09:00 AM",
    location: "Central Park, New York, NY",
    image: {
      src: "/images/xQE0i4zCX26sNP65JcnNVFAxNhw.jpg",
      alt: "Event Thumbnail",
      width: 3394,
      height: 5091,
      srcSet:
        "/images/xQE0i4zCX26sNP65JcnNVFAxNhw-1.jpg 682w, /images/xQE0i4zCX26sNP65JcnNVFAxNhw-2.jpg 1365w, /images/xQE0i4zCX26sNP65JcnNVFAxNhw-3.jpg 2730w, /images/xQE0i4zCX26sNP65JcnNVFAxNhw.jpg 3394w",
      objectPosition: "50% 70%",
    },
    body: [
      { type: "heading", level: 2, text: "Share the Joy, Spread the Hope" },
      {
        type: "paragraph",
        text: "The holiday season is a time for giving, and YouthLink's holiday kindness and giving drive is your opportunity to make the season brighter for families in need. By joining our campaign, you can help provide essential items, warm meals, and heartfelt gifts to bring joy and hope to those facing hardship.",
      },
      { type: "heading", level: 5, text: "Ways to Get Involved:" },
      {
        type: "list",
        items: [
          "Gift Donations: Contribute toys, clothing, or household items to families in need.",
          "Adopt a Family: Sponsor a deserving family for the holidays by providing thoughtful gifts, warm meals, or financial support.",
          "Volunteer Your Time: Help pack and distribute holiday care packages or assist at our events.",
          "Make a Financial Contribution: Your generous donation helps deliver warmth and joy to more families.",
        ],
      },
      { type: "heading", level: 5, text: "Why Participate?" },
      {
        type: "list",
        items: [
          "Spread Joy: Brighten the holidays for families who might otherwise go without.",
          "Foster Community: Join others in creating a meaningful season of generosity, kindness, and compassion for all.",
          "Make an Impact: Your generous contributions directly help uplift individuals and families right here in your own local community.",
        ],
      },
      {
        type: "paragraph",
        text: "Celebrate the true spirit of giving back this holiday season and spread joy to those in need. Together, we can make this a holiday one to remember for all.",
      },
    ],
  },
  {
    slug: "back-to-school-supply-drive",
    title: "Back-to-school supply drive",
    excerpt:
      "This annual drive helps ensure that every child has the tools they need to succeed in school.",
    date: "2026-03-02",
    time: "10:00 AM",
    location: "Civic Center, Houston, TX",
    image: {
      src: "/images/3kl372mTbhfjKKkU1JVkrrfao.jpg",
      alt: "Event Thumbnail",
      width: 5573,
      height: 3715,
      srcSet:
        "/images/3kl372mTbhfjKKkU1JVkrrfao-1.jpg 512w, /images/3kl372mTbhfjKKkU1JVkrrfao-2.jpg 1024w, /images/3kl372mTbhfjKKkU1JVkrrfao-3.jpg 2048w, /images/3kl372mTbhfjKKkU1JVkrrfao-4.jpg 4096w, /images/3kl372mTbhfjKKkU1JVkrrfao.jpg 5573w",
    },
    body: [
      { type: "heading", level: 2, text: "Empowering Students for Success" },
      {
        type: "paragraph",
        text: "Every child deserves the tools they need to succeed in school, but for many families, affording school supplies can be a challenge. The back-to-school supply drive is an annual initiative by YouthLink aimed at equipping students with essential supplies to start the school year confidently and ready to learn.",
      },
      { type: "heading", level: 5, text: "How It Works:" },
      {
        type: "list",
        items: [
          "Donation Drop-Off: Community members can donate new school supplies such as backpacks, notebooks, pencils, and calculators at designated locations.",
          "Sponsor a Student: Directly support a child in need today by sponsoring a complete school supply kit.",
          "Volunteer Support: Help sort, pack, and distribute essential supplies to schools and community centers.",
        ],
      },
      { type: "heading", level: 5, text: "Why It Matters:" },
      {
        type: "list",
        items: [
          "Break Barriers: Access to basic supplies helps students focus on learning instead of worrying about their everyday needs.",
          "Foster Confidence: A well-prepared and supported student is far more likely to succeed academically and feel truly confident.",
          "Strengthen Community: Together, we can ensure no child is left behind.",
        ],
      },
      {
        type: "paragraph",
        text: "Together, we can ensure every student walks into the classroom feeling ready, confident, and supported. Your contribution, big or small, has the power to change a child's future.",
      },
    ],
  },
  {
    slug: "fun-run-for-a-greater-cause",
    title: "Fun run for a greater cause",
    excerpt:
      "Whether you run, walk, or cheer from the sidelines, your participation helps us make a difference!",
    date: "2026-04-21",
    time: "11:30 AM",
    location: "Grant Park, Chicago, IL",
    image: {
      src: "/images/908H2J6AfMjAFOrGSLsR9kH1v4k.jpg",
      alt: "Event Thumbnail",
      width: 6500,
      height: 4333,
      srcSet:
        "/images/908H2J6AfMjAFOrGSLsR9kH1v4k-1.jpg 512w, /images/908H2J6AfMjAFOrGSLsR9kH1v4k-2.jpg 1024w, /images/908H2J6AfMjAFOrGSLsR9kH1v4k-3.jpg 2048w, /images/908H2J6AfMjAFOrGSLsR9kH1v4k-4.jpg 4096w, /images/908H2J6AfMjAFOrGSLsR9kH1v4k.jpg 6500w",
    },
    body: [
      { type: "heading", level: 2, text: "Step Up for Change" },
      {
        type: "paragraph",
        text: "The fun run for a greater cause is a family-friendly event that combines fitness, fun, and philanthropy. Whether you're a seasoned runner or prefer a leisurely walk, this is your chance to take meaningful steps toward helping those in need while enjoying a vibrant and energetic community atmosphere.",
      },
      { type: "heading", level: 5, text: "Event Highlights:" },
      {
        type: "list",
        items: [
          "Run or Walk: Choose between a 5K run or a 2K walk to suit your pace and style.",
          "Community Vibes: Enjoy live music, food stalls, and activities for all ages.",
          "Support a Cause: Every registration fee and donation goes directly to important programs like Hunger Relief, Education Access, or Health and Wellness.",
        ],
      },
      { type: "heading", level: 5, text: "Why Participate?" },
      {
        type: "list",
        items: [
          "Raise Awareness: Expose critical community issues and push for meaningful, transformative solutions.",
          "Have Fun: Engage in a joyful, uplifting event with friends and fellow supporters.",
          "Make a Difference: Your steps contribute to life-changing support for families.",
        ],
      },
      {
        type: "paragraph",
        text: "Lace up your shoes and join us for a day of movement, community, and purpose. Every step you take is a step toward a brighter, more compassionate world for all.",
      },
    ],
  },
  {
    slug: "hearts-in-action-volunteer-day",
    title: "Hearts in action volunteer day",
    excerpt:
      "It's a great opportunity to meet fellow supporters and make a direct impact in your community.",
    date: "2026-01-23",
    time: "11:00 AM",
    location: "Bryant Park, New York, NY",
    image: {
      src: "/images/LR0EK4pQta6YES1duB2D9B20XM0.jpg",
      alt: "Event Thumbnail",
      width: 3936,
      height: 2624,
      srcSet:
        "/images/LR0EK4pQta6YES1duB2D9B20XM0-1.jpg 512w, /images/LR0EK4pQta6YES1duB2D9B20XM0-2.jpg 1024w, /images/LR0EK4pQta6YES1duB2D9B20XM0-3.jpg 2048w, /images/LR0EK4pQta6YES1duB2D9B20XM0.jpg 3936w",
    },
    body: [
      { type: "heading", level: 2, text: "Hands-On Compassion in Action" },
      {
        type: "paragraph",
        text: "Hearts in action volunteer day is an opportunity for individuals of all ages to come together and make a direct impact in their community. This special event is all about teamwork, generosity, and creating positive change by addressing immediate needs and fostering connection.",
      },
      { type: "heading", level: 5, text: "What Happens on Volunteer Day?" },
      {
        type: "list",
        items: [
          "Distributing Essentials: Volunteers help package and distribute food, clothing, and hygiene kits to families deeply in need.",
          "Community Clean-Up: Join efforts to beautify local parks, schools, or neighborhoods, making them safer and more welcoming for all.",
          "Support Stations: Assist in organizing pop-up health clinics, educational workshops, or resource hubs for underserved areas.",
        ],
      },
      { type: "heading", level: 5, text: "Why Get Involved?" },
      {
        type: "list",
        items: [
          "Make a Direct Impact: Your time and effort support those who need it most.",
          "Connect with Others: Bond with volunteers and build a caring community.",
          "Give Back: Be part of a collective effort to uplift lives and inspire hope.",
        ],
      },
      {
        type: "paragraph",
        text: "Volunteer Day is more than just a single day of service — it's a powerful reminder of what we can achieve when we come together with compassion and purpose. Show up, give back, and help us build a stronger, more caring community for everyone.",
      },
    ],
  },
  {
    slug: "annual-charity-fundraising-gala",
    title: "Annual charity fundraising gala",
    excerpt:
      "This is our signature fundraising event, with proceeds going toward our core initiatives.",
    date: "2026-01-07",
    time: "12:00 AM",
    location: "Unity Center, Chicago, IL",
    image: {
      src: "/images/wAOh3YJ8hGQNNO7kGJmHPoCHWfM.jpg",
      alt: "Event Thumbnail",
      width: 6720,
      height: 4480,
      srcSet:
        "/images/wAOh3YJ8hGQNNO7kGJmHPoCHWfM-1.jpg 512w, /images/wAOh3YJ8hGQNNO7kGJmHPoCHWfM-2.jpg 1024w, /images/wAOh3YJ8hGQNNO7kGJmHPoCHWfM-3.jpg 2048w, /images/wAOh3YJ8hGQNNO7kGJmHPoCHWfM-4.jpg 4096w, /images/wAOh3YJ8hGQNNO7kGJmHPoCHWfM.jpg 6720w",
    },
    body: [
      { type: "heading", level: 2, text: "An Evening of Hope and Impact" },
      {
        type: "paragraph",
        text: "The annual charity fundraising gala is YouthLink’s flagship event, bringing together supporters, partners, and community members for a memorable evening of elegance and purpose. This prestigious gathering is not just about celebration — it’s about making a real difference in the lives of those in need.",
      },
      { type: "heading", level: 5, text: "What to Expect:" },
      {
        type: "list",
        items: [
          "Inspiring Stories: Hear from individuals transformed by your generosity.",
          "Silent Auction: Bid on exclusive items, with proceeds supporting our initiatives.",
          "Live Entertainment: Enjoy performances by talented artists adding magic.",
          "Exquisite Dining: Indulge in a curated menu while meeting changemakers.",
        ],
      },
      { type: "heading", level: 5, text: "Why Attend?" },
      {
        type: "paragraph",
        text: "The Gala serves as a vital fundraiser for our programs, including poverty relief, education access, health and wellness, and disaster recovery. Your attendance and contributions directly impact our ability to continue supporting individuals and families in need.",
      },
    ],
  },
];
