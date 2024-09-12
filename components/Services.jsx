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
      'I specialize in creating modern, intuitive, and responsive web designs that engage users and drive results. By focusing on user experience (UX) and clean aesthetics, I ensure each design is not only visually appealing but also highly functional across all platforms. From concept to execution, I blend creativity with strategy to deliver websites that reflect a brand’s identity while optimizing performance and accessibility.',
   },
   {
    icon: <Blocks size={72} strokeWidth={0.8}/>,
    title: 'Web Development',
    description:
      'I bring ideas to life through clean, efficient, and scalable code. Specializing in both front-end and back-end development, I create websites and web applications that are fast, secure, and highly functional. From translating design concepts into interactive user interfaces to developing robust back-end systems, my goal is to build seamless digital experiences that meet the evolving needs of users and businesses alike.',
   },
   {
    icon: <Gem size={72} strokeWidth={0.8}/>,
    title: 'App Development',
    description:
      'I create powerful, intuitive, and user-friendly mobile applications designed to meet diverse business needs. Whether its Android, iOS, or cross-platform development, I focus on delivering seamless performance and exceptional user experiences. From ideation to deployment, I ensure that each app is crafted with precision, optimized for performance, and built to scale, keeping users engaged and businesses ahead of the curve.',
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