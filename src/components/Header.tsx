import {
  PenLineIcon,
  SquareMousePointerIcon,
  WandSparklesIcon,
} from "lucide-react";
import { Link, NavLink } from "react-router";

export const Header = () => {
  return (
    <div className="mb-6 flex items-center justify-between border-b border-b-zinc-800 py-2 sm:mb-14 sm:py-4">
      <Link
        to="/"
        className="font-mono text-base font-semibold transition duration-300 hover:opacity-80 sm:text-xl"
      >
        dmajer.com
      </Link>
      <nav>
        <ul className="flex gap-1 text-sm sm:gap-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }: { isActive: boolean }) =>
                `flex items-center gap-1 rounded-sm px-1 py-0.5 sm:gap-2 sm:px-2 sm:py-1.5 ${
                  isActive
                    ? "bg-zinc-700/40"
                    : "transition duration-300 hover:opacity-80"
                }`
              }
            >
              <SquareMousePointerIcon className="size-4" />
              home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="bookshelf"
              className={({ isActive }: { isActive: boolean }) =>
                `flex items-center gap-1 rounded-sm px-1 py-0.5 sm:gap-2 sm:px-2 sm:py-1.5 ${
                  isActive
                    ? "bg-zinc-700/40"
                    : "transition duration-300 hover:opacity-80"
                }`
              }
            >
              <WandSparklesIcon className="size-4" />
              bookshelf
            </NavLink>
          </li>
          <li>
            <NavLink
              to="blog"
              className={({ isActive }: { isActive: boolean }) =>
                `flex items-center gap-1 rounded-sm px-1 py-0.5 sm:gap-2 sm:px-2 sm:py-1.5 ${
                  isActive
                    ? "bg-zinc-700/40"
                    : "transition duration-300 hover:opacity-80"
                }`
              }
            >
              <PenLineIcon className="size-4" />
              blog
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
