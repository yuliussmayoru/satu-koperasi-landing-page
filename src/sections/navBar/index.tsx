"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { useState } from "react";
import {baseURL} from "../../api";

export function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex items-center justify-between md:pr-8 md:pl-8 lg:justify-around p-4 bg-[#007654] text-white relative w-full z-30 top-0 sticky">
            <h1>Koperasi Satu</h1>

            <ul className="lg:gap-24 hidden md:hidden lg:flex">
                <Link href="#hero-section"><li>Home</li></Link>
                <Link href="#services-section"><li>Services</li></Link>
                <Link href="#feature-section"><li>Features</li></Link>
                <Link href="#pricing-section"><li>Pricing</li></Link>
                <Link href="#testimonials-section"><li>Testimonials</li></Link>
                <Link href="#blog-section"><li>Blog</li></Link>
                <Link href="#contact-section"><li>Contact</li></Link>
            </ul>

            <div className="flex">
                <Link href={`${baseURL}`} className="hidden md:hidden lg:block">
                    Login
                </Link>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="ml-4 hover:bg-green-600 p-2 rounded lg:hidden"
                    aria-label="Open Menu"
                    id="openMenu"
                >
                    <Bars3Icon className="w-6 h-6 font-bold" />
                </button>
            </div>

            {/* Side Menu */}
            <div
                className={`fixed h-screen top-0 right-0 bg-white p-4 text-[#007654] z-50 flex flex-col justify-between w-3/4 md:w-1/3 lg:w-1/4 transform transition-transform duration-300 ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div>
                    <div className="flex justify-between items-center gap-14">
                        <h1 className="font-bold text-2xl">Koperasi Satu</h1>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="mt-2"
                            aria-label="Close Menu"
                            id="closeMenu"
                        >
                            <XMarkIcon className="w-8 h-8 font-bold" />
                        </button>
                    </div>
                    <ul className="flex flex-col gap-4 mt-4 ml-4">
                        <li className="border-b border-[#007654] pb-4">Home</li>
                        <li className="border-b border-[#007654] pb-4">Services</li>
                        <li className="border-b border-[#007654] pb-4">
                            Features
                        </li>
                        <li className="border-b border-[#007654] pb-4">Pricing</li>
                        <li className="border-b border-[#007654] pb-4">Testimonials</li>
                        <li className="border-b border-[#007654] pb-4">Blog</li>
                        <li className="border-b border-[#007654] pb-4">Contact</li>
                    </ul>
                </div>
                <Link
                    href="/login"
                    className="w-full bg-[#007654] text-white text-center py-2 rounded hover:bg-green-600"
                >
                    Login
                </Link>
            </div>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed h-screen w-screen top-0 left-0 bg-black opacity-50 z-40"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}
        </div>
    );
}
