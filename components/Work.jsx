'use client'
import Link from 'next/link'
import {Button} from './ui/button'

//import swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

//import required modules
import {Pagination} from 'swiper/modules'

//components
import ProjectCard from '@/components/ProjectCard'
import { Description } from '@radix-ui/react-dialog'

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
const Work = () => {
  return (
    <div>Work</div>
  )
}

export default Work