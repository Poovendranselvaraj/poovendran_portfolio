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
        job: 'Java Developer in Magizh Technologies',
        
        review:'Absolutely stunning work! Your designs are both visually captivating and incredibly user-friendly. Every project in your portfolio shows a keen eye for detail and creativity.',

    },
    {
        // avatar: '/reviews/avatar-2.png',
        name:'Ranjith kumar',
        job: 'Full stack developer in Magizh Technologies',

        review:
          'Your portfolio is a testament to your skill and dedication. The functionality and aesthetics of your web and app designs are top-notch. Truly impressive!',
    },
    {
        // avatar: '/reviews/avatar-3.png',
        name:'Gokul',
        job: 'Game Developer in Magizh Technologies',

        review:'Your work speaks for itself—innovative, stylish, and incredibly effective. Each piece in your portfolio demonstrates a high level of expertise and thoughtfulness.',
    },
    {
        // avatar: '/reviews/avatar-4.png',
        name:'Ashwin',
        job: 'Software Developer in Magizh Technologies',

        review:
          'I’m blown away by your portfolio! The clean, modern designs and seamless user experiences are exactly what we were looking for. Great job!',
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
              className="h-[280px]"
            >
                {reviewData.map((person, index) => {
                    return (
                        <SwiperSlide key={index}>
                           <Card className='bg-tertiary dark:bg-secondary/40 p-8  min-h-[200px]'>
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