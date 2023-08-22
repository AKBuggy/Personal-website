import React from 'react'
import python from '../assets/Logos/python.png'
import mysql from '../assets/Logos/mysql.png'
import java from '../assets/Logos/java.png'
import ml from '../assets/Logos/machinelearning.png'
import github from '../assets/Logos/github.png'
import react from '../assets/Logos/react.png'
import tailwind from '../assets/Logos/tailwind.png'

export default function Skills() {

    const skillText = 'Skills'
    const techs = [
        {
            id: 1,
            src: python,
            title: 'Python',
            style: 'shadow-yellow-500'
        },
        {
            id: 2,
            src: mysql,
            title: 'MySQL',
            style: 'shadow-orange-500'
        },
        {
            id: 3,
            src: java,
            title: 'Java',
            style: 'shadow-red-500'
        },
        {
            id: 4,
            src: ml,
            title: 'Machine Learning',
            style: 'shadow-purple-500'
        },
        {
            id: 5,
            src: github,
            title: 'Github',
            style: 'shadow-gray-500'
        },
        {
            id: 6,
            src: react,
            title: 'React',
            style: 'shadow-blue-500'
        },
        {
            id: 7,
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-blue-300'
        },

    ]
    return (
        <div name='Skills' className='dark:bg-gray-950 bg-slate-100 w-full h-full'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='md:mt-40 mt-32'>
                    <p className='text-4xl font-bold text-gray-950 dark:text-slate-100'>{skillText}</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-1 md:mt-10 mt-10'>

                    {
                        techs.map(({ id, src, title, style }) => (
                            <div key={id} className={`shadow-md py-2 rounded-lg ${style}`}>
                                <img src={src} alt="" className='w-20 mx-auto' />
                                <p className='mt-4 text-gray-950 dark:text-slate-300'>{title}</p>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}
