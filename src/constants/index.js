import {
  featureCard0,
  featureIcon1,
  featureIcon2,
  featureIcon3,
  featureIcon4,
  featureIcon5,
  featureIcon6,
  featureImage2,
  discordBlack,
  facebook,
  file02,
  homeSmile,
  instagram,
  plusSquare,
  searchMd,
  telegram,
  twitter,
  linkedIn,
  youtube,
  gmail,
  yourlogo,
  react,
  angular,
  node,
  dotnet,
  unity,
  unreal,
  opencv,
  powerbi,
  mssql,
  mysql,
  azure,
  aws,
  tensorflow,
  figmasvg,
  photoshopsvg,
  blender,
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
    url: "#about-us",
    onlyMobile: false
  },
  {
    id: "3",
    title: "Contact us",
    url: "#contact-us",
    onlyMobile: true
  }
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const showCompanyLogos = false;

export const showTechLogos = true;

export const techLogos = [
  { src: react, width: 50, height: 50 },
  { src: angular, width: null, height: null },
  { src: node, width: null, height: null },
  { src: dotnet, width: 50, height: null },
  { src: unity, width: null, height: null },
  { src: unreal, width: null, height: null },
  { src: opencv, width: 50, height: 50 },
  { src: tensorflow, width: null, height: null },
  { src: powerbi, width: null, height: null },
  { src: mssql, width: null, height: null },
  { src: mysql, width: 125, height: null },
  { src: azure, width: null, height: null },
  { src: aws, width: null, height: null },
  { src: figmasvg, width: null, height: null },
  { src: photoshopsvg, width: null, height: null },
  { src: blender, width: null, height: null },
];

export const projects = [
  {
    id: "0",
    title: "Scrapi - Web Scrapping Chatbot",
    text: "An intelligent chatbot that scrapes real-time data from any URL, offering concise, accurate responses tailored to user queries for simplified research.",
    imageUrl: urlChatbot,
  },
  {
    id: "1",
    title: "BattleForge - RPG Combat Game",
    text: "A thrilling combat simulation with strategic gameplay and dynamic battles, offering an engaging experience for all players.",
    imageUrl: rpg,
  },
  {
    id: "2",
    title: "Mighty Mario - Super Mario Reimagined",
    text: "A reimagined classic! Relive the adventures of Mario with a modern twist, featuring enhanced graphics and smoother controls for an unforgettable nostalgic experience.",
    imageUrl: superMario,
  },
  {
    id: "3",
    title: "SQLGenie - Chat with SQL",
    text: "A conversational AI that understands and executes SQL queries, bridging the gap between technical databases and natural language.",
    imageUrl: chatWithSQL,
  },
  {
    id: "4",
    title: "Nova - Voice Assistant",
    text: "Meet Nova, our AI-powered voice assistant that streamlines tasks, answers queries, and adapts to your needs.",
    imageUrl: voiceAssistant,
  },
  {
    id: "5",
    title: "CheckMate - Chess Game",
    text: "A beautifully crafted chess platform for beginners and pros alike. Play against friends and refine your strategy with an intuitive interface.",
    imageUrl: chess,
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

