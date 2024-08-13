"use client";
import React from "react";
import DarkMode from "./DarkMode";

export default function Header({ toggleDarkMode }) {
  return (
    <div className="p-5 flex justify-between items-center font-bold shadow-md dark:text-white dark:bg-black dark:border-b">
      <div className="flex-grow text-center">
        REACHINBOX
      </div>
      <div className="flex-shrink-0">
        <DarkMode toggleDarkMode={toggleDarkMode} />
      </div>
    </div>
  );
}
