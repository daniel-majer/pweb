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
    <footer className="mt-10 flex justify-between grow place-items-end">
      <div className="flex flex-col">
        <span className="text-zinc-400 text-sm sm:text-base">
          Currently in Prague, Czech Republic 🇨🇿
        </span>
        <span className="text-xs sm:text-sm text-zinc-600">
          {getLocalTime("Europe/Prague")}
        </span>
      </div>
      <div>
        <span className="text-xs sm:text-sm text-zinc-400">
          © {new Date().getFullYear()} dmajer
        </span>
      </div>
    </footer>
  );
};
