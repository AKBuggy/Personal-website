import React from 'react'
import random from '../assets/medium_blogs/githubcontriblog.png'

export default function Blogs() {
  const blogText = "<Blog/>"


  const blogs = [
    {
      id: 1,
      src: random,
      link: 'https://medium.com/p/5972a3c39a1e',
      title: 'Make Your First Github Contribution',
      des: 'This blog is about making your first contribution in an open source project',
      style: 'hover:scale-105 duration-300'
    },
  ]
  return (
    <div name='Blog' className='bg-slate-100 w-full md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col items-center justify-center w-full h-full'>
        <div className='pb-8 mr-auto md:-mt-60 mt-28'>
          <p className='text-4xl font-bold inline bg-gradient-to-r from-slate-100 from-10% via-lime-400 via-30% to-slate-100 to-85%'>{blogText}</p>
        </div>
        <div className="md:max-w-screen-xl max-w-sm md:mx-0 grid md:grid-cols-1 lg:grid-cols-3 gap-8 mt-10 w-max md:px-0 px-2 md:mb-0 mb-80">
        {
          blogs.map(({ id, src, link, title, des, style }) => (
              <a key={id} href={link} className={`flex flex-col lg:mx-44 md:w-max w-full items-center border border-gray-200 rounded-lg shadow-2xl md:flex-row md:max-w-xl bg-slate-800 hover:scale-105 duration-300`}>
                <img className="object-cover w-full h-40 rounded-t-lg md:h-full md:w-48 md:rounded-none md:rounded-l-lg" src={src} alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{des}</p>
                </div>
              </a>
          ))}
        </div>
        



      </div>
    </div>
  )
}

