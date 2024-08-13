"use client";
import React, { useState, useEffect } from "react";
import Header from "./_components/Header";
// import SignInPage from "./(auth)/sign-in/[[...sign-in]]/page";
import Footer from "./_components/Footer";
import SignUpPage from "./(auth)/sign-up/[[...sign-up]]/page";
import Hero from "./_components/Hero";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedMode = localStorage.getItem("isDarkMode") === "true";
    setIsDarkMode(storedMode);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("isDarkMode", newMode.toString());
  };

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <Header toggleDarkMode={toggleDarkMode} />
      <Hero />
      <Footer />
    </div>
  );
}
