import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  python,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Engineer",
    icon: web,
  },
  {
    title: "Full-Stack Developer",
    icon: mobile,
  },
  {
    title: "AI & Deep Learning",
    icon: backend,
  },
  {
    title: "API & Database Integrator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "redux",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "High School Education",
    company_name: "Rogzin High School",
    icon: starbucks,
    iconBg: "#383E56",
    date: "2013 - 2016",
    points: [
      "Completed high school with a focus on scientific and technical subjects.",
      "Developed early interest in technology and problem-solving.",
    ],
  },
  {
    title: "Combat Soldier",
    company_name: "IDF - Golani Brigade",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "2016 - 2019",
    points: [
      "Served as a combat soldier in the Golani Brigade, performing under high-pressure environments.",
      "Developed strong leadership skills, discipline, and the ability to work effectively within a team.",
      "Gained resilience and a 'can-do' attitude, essential for tackling complex challenges.",
    ],
  },
  {
    title: "Pre-Academic Mechina",
    company_name: "Academic Preparation Program",
    icon: shopify,
    iconBg: "#383E56",
    date: "2020 - 2021",
    points: [
     "Successfully completed an intensive pre-academic program to strengthen foundations in Mathematics and Physics.",
      "Prepared for high-level engineering studies, demonstrating rapid learning and dedication.",,
    ],
  },
  {
    title: "Software Engineering Degree (B.Sc)",
    company_name: "Braude College of Engineering",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "2021-2026",
    points: [
      "Acquired deep knowledge in Algorithms, Data Structures, and Object-Oriented Programming (Java, C++, Python).",
       "Studied a wide range of computer science disciplines, including operating systems, networks, and advanced software principles.",
      "Gained hands-on experience in Full-Stack development and Real-Time systems through various academic projects.",
      "Developed a professional engineering mindset, focusing on efficient, scalable, and high-quality code.",
    ],
  },
];

const testimonials = [
  {
    name: "LinkedIn",
    designation: "Professional Network",
    company: "Connect with me",
    image: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
    testimonial: "Check out my professional profile, skills, and endorsements.",
    link: "https://www.linkedin.com/in/maorsiboni/", 
  },
  {
    name: "GitHub",
    designation: "Code Repositories",
    company: "Source Code",
    image: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    testimonial: "Explore my projects, coding style, and open-source contributions.",
    link: "https://github.com/awesomemaor",
  },
  {
    name: "Resume",
    designation: "B.Sc Software Engineer",
    company: "Download CV",
    image: "https://cdn-icons-png.flaticon.com/512/909/909212.png",
    testimonial: "Get a detailed copy of my professional background and skills.",
    link: window.location.origin + "/Maor_Resume.pdf", // שים את הקובץ בתיקיית public ותן לו את השם הזה
  },
];

const projects = [
  {
    name: "InstaAD ",
    description:
      "Developed an AI-driven desktop application (PyQt5) that automates the creation of professional video advertisements by integrating external LLM and generative AI APIs. Designed a client-server architecture (Python, FastAPI) featuring an adaptivefeedback algorithm (MongoDB) that learns user preferences to personalize futurevideo generations.",
    tags: [
      {
        name: "PyQt5",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "FastAPI",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/awesomemaor/AI-Powered-Automatic-Advertisement-Generation-System",
  },
  {
    name: "Maor-ledet (Web Application)",
    description:
      "A dynamic, humor-driven web application I built from scratch using React, Vite, and Node.js. It features a custom 2D endless-runner game with real-time collision detection and an integrated AI chatbot powered by the Gemini API. This project was my playground for combining clean Front-end architecture, state management, and creative UI/UX design.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Vite",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/awesomemaor/Maor-site",
  },
  {
    name: "BiteMe – Restaurant Ordering & Delivery System",
    description:
      "Developed a restaurant ordering and delivery system using C, following a ClientServer architecture. The system allows users to browse menus, place orders, and manage deliveries while storing data in a structured database",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "OCSF",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/awesomemaor/BiteMe",
  },
];

export { services, technologies, experiences, testimonials, projects };
