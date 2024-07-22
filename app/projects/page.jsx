'use client'
import React, { useState } from 'react'
import {Tabs, TabsList,TabsContent,} from '@/components/ui/tabs'
import ProjectCard from '@/components/ProjectCard'

const ProjectData = [
  {
      image: '/work/3.png',
      category:'react js',
      name:'Nexa Website',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, quis.',
      link: '/',
      github:'/',
  },
  {
      image: '/work/4.png',
      category:'react js',
      name:'Solstice Website',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, quis.',
      link: '/',
      github:'/',
  },
  {
      image: '/work/2.png',
      category:'next js',
      name:'Lumina Website',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, quis.',
      link: '/',
      github:'/',
  },
  {
      image: '/work/1.png',
      category:'next js',
      name:'Evolve Website',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, quis.',
      link: '/',
      github:'/',
  },
  {
      image: '/work/3.png',
      category:'next js',
      name:'Ignite Website',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, quis.',
      link: '/',
      github:'/',
  },
  {
      image: '/work/4.png',
      category:'next js',
      name:'Envision Website',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, quis.',
      link: '/',
      github:'/',
  },
  {
      image: '/work/1.png',
      category:'fullstack',
      name:'Serenity Website',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, quis.',
      link: '/',
      github:'/',
  },
  {
      image: '/work/3.png',
      category:'fullstack',
      name:'Nova Website',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, quis.',
      link: '/',
      github:'/',
  },
  {
      image: '/work/2.png',
      category:'fullstack',
      name:'Zenith Website',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, quis.',
      link: '/',
      github:'/',
  },
]

//remove category duplicates
const uniqueCategories = [
  'all projects',
  ...new Set(ProjectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  console.log(categories);
  return <section className="min-h-screen pt-12">
    <div className='container mx-auto'>
      <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
        My Projects
      </h2>
      {/*tabs*/}
      <Tabs>
        <TabsList>
      </Tabs>
    </div>
      
    
    </section>
  
}

export default Projects;