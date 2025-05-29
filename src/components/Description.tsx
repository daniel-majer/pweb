import React from "react";
import {
  FaBluesky,
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";
import { Link } from "react-router";
import { Heading } from "./Heading";
export const Description = () => {
  return (
    <div>
      <Heading>Daniel Majer</Heading>
      <h2 className="mb-3 text-xs text-zinc-500 sm:text-sm">
        software engineer, passionate about startups, building and shipping code{" "}
      </h2>
      <div className="text-sm text-zinc-400 sm:text-base">
        <p className="max-w-2xl">
          I'm a software enthusiast passionate about{" "}
          <span className="border-b border-dashed border-b-zinc-400 text-zinc-100">
            product building and development.
          </span>{" "}
          I enjoy creating useful stuff on internet, learning by doing, and occasionally
          sharing what I discover along the way.
        </p>
        <p className="mt-2">
          If you'd like to chat, feel free to reach out via one of the socials
          listed below!
        </p>
      </div>
      <div className="mt-4 flex gap-3 text-zinc-50">
        <Link to="https://github.com/daniel-majer" target="_blank">
          <FaGithub
            size={24}
            className="transition duration-300 hover:opacity-60"
          />
        </Link>
        <Link to="https://www.linkedin.com/in/daniel-majer/" target="_blank">
          <FaLinkedin
            size={24}
            className="transition duration-300 hover:opacity-60"
          />
        </Link>
        <Link to="https://x.com/thedanielmajer" target="_blank">
          <FaXTwitter
            size={24}
            className="transition duration-300 hover:opacity-60"
          />
        </Link>
        <Link to="https://www.instagram.com/dno.mjr/" target="_blank">
          <FaInstagram
            size={24}
            className="transition duration-300 hover:opacity-60"
          />
        </Link>
        <Link
          to="https://bsky.app/profile/daniel-majer.github.io"
          target="_blank"
        >
          <FaBluesky
            size={24}
            className="transition duration-300 hover:opacity-60"
          />
        </Link>
        <Link to="mailto:dano.majer@protonmail.com">
          <FaEnvelope
            size={24}
            className="transition duration-300 hover:opacity-60"
          />
        </Link>
      </div>
    </div>
  );
};
