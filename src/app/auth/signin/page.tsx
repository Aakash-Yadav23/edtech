"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Mail, Globe, Lock, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logos/logo.png";

const Signin: React.FC = () => {
  return (
    <div className="max-w-full pt-10 bg-white h-screen text-black flex flex-col md:flex-row">
      <div className="w-full max-w-[700px] mx-auto p-8 md:p-24">
        <nav className="flex w-full md:p-0">
          <Image
            src={logo.src}
            alt="logo"
            width={logo.width}
            height={logo.height}
            className="object-contain"
          />
        </nav>
        <div className="text-4xl leading-12 tracking-tight text-gray-900 font-bold md:mt-6">
          Get Started With Skillhub
        </div>
        <form className="mt-6 md:mt-10">
          <div className="mb-4">
            <Label className="block text-sm font-medium text-gray-700">
              Email
            </Label>
            <div className="relative mt-1 rounded-md shadow-sm">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                <Mail className="w-5 h-5" />
              </span>
              <Input
                type="email"
                placeholder="Your Email"
                className="pl-10 bg-gray-100 outline-none focus:outline-white"
              />
            </div>
          </div>

          <div className="mb-4">
            <Label className="block text-sm font-medium text-gray-700">
              Password
            </Label>
            <div className="relative mt-1 rounded-md shadow-sm">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                <Lock className="w-5 h-5" />
              </span>
              <Input
                type="password"
                placeholder="Password"
                className="pl-10 bg-gray-100 outline-none focus:outline-white"
              />
            </div>
          </div>
          <Button className="w-full h-14 justify-center py-4 font-medium text-sm leading-5 tracking-tight mt-7">
            Log in
          </Button>
          <div className="text-xs mt-4 leading-6 tracking-tight text-center">
            Already have an account?{" "}
            <Link href="/auth/signup" className="text-primary">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
