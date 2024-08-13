import React from "react";

function Hero() {
  return (
<section className="dark:bg-black bg-white dark:text-white text-black">
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
    <div className="mx-auto max-w-3xl text-center">
      <h1
        className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-9xl font-extrabold text-transparent sm:text-5xl"
      >
        Hello!
      </h1>
      <span>Good to see you here</span>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          href="#"
        >
          Get Started
        </a>
      </div>
    </div>
  </div>
</section>
  );
}

export default Hero;
