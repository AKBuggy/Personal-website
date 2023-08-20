import React from 'react'
import HeroImage from '../assets/Ankit.jpg'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll'


export default function Home() {
  return (
    <div name="Home" className='h-full w-full bg-slate-100 dark:bg-gray-950'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full sm:w-3/4'>
          <div className='md:mx-0 md:py-0 mx-5 py-5 mt-20 md:mt-52'>
            <h2 className='text-4xl sm:text-6xl font-bold text-slate-800 h-32'>
              <span className='font-signature sm:text-7xl text-6xl text-gray-950 dark:text-lime-400 hover:text-lime-400 duration-500 '>I am a <br /></span>
              <TypeAnimation sequence={[
                'Developer',
                2000,
                'Blogger',
                2000,
                'Data Scientist',
                2000,
              ]}
                speed={50}
                className='text-gray-950 dark:text-slate-100 font-signature'
                wrapper='span'
                repeat={Infinity}
                cursor={false}
              />
            </h2>
            <div>
              <p className='selection:bg-fuchsia-300 first-letter:text-7xl first-letter:font-bold first-letter:mr-1 first-letter:-mt-1 first-letter:float-left  text-gray-500 dark:text-slate-400 py-4 max-w-md md:mt-8 mt-0 text-md'>
                To maintain my dynamic, visionary, and competitive nature in the face of the world's shifting conditions inorder to achieve high professional progress through a process of constant learning.


              </p>
            </div>
          </div>


          <div>
            <Link to='Projects' smooth duration={500} className='group text-gray-950  font-semibold w-fit px-6 py-3 my-2 md:mx-0 mx-5 flex items-center rounded-md bg-gradient-to-r from-lime-500 to-slate-100 cursor-pointer'>
              Projects
              <span className='md:group-hover:rotate-90 duration-300'>
                <MdOutlineKeyboardArrowRight size={22} />

              </span>
            </Link>
          </div>
        </div>
        <div className='mt-14 md:mt-52'>
          <img src={HeroImage} alt="My Profile" className='rounded-2xl mx-auto w-full shadow-lime-500 shadow-lg' />
        </div>
      </div>
    </div>

  )
}