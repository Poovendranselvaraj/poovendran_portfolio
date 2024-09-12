import { MailIcon, HomeIcon, PhoneCall } from "lucide-react"
// components
import Form from "@/components/Form"


const Contact= () => {
  return (
    <section>    
      <div className="container mx-auto">
        {/*text & illustration*/}
        <div className="flex xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          {/*text*/}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
             <span className="w-[30px] h-[2px] bg-primary"></span>
             Say Hello👋
            </div> 
            <h1>Let’s Build Something Great Together.</h1>
            <p className="subtitle max-w-[480px]">          
                I'm always open to exciting opportunities and projects. If you have an idea or want to collaborate, don’t hesitate to reach out.
            </p>
            <h1> Let's Connect!</h1>
            <p className="subtitle max-w-[480px]">          
              I’m always excited to meet new people and hear about innovative ideas. Drop me a line if you think we’d be a good fit.           
             </p>
             <h1> Let’s Create Awesome Experiences.</h1>
            <p className="subtitle max-w-[480px]">          
              I'm passionate about coding/designing solutions that make a difference. Let's work together to build something impactful.
            </p>
          </div>
          {/*illustration*/}
          <div className="hidden xl:flex w-full bg-contact_illustration_light
          dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat"></div>
        </div>
        {/*info text & form*/}
        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
          {/*info text*/}
          <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base
          xl:text-lg">
            {/*mail*/}
            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className="text-primary"/>
              <div>poovendranselvaraj333@gmail.com</div>
            </div>
            {/*address*/}
            <div className="flex items-center gap-x-8">
              <HomeIcon size={18} className="text-primary"/>
              <div>Sathyamangalam.ERODE-638401.</div>
            </div>
            {/*phone*/}
            <div className="flex items-center gap-x-8">
              <PhoneCall size={18} className="text-primary"/>
              <div>+91 908-076-5106</div>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </section>

  )
}

export default Contact  