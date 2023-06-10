import React, { useState, useEffect } from 'react';
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


    const [visitorCount, setVisitorCount] = useState(0);
    const [visitedSessions, setVisitedSessions] = useState({});

    useEffect(() => {
        const count = localStorage.getItem('visitorCount');
        if (count) {
            setVisitorCount(parseInt(count));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('visitorCount', visitorCount.toString());
    }, [visitorCount]);

    useEffect(() => {
        const getSessionId = () => {
            let sessionId = localStorage.getItem('sessionId');
            if (!sessionId) {
                sessionId = generateSessionId();
                localStorage.setItem('sessionId', sessionId);
            }
            return sessionId;
        };

        const generateSessionId = () => {
            const timestamp = new Date().getTime();
            const randomId = Math.random().toString(36).substring(2, 10);
            return `${timestamp}_${randomId}`;
        };

        const sessionId = getSessionId();

        if (!visitedSessions[sessionId]) {
            setVisitedSessions((prevSessions) => ({
                ...prevSessions,
                [sessionId]: true,
            }));

            setVisitorCount((prevCount) => prevCount + 1);
        }
    }, [visitedSessions]);

    return (
        <footer className="bg-slate-800 text-gray-200">
            <div className="mx-auto py-8 flex flex-col items-center">
                <ul className='hidden md:flex'>
                    {footernav.map(({ id, link }) => (
                        <li key={id} className='px-4 cursor-pointer font-medium text-slate-200 hover:scale-105 duration-100'>
                            <Link to={link} smooth duration={500}>{link}</Link>
                        </li>
                    ))}
                </ul>


                <p className="text-md m-2 text-gray-200">Visitors: {visitorCount}</p>
                <div className="flex space-x-4 m-5">
                    {
                        links.map(({ id, child, href }) => (
                            <a key={id} href={href} className="text-gray-200 hover:text-gray-400 transition duration-300">
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
