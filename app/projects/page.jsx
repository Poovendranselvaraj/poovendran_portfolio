'use client'
import React, { useState } from 'react'
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs'
import ProjectCard from '@/components/ProjectCard'

const projectData = [
  {
    image: '/work/3.png',
    category: 'react js',
    name: 'React Token Based Authentication app',
    description:
      'Jwt token based authentication, with refresh token based authentication, and redux for state management Used custom hooks for session and local storage Developed using React for a dynamic UI, React Hook Form for efficient form handling, Yup for validation, and  Styled using CSS.npm: Managed project dependencies and scripts using npm, streamlining the development process.Built with Node.js and Express.js for server - side logic, integrated with a database for data storage.',
    link: 'https://github.com/Poovendranselvaraj/react-js-validation',
    github: 'https://github.com/poovendranselvaraj',
  },
  {
    image: '/work/4.png',
    category: 'react js',
    name: 'Hospital Management',
    description:
      'Build a healthcare platform that streamlines patient registration.Appointment scheduling, and medical records.Learn to implement complex forms and SMS notifications.User Profiles: Patients can create accounts with personal details, health history, and contact information.Appointment Confirmation: Send automatic SMS and email notifications to confirm appointments.Test Results Notifications: Notify patients when test results are available for viewing.Prescription Reminders: Send medication reminders via SMS for prescription adherence.',
    link: 'https://github.com/Poovendranselvaraj/Hospital',
    github: 'https://github.com/poovendranselvaraj',
  },
  {
    image: '/work/2.png',
    category: 'react js',
    name: 'React Fitness app',
    description:
      'Designed and developed a gym application using React and javaScript.This app consists of two pages Home and Exercises.Built and deployed in netlify and also dockerized.This React Fitness App is a streamlined and user-friendly platform designed to help gym users manage and track their workout routines. The app focuses on two primary sections: Home and Exercises, offering users an intuitive interface to browse exercise guides, track their fitness progress, and receive workout recommendations. The app is fully responsive and works seamlessly across devices.',
    link: 'https://github.com/Poovendranselvaraj/gym-app-react',
    github: 'https://github.com/poovendranselvaraj',
  },
  
  {
    image: '/work/1.png',
    category: 'fullstack',
    name: 'Mern Todo-list',
    description:
      'A Backend server made using HTML,CSS and javaScript.You can add works to be done and can be deleted in this and can be removed.The MERN Todo List is a full-stack application where users can:Add new tasks to be done,Delete tasks,Mark tasks as completed,View all tasks.This project uses the following technologies:MongoDB: For storing todo tasks,Express.js: For handling the backend API routes,React.js: For building the user interface To run the server and handle API requests.User Authentication: Integrate user login and registration (using JWT).',
    link: 'https://github.com/Poovendranselvaraj/todo_list',
    github: 'https://github.com/poovendranselvaraj',
  },
  {
    image: '/work/3.png',
    category: 'fullstack',
    name: 'FastApi Python',
    description:
      'The Proficient in designing robust backend services,integrating relational databases,and automating testing using Postman. Strong skills in containerizing applications with Docker and managing databases with PgAdmin.Developed APIs using FastAPI, ensuring performance and security.Implemented CRUD operations with PostgreSQL,managed via PgAdmin.Utilized Postman for API testing and validation.Containerized applications with Docker,Integrated data validation and serialization with Pydantic models.',
    link: 'https://github.com/Poovendranselvaraj/fastapi',
    github: 'https://github.com/poovendranselvaraj',
  },
  {
    image: '/work/2.png',
    category: 'Mini project',
    name: 'Flask Todo-list',
    description:
      'Built a full-featured To-Do List application using Flask, focusing on clean architecture, database management, and frontend integration. creating RESTful APIs, handling user authentication, and developing CRUD functionality.Developed a Flask-based To-Do List web application with user authentication Implemented CRUD operations for tasks, Integrated HTML, CSS, and JavaScript for an intuitive user interface.Ensured secure data handling with Flask-WTF and Flask-Login for form validation and user sessionsTested and debugged using Postman for API endpoints..',
    link: 'https://github.com/Poovendranselvaraj/Flask-todo',
    github: 'https://github.com/poovendranselvaraj',
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