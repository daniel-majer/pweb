import { WandSparklesIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const books = [
  {
    name: "The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses",
    link: "https://www.amazon.com/Lean-Startup-Entrepreneurs-Continuous-Innovation/dp/0307887898",
  },
  {
    name: "The ONE Thing: The Surprisingly Simple Truth About Extraordinary Results",
    link: "https://www.amazon.com/ONE-Thing-Surprisingly-Extraordinary-Results/dp/1885167776",
  },
  {
    name: "Rework by Jason Fried",
    link: "https://www.amazon.com/Rework-Jason-Fried/dp/0307463745",
  },
  {
    name: "Think Faster, Talk Smarter: How to Speak Successfully When You're Put on the Spot",
    link: "https://www.amazon.com/Think-Faster-Talk-Smarter-Successfully/dp/1668010305",
  },
  {
    name: "Zero to One: Notes on Startups, or How to Build the Future",
    link: "https://www.amazon.com/Zero-One-Notes-Startups-Future/dp/0804139296",
  },
];

export const Bookshelf = () => {
  return (
    <div className="">
      <h1 className="mb-1 flex items-end gap-2 text-2xl font-semibold">
        <WandSparklesIcon className="size-10" /> bookshelf
      </h1>
      <p className="max-w-xl text-zinc-500">
        In the past few years, I’ve read many books on my Kindle, but here I’m
        listing only the ones I’ve read since launching this website (2025).
        <br />
        <br />
        The list below is in no particular order. If you're curious about any of
        the books feel free to{" "}
        <a
          href="mailto:dano.majer@protonmail.com"
          className="border-b border-dashed border-b-zinc-500 hover:text-zinc-400"
        >
          reach out
        </a>
        .
      </p>
      <ol className="mt-8 list-inside list-decimal space-y-5">
        {books.map((book, index) => (
          <li
            key={index}
            className="transition duration-300 hover:text-zinc-400"
          >
            <Link to={book.link} target="_blank">
              {book.name}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
};
