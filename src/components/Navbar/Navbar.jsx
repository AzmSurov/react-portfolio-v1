import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import {FaTimes, FaRegMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import {Link} from "react-scroll"
const Navbar = () => {

  const toggleMode = () => {
    if(localStorage.theme === undefined){
      localStorage.theme = 'dark';
    }
    localStorage.theme === 'light' ? localStorage.theme = 'dark' : localStorage.theme = 'light';
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  const [nav, setNav] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "skills",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-10 text-black dark:text-white  dark:bg-black">
      <div>
        <h1 className="text-5xl font-signature ml-2">AZM</h1>
      </div>
      

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="text-xl px-6 cursor-pointer capitalize font-medium text-gray-900 dark:text-gray-300 hover:scale-125 duration-200 hover:text-blue-500 dark:hover:text-amber-500"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="curson-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <BiMenuAltRight size={50} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-white dark:bg-gradient-to-b from-black to-gray-900 text-black dark:text-gray-300">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <div className="" onClick={() => setDarkMode(!darkMode)} > {darkMode ? <FaRegMoon size={30}  onClick={toggleMode} className="text-blue-500 "/> : <FiSun size={30} onClick={toggleMode} className="text-amber-500"/>} </div>
    </div>
  );
};

export default Navbar;
