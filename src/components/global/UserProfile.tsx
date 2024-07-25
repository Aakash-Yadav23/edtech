"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Search, ShoppingCart, User, LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Mock user type
interface UserType {
  name: string;
  email: string;
  courses: string[];
}

const UserProfile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [user, setUser] = useState<UserType | null>(null);

  const handleLogin = () => {
    // Mock login
    setIsLoggedIn(true);
    setUser({
      name: "John Doe",
      email: "john@example.com",
      courses: ["React Basics", "Advanced TypeScript"],
    });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <div className="flex items-center justify-between px-4 py-2 bg-white  gap-4">
      {isLoggedIn ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="rounded-full bg-gray-200 p-1">
              <User size={24} />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>{user?.name}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <ShoppingCart className="mr-2 h-4 w-4" />
              <span>Cart</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>My Courses</DropdownMenuLabel>
            {user?.courses.map((course, index) => (
              <DropdownMenuItem key={index}>{course}</DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <>
          <Link
            href="/auth/signin"
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
          >
            Login
          </Link>
          <Link
            href="/auth/signup"
            className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
          >
            Sign up free
          </Link>
        </>
      )}
    </div>
  );
};

export default UserProfile;
