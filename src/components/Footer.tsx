import React from "react";

export const Footer = () => {
  const getLocalTime = (timeZone: string) => {
    return new Intl.DateTimeFormat("en-US", {
      timeZone,
      hour: "2-digit",
      minute: "2-digit",
      timeZoneName: "longGeneric",
    }).format(new Date());
  };

  console.log(getLocalTime("Europe/Prague"));

  return (
    <footer className="mt-12 flex grow gap-2 place-items-end justify-between">
      <div className="flex flex-col">
        <span className="text-sm text-zinc-400 sm:text-base">
          Currently in Prague, Czech Republic 🇨🇿
        </span>
        <span className="text-xs text-zinc-600 sm:text-sm">
          {getLocalTime("Europe/Prague")}
        </span>
      </div>
      <div>
        <span className="text-xs text-zinc-400 sm:text-sm whitespace-nowrap">
          © {new Date().getFullYear()} dmajer
        </span>
      </div>
    </footer>
  );
};
