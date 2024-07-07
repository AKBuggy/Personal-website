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
        },
        {
            id: 2,
            child: (
                <>
                    Github <FaGithub size={30} />
                </>
            ),
            href: 'https://github.com/AKBuggy',
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
                    Leetcode <SiLeetcode size={30} />
                </>
            ),
            href: 'https://leetcode.com/Ankit_Prakash/',
        },
        {
            id: 5,
            child: (
                <>
                    Instagram <FaInstagram size={30} />
                </>
            ),
            href: 'https://www.instagram.com/_a_n_k_i.t_/',
        },
        {
            id: 6,
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: '/VJTI_Resume_Ankit_Prakash.pdf',
            style: 'rounded-br-md',
            download: true,
        },

    ]
    return (
        <div className='hidden lg:flex flex-col top-[30%] left-0 fixed dark:text-gray-300'>
            <ul>
                {links.map(({id, child, href, style, download}) => (
                    <li key={id} className={'flex justify-between items-center w-40 h-12 px-4  ml-[-100px] rounded-lg hover:ml-[-10px] duration-300 hover:rounded-lg dark:bg-slate-100' + style}>
                        <a href={href} className='flex justify-between items-center w-full' download={download} target='_blank' rel="noreferrer">
                            {child}
                        </a>
                    </li>

                ))}

            </ul>
        </div>
    )
}
