import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";
//components
import DevImg from "./DevImg";
import Badge from './Badge';
import Socials from './Socials';
const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat
      bg-bottom dark:bg-none">
      <div className="container mx-auto">
        <div className='flex justify-between gap-x-8'>
          {/*text*/}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">Full Stack Developer</div>
            <h1 className='h1 mb-4'>Hi, I'm Poovendran Selvaraj</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
            I am a passionate and driven professional with a deep-rooted enthusiasm for technology and design. My vocational journey has been shaped by a diverse range of experiences, from mastering web and app development to diving into innovative problem-solving strategies. Along the way, I've honed my skills in both front-end and back-end development, as well as user experience design, making me a versatile and adaptable developer
            </p>
            {/*Buttons*/}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact me<Send size={18} />
                </Button>
              </Link>
              <a href="https://drive.google.com/file/d/1nBqQpv2WRlzeEWpj4R0A2u3uSqug_gz6/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" className="gap-x-2">
                  Download CV
                  <Download size={18} />
                </Button>
              </a>

            </div>
            {/*socials*/}
            {/* <Socials containerStyles='flex gap-x-6  mx-auto xl:mx-0'
              iconsStyles='text-foreground text-[22px] hover:text-primary
              transition-all'/> */}
          </div>
          {/*image*/}
          <div className="hidden xl:flex relative">
            {/*badge*/}
            <Badge
              containerStyles='absolute top-[24%] -left-[5rem]'
              icon={<RiBriefcase4Fill />}
              endCountNum={3}
              badgeText='Months of Full Stack Internship'
            />
            {/*badge 2*/}
            {/* <Badge 
                containerStyles='absolute top-[80%] -left-[1rem]'
                icon={<RiTodoFill/>} 
                endCountNum={6} 
                endcountText=''
                badgeText='Projects Developed'
              /> */}

            {/*badge 3*/}
            <Badge 
                containerStyles='absolute top-[55%] -right-'
                icon={<RiTeamFill />} 
                endCountNum={1} 
                // endcountText='k'
                badgeText='Course Completion Certificate'
              />
            <Badge
              containerStyles='absolute top-[50%] -right-8'
              icon={<RiTodoFill />}
              endCountNum={5}
              endcountText=''
              badgeText='Projects Developed'
            />

            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
            <DevImg containerStyles='bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom' imgSrc='/hero/developer5.png' />
          </div>
        </div>
        {/*icons*/}
        <div className='hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12
          animate-bounce'>
          <RiArrowDownSLine className='text-3xl text-primary' />
        </div>
      </div>
    </section>
  );
};

export default Hero;