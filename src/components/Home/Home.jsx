import React from 'react'
import heroBanner from '../../assets/bg3.png'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div name="home" className="h-screen w-full dark:bg-gradient-to-b from-black via-black to-gray-800 py-4">
       <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
           <div className="flex flex-col justify-center h-full">
               <h2 className="text-4xl font-bold text-transparent sm:text-4xl bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-gray-700 ">
                   Hi! my name is Azm Mohibul Haque Surov and I'm a Full Stack Developer.
                </h2>

               <p className="text-gray-900 dark:text-gray-500 py-4 max-w-md">
               I'm a passionate JavaScript Developer focused on efficiency and constant learning. I have created solutions for my clients by improving their web development processes and accomplish their ideas come true, either from the front-end or the back-end mostly using technologies like JavaScript, React, Typescript, Node, Express.js, Firebase & MongoDB.
            </p>
            <div>
              
            <Link
              to="portfolio"
              smooth
              duration={500}
              >
                <button className="group w-fit px-6 py-3 my-2 flex items-center rounded-md dark:bg-white bg-gray-900 dark:text-black text-white cursor-pointer">
                    Portfolio <span className="group-hover:rotate-90 duration-300"><MdOutlineKeyboardArrowRight/></span>
                </button>
                </Link>
            </div>
           </div>
           <div>
               <img src={heroBanner} alt="my profile" className="rounded-2xl mx-auto w-2/3 md:w-full"/>
           </div>
       </div>
    </div>
  )
}

export default Home