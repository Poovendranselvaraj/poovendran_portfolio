'use client'
import React, { useState } from 'react'
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs'
import ProjectCard from '@/components/ProjectCard'

const projectData = [
  {
    image: '/work/React.png',
    category: 'fullstack',
    name: 'React Token Based Authentication app',
    description:
      'This project is a token-based authentication app built with React, using JWT for authentication and refresh tokens for enhanced security. It incorporates Redux for state management, React Hook Form for form handling, and Yup for validation. The UI is styled with CSS. The server side is powered by Node.js and Express.js, connected to a database for data storage. The project was managed with npm, streamlining the development process. Languages/technologies used: JavaScript, React, Node.js, Express.js, CSS, and npm.',
    link: '',
    github: 'https://github.com/Poovendranselvaraj/react-js-validation',
  },
  {
    image: '/work/Hospital.png',
    category: 'react js',
    name: 'Hospital Management System',
    description:
      'This Hospital Management project is a healthcare platform that simplifies patient registration, appointment scheduling, and medical records. It features user profiles, automatic SMS/email notifications for appointments, test results, and prescription reminders to ensure patient adherence.Languages/technologies used: JavaScript, Node.js, React, and SMS/email integration services.',
    link: 'https://hospital-jade.vercel.app/',
    github: 'https://github.com/Poovendranselvaraj/Hospital',
  },
  {
    image: '/work/Gym.png',
    category: 'react js',
    name: 'React Fitness app',
    description:
      'This React Fitness App is designed to help users manage and track their workouts. It features a Home page and an Exercises section, providing exercise guides, progress tracking, and workout recommendations. The app is fully responsive, deployed on Netlify, and Dockerized for easy deployment.Languages/technologies used: JavaScript, React, Netlify.',
    link: 'https://poovis-gym.netlify.app',
    github: 'https://github.com/Poovendranselvaraj/gym-app-react',
  },
  
  {
    image: '/work/Mern-Todo.png',
    category: 'fullstack',
    name: 'Mern Todo-list',
    description:
      'The MERN Todo List is a full-stack app where users can add, delete, and track tasks. It supports user authentication with JWT and allows task management via a simple UI.Languages/technologies used: MongoDB, Express.js, React.js, Node.js, HTML, CSS, and JavaScript.',
    link: 'https://poovetodo.netlify.app/',
    github: 'https://github.com/Poovendranselvaraj/todo_list',
  },
  {
    image: '/work/Fastapi.png',
    category: 'Backend',
    name: 'FastApi Python',
    description:
      'This project involves building robust backend services using FastAPI, with CRUD operations handled by PostgreSQL and managed via PgAdmin. APIs are tested and validated using Postman, and applications are containerized with Docker. Pydantic models are used for data validation and serialization.Languages/technologies used: Python, FastAPI, PostgreSQL, Docker, PgAdmin, and Postman.',
    link: '',
    github: 'https://github.com/Poovendranselvaraj/fastapi',
  },
  // {
  //   image: '/work/Flask-Todo.png',
  //   category: 'Mini project',
  //   name: 'Flask Todo-list',
  //   description:
  //     'The Flask Todo List is a web application with user authentication and task management. It features CRUD operations, a user-friendly UI, and secure data handling with Flask-WTF and Flask-Login. APIs were tested using Postman.Languages/technologies used: Python, Flask, HTML, CSS, JavaScriptand Postman.',
  //   link: 'https://flask-todo-8uvr.onrender.com/',
  //   github: 'https://github.com/Poovendranselvaraj/Flask-todo',
  // },
]

//remove category duplicates
const uniqueCategories = [
  'all projects',
  ...new Set(projectData.map((item) => item.category)),
];
  
const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState('all projects');

  const filteredProjects = projectData.filter(project => {
    //if category is 'all projects', return all projects, else filter by category
    return category === 'all projects'
      ? project
      : project.category === category;
  })
  return (
    <section className="min-h-screen pt-12">
      <div className='container mx-auto'>
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        {/*tabs*/}
        <Tabs defaultValue={category} className='mb-24 xl:mb-48'>
          <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none'>
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className='capitalize w-[162px] md:w-auto'
                >
                  {category}
                </TabsTrigger>
              )
            })}
          </TabsList>
          {/*tabs content*/}
          <div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4'>
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              )
            })}
          </div>
        </Tabs>
      </div>
    </section>
  )
}

export default Projects;