import { SquareArrowOutUpRightIcon } from "lucide-react";
import React, { type JSX } from "react";
import { Link } from "react-router";

type ProjectProps = {
  name: string;
  description: string;
  image: string;
  icons: JSX.Element[];
};

export const Project = ({ data }: { data: ProjectProps }) => {
  const { name, description, icons, image } = data;
  return (
    <Link
      to="https://www.linkedin.com/in/daniel-majer/"
      target="_blank"
      className="rounded-lg bg-zinc-700/60 p-2 transition duration-300 hover:opacity-80"
    >
      <img src={image} alt="Nexora.sk web application" />
      <div className="pt-2">
        <div className="flex justify-between">
          <span className="font-bold">{name}</span>
          <div className="flex items-center gap-1">
            {icons.map((icon, idx) => React.cloneElement(icon, { key: idx }))}
          </div>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-zinc-400">{description}</span>
          <span className="flex items-center gap-1 text-sm text-zinc-400">
            <SquareArrowOutUpRightIcon size={11} />
            Website
          </span>
        </div>
      </div>
    </Link>
  );
};
