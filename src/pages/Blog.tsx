import { PenLineIcon } from "lucide-react";
import React from "react";

export const Blog = () => {
  return (
    <div>
      <h1 className="mb-1 flex items-end gap-2 text-2xl font-semibold">
        <PenLineIcon className="size-10" />
        blog
      </h1>
      <p className="text-zinc-500">there's nothing to see here—yet. check back later!</p>
    </div>
  );
};
