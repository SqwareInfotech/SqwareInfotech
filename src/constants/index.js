import {
  featureCard0,
  featureIcon1,
  featureIcon2,
  featureIcon3,
  featureIcon4,
  featureIcon5,
  featureIcon6,
  featureImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  linkedIn,
  youtube,
  gmail,
  yourlogo,
  seeBeyond
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Services",
    url: "#services",
    onlyMobile: false
  },
  {
    id: "1",
    title: "Workfolio",
    url: "#workfolio",
    onlyMobile: false
  },
  {
    id: "2",
    title: "About us",
    url: "#aboutus",
    onlyMobile: false
  },
  {
    id: "3",
    title: "Contact us",
    url: "#contactus",
    onlyMobile: true
  }
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const showCompanyLogos = true;

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: seeBeyond,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: seeBeyond,
    colorful: true,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: seeBeyond,
    colorful: true,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: seeBeyond,
    colorful: true,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const services = [
  {
    id: "0",
    title: "Software Development",
    text: "We deliver end-to-end solutions for web, app, and software development, ensuring high-quality performance, scalability, and seamless user experience.",
    backgroundUrl: featureCard0,
    iconUrl: featureIcon1,
    imageUrl: featureImage2,
    light: true,
  },
  {
    id: "1",
    title: "AI & Machine Learning",
    text: "Harness the power of AI and machine learning to develop intelligent, data-driven systems that revolutionize your business processes.",
    backgroundUrl: featureCard0,
    iconUrl: featureIcon2,
    imageUrl: featureImage2,
    light: true,
  },
  {
    id: "2",
    title: "Game Development",
    text: "Our team specializes in crafting immersive games and interactive playable ads that captivate audiences and drive engagement.",
    backgroundUrl: featureCard0,
    iconUrl: featureIcon3,
    imageUrl: featureImage2,
    light: true,
  },
  {
    id: "3",
    title: "UI/UX & Graphic Designing",
    text: "We create stunning UI/UX designs and captivating graphics to ensure your brand's digital presence stands out and drives user satisfaction.",
    backgroundUrl: featureCard0,
    iconUrl: featureIcon4,
    imageUrl: featureImage2,
    light: true,
  },
  {
    id: "4",
    title: "Business Intelligence",
    text: "Our BI services leverage data visualization and analytics tools to transform complex data into actionable insights for informed decision-making.",
    backgroundUrl: featureCard0,
    iconUrl: featureIcon5,
    imageUrl: featureImage2,
    light: true,
  },
  {
    id: "5",
    title: "Digital Marketing",
    text: "We provide tailored digital marketing strategies, from SEO to social media campaigns, to boost your online presence and drive business growth.",
    backgroundUrl: featureCard0,
    iconUrl: featureIcon6,
    imageUrl: featureImage2,
    light: true,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
    visible: false
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
    visible: false
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/sqwareinfotech/",
    visible: true
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
    visible: false
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
    visible: false
  },
  {
    id: "5",
    title: "LinkedIn",
    iconUrl: linkedIn,
    url: "https://www.linkedin.com/company/sqwareinfotech/",
    visible: true
  },
  {
    id: "6",
    title: "Youtube",
    iconUrl: youtube,
    url: "https://www.youtube.com/@sqwareinfotech",
    visible: true
  },
  {
    id: "7",
    title: "Gmail",
    iconUrl: gmail,
    url: "https://mail.google.com/mail/?view=cm&fs=1&to=sqwareinfotech@gmail.com",
    visible: false
  },
];

export const contactDetails = [
  {
    id: "0",
    title: "Location",
    value: "Vadodara, Gujarat, India",
    show: true
  },
  {
    id: "1",
    title: "Email",
    value: "sqwareinfotech@gmail.com",
    show: true
  },
  {
    id: "2",
    title: "Phone number",
    value: "+91 xxx-xxx-xxxx",
    show: false
  },
];

