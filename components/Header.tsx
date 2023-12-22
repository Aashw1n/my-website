"use client";

import React from 'react';
import {motion} from  'framer-motion';
import {links} from '@/lib/data';
import Link from 'next/link'; 

const Header:React.FC = () => {
    return(
        <header className = 'z-[999] relative'>
            <motion.div 
            className = 'fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-[35rem] border-white border-opacity-100 bg-gray-500 bg-opacity-30 backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full rounded-full'
            initial = {{ x: "-50", opacity:0}}
            animate = {{ x: "-50", opacity:1}}
            >
            </motion.div>

            <nav className = 'flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0'>
                <ul className = 'flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-white sm:w-[initial] sm:flex-nowrap sm:gap-5'>
                    {
                        links.map(link => (
                        <motion.li className = 'h-3/4 flex items-center px-5 justify-center'
                        key = {link.hash}
                        initial = {{ y: "-100", opacity:0}}
                        animate = {{ y: "0", opacity:1}}>
                            <Link className = 'flex w-full justify-center items-center px-3 py-3 hover:text-gray-400 transition' href = {link.hash}>{link.name}</Link>
                        </motion.li>
                        ))
                    }
                </ul>

            </nav>
        </header>
    );
}

export default Header;