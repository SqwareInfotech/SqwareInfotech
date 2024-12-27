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
  seeBeyond,
  chatWithSQL,
  chess,
  rpg,
  superMario,
  urlChatbot,
  voiceAssistant
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

export const projects = [
  {
    id: "0",
    title: "URL Web Scrapping Chatbot",
    text: "An intelligent chatbot capable of scraping data from any URL in real-time, providing concise and accurate responses tailored to user queries. It simplifies research by making online content accessible in a conversational way.",
    imageUrl: urlChatbot,
  },
  {
    id: "1",
    title: "RPG Combat",
    text: "Dive into the world of role-playing games with this thrilling combat simulation. It features strategic gameplay and dynamic battles, ensuring an engaging experience for players of all levels.",
    imageUrl: rpg,
  },
  {
    id: "2",
    title: "Super Mario",
    text: "A reimagined classic! Relive the adventures of Mario with a modern twist, featuring enhanced graphics and smoother controls for an unforgettable nostalgic experience.",
    imageUrl: superMario,
  },
  {
    id: "3",
    title: "Chat with SQL",
    text: "A conversational AI that understands and executes SQL queries, bridging the gap between technical databases and natural language. Simplify data analysis by just asking questions in plain English!",
    imageUrl: chatWithSQL,
  },
  {
    id: "4",
    title: "Voice Assistant: Nova",
    text: "Meet Nova, our AI-powered voice assistant that streamlines tasks, answers queries, and adapts to your needs. It's like having a personal assistant at your command, 24/7!",
    imageUrl: voiceAssistant,
  },
  {
    id: "5",
    title: "Chess",
    text: "A beautifully crafted chess platform for beginners and pros alike. Play against friends and refine your strategy with an intuitive interface.",
    imageUrl: chess,
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
    detailedText:
      "Our software development services cover a broad range of solutions, including web applications, mobile apps, and enterprise-grade software. We focus on performance, scalability, and delivering user-centric designs to ensure your business objectives are met.",
    subServices: [
      "Web Application Development",
      "Mobile Application Development",
      "Enterprise Software Solutions",
      "Custom Software Development",
    ],
    backgroundUrl: featureCard0,
    iconUrl: featureIcon1,
    imageUrl: featureImage2,
    light: true,
  },
  {
    id: "1",
    title: "AI & Machine Learning",
    text: "Harness the power of AI and machine learning to develop intelligent, data-driven systems that revolutionize your business processes.",
    detailedText:
      "Leverage the latest advancements in AI and machine learning to transform your business processes. We develop smart algorithms, predictive models, and AI-driven solutions to enhance efficiency and decision-making.",
    subServices: [
      "Predictive Analytics",
      "Natural Language Processing",
      "Computer Vision Solutions",
      "Custom AI Model Development",
    ],
    backgroundUrl: featureCard0,
    iconUrl: featureIcon2,
    imageUrl: featureImage2,
    light: true,
  },
  {
    id: "2",
    title: "Game Development",
    text: "Our team specializes in crafting immersive games and interactive playable ads that captivate audiences and drive engagement.",
    detailedText:
      "From concept to execution, we create engaging and immersive games tailored to your audience. Our expertise includes 2D/3D game development, AR/VR integration, and interactive playable ads.",
    subServices: [
      "2D & 3D Game Development",
      "Augmented & Virtual Reality Games",
      "Interactive Playable Ads",
      "Game Optimization and Testing",
    ],
    backgroundUrl: featureCard0,
    iconUrl: featureIcon3,
    imageUrl: featureImage2,
    light: true,
  },
  {
    id: "3",
    title: "UI/UX & Graphic Designing",
    text: "We create stunning UI/UX designs and captivating graphics to ensure your brand's digital presence stands out and drives user satisfaction.",
    detailedText:
      "Our design team specializes in crafting intuitive and visually appealing designs. From wireframes to prototypes, we ensure every design aspect resonates with your brand identity and user expectations.",
    subServices: [
      "UI/UX Wireframing and Prototyping",
      "Responsive Web and App Designs",
      "Brand Identity and Logo Creation",
      "Graphic and Motion Design",
    ],
    backgroundUrl: featureCard0,
    iconUrl: featureIcon4,
    imageUrl: featureImage2,
    light: true,
  },
  {
    id: "4",
    title: "Business Intelligence",
    text: "Our BI services leverage data visualization and analytics tools to transform complex data into actionable insights for informed decision-making.",
    detailedText:
      "Empower your business with insights derived from data. Our BI solutions include advanced dashboards, predictive analytics, and custom reporting tools that help you make data-driven decisions.",
    subServices: [
      "Data Visualization and Dashboards",
      "Predictive Analytics",
      "Custom Reporting Solutions",
      "Data Integration and ETL Services",
    ],
    backgroundUrl: featureCard0,
    iconUrl: featureIcon5,
    imageUrl: featureImage2,
    light: true,
  },
  {
    id: "5",
    title: "Digital Marketing",
    text: "We provide tailored digital marketing strategies, from SEO to social media campaigns, to boost your online presence and drive business growth.",
    detailedText:
      "Maximize your brand's online potential with our comprehensive digital marketing services. We offer SEO, PPC, social media marketing, and content strategies tailored to your goals.",
    subServices: [
      "Search Engine Optimization (SEO)",
      "Pay-Per-Click Advertising (PPC)",
      "Social Media Marketing",
      "Content Marketing and Blogging",
    ],
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

