import { o } from "maath/dist/index-0332b2ed.esm";
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
  figma,
  docker,
  meta,
  sqliD,
  sqli,
  Ocp,
  Fiverr,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  angular,
  dotnet,
  csharp,
  azure,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Front Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Cloud Developer",
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
    name: "Angular",
    icon: angular,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "C#",
    icon: csharp,
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
    name: "Azure ",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software  Developer",
    company_name: "SQLi",
    icon: sqli,
    iconBg: "#383E56",
    date: "March 2023 - Present",
    points: [
      "Developed a microservice-based e-commerce platform  utilizing .NET Core, ASP NETWeb API, and Entit  Framework Core for the backend.",
      "The frontend was built using Angular, TypeScript, and Angular Material. ",
      "Communication between microservices was established through RESTful APIs and RabbitMQ",
      "Docker and Docker Compose were used for containerization, while deployment was done on Azure Kubernetes Service (AKS).",

      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "FullStack  Developer",
    company_name: "SQLi Digital Experience",
    icon: sqliD,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - March 2023",
    points: [
      "Took Comprehensive training programs led by technical   experts, where each program focused on different technologies such as Angular, Blazor, Microservices, Agile  Methodologies, Azure DevOps and the complete .NET ecosystem.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Intern",
    company_name: "Ocp",
    icon: Ocp,
    iconBg: "#E6DEDD",
    date: "Jun 2022 - Sep 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "FreeLancer",
    company_name: "Fiverr",
    icon: Fiverr,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Present",
    points: [
      "Participating in many project in fiverr",
      "Delevring high-quality products respecting dead lines .",
      "insuring good communication with clients.",
      
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Artisant",
    description:
      "Web-based platform that allows users to search, buy , and manage Artisant Product rentals from various providers, providing a convenient and efficient products.",
    tags: [
      {
        name: ".net",
        color: "blue-text-gradient",
      },
      
      {
        name: "angular",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Portfolio",
    description:
      "Portfolio website built with React, Three Js , and Tailwind CSS. with cool animations and interactions. and a contact form that sends emails using EmailJS.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
