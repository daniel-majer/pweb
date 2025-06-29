import { Experience } from "./Experience";
import { Heading } from "./Heading";

const exp = [
  {
    name: "NFCtron",
    position: "Frontend Software Engineer",
    icon: "/nfctron-icon.jpeg",
    duration: "Sep 2024 - Jun 2025",
    description: (
      <>
        I built and maintained web applications for the ticketing and event
        industry using modern frontend technologies like{" "}
        <strong className="border-b border-dashed border-b-zinc-400 text-zinc-300">
          React, TypeScript
        </strong>
        , and{" "}
        <strong className="border-b border-dashed border-b-zinc-400 text-zinc-300">
          Next.js
        </strong>
        . Focused on performance, usability, and clean code while closely
        collaborating with backend team.
        <br /> <br /> I actively used{" "}
        <strong className="border-b border-dashed border-b-zinc-400 text-zinc-300">
          GitHub
        </strong>{" "}
        as part of a standard team workflow — creating pull requests, reviewing
        code, and merging features into production.
      </>
    ),
  },
  {
    name: "Freelance",
    position: "Frontend Web Developer",
    icon: "/globe-icon.svg",
    duration: "Jul 2023 - Sep 2024",
    description: (
      <>
        While traveling the world, I focused on learning modern frontend
        technologies and improving my development skills through personal
        projects and online courses. I also took on a few freelance projects
        along the way, which helped me apply what I was learning in real-world
        scenarios.
      </>
    ),
  },
];

export const Experiences = () => {
  return (
    <div className="mt-6 flex flex-col gap-y-3 sm:mt-14">
      <Heading className="border-b border-dashed border-b-zinc-700 pb-1">
        experience
      </Heading>
      {exp.map((e, i) => {
        return (
          <Experience
            key={i}
            icon={e.icon}
            name={e.name}
            position={e.position}
            duration={e.duration}
            description={e.description}
          />
        );
      })}
    </div>
  );
};
