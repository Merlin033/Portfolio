import React from 'react'
import { projects } from '../constants'

const Projects = () => {
  return (
    <section className='bg-black'>
      <ul className='flex flex-col gap-10'>{projects.map((project) => (
        <li key={project.id} className='w-full h-[150px] flex flex-col'>
            <h2 className="font-montserrat leading-normal text-lg text-secondary hover:animate-pulse">{project.title}</h2>
            <img 
            src={project.img} 
            alt={project.title} 
            className='object-fill max-h-full max-w-fit' 
            />
        </li>
      ))}</ul>
    </section>
  )
}

export default Projects