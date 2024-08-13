import React from "react";
import Link from "next/link";

function Hero() {
  return (
    <section className="dark:bg-black bg-white dark:text-white text-black">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1
            style={{ fontSize: "8rem", lineHeight: "1" }}
            className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text font-extrabold text-transparent"
          >
            Hello!
          </h1>

          <p className="mt-4 text-2xl text-slate-500">Good to see you here</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/sign-in"
              className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-blue-600 dark:hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
