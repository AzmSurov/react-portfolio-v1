import React from "react";
import unsplashProfject from "../../assets/projects/Unsplash.png";

const Portfolio = () => {

  const portfolios = [
    {
      id: 1,
      src: unsplashProfject,
      liveLink: "https://azmsurov.github.io/UnsplashApi/",
      sourceCode: "https://github.com/AzmSurov/UnsplashApi",
      title: "Unsplash API.",
      description: "An e-Commerce website where you can shop for sneakers, scandal and heels. It also provide features such as cart management, search function etc.",
      idx: ["React", "Tailwind", "Bootstrap"]
    },
    {
      id: 2,
      src: unsplashProfject,
      liveLink: "https://azmsurov.github.io/UnsplashApi/",
      sourceCode: "https://github.com/AzmSurov/UnsplashApi",
      title:"fontend",
      description: "It is an application that fetches the current exchange rate of different currencies with the help of exchange rates api.",
      idx: ["React", "Typescript"]
    },
    {
      id: 3,
      src: unsplashProfject,
      liveLink: "https://azmsurov.github.io/UnsplashApi/",
      sourceCode: "https://github.com/AzmSurov/UnsplashApi",
      title:"fontend",
      description: "It is an application that fetches the current exchange rate of different currencies with the help of exchange rates api.",
      idx: ["React", "Typescript"]
    },
    {
      id: 4,
      src: unsplashProfject,
      liveLink: "https://azmsurov.github.io/UnsplashApi/",
      sourceCode: "https://github.com/AzmSurov/UnsplashApi",
      title:"fontend",
      description: "It is an application that fetches the current exchange rate of different currencies with the help of exchange rates api.",
      idx: ["React", "Typescript"]
    },
    
  ];

  return (
    <div
      name="portfolio"
      className=" dark:bg-gradient-to-b from-black to-gray-900 w-full text-gray-900 dark:text-white md:h-2/3 pl-2 "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="pt-6">Check out some of my featured work! </p>
        </div>

{/* <div>
<section class="text-gray-600 body-font overflow-hidden">
  <div class="container py-24 mx-auto">
    <div class="-my-8 divide-y-2 divide-gray-100">
      {portfolios.map((proj)=> (
        <div key={proj.id}>
    <div class="py-8 flex flex-wrap md:flex-nowrap">
        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
        <img src={heroBanner} alt={proj.src} className=" sm:mb-0 mb-6 w-2/3 md:w-2/3 h-full"/>
        </div>
        <div class="md:flex-grow">
          <h2 class="text-2xl font-medium text-gray-900 dark:text-white title-font mb-2">{proj.title}</h2>
          <p class="leading-relaxed">{proj.description}</p>
          <div className="flex gap-2">
          {proj.idx.map ((element,idx) => (
            <h5
            className="text-white dark:text-gray-900 inline-flex items-center mt-4 border-solid border-2 border-blue-500 bg-blue-500 dark:border-gray-900 dark:bg-amber-500  px-2 rounded-full"
            key={idx}
          >
            {element}
          </h5>
          ))}
          </div>
          
          <div className="flex space-x-4"><a class="text-gray-900 dark:text-white inline-flex items-center mt-8 border-solid border-2 border-blue-500 dark:border-amber-500 px-4 cursor-pointer" href={proj.liveLink}>
          Demo
          </a>
          <a  class="text-gray-900 dark:text-white inline-flex items-center mt-8 border-solid border-2 border-blue-500 dark:border-amber-500 px-4 cursor-pointer" href={proj.sourceCode}>
          Code
          </a></div>

        </div>
      </div>
        </div>
      ))}
      

      <div>

      </div>
    </div>
  </div>
</section>
</div> */}




        {/* individual projects start here */}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-2 sm:px-0 ">
          {portfolios.map(({ id, src, liveLink, sourceCode, title, description, idx }) => (
            <div key={id}>
              <div class="block overflow-hidden border border-gray-900 dark:border-gray-500 rounded-lg shadow-sm bg-gray-100 dark:bg-gray-900">
                <img class="object-cover w-full h-56" src={src} alt="" />

                <div class="p-6 text-black dark:text-white">
                  <h5 class="text-xl font-bold ">
                    {title}
                  </h5>

                  <p>
                    {description}
                  </p>
                  <div className="flex gap-2">
          {idx.map ((element,idx) => (
            <h5
            className="text-white dark:text-gray-900 inline-flex items-center mt-4 border-solid border-2 border-blue-500 bg-blue-500 dark:border-gray-900 dark:bg-amber-500  px-2 rounded-full"
            key={idx}
          >
            {element}
          </h5>
          ))}
          </div>

                  <div className="flex justify-between mt-6">
                    <a
                      class="relative inline-block text-sm font-medium text-gray-500 active:text-white group focus:outline-none focus:ring"
                      href={liveLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span class="absolute inset-0 border border-current"></span>
                      <span class="block px-9 py-3 transition-transform bg-white border border-current group-hover:-translate-x-1 group-hover:-translate-y-1">
                        Demo
                      </span>
                    </a>
                    <a
                      class="relative inline-block text-sm font-medium text-gray-500 active:text-white group focus:outline-none focus:ring"
                      href={sourceCode}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span class="absolute inset-0 border border-current"></span>
                      <span class="block px-9 py-3 transition-transform bg-white border border-current group-hover:-translate-x-1 group-hover:-translate-y-1">
                        Code
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center pt-8 text-2xl">
        <a href="##" rel="noreferrer"> View All Projects</a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
