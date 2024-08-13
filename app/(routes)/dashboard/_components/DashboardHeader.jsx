"use client";
import DarkMode from "@/app/_components/DarkMode";
import { useUser } from "@clerk/nextjs";
import { ChevronDown } from "lucide-react";
import React, { useState, useEffect } from "react";

function DashboardHeader() {
  const { user } = useUser();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedMode = localStorage.getItem("isDarkMode") === "true";
    setIsDarkMode(storedMode);
    if (storedMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("isDarkMode", newMode.toString());

    if (newMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="p-3 border-b-2 flex justify-between items-center dark:text-white dark:bg-headerColor">
      <div className="font-bold">Onebox</div>
      <div className="flex items-center">
        <DarkMode toggleDarkMode={toggleDarkMode}/>
        <div className="ml-4 flex items-center">
          <h1 className="flex items-center">
            {user ? `${user.username}'s Workspace` : "Guest's Workspace"}{" "}
            <ChevronDown className="ml-2 cursor-pointer" />
          </h1>
        </div>
      </div>
    </div>
  );
}

export default DashboardHeader;
