import React from 'react'
import placeable from '../assets/projects/placeable.png'
import textmanipulator from '../assets/projects/textmanipulator.png'

export default function Projects() {

    const projectText = '<Projects  />'

    const projects = [
        {
            id: 1,
            pname: 'Placeable',
            desc: 'A streamlined platform designed to simplify the placement process for students and recruiters while reducing the load on the placement officer.',
            src: placeable,
            codehref: 'https://github.com/AKBuggy/Placeable',
        },
        {
            id: 2,
            pname: 'Text Manipulator',
            desc: 'Text Manipulator is a tool that allows you to modify the case, format, and content of any text.',
            src: textmanipulator,
            codehref: 'https://github.com/AKBuggy/TextManipulator-React',
            demohref: 'https://text-manipulator-react.vercel.app/'
        },
    ]

    return (
        <div name='Projects' className='bg-slate-100 w-full md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col items-center justify-center w-full h-full'>
                <div className='pb-8 mr-auto md:mt-0 mt-44'>
                    <p className='text-4xl font-bold inline bg-gradient-to-r from-slate-100 from-10% via-lime-400 via-30% to-slate-100 to-85%'>{projectText}</p>
                </div>

                <div className="md:max-w-screen-xl max-w-sm md:mx-0 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                    {
                        projects.map(({ id, pname, desc, src, demohref, codehref }) => (
                            <div key={id} className='rounded-lg overflow-hidden shadow-2xl hover:scale-105 duration-300 bg-gradient-to-r from-lime-500 to-lime' >
                                <img className="w-full" src={src} alt="Sunset in the mountains" />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">{pname}</div>
                                    <p className="text-gray-700 text-base">
                                        {desc}
                                    </p>
                                </div>
                                <div className="px-6 pt-4 pb-2">
                                    <a href={demohref} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:scale-110 duration-300">Demo</a>
                                    <a href={codehref} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:scale-110 duration-300">Code</a>
                                </div>
                            </div>
                        ))
                    }


                </div>


            </div>
        </div>
    )
}
