import React from "react";
import { Link } from "react-scroll";
const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gray-100 dark:bg-gradient-to-b from-gray-800 to-black text-black dark:text-white pl-4"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        I'm a passionate JavaScript Developer focused on efficiency and constant learning. I have created solutions for my clients by improving their web development processes and accomplish their ideas come true, either from the front-end or the back-end mostly using technologies like JavaScript, React, Typescript, Node, Express.js, Firebase & MongoDB.
        </p>

        <br />

        <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              >
                <button class="relative inline-block text-sm font-medium text-gray-500 active:text-black group focus:outline-none focus:ring">
    <span class="absolute inset-0 border border-current"></span>
    <span class="block px-9 py-3 transition-transform bg-white border border-current group-hover:-translate-x-1 group-hover:-translate-y-1">
    Portfolio
    </span>
    </button>
                </Link>
            </div>

      </div>
    </div>
  );
};

export default About;