import Link from "next/link";
import { Button } from "./ui/button";
import { Download,Send } from "lucide-react";

import {
    RiBriefcase4Fill,
    RiTeamFill,
    RiTodoFill,
    RiArrowDownSLine,
  } from "react-icons/ri";
//components
import Devlmg from './Devlmg'; 
import Badge from './Badge';
import Socials from './Socials';
const Hero = () => {
    return (
      <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat
      bg-bottom dark:bg-none">
        <div className="container mx-auto">
          <div className='flex justify-between gap-x-8'> 
            {/*text*/}
            <div>
              <div>Web Devloper</div>  
              <h1>Hello, I'm Poovendran.</h1>
              <p><Brief description with insights into myself, 
              my vocational journey,
              and what I engage in professionally.</p>
            {/*image*/}
            <div>image</div>
          </div>
          {/*icons*/}
          <div className='hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12
          animate-bounce'>
            <RiArrowDownSLine className='text-3xl text-primary'/>
          </div>
        </div>
    </section>
    );
};

export default Hero;