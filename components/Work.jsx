'use client'
import Link from 'next/link'
import {Button} from './ui/button'

//import swiper react components
import {Swiper, SwiperSlide} from 'swiper/react' 

//import swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

//import required modules
import {Pagination} from 'swiper/modules'

//components
import ProjectCard from '@/components/ProjectCard'



const projectData = [
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
    image: '/work/React.png',
    category: 'fullstack',
    name: 'React Token Based Authentication app',
    description:
      'This project is a token-based authentication app built with React, using JWT for authentication and refresh tokens for enhanced security. It incorporates Redux for state management, React Hook Form for form handling, and Yup for validation. The UI is styled with CSS. The server side is powered by Node.js and Express.js, connected to a database for data storage. The project was managed with npm, streamlining the development process. Languages/technologies used: JavaScript, React, Node.js, Express.js, CSS, and npm.',
    link: '',
    github: 'https://github.com/Poovendranselvaraj/react-js-validation',
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
const Work = () => {
  return (
    <section className='relative mb-12 xl:mb-48'>
        <div className='container mx-auto'>
            {/*text*/}
            <div className='max-w-[300px] mx-auto xl:mx-0 text-center
            xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start'>
                <h2 className='section-title mb-4'>Latest Creations</h2>
                <p className='subtitle mb-8'>Check out our most recent developments in web design, showcasing innovative features and unique client solutions.</p>
                <Link href='/projects'><Button>All projects</Button>
                </Link>
            </div>
            {/*slider*/}
            <div className='xl:max-w-[1100px] xl:absolute right-0 top-0'>
                <Swiper 
                   className='h-[550px]'
                   slidesPerView={2}
                   breakpoints={{
                     640:{
                       slidesPerView:2,
                    },
                 }} 
                 spaceBetween={20} 
                 modules={[Pagination]} 
                 pagination={{clickable:true}}
                >
                    {/*show only the first 4 projects for the slides*/}
                    {projectData.slice(0, 5).map((project, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <ProjectCard project={project}/>
                            </SwiperSlide>
                        )
                    })
                    }
                </Swiper>
            </div>
        </div>     
    </section>
    
  )
}

export default Work