import {
  meta,
  shopify,
  starbucks,
  tesla,
  xerris,
  symposium_gif,
  jungle,
  scheduler,
  tidyTask,
  tinyapp,
  tweeter,
} from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  // {
  //   imageUrl: motion,
  //   name: "Motion",
  //   type: "Animation",
  // },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  // {
  //   imageUrl: redux,
  //   name: "Redux",
  //   type: "State Management",
  // },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Full Stack Intern	",
    company_name: "Xerris Inc. Aquired by Accolite Digital",
    icon: xerris,
    iconBg: "#f4fae9",
    date: "February 2021 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#fbc3bc",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#b7e4c7",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#a2d2ff",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    appImage: symposium_gif,
    theme: "btn-back-red",
    name: "Symposium",
    description:
      "Symposium is a video chat connection platform for people to discuss topics covered in the podcasts they love. Built with React, Node, Express, Socket.IO, and a PostgreSQL database. Testing: Cypress",
    link: "https://github.com/AleksandarDmitrovic/symposium",
  },
  {
    iconUrl: threads,
    appImage: tidyTask,
    theme: "btn-back-green",
    name: "TidyTask",
    description:
      "Tidy task is an auto categorizing to-do list organizational web application. Built with HTML, SASS, Node, Express and a PostgreSQL database.",
    link: "https://github.com/AleksandarDmitrovic/tidyTask",
  },
  {
    iconUrl: car,
    appImage: scheduler,
    theme: "btn-back-blue",
    name: "Interview Scheduler",
    description:
      "Interview Scheduler is a single-page interview booking application where users can book, edit and delete interview appointments. My first React App. Built with React, HTML, CSS Node, Express, and a PostgreSQL database. Testing: Jest, Storybook, Cypress",
    link: "https://github.com/AleksandarDmitrovic/scheduler",
  },
  {
    iconUrl: snapgram,
    appImage: jungle,
    theme: "btn-back-pink",
    name: "Jungle",
    description:
      "A mini e-commerce application that was built with Rails 4.2. Built with Ruby on Rails, Stripe and a PostgreSQL database. Testing: RSpec, Capybara",
    link: "https://github.com/AleksandarDmitrovic/jungle-rails",
  },
  {
    iconUrl: estate,
    appImage: tweeter,
    theme: "btn-back-black",
    name: "Tweeter",
    description:
      "Tweeter is a simple, single-page Twitter clone. Built with HTML, CSS, JS, jQuery, AJAX, Node, and Express.",
    link: "https://github.com/AleksandarDmitrovic/tweeter",
  },
  {
    iconUrl: summiz,
    appImage: tinyapp,
    theme: "btn-back-yellow",
    name: "TinyApp",
    description:
      "TinyApp is a full-stack web application that allows users to shorten long URLs (à la bit.ly). Built with HTML, CSS, EJS, Node, and Express.",
    link: "https://github.com/AleksandarDmitrovic/tinyapp",
  },
];
