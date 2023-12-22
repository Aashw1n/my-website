"use client"

import React from 'react';
import {Text,Heading} from '@chakra-ui/react';
import {motion} from 'framer-motion';
import {HiDownload} from 'react-icons/hi';
import { SiLinkedin } from "react-icons/si";
import { ImGithub } from "react-icons/im";


export const Homepage:React.FC = () => {
return (
    //useEffect and useEffect is utilized by motion, hence the "use client"
<section className = 'relative flex flex-col items-center align-center justify-center text-white ' id ='home'>
<motion.div
initial = {{opacity:0, scale:0}}
animate = {{opacity:1, scale:1}}
transition = {{
    type:"tween",
    duration:0.2}}
    className = 'relative flex flex-col items-center align-center justify-center text-white mt-80'
    >
        <Heading as = 'h1' variant = "page-title">
            Aashwin Ranjan
        </Heading>
        <Text>Software Engineer</Text>

        <div className = 'flex flex-col sm:flex-row relative gap-10 px-4 mt-14 align-center items-center justify-center'>
<a className = 'focus:scale-110 hover:scale-110 active:scale-105 transition ' 
href ="https://github.com/Aashw1n" target = "_blank">
  <ImGithub size={30} />
  </a>

 
  <a className = 'focus:scale-110 hover:scale-110 active:scale-105 transition'
  href ="https://www.linkedin.com/in/aashw1n/" target = "_blank">
    <SiLinkedin size={25} />
  </a>


  <a className = 'flex items-center rounded-full text-black bg-white px-3 py-1 focus:scale-110 hover:scale-110 active:scale-105 transition'
  href = '/Aashwin Ranjan.pdf' download>
    Resume <HiDownload/>
    </a>
</div>
</motion.div>
</section>

);
}