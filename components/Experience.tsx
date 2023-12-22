import React from 'react'
import { Sectionheading } from './Sectionheading';
import { projectsData } from '@/lib/data';
import Project from './Project';

export const Experience = () => {
  return (
    <section className = 'text-white scroll-mt-28' id="experience">
        <Sectionheading>Experience</Sectionheading>
        <div>
            {projectsData.map((project,index) => (
                <React.Fragment key = {index}>
                    <Project {...project}/>
                </React.Fragment>
            ))}
        </div>
    </section>
  )
}