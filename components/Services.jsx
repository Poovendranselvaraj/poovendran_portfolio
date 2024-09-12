import { GanttChartSquare, Blocks, Gem } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Description } from "@radix-ui/react-dialog"
const ServicesData = [
   {
    icon: <GanttChartSquare size={72} strokeWidth={0.8}/>,
    title: 'Web Design',
    description:
      'I create modern, responsive websites that combine intuitive user experience with clean aesthetics. My designs are both visually appealing and functional, ensuring they perform well on all devices and reflect a brand’s identity.',
   },
   {
    icon: <Blocks size={72} strokeWidth={0.8}/>,
    title: 'Web Development',
    description:
      'I turn ideas into functional, scalable websites and applications with clean, efficient code. Specializing in both front-end and back-end, I ensure fast, secure, and interactive digital experiences that meet the needs of users and businesses.',
   },
   {
    icon: <Gem size={72} strokeWidth={0.8}/>,
    title: 'App Development',
    description:
      'I develop intuitive, high-performance mobile apps for Android, iOS, and cross-platform. From concept to launch, I ensure seamless functionality and exceptional user experiences, keeping your business ahead with scalable and engaging solutions.',
   }, 
] 

const Services = () => {
  return (
    <section className="mb-12 xl:mb-36">
        <div className="container mx-auto">
            <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
                My Services
            </h2>
            {/* grid items */}
            <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
                {ServicesData.map((item, index) => {
                  return (
                    <Card 
                      className='w-full max-w-[424px] h-[300px] flex flex-col     pt-16 pb-10 justify-center items-center relative' 
                      key={index}
                    >
                      <CardHeader className='text-primary adsolute -top-[60px]'>
                        <div className="w-[140px] h-[80px] bg-pink-100 dark:bg-background flex justify-center items-center">
                          {item.icon}
                        </div>
                      </CardHeader>
                      <CardContent className='text-center'>
                        <CardTitle className='mb-4'>{item.title}</CardTitle>
                        <CardDescription className='text-lg'>
                          {item.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  )
                })}
            </div>  
         </div>
    </section>
  )
}

export default Services 