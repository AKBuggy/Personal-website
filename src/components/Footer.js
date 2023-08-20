import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { SiLeetcode } from 'react-icons/si'
import { Link } from 'react-scroll'


const Footer = () => {

    const footernav = [
        {
            id: 1,
            link: 'Home',
        },
        {
            id: 2,
            link: 'About',
        },
        {
            id: 3,
            link: 'Education',
        },
        {
            id: 4,
            link: 'Skills',
        },
        {
            id: 5,
            link: 'Projects',
        },
        {
            id: 6,
            link: 'Blogs',
        },
    ]

    const links = [
        {
            id: 1,
            child: (
                <>
                    <FaLinkedin size={20} />
                </>
            ),
            href: 'https://www.linkedin.com/in/ankit-prakash-5b1a14202/',
        },
        {
            id: 2,
            child: (
                <>
                    <FaGithub size={20} />
                </>
            ),
            href: 'https://github.com/AKBuggy',
        },
        {
            id: 3,
            child: (
                <>
                    <FaInstagram size={20} />
                </>
            ),
            href: 'https://www.instagram.com/_a_n_k_i.t_/',
        },
        {
            id: 4,
            child: (
                <>
                    <HiOutlineMail size={20} />
                </>
            ),
            href: 'mailto:ankitjalaja1@gmail.com',
        },
        {
            id: 5,
            child: (
                <>
                    <SiLeetcode size={20} />
                </>
            ),
            href: 'https://leetcode.com/Ankit_Prakash/',
        },

    ]


    return (
        <footer className="bg-slate-100 dark:bg-gray-950 shadow-2xl shadow-lime-500 dark:shadow-2xl dark:shadow-lime-500">
            <div className="mx-auto py-8 flex flex-col items-center h-full">
                <ul className='hidden md:flex'>
                    {footernav.map(({ id, link }) => (
                        <li key={id} className='px-4 cursor-pointer font-medium text-gray-950 dark:text-slate-200 hover:scale-105 duration-100'>
                            <Link to={link} smooth duration={500}>{link}</Link>
                        </li>
                    ))}
                </ul>


           
                <div className="flex space-x-4 m-5">
                    {
                        links.map(({ id, child, href }) => (
                            <a key={id} href={href} className="text-gray-500 dark:text-gray-200 hover:text-gray-950 transition duration-300">
                                {child}
                            </a>
                        ))
                    }

                </div>
                <p className="text-gray-400 mb-2">
                    © 2023 Ankit. All rights reserved.
                </p>
            </div>
        </footer>



    );
};

export default Footer;
