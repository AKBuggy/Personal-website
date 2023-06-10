import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { SiLeetcode } from 'react-icons/si'

export default function SocialLinks() {

    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30}/>
                </>
            ),
            href: 'https://www.linkedin.com/in/ankit-prakash-5b1a14202/',
            style: 'text-black rounded-tr-md hover:from-blue-900 hover:to-blue-500 hover:text-white'
        },
        {
            id: 2,
            child: (
                <>
                    Github <FaGithub size={30} />
                </>
            ),
            href: 'https://github.com/AKBuggy',
            style: 'text-black hover:from-black hover:to-blue-900 hover:text-white'
        },
        {
            id: 3,
            child: (
                <>
                    Mail <HiOutlineMail size={30} />
                </>
            ),
            href: 'mailto:ankitjalaja1@gmail.com',
        },
        {
            id: 4,
            child: (
                <>
                    Leetcode <SiLeetcode size={30} color='black'/>
                </>
            ),
            href: 'https://leetcode.com/Ankit_Prakash/',
            style: 'hover:from-black from-30% hover:via-gray-200 hover:to-yellow-300 text-white'
        },
        {
            id: 5,
            child: (
                <>
                    Instagram <FaInstagram size={30} />
                </>
            ),
            href: 'https://www.instagram.com/_a_n_k_i.t_/',
            style: 'hover:from-pink-500 hover:to-yellow-500'
        },
        {
            id: 6,
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: '/AnkitPrakashResume.pdf',
            style: 'rounded-br-md',
            download: true,
        },

    ]
    return (
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
            <ul>

                {links.map(({id, child, href, style, download}) => (
                    <li key={id} className={'flex justify-between items-center w-40 h-14 px-4 bg-gradient-to-r from-lime-500 from-30% to-lime ml-[-100px] rounded-lg hover:ml-[-10px] duration-300 hover:rounded-lg ' + style}>
                        <a href={href} className='flex justify-between items-center w-full' download={download} target='_blank' rel="noreferrer">
                            {child}
                        </a>
                    </li>

                ))}

            </ul>
        </div>
    )
}
