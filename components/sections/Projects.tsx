"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProjectCard from "@/components/ui/ProjectCard";

// Helper function to clean technology names
const cleanTechName = (tech: string): string => {
  const techMap: Record<string, string> = {
    "Next.JS": "Next.js",
    JavaScript: "JavaScript",
    API: "REST API",
    "Material UI": "Material-UI",
    "Tailwind CSS": "Tailwind CSS",
    CSS: "CSS",
    Linters: "ESLint",
    HTML: "HTML",
    Redux: "Redux",
    "Rest API": "REST API",
    Webpack: "Webpack",
  };
  return techMap[tech] || tech;
};

// Helper function to generate gradient colors for placeholders
const getGradientColors = (index: number): [string, string] => {
  const gradients: [string, string][] = [
    ["#8B5CF6", "#00D9FF"], // purple to blue
    ["#00D9FF", "#10B981"], // blue to green
    ["#10B981", "#8B5CF6"], // green to purple
    ["#8B5CF6", "#10B981"], // purple to green
    ["#00D9FF", "#8B5CF6"], // blue to purple
    ["#10B981", "#00D9FF"], // green to blue
    ["#8B5CF6", "#00D9FF"], // purple to blue
    ["#00D9FF", "#10B981"], // blue to green
    ["#10B981", "#8B5CF6"], // green to purple
    ["#8B5CF6", "#10B981"], // purple to green
    ["#00D9FF", "#8B5CF6"], // blue to purple
  ];
  return gradients[index % gradients.length];
};

const projects = [
  {
    id: 3,
    title: "Pictury",
    description:
      "Pictury is a dynamic social media platform designed for seamless picture sharing and engaging interactions. It empowers users to effortlessly upload and download captivating images while fostering meaningful connections within a vibrant community of fellow photo enthusiasts.",
    tech: ["React", "JavaScript", "REST API", "Tailwind CSS"].map(
      cleanTechName
    ),
    image: getGradientColors(2).join(","),
    link: "https://pictury.netlify.app/",
    source: undefined,
  },
  {
    id: 1,
    title: "KSECI",
    description:
      "Knowledgest is a knowledge sharing application with AI integration. With Knowledgest, groups or companies can share knowledge among their people through blogs, chats, forums, and so on.",
    tech: ["React", "JavaScript", "REST API", "Material-UI"].map(cleanTechName),
    image: getGradientColors(0).join(","),
    link: "https://knowledgest-ai.netlify.app/",
    source: undefined,
  },
  {
    id: 2,
    title: "Kanta",
    description:
      "Kanta empowers simple retail businesses to take control of their operations. Revolutionize your bookkeeping, inventory and invoicing experience, ensuring a seamless and efficient operation.",
    tech: ["Next.js", "JavaScript", "REST API", "Tailwind CSS"].map(
      cleanTechName
    ),
    image: getGradientColors(1).join(","),
    link: "http://kanta-web.netlify.app/",
    source: undefined,
  },

  {
    id: 4,
    title: "Math-Magician & QR Code Generator",
    description:
      '"Math-Magician" started as just a web app for all lovers of mathematics. It is a Single Page Application (SPA) that allows users to make simple calculations, generate and read random math-related quotes and also tweet the quote. But now, it is more than just a calculator, it has a roman numeral converter and a QR code generator.',
    tech: ["React", "JavaScript", "CSS", "ESLint"].map(cleanTechName),
    image: getGradientColors(3).join(","),
    link: "https://mathe-magic.netlify.app/",
    source: "https://github.com/kendoriddy/math-magicians",
  },
  {
    id: 5,
    title: "ASOS Birthday Tracker",
    description:
      "I created a webapp that tracks the birthdays of my secondary school classmates.",
    tech: ["React", "JavaScript", "ESLint", "CSS"].map(cleanTechName),
    image: getGradientColors(4).join(","),
    link: "https://asostracker.netlify.app/",
    source: "https://github.com/kendoriddy/asos-birthday-tracker",
  },
  {
    id: 6,
    title: "Picture World",
    description:
      "I built an image gallery app using the Pixabay API, by integrating Tailwind CSS with React.",
    tech: ["React", "JavaScript", "REST API", "Tailwind CSS"].map(
      cleanTechName
    ),
    image: getGradientColors(5).join(","),
    link: "https://pictureworld.netlify.app/",
    source: "https://github.com/kendoriddy/picture-world",
  },
  {
    id: 7,
    title: "Awesome Books",
    description:
      "This project is a website that displays a list of books that users have added. It allows you to add and remove books from that list also. The goal of this project is to build a simple multi-page responsive book website.",
    tech: ["HTML", "JavaScript", "ESLint", "CSS"].map(cleanTechName),
    image: getGradientColors(6).join(","),
    link: "https://kendoriddy.github.io/awesome-books-v2/",
    source: "https://github.com/kendoriddy/awesome-books-v2",
  },
  {
    id: 8,
    title: "Marvel Space Hub",
    description:
      "The Space Travelers is a React, Redux application based on the SpaceX API. This app is built with HTML | CSS | JAVASCRIPT | React and Redux and JEST it uses multiple API to render rockets and missions and enable users to have reserve the rocket and also join the mission.",
    tech: ["React", "Redux", "REST API", "ESLint"].map(cleanTechName),
    image: getGradientColors(7).join(","),
    link: "https://marvel-space.netlify.app/",
    source: "https://github.com/kendoriddy/Space-Travelers-Hub",
  },
  {
    id: 9,
    title: "BeefLand Eatery",
    description:
      "The BeefLand web application displays a list of meals that were provided by an external API. The users can like a meal, leave some comments or make a reservation, in these cases an involvement API was used. N.B. The reservation functions are not implemented because there are just two in the group.",
    tech: ["Webpack", "JavaScript", "CSS", "HTML"].map(cleanTechName),
    image: getGradientColors(8).join(","),
    link: "https://kendoriddy.github.io/BeefLand-Eatery/",
    source: "https://github.com/kendoriddy/BeefLand-Eatery",
  },
  {
    id: 10,
    title: "Stuk Mart",
    description:
      "Stuk-Mart is a web(mobile-focused) app for checking the companies listed on the stock exchange and see their live metrics. Its data is consumed from the Financial modelling API. It is built using React, Redux, and React-bootstrap, Skeleton Loader, Recharts.",
    tech: ["React", "JavaScript", "Redux", "REST API"].map(cleanTechName),
    image: getGradientColors(9).join(","),
    link: "https://stuk-mart.netlify.app/",
    source: "https://github.com/kendoriddy/stuk-mart",
  },
  {
    id: 11,
    title: "Book Store",
    description:
      "The Bookstore is a website where the user can display a list of books, add a book by providing a title, an author, and selecting from the categories, and remove a selected book.",
    tech: ["React", "Redux", "REST API", "ESLint"].map(cleanTechName),
    image: getGradientColors(10).join(","),
    link: "https://a-bookstore.netlify.app/",
    source: "https://github.com/kendoriddy/Bookstore",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section
      id="projects"
      ref={ref}
      className="relative min-h-screen py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Featured Projects
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            A collection of projects showcasing expertise in modern web
            development and AI integration
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
