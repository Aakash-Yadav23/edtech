"use client"
import React from 'react';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";
import { useToast } from '../ui/use-toast';

interface CourseCardProps {
    imageSrc: string;
    title: string;
    instructor: string;
    rating: string;
    level: string;
    students: string;
    price: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ imageSrc, title, instructor, rating, level, students, price }) => {
    const { toast } = useToast()

    const addToCart = () => {

        toast({
            title: "Course Added to cart!"
        })
    }

    return (
        <div className="max-w-sm rounded-[40px] text-black overflow-hidden shadow-lg">
            <div className="relative">
                <Image className="w-full" src={imageSrc} alt="Course Image" width={400} height={200} />
                <div onClick={addToCart} className='save absolute top-4 group-hover:text-white bg-white hover:opacity-100 transition-all eas duration-500 cursor-pointer opacity-50 p-4 hover:bg-orange-500 rounded-full right-4'>
                    <Heart className='text-gray-500 group-hover:text-white ' />
                </div>
                <div className="absolute top-8 rounded-sm left-8 bg-orange-500 text-white py-1 px-3 rounded-br-lg">Trending</div>

                <div className="absolute bottom-[-50px] right-4 bg-orange-500  border-white border-[8px] text-center text-white w-[90px] flex items-center justify-center h-[90px] rounded-full ">${price}</div>
            </div>
            <div className="px-6 py-4">
                <div className="flex items-center mb-4">
                    <Image className="w-10 h-10 rounded-full mr-4" src={imageSrc} alt="Instructor Image" width={40} height={40} />
                    <div className="text-sm">
                        <p className="text-gray-900 leading-none">{instructor}</p>
                    </div>
                </div>
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">
                    <span className="flex text-sm items-center">
                        <span className="mr-2">⭐ {rating}</span>
                        <span className="mr-2">📘 {level}</span>
                        <span>👥 {students}+ Students</span>
                    </span>
                </p>
            </div>
            <div className="px-6 pt-4 pb-6">
                <Button className="bg-transparent border transition-all ease-in-out duration-700 border-orange-500 hover:bg-orange-500 text-orange-500 hover:text-white px-8 py-8 rounded-full">
                    Enroll Now <ArrowRight className="ml-2" />
                </Button>
            </div>
        </div>
    );
};

export default CourseCard;
