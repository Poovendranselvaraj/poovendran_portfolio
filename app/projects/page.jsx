'use client'
import React, { useState } from 'react'
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs'
import ProjectCard from '@/components/ProjectCard'

const projectData = [
  {
    image: '/work/React.png',
    category: 'react js',
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
      'Designed and developed a gym application using React and javaScript.This app consists of two pages Home and Exercises.Built and deployed in netlify and also dockerized.This React Fitness App is a streamlined and user-friendly platform designed to help gym users manage and track their workout routines. The app focuses on two primary sections: Home and Exercises, offering users an intuitive interface to browse exercise guides, track their fitness progress, and receive workout recommendations. The app is fully responsive and works seamlessly across devices.',
    link: 'https://poovis-gym.netlify.app',
    github: 'https://github.com/Poovendranselvaraj/gym-app-react',
  },
  
  {
    image: '/work/Mern-Todo.png',
    category: 'fullstack',
    name: 'Mern Todo-list',
    description:
      'A Backend server made using HTML,CSS and javaScript.You can add works to be done and can be deleted in this and can be removed.The MERN Todo List is a full-stack application where users can:Add new tasks to be done,Delete tasks,Mark tasks as completed,View all tasks.This project uses the following technologies:MongoDB: For storing todo tasks,Express.js: For handling the backend API routes,React.js: For building the user interface To run the server and handle API requests.User Authentication: Integrate user login and registration (using JWT).',
    link: 'https://poovetodo.netlify.app/',
    github: 'https://github.com/Poovendranselvaraj/todo_list',
  },
  {
    image: '/work/Fastapi.png',
    category: 'Backend',
    name: 'FastApi Python',
    description:
      'The Proficient in designing robust backend services,integrating relational databases,and automating testing using Postman. Strong skills in containerizing applications with Docker and managing databases with PgAdmin.Developed APIs using FastAPI, ensuring performance and security.Implemented CRUD operations with PostgreSQL,managed via PgAdmin.Utilized Postman for API testing and validation.Containerized applications with Docker,Integrated data validation and serialization with Pydantic models.',
    link: '',
    github: 'https://github.com/Poovendranselvaraj/fastapi',
  },
  {
    image: '/work/Flask-Todo.png',
    category: 'Mini project',
    name: 'Flask Todo-list',
    description:
      'Built a full-featured To-Do List application using Flask, focusing on clean architecture, database management, and frontend integration. creating RESTful APIs, handling user authentication, and developing CRUD functionality.Developed a Flask-based To-Do List web application with user authentication Implemented CRUD operations for tasks, Integrated HTML, CSS, and JavaScript for an intuitive user interface.Ensured secure data handling with Flask-WTF and Flask-Login for form validation and user sessionsTested and debugged using Postman for API endpoints..',
    link: 'https://flask-todo-8uvr.onrender.com/',
    github: 'https://github.com/Poovendranselvaraj/Flask-todo',
  },
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