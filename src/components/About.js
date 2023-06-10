import React from 'react'

export default function About() {

    const aboutText = '<About Me/>'
    return (
        <div name='About' className='w-full h-screen bg-slate-100'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8 text-slate-800 md:-mt-36 mt-[800px]'>
                    <p className='text-4xl font-bold inline bg-gradient-to-r from-slate-100 from-10% via-lime-400 via-30% to-slate-100 to-85%'>{aboutText}</p>
                </div>

                <p className='selection:bg-fuchsia-300 first-letter:text-7xl first-letter:font-bold first-letter:mr-3 first-letter:float-left text-xl md:mt-0 mt-10'>
                Hello, I'm an Indian graduate student who is extremely passionate about programming. Python, machine learning, java, MySQL, react, tailwind, and GitHub are among my strong suits. Using these tools, I enjoy creating projects and finding solutions to issues. In addition to academics, I enjoy playing football , chess and reading books in my own time. My interests include learning new things and solving leetcode problems.
                </p>

            </div>
        </div>
    )
}
