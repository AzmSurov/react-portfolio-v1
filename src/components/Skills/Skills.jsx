import React from "react";

import html from "../../assets/icons/Html5.png";
import css from "../../assets/icons/css.png";
import js from "../../assets/icons/js.png";
import reacticon from "../../assets/icons/react.png";
import ts from "../../assets/icons/typescript.png";
import github from "../../assets/icons/github.png";
import tailwind from "../../assets/icons/tailwind.png";
import graphql from "../../assets/icons/graphql.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      
    },
    {
      id: 3,
      src: js,
      title: "JavaScript",
      
    },
    {
      id: 4,
      src: reacticon,
      title: "React",
      
    },
    {
      id: 5,
      src: ts,
      title: "TypeScript",

    },
    {
      id: 6,
      src: tailwind,
      title: "Tailwind css",

    },
    {
      id: 7,
      src: graphql,
      title: "GraphQL",

    },
    {
      id: 8,
      src: github,
      title: "GitHub",

    },
  ];

  return (
    <div
      name="skills"
      className="dark:bg-gradient-to-b from-gray-800 to-black w-full h-screen pt-24"
    >
        
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-gray-900 dark:text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 inline">
            My Preferred Skills
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center pb-24 px-12 sm:px-0">
          {techs.map(({ id, src, title, }) => (
            <div
              key={id}
              className= "hover:scale-105 duration-500 py-2"
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;