import React from 'react';
import Image from 'next/image';
import logo from "@/assets/logos/logo.png"

const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-white py-8">
            <div className="container mx-auto px-4 flex flex-wrap justify-between items-start">
                <div className="w-full md:w-1/4 mb-6 md:mb-0">
                    <Image src={logo.src} alt="Skillhub" width={150} height={50} />
                    <p className="mt-4">Get our newsletter, event invites, plus <span className="text-yellow-400">Product Insights</span></p>
                    <div className="mt-4 flex">
                        <input
                            type="email"
                            placeholder="Write your mail here..."
                            className="p-2 w-full rounded-l-lg bg-gray-800 placeholder-gray-500 focus:outline-none"
                        />
                        <button className="bg-orange-500 p-2 rounded-r-lg">➤</button>
                    </div>
                </div>
                <div className="w-full md:w-1/5 mb-6 md:mb-0">
                    <h4 className="font-bold">Courses</h4>
                    <ul className="mt-4 space-y-2">
                        <li>Creative</li>
                        <li>Animation</li>
                        <li>Web Design</li>
                        <li>Business</li>
                        <li>Marketing</li>
                    </ul>
                </div>
                <div className="w-full md:w-1/5 mb-6 md:mb-0">
                    <h4 className="font-bold">Company</h4>
                    <ul className="mt-4 space-y-2">
                        <li>About Us</li>
                        <li>Blog</li>
                        <li>Course</li>
                        <li>Instructor</li>
                        <li>404</li>
                    </ul>
                </div>
                <div className="w-full md:w-1/5 mb-6 md:mb-0">
                    <h4 className="font-bold">Help & Support</h4>
                    <ul className="mt-4 space-y-2">
                        <li>Help Guides</li>
                        <li>Course Status</li>
                        <li>Course Info</li>
                        <li>Privacy Policy</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="w-full md:w-1/5 mb-6 md:mb-0">
                    <h4 className="font-bold">Contact Us</h4>
                    <ul className="mt-4 space-y-2">
                        <li>Email: info@skillhub.info</li>
                        <li>Phone: (00) 123 456 789</li>
                        <li>Address: East Katharina, Mto city, New York - 1206</li>
                    </ul>
                </div>
            </div>
            <div className="container mx-auto px-4 mt-8 flex justify-between items-center">
                <p>© Skillhub 2024, Designed by Academine</p>
                <div className="flex space-x-4">
                    <a href="#" className="text-gray-400 hover:text-white">X</a>
                    <a href="#" className="text-gray-400 hover:text-white">F</a>
                    <a href="#" className="text-gray-400 hover:text-white">L</a>
                    <a href="#" className="text-gray-400 hover:text-white">I</a>
                    <a href="#" className="text-gray-400 hover:text-white">Y</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
