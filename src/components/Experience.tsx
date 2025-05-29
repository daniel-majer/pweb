import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import React from "react";

type ExperienceProps = {
  name: string;
  icon: string;
  position: string;
  duration: string;
  description: React.ReactNode;
};

export const Experience = ({
  icon,
  name,
  position,
  duration,
  description,
}: ExperienceProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b border-dashed border-b-zinc-700 pb-1 text-sm last:border-b-0 sm:text-base">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex sm cursor-pointer items-center justify-between pb-2 transition duration-300 hover:opacity-70"
      >
        <div className="flex items-center gap-4">
          <img
            src={icon}
        
            alt="NFCtron logo"
            className="rounded-lg size-8 sm:size-10"
          />
          <div className="flex flex-col sm:flex-row sm:gap-4 pr-2">
            <span>{name}</span>
            <span className="text-zinc-400">
              {isOpen ? <strong className="text-zinc-100">{position}</strong> : position}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm text-zinc-400">
          <span>{duration}</span>
          <span>
            {isOpen ? (
              <ChevronUpIcon size={18} />
            ) : (
              <ChevronDownIcon size={18} />
            )}
          </span>
        </div>
      </div>
      <div
        className={`grid overflow-hidden transition-all duration-200 ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <p className="min-h-0 pl-14 text-zinc-400">{description}</p>
      </div>
    </div>
  );
};
