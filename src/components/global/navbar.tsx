'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { Search, ShoppingCart, User } from 'lucide-react';

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [cartItemCount, setCartItemCount] = useState(0);

    const handleLogin = () => {
        // Implement your login logic here
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        // Implement your logout logic here
        setIsLoggedIn(false);
    };

    return (
        <nav className="relative ">

            <header className="flex mx-auto items-center absolute w-full top-6  max-w-[1280px] left-0 right-0   rounded-[20px] justify-between px-4 md:px-10  py-5 bg-white shadow-md">
                <div className="flex items-center">
                    <Link href="/" className="text-2xl font-bold text-green-600">Skillhub</Link>
                
                </div>

                <nav className="hidden md:flex space-x-4">
                    <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
                    <Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link>
                    <Link href="/courses" className="text-gray-600 hover:text-gray-900">Courses</Link>
                    <Link href="/pages" className="text-gray-600 hover:text-gray-900">Pages</Link>
                    <Link href="/blog" className="text-gray-600 hover:text-gray-900">Blog</Link>
                    <Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
                </nav>

                <div className="flex items-center space-x-4">
                    <button className="text-gray-600 hover:text-gray-900">
                        <Search size={20} />
                    </button>
                    <button className="text-gray-600 hover:text-gray-900 relative">
                        <ShoppingCart size={20} />
                        {cartItemCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                                {cartItemCount}
                            </span>
                        )}
                    </button>
                    {isLoggedIn ? (
                        <button onClick={handleLogout} className="text-gray-600 hover:text-gray-900">
                            <User size={20} />
                        </button>
                    ) : (
                        <button onClick={handleLogin} className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
                            Login
                        </button>
                    )}
                    <Link href="/signup" className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600">
                        Sign up free
                    </Link>
                </div>
            </header>
        </nav>
    );
};

export default Header;