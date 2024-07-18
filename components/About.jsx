import DevImg from "./DevImg"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs" 


import {
    User2,
    MailIcon,
    HomeIcon,
    PhoneCall,
    GraduationCap, 
    Calender, 
    Briefcase,
} from 'lucide-react' 

const infoData=[
    {
        icon: <User2 size={20}/>,
        text:'Poovendran Selvaraj',
    },
    {
        icon: <MailIcon size={20}/>,
        text:'poovendranselvaraj333@gmail.com',
    },
    {
        icon: <HomeIcon size={20}/>,
        text:'Coimbatore, India',
    },
    {
        icon: <PhoneCall size={20}/>,
        text:'(+91) 908 076 5106',
    },
    {
        icon: <GraduationCap size={20}/>,
        text:'B.sc.Computer Science',
    },
    {
        icon: <Calender size={20}/>,
        text:'Born on 20 March, 2000',
    },
    
]

const qualificationData=[
    {
      title: 'eduaction',
      data:[
        {
            University: 'Bharathidhasan University',
            qualification: 'Bachelor of Science',
            year: '2017 - 2020',   
        }
      ]  
    }
]

const skillData=[
 {
   title: 'skills',
   data:[
     {
        name: 'HTML & CSS',
     },
     {
        name: 'Front-end Development',
     },
     {
        name: 'Python',
     },  
     {
        name: 'Back-end Development',
     },
    ],     
 },
    {
    title: 'tools',
    data:[
        {
            imgPath:'/about/vscode.svg',
        },
        {
            imgPath: '/about/figma.svg',
        },
        {
            imgPath: '/about/notion.svg',
        },  
        {
            imgPath: '/about/wordpress.svg',
        },
        ]
    }
]   

       
const About = () => {
  return (
    <div>About</div>
  )
}

export default About