import { SquareArrowOutUpRightIcon } from "lucide-react";
import React, { type JSX } from "react";
import { Link } from "react-router";

type Icons = {
  icon: JSX.Element;
  name: string;
};

type ProjectProps = {
  name: string;
  description: string;
  image: string;
  link: string;
  github: string;
  icons: Icons[];
};

export const Project = ({ data }: { data: ProjectProps }) => {
  const { name, description, icons, image, link, github } = data;
  return (
    <Link
      to={link}
      target="_blank"
      className="rounded-lg bg-zinc-700/60 p-2 transition duration-300 hover:opacity-80"
    >
      <img src={image} alt="Nexora.sk web application" />
      <div className="pt-2">
        <div className="flex justify-between">
          <span className="font-bold">{name}</span>
          <div className="flex items-center gap-1">
            {icons.map((icon, index) => {
              return (
                <div key={index} className="group relative">
                  {icon.icon}
                  <span className="absolute bottom-full mb-1 hidden w-max rounded bg-zinc-800 px-2 py-1 text-xs text-white group-hover:block">
                    {icon.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-zinc-400">{description}</span>
          <Link
            to={github}
            target="_blank"
            className="flex items-center gap-1 text-sm text-zinc-400"
          >
            <SquareArrowOutUpRightIcon size={11} />
            Github
          </Link>
        </div>
      </div>
    </Link>
  );
};
