"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";


type ProjectProps = (typeof projectsData)[number];

export default function Project({title, date, description, tags,imageTag}
    :ProjectProps
    ){
        const ref = useRef<HTMLDivElement>(null);
        const { scrollYProgress } = useScroll({
          target: ref,
          offset: ["0 1", "1.33 1"],
        });
        const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
        const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);


        return(
            <motion.div
            ref={ref}
            style={{
              scale: scaleProgess,
              opacity: opacityProgess,
            }}
            className="group mb-3 sm:mb-8 last:mb-0"
          >
        
        <section className = 'flex relative border-white border-opacity-100 bg-white bg-opacity-100 max-w-[42rem] overflow-hidden sm:pr-8  mb-3 sm:mb-8 rounded-md'>
           <div className = 'pt-4 pb-6 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col'>
            <h3 className = "text-2xl text-black font-semibold">{title}</h3>
            <h6 className ="text-black font-semibold">{date}</h6>
            <p className = 'mt-2 leading-relaxed text-black'>{description}</p>
            <ul className = 'flex flex-wrap mt-4 gap-2'>
                {tags.map(((tag,index) => (
                    <li className = " mt-auto bg-black px-3 py-1 text-white text-[0.7rem] uppercase tracking-wider rounded-full"
                     key={index}>{tag}</li>
                )))}
            </ul>
            </div>
            <div className='object-fit:cover align-center hidden sm:block'>
            <Image src = {imageTag} alt='exp' style = {{
                height: 300,
                width:300,
            }}
            />
            </div>
            </section>
            </motion.div>);

    }