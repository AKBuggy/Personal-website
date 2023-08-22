import React from 'react'

export default function About() {

    const aboutText = 'About Me'
    return (
        <div name='About' className='min-h-full flex items-center h-[600px] w-full bg-slate-100 dark:bg-gray-950'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8 text-gray-800 md:mt-60 mt-32'>
                    <p className='text-4xl font-bold inline text-gray-950 dark:text-slate-100'>{aboutText}</p>
                </div>

                <p className='selection:bg-fuchsia-300 first-letter:text-7xl first-letter:font-bold first-letter:mr-3 first-letter:mt-[-5px] first-letter:float-left md:text-xl md:mt-0 mt-10 text-gray-950 dark:text-slate-300 mx-2'>
                    Hello, I'm an Indian graduate student who is extremely passionate about programming. Python, Machine Learning, Java, MySQL, React, Tailwind, and GitHub are among my strong suits. Using these tools, I enjoy creating projects and finding solutions to issues. In addition to academics, I enjoy playing football , chess and reading books in my own time. My interests include learning new things and solving leetcode problems.
                </p>

            </div>
        </div>
    )
}
