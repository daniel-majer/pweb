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
    image: "../../public/nexora-project.png",
    name: "Nexora",
    description: "Eshop sales management system",
    icons: [
      <RiSupabaseLine size={18} />,
      <SiReactquery size={18} />,
      <BiLogoTailwindCss size={22} />,
      <BiLogoReact size={22} />,
      <BiLogoTypescript size={22} />,
    ],
  },
  {
    image: "../../public/motorew-project.png",
    name: "Motorew",
    description: "Presentational website for Motorew",
    icons: [
      <BiLogoCss3 size={22} />,
      <BiLogoHtml5 size={22} />,
      <BiLogoJavascript size={22} />,
    ],
  },
  {
    image: "../../public/motorew-project.png",
    name: "Motorew",
    description: "Presentational website for Motorew",
    icons: [
      <BiLogoCss3 size={22} />,
      <BiLogoHtml5 size={22} />,
      <BiLogoJavascript size={22} />,
    ],
  },
  {
    image: "../../public/nexora-project.png",
    name: "Nexora",
    description: "Eshop sales management system",
    icons: [
      <RiSupabaseLine size={18} />,
      <SiReactquery size={18} />,
      <BiLogoTailwindCss size={22} />,
      <BiLogoReact size={22} />,
      <BiLogoTypescript size={22} />,
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
