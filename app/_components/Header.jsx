"use client";
import React from "react";
import DarkMode from "./DarkMode";

export default function Header({ toggleDarkMode }) {
  return (
    <div className="p-3 flex justify-between items-center font-bold border-b dark:text-white dark:bg-black">
      <div className="flex-grow text-center">
        <span className="dark:bg-white bg-black text-white font-bold p-0.5 px-2 rounded-md mr-1 dark:text-black text-2xl">M</span> REACHINBOX
      </div>
      <div className="flex-shrink-0">
        <DarkMode toggleDarkMode={toggleDarkMode} />
      </div>
    </div>
  );
}
