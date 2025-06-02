import { SquareArrowOutUpRightIcon } from "lucide-react";
import {
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import { RiSupabaseLine } from "react-icons/ri";
import { SiReactquery } from "react-icons/si";
import { Heading } from "./Heading";
import { Link } from "react-router";
import { Project } from "./Project";

const projects = [
  {
    image: "../../nexora-dark.png",
    name: "Fullstack App - Nexora",
    description: "E-commerce sales management system",
    link: "https://nexora-peach-seven.vercel.app",
    github: "https://github.com/daniel-majer/nexora",
    icons: [
      {
        icon: <RiSupabaseLine size={18} />,
        name: "Supabase",
      },
      {
        icon: <SiReactquery size={18} />,
        name: "Tanstack Query",
      },
      {
        icon: <BiLogoTailwindCss size={22} />,
        name: "TailwindCSS",
      },
      {
        icon: <BiLogoReact size={22} />,
        name: "React",
      },
      {
        icon: <BiLogoTypescript size={22} />,
        name: "Typescript",
      },
    ],
  },
  {
    image: "../../motorew-project.png",
    name: "Motorew",
    description: "Presentational website for Motorew",
    link: "https://motorew.sk/",
    github: "https://github.com/daniel-majer/motorew-web",
    icons: [
      {
        icon: <BiLogoCss3 size={22} />,
        name: "CSS3",
      },
      {
        icon: <BiLogoHtml5 size={22} />,
        name: "HTML5",
      },
      {
        icon: <BiLogoJavascript size={22} />,
        name: "Javascript",
      },
    ],
  },
  {
    image: "../../hangman-game.png",
    name: "Hangman game",
    description: "Classic Hangman game built with JavaScript",
    link: "https://hangman-game-xi-three.vercel.app/",
    github: "https://github.com/daniel-majer/hangman-game",
    icons: [
      {
        icon: <BiLogoCss3 size={22} />,
        name: "CSS3",
      },
      {
        icon: <BiLogoHtml5 size={22} />,
        name: "HTML5",
      },
      {
        icon: <BiLogoJavascript size={22} />,
        name: "Javascript",
      },
    ],
  },
  {
    image: "../../seating-dark.png",
    name: "Seating case study",
    description: "A seating case study developed for NFCtron",
    link: "https://seating-case-study.vercel.app/",
    github: "https://github.com/daniel-majer/seating-case-study",
    icons: [
      {
        icon: <BiLogoTailwindCss size={22} />,
        name: "TailwindCSS",
      },
      {
        icon: <BiLogoReact size={22} />,
        name: "React",
      },
      {
        icon: <BiLogoTypescript size={22} />,
        name: "Typescript",
      },
    ],
  },
  {
    image: "../../quiz.png",
    name: "SmartQuest game",
    description: "Interactive quiz game",
    link: "https://quiz-app-neon-rho.vercel.app/",
    github: "https://github.com/daniel-majer/quiz-app",
    icons: [
      {
        icon: <BiLogoTailwindCss size={22} />,
        name: "TailwindCSS",
      },
      {
        icon: <BiLogoReact size={22} />,
        name: "React",
      },
      {
        icon: <BiLogoJavascript size={22} />,
        name: "Javascript",
      },
    ],
  },
];

export const Projects = () => {
  return (
    <div className="mt-6 sm:mt-14">
      <div className="flex items-center justify-between">
        <Heading>projects</Heading>
        <Link
          to="https://github.com/daniel-majer"
          className="text-sm text-zinc-400 transition duration-300 hover:text-zinc-300"
          target="_blank"
        >
          View more on GitHub →
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {projects.map((project, index) => {
          return <Project key={index} data={project} />;
        })}
      </div>
    </div>
  );
};
