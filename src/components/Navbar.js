import React, { useState } from 'react';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { Link } from 'react-scroll';

export default function Navbar({darkMode, setDarkMode}) {
  const siteTitle = 'Ankit Prakash'; // Updated variable name

  const [navOpen, setNavOpen] = useState(false);

  const toggleDarkMode = () => {
    console.log("Toggle button clicked");
    setDarkMode(!darkMode);
  };


  const navLinks = [
    {
      id: 1,
      title: 'Home',
    },
    {
      id: 2,
      title: 'About',
    },
    {
      id: 3,
      title: 'Education',
    },
    {
      id: 4,
      title: 'Skills',
    },
    {
      id: 5,
      title: 'Projects',
    },
    // {
    //   id: 6,
    //   title: 'Blog',
    // },
  ];

  return (
    <>
      <div className='flex justify-between items-center w-full h-16 dark:text-slate-200 fixed px-4 dark:bg-gray-950 bg-slate-100 text-gray-800'>
        <div>
          <h1 className='text-2xl font-bold ml-2 cursor-pointer'>
            {siteTitle}
          </h1>
        </div>

        <ul className='hidden md:flex mr-24'>
          {navLinks.map(({ id, title }) => (
            <li
              key={id}
              className='px-4 cursor-pointer font-medium text-xl dark:text-slate-200 text-gray-800 hover:text-lime-500 dark:hover:text-lime-500 hover:scale-125 duration-300 '
            >
              <Link to={title} smooth duration={500}>
                {title}
              </Link>
            </li>
          ))}
        </ul>

        

        {/* Toggle Button */}
        <div className="invisible md:visible">
          <div
            onClick={toggleDarkMode}
            className={`cursor-pointer pr-4 z-10 ${darkMode ? 'text-slate-100' : 'text-gray-800'}`}
          >
            {darkMode ? <FaSun size={30} /> : <FaMoon size={30} />}
          </div>
        </div>

        <div
          onClick={() => setNavOpen(!navOpen)}
          className='cursor-pointer text-gray-500 md:hidden ml-auto'
        >
          {navOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

      </div>

      {navOpen && (
        <ul className='flex flex-col justify-center items-center top-0 left-0 w-full h-screen overflow-y-auto bg-slate-100 dark:bg-gray-950 text-gray-950 dark:text-slate-300 md:hidden'>
          {navLinks.map(({ id, title }) => (
            <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>
              <Link onClick={() => setNavOpen(!navOpen)} to={title} smooth duration={500}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}


    </>
  );
}
