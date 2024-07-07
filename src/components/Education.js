import React from 'react'

export default function Education() {
    const educationText = "Timeline"

    const events = [
        {
            id: 1,
            date: '2016-2018',
            title: 'Amrita Vidyalayam, Juinagar ',
            description: 'Class 10th (CBSE) - 88.2%'
        },
        {
            id: 2,
            date: '2018-2020',
            title: 'SIES Junior College, Nerul',
            description: 'Class 12th (Maharashtra State Board) - 86.62%'
        },
        {
            id: 3,
            date: '2020-2023',
            title: 'St. Xaviers College, Mumbai (Autonomous)',
            description: 'Bachelor Of Science Information Technology-9.54 CGPA'
        },
        {
            id: 4,
            date: '2023-2025',
            title: 'Veermata Jijabai Technological Institute, Mumbai',
            description: 'Master Of Computer Application - 9.23 CGPA'
        }
    ]

    return (
        <div name='Education' className='bg-slate-100 dark:bg-gray-950 h-full w-full'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col items-center justify-center w-full h-full'>
                <div className='pb-8 mr-auto mt-32 md:mt-[200px]'>
                    <p className='text-4xl font-bold inline text-gray-950 dark:text-slate-100'>{educationText}</p>
                </div>

                <ol className="flex flex-col border-l dark:border-gray-200 border-gray-700 mt-5 w-70">
                    {
                        events.map(({ id, date, title, description }) => (
                            <div key={id}>
                                <div className="flex flex-col w-2 h-2 -mx-1 mt-8 dark:bg-slate-300 rounded-full border dark:border-white border-gray-900 bg-gray-700 hover:bg-lime-500 dark:hover:bg-lime-500 hover:scale-150"></div>
                                <div className="mb-4 -mt-4 ml-4 bg-slate-800 dark:bg-slate-300 rounded-lg flex flex-col items-start justify-center md:hover:scale-110 duration-500">
                                    <li className='px-8 flex flex-col justify-center m-5 font-signature '>
                                        <time className="mb-3 text-sm font-normal leading-none text-slate-100 dark:text-gray-950">{date}</time>
                                        <h3 className="text-lg font-semibold text-gray-100 dark:text-gray-950 mb-5">{title}</h3>
                                        <p className="mb-2 text-base font-normal text-slate-100 dark:text-gray-950 ">{description}</p>
                                    </li>
                                </div>
                            </div>
                        ))}
                </ol>

            </div>
        </div>
    )
}
