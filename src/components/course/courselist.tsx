import React from 'react'
import CourseCard from './coursecard'
import img from "@/assets/images/image.png"

const courselist = () => {
    return (
        <div className='flex justify-between flex-wrap gap-8 items-center'>
            <CourseCard
                imageSrc={img.src}
                title="Web Development For Beginners How To Use HTML5"
                instructor="Jackie Rippin"
                rating="4.9 Rating"
                level="Beginner"
                students="5K+"
                price="19.00"
            />

            <CourseCard
                imageSrc={img.src}
                title="Web Development For Beginners How To Use HTML5"
                instructor="Jackie Rippin"
                rating="4.9 Rating"
                level="Beginner"
                students="5K+"
                price="19.00"
            />   <CourseCard
                imageSrc={img.src}
                title="Web Development For Beginners How To Use HTML5"
                instructor="Jackie Rippin"
                rating="4.9 Rating"
                level="Beginner"
                students="5K+"
                price="19.00"
            />   <CourseCard
                imageSrc={img.src}
                title="Web Development For Beginners How To Use HTML5"
                instructor="Jackie Rippin"
                rating="4.9 Rating"
                level="Beginner"
                students="5K+"
                price="19.00"
            />   <CourseCard
                imageSrc={img.src}
                title="Web Development For Beginners How To Use HTML5"
                instructor="Jackie Rippin"
                rating="4.9 Rating"
                level="Beginner"
                students="5K+"
                price="19.00"
            />   <CourseCard
                imageSrc={img.src}
                title="Web Development For Beginners How To Use HTML5"
                instructor="Jackie Rippin"
                rating="4.9 Rating"
                level="Beginner"
                students="5K+"
                price="19.00"
            />
        </div>
    )
}

export default courselist
