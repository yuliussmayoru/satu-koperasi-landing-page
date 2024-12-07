"use client";

import { useState, useEffect } from "react";
import { dummyTestimonials } from "../api/dummyTestimonials";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/16/solid";

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(1); // Default to 1 item for server-side rendering
    const autoMoveInterval = 5000; // Auto-move every 5 seconds

    const testimonials = dummyTestimonials;

    const updateItemsToShow = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth >= 1024) {
            setItemsToShow(3); // lg
        } else if (screenWidth >= 768) {
            setItemsToShow(2); // md
        } else {
            setItemsToShow(1); // sm or smaller
        }
    };

    useEffect(() => {
        updateItemsToShow();
        window.addEventListener("resize", updateItemsToShow);
        return () => window.removeEventListener("resize", updateItemsToShow);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide(); // Automatically move to the next slide
        }, autoMoveInterval);

        return () => clearInterval(interval); // Clear interval on unmount
    }, [currentIndex]);


    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex - 1 + testimonials.length) % testimonials.length
        );
    };

    return (
        <div className="relative w-full max-w-7xl mx-auto px-4">
            <div id="carouselWrapper" className="overflow-hidden relative h-96">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                        transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
                    }}
                >
                    {testimonials.map((item, i) => (
                        <div
                            key={i}
                            id="carouselCard"
                            className={`flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-2`} // Gap restored with `px-2`
                        >
                            <div className="w-full flex flex-col gap-2 border border-gray-200 rounded-lg p-4 shadow-xl">
                                <p>{item.title}</p>
                                <p>{item.description}</p>
                                <div className="flex gap-4">
                                    <div className="w-24 h-24 rounded-full overflow-hidden bg-slate-400">
                                        <img
                                            src={item.imgSrc}
                                            alt={item.alt}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2 justify-center">
                                        <p className="font-bold text-lg text-[#007654]">
                                            {item.clientName}
                                        </p>
                                        <p className="text-sm font-bold">{item.clientJob}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex gap-4 absolute bottom-8 left-1/2 transform -translate-x-1/2">
                    <button
                        onClick={prevSlide}
                        className="p-2 rounded-full bg-white text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    >
                        <ArrowLeftIcon className="w-4 h-4" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="p-2 rounded-full bg-white text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    >
                        <ArrowRightIcon className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}
