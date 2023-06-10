import React from 'react'

export default function Education() {
    const educationText = "<Timeline/>"

    const events = [
        {
            id: 1,
            date: '2018-2020',
            title: 'Amrita Vidyalayam, Juinagar ',
            description: 'Class 10th (CBSE) - 88.2%'
        },
        {
            id: 2,
            date: '2020-2022',
            title: 'SIES Junior College, Nerul',
            description: 'Class 12th (Maharashtra State Board) - 86.62%'
        },
        {
            id: 3,
            date: '2023-06-01',
            title: 'St. Xaviers College, Mumbai (Autonomous)',
            description: 'Bachelor Of Science Information Technology-9.54 CGPA'
        },
    ]

    return (
        <div name='Education' className='bg-slate-100 w-full md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col items-center justify-center w-full h-full'>
                <div className='pb-8 mr-auto md:mt-20 mt-96'>
                    <p className='text-4xl font-bold inline bg-gradient-to-r from-slate-100 from-10% via-lime-400 via-30% to-slate-100 to-85%'>{educationText}</p>
                </div>

                <ol className="flex flex-col border-l border-gray-200 dark:border-gray-700 mt-5 w-70">
                    {
                        events.map(({ id, date, title, description }) => (
                            <div key={id}>
                                <div className="flex flex-col w-2 h-2 -mx-1 mt-8 bg-gray-200 rounded-full border border-white dark:border-gray-900 dark:bg-gray-700 hover:bg-lime-500"></div>
                                <div className="mb-5 -mt-4 ml-4 bg-slate-800 rounded-lg flex flex-col items-start justify-center">
                                    <li className='px-8 flex flex-col justify-center m-5 font-signature '>
                                        <time className="mb-5 text-sm font-normal leading-none text-slate-100">{date}</time>
                                        <h3 className="text-lg font-semibold text-gray-100 mb-5">{title}</h3>
                                        <p className="mb-4 text-base font-normal text-slate-100">{description}</p>
                                    </li>
                                </div>
                            </div>



                        ))}
                </ol>

            </div>
        </div>
    )
}
