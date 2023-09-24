import React from 'react'
import { projects } from '../constants'

const Projects = () => {
  return (
    <section id="projects" className='w-full flex h-screen'>
      <div className='w-1/3 h-full bg-white-400'></div>
      <ul className='flex flex-col gap-10 bg-black w-2/3'>{projects.map((project) => (
        <li key={project.id} className='w-full h-[150px] flex '>
            <h2 className="font-montserrat leading-normal text-lg text-secondary hover:animate-pulse">{project.title}</h2>
            <img 
            src={project.img} 
            alt={project.title} 
            className='object-contain max-h-full w-full' 
            />
        </li>
      ))}</ul>
    </section>
  )
}

export default Projects