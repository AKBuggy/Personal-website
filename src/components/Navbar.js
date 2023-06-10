import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

export default function Navbar() {
  const ankitText = '<ANKIT/>'
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: 'Home',
    },
    {
      id: 2,
      link: 'About',
    },
    {
      id: 3,
      link: 'Education',
    },
    {
      id: 4,
      link: 'Skills',
    },
    {
      id: 5,
      link: 'Projects',
    },
    {
      id: 6,
      link: 'Blog',
    },
  ];

  return (
    <div className='flex justify-between items-center w-full h-16 text-slate-200 fixed px-4 bg-slate-800'>
      <div>
        <h1 className='text-2xl font-bold font-signature ml-2 hover:animate-pulse cursor-pointer'>
        {ankitText}</h1>
      </div>

      <ul className='hidden md:flex'>
        {links.map(({ id, link }) => (
          <li key={id} className='px-4 cursor-pointer font-medium text-slate-200 hover:scale-105 duration-100'>
            <Link to={link} smooth duration={500}>{link}</Link>
          </li>
        ))}
      </ul>

      <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen overflow-y-auto bg-black'>
          {links.map(({ id, link }) => (
            <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>
              <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
