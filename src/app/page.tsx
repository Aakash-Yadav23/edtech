"use client";
import { useState } from "react";
import Image from "next/image";
import studentWithBook from "@/assets/images/student.png";
import { Button } from "@/components/ui/button";
import { ArrowRight, Send } from "lucide-react";
import googlePng from "@/assets/logos/google.png";
import fbPng from "@/assets/logos/fb.png";
import microsoftPng from "@/assets/logos/microsoft.png";
import amazonPng from "@/assets/logos/amazon.png";
import Courselist from "../components/course/courselist";
import img from "@/assets/images/image.png";
import comma from "@/assets/images/comma.png";
import commacolor from "@/assets/images/commacolor.png";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <main className="bg-white p-2 ">
      <div className="flex flex-col ">
        <section className="darkgreen rounded-md text-white px-5 md:px-10 lg:px-20 grid grid-cols-1 md:grid-cols-2 ">
          <div className="flex m-auto text-6xl font-bold flex-col ">
            <p className="">Explore tailored</p>
            <p className="">
              <span className="italic lighttext pr-2">Courses</span>
              to enhance
            </p>
            <p className="">
              your professional
              <span className="italic lighttext px-2">Skills</span>
              <span className="block font-normal text-sm py-5">
                Discover innovative methods to transform your skills and
                professional life.
              </span>
            </p>

            <div className="buttons-here ">
              <Button className="organgebg hover:border-b-4 border-orange-500 button px-10 py-8 rounded-full text-white">
                Explore for courses
                <ArrowRight />
              </Button>
            </div>
          </div>

          <div className="w-full">
            <Image
              src={studentWithBook.src}
              height={studentWithBook.height}
              width={studentWithBook.width}
              alt="Student holdig book in his hand"
              // blur={studentWithBook.blurWidth}

              className="w-full h-auto object-contain max-h-[800px]"
            />
          </div>
        </section>

        {/* py-20 rounded-md md:py-5 min-h-screen max-w-screen  px-5 md:px-10 lg:px-20  overflow-x-hidden  */}
        <section className="text-center pt-10  px-5 md:px-10 lg:px-20">
          <div className="flex flex-wrap items-center justify-center px-10 py-5  mb-10 w-fit gap-4 border border-gray-200  rounded-md mx-auto">
            <div className="">
              <Image
                src={googlePng.src}
                width={googlePng.width}
                height={googlePng.height}
                alt="google"
                className="w-[100px] object-contain"
              />
            </div>
            <div className="">
              <Image
                src={fbPng.src}
                width={fbPng.width}
                height={fbPng.height}
                alt="facebook"
                className="w-[100px] object-contain"
              />
            </div>
            <div className="">
              <Image
                src={amazonPng.src}
                width={amazonPng.width}
                height={amazonPng.height}
                alt="amazon"
                className="w-[100px] object-contain"
              />
            </div>
            <div className="">
              <Image
                src={microsoftPng.src}
                width={microsoftPng.width}
                height={microsoftPng.height}
                alt="microsoft"
                className="w-[100px] object-contain"
              />
            </div>
          </div>
          <div className="text-5xl flex flex-col gap-3 font-black text-black">
            <p className="">Accessing your</p>

            <p className=" ">
              <span className="italic text-orange-500 pr-2">course</span>
              anywhere to learn
            </p>
            <p>
              new skill for grow your
              <span className="text-orange-500">Career</span>
            </p>
            <br />
            <p className="text-gray-600 font-normal text-sm">
              In recent years, the popularity of onlidne learning has surged,
              providing individuals with a flexible and convenient avenue to
              pursue education.
            </p>
          </div>
        </section>

        <section className="py-10  px-5 md:px-10 lg:px-20">
          <Courselist />
        </section>

        <section className="testomonial text-white py-10 px-5 flex flex-col gap-20 md:px-10 lg:px-20 p h-screen darkgreen rounded-[20px]">
          <p className="text-5xl pt-10 font-bold text-center">
            Feedback from
            <span className="block pr-2">
              Our
              <span className="italic pl-2 text-orange-500">Student</span>
            </span>
          </p>

          <div className="flex">
            <TestimonialCard
              testimonial="What a great course so far! Very easy to follow, clear, and concise. Great instructor. Just subscribed to your group."
              name="Oliva Marry"
              role="Student"
              imageSrc={img.src}
            />
          </div>
        </section>

        <section className="newletter py-10 ">
          <SubscribeNewsletter />
        </section>

        <section className="section text-white rounded-[20px] text-4xl flex flex-col darkgreen py-20 my-10 items-center justify-center gap-8 px-5 md:px-10 lg:px-20">
          <p className="text-[4rem] text-center">
            Are you prepared to
            <span className="block mt-8 text-orange-500">begin Learning</span>
          </p>
          <Button className="organgebg hover:border-b-4 border-orange-500 button px-10 py-8 rounded-full text-white">
            Get Started
            <ArrowRight />
          </Button>
        </section>
      </div>

      <br />
    </main>
  );
}

interface TestimonialCardProps {
  testimonial: string;
  name: string;
  role: string;
  imageSrc: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  name,
  role,
  imageSrc,
}) => {
  return (
    <div className="rounded-[20px] border-b-8 border-orange-500 flex flex-col gap-8 p-8 shadow-lg max-w-[900px]  mx-auto bg-white relative">
      <div className=" text-orange-500 ">
        <Image
          src={commacolor.src}
          alt="quoteds"
          width={commacolor.width}
          height={commacolor.height}
        />
      </div>
      <p className="text-lg md:text-2xl lg:text-4xl font-medium italic text-gray-700 leading-relaxed  ">
        {testimonial}
      </p>
      <div className="flex items-center ">
        <Image
          className="w-12 h-12 rounded-full"
          src={imageSrc}
          alt={name}
          width={48}
          height={48}
        />
        <div className="ml-4">
          <p className="text-gray-900 font-bold">{name}</p>
          <p className="text-gray-600">{role}</p>
        </div>
      </div>
      <div className="absolute bottom-0 right-3 text-orange-500 ">
        <Image
          src={comma.src}
          alt="quoteds"
          width={commacolor.width}
          height={commacolor.height}
          className="w-[100px]"
        />
      </div>{" "}
    </div>
  );
};

const SubscribeNewsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log("Subscribed with email:", email);
    setIsSubscribed(true);
    setEmail("");
  };

  return (
    <div className="bg-gradient-to-r from-purple-500 to-indigo-600 px-20 py-20 rounded-lg shadow-xl max-w-[800px] mx-auto">
      <h2 className="text-3xl font-bold text-white mb-4">
        Subscribe to Our Newsletter
      </h2>
      <p className="text-white mb-6">
        Stay updated with our latest news and special offers!
      </p>

      {isSubscribed ? (
        <div
          className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded"
          role="alert"
        >
          <p className="font-bold">Thank you for subscribing!</p>
          <p>You &apos ll receive our next newsletter soon.</p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-grow px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-300 text-gray-800 font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out flex items-center justify-center"
          >
            Subscribe
            <Send size={18} className="ml-2" />
          </button>
        </form>
      )}

      <div className="mt-6 text-sm text-white opacity-75">
        <p>We respect your privacy. Unsubscribe at any time.</p>
      </div>
    </div>
  );
};
