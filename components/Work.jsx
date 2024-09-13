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
    image: '/work/React.png',
    category: 'react js',
    name: 'React Token Based Authentication app',
    description:
      'Jwt token based authentication, with refresh token based authentication, and redux for state management Used custom hooks for session and local storage Developed using React for a dynamic UI, React Hook Form for efficient form handling, Yup for validation, and  Styled using CSS.npm: Managed project dependencies and scripts using npm, streamlining the development process.Built with Node.js and Express.js for server - side logic, integrated with a database for data storage.',
    link: '',
    github: 'https://github.com/Poovendranselvaraj/react-js-validation',
  },
  {
    image: '/work/Hospital.png',
    category: 'react js',
    name: 'Hospital Management',
    description:
      'Build a healthcare platform that streamlines patient registration.Appointment scheduling, and medical records.Learn to implement complex forms and SMS notifications.User Profiles: Patients can create accounts with personal details, health history, and contact information.Appointment Confirmation: Send automatic SMS and email notifications to confirm appointments.Test Results Notifications: Notify patients when test results are available for viewing.Prescription Reminders: Send medication reminders via SMS for prescription adherence.',
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
  // {
  //   image: '/work/Flask-todo.png',
  //   category: 'Mini project',
  //   name: 'Flask Todo-list',
  //   description:
  //     'Built a full-featured To-Do List application using Flask, focusing on clean architecture, database management, and frontend integration. creating RESTful APIs, handling user authentication, and developing CRUD functionality.Developed a Flask-based To-Do List web application with user authentication Implemented CRUD operations for tasks, Integrated HTML, CSS, and JavaScript for an intuitive user interface.Ensured secure data handling with Flask-WTF and Flask-Login for form validation and user sessionsTested and debugged using Postman for API endpoints..',
  //   link: 'https://flask-todo-8uvr.onrender.com/',
  //   github: 'https://github.com/Poovendranselvaraj/Flask-todo',
  // },
]
const Work = () => {
  return (
    <section className='relative mb-12 xl:mb-48'>
        <div className='container mx-auto'>
            {/*text*/}
            <div className='max-w-[400px] mx-auto xl:mx-0 text-center
            xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start'>
                <h2 className='section-title mb-4'>Latest Creations</h2>
                <p className='subtitle mb-8'>Check out our most recent developments in web design, showcasing innovative features and unique client solutions.</p>
                <Link href='/projects'><Button>All projects</Button>
                </Link>
            </div>
            {/*slider*/}
            <div className='xl:max-w-[1000px] xl:absolute right-0 top-0'>
                <Swiper 
                   className='h-[480px]' 
                   slidesPerView={1}
                   breakpoints={{
                     640:{
                       slidesPerView:2,
                    },
                 }} 
                 spaceBetween={30} 
                 modules={[Pagination]} 
                 pagination={{clickable:true}}
                >
                    {/*show only the first 4 projects for the slides*/}
                    {projectData.slice(0, 4).map((project, index) => {
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