"use client";
import React, {useRef} from 'react'
import {Heading,Text} from '@chakra-ui/react';
import { Sectionheading } from './Sectionheading';
import {useInView,motion} from 'framer-motion';

type ChildProp = {
    children:React.ReactNode; 
  };

function ScrollView({children}:ChildProp){
    const ref = useRef(null)
    const isInView = useInView(ref)
    return(
    <section ref={ref}>
        <motion.span
   style={{
    transform: isInView ? "None" : "translateY(-100px)",
    opacity: isInView ? 1 : 0,
    scale:isInView ? 1:0,
    transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
  }} >
          {children}
        </motion.span>
      </section>
    );
}
export const About:React.FC = () => {

  return (
    <ScrollView>
    <section className = 'scroll-mt-28 max-w-[45rem] text-center text-white leading-8 content-center align-center justify-center'
    id="about">
    <Sectionheading>About Me</Sectionheading>
    <Text>
    I'm a <span className='font-bold'>Software Engineer</span> with 3 years of experience and an excellent
        track record of delivering enterprise level software in self-driven, fast-paced
        development environments. I graduated from <span className='font-bold'>Arizona State University</span> in 2020 
        with a Bachelor's in <span className='font-bold'>Computer Science</span>, and with knowledge in various fields from Full-stack development to AI/ML.
    </Text>
    <br/>
    <Text>
        I believe a big part of being a good Software Engineer is to keep learning. My recent work has been primarily in 
         {" "}<span className='font-bold'>Java and Typescript</span>, utilizing an array of different technologies to build and maintain robust 
        microservice flows and core business logic units. I'm currently learning <span className='font-bold'>Rust</span> and subsequently it's applications 
        in low-latency systems, as well as a bit about <span className='font-bold'> Web3 </span> technologies.
    </Text>
    <br/>
    <Text><span className="italic">When I'm not coding</span>, I'm usually playing guitar, dancing salsa, or boxing. 
    </Text>
    </section>
    </ScrollView>
  );
}
