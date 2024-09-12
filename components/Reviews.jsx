'use client'
import Image from "next/image"

import {
    Card,
    CardDescription, 
    CardHeader, 
    CardTitle,
} from '@/components/ui/card'


//import swiper react components
import {Swiper, SwiperSlide} from 'swiper/react' 

//import swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

//import required modules
import {Pagination} from 'swiper/modules'

const reviewData=[
    {
        // avatar: '/reviews/avatar-1.png',
        name:'HariPrasath',
        job: 'Java Developer',
        review:'Hari consistently exceeds expectations. His technical expertise, combined with his dedication to continuous learning, allows him to produce outstanding results. He is a reliable and proactive individual, always looking for ways to improve and optimize workflows.',

    },
    {
        // avatar: '/reviews/avatar-2.png',
        name:'Ranjith kumar',
        job: 'Full stack developer',
        review:
          'I’ve had the pleasure of collaborating with Hari on several projects, and his level of professionalism is truly impressive. He has a natural ability to communicate complex ideas clearly, making him an excellent team player and leader. His work ethic and attention to detail are second to none.',
    },
    {
        // avatar: '/reviews/avatar-3.png',
        name:'Gokul',
        job: 'Game Developer',
        review:'Technical skills are top-notch, and their approach to project management is both effective and inspiring. They have an innate ability to make complex projects manageable and successful.',
    },
    {
        // avatar: '/reviews/avatar-4.png',
        name:'Manoj Kumar',
        job: 'Software Developer',
        review:
          'Working with Hari has been an incredible experience. His ability to combine creativity with technical skills has resulted in top-tier solutions for our projects. His proactive nature and positive attitude make him a joy to work with.',
    },
   
]
const Reviews = () => {
  return (
    <section className="mb-12 xl:mb-32">
        <div className="container mx-auto">
            <h2 className="section-title mb-12 tetx-center mx-auto">Reviews</h2>
            {/*slider*/}
            <Swiper 
               slidesPerView={1}
               breakpoints={{
                 640: {slidesperView: 2},
                 1400: {slidesPerView: 3},
               }} 
               spaceBetween={30} 
               modules={[Pagination]} 
               pagination={{
                clickable:true,
              }}
              className="h-[350px]"
            >
                {reviewData.map((person, index) => {
                    return (
                        <SwiperSlide key={index}>
                           <Card className='bg-tertiary dark:bg-secondary/40 p-8  min-h-[300px]'>
                            <CardHeader className='p-0 mb=10'>
                                <div className="flex items-center gap-x-4">
                                    {/* image */}
                                    {/* <Image 
                                       src={person.avatar}
                                       width={70}
                                       height={70}
                                       alt=''
                                       priority
                                    /> */}
                                    {/*name*/}
                                    <div className="flex flex-col">
                                        <CardTitle>{person.name}</CardTitle>
                                        <p>{person.job}</p>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardDescription className='text-lg text-muted-foreground'> 
                                {person.review}                             
                            </CardDescription>
                           </Card>
                        </SwiperSlide>
                    )
                })}
            </Swiper> 
        </div >   
    </section>
    
  )
}

export default Reviews