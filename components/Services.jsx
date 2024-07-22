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
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quasi libera quidem sit deserunt fuga.',
   },
   {
    icon: <Blocks size={72} strokeWidth={0.8}/>,
    title: 'Web Development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quasi libera quidem sit deserunt fuga.',
   },
   {
    icon: <Gem size={72} strokeWidth={0.8}/>,
    title: 'App Development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quasi liberaquidem sit deserunt fuga.',
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