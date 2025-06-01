"use client";

import { useState, useEffect, useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
    {
        id: 1,
        content:
            "H & J Accounting has changed how we manage our finances. Their advice saved us thousands last year alone.",
        author: "Hugh Jackson",
        position: "",
    },
    {
        id: 2,
        content:
            "Their proactive approach and attention to detail are unmatched.",
        author: "Lachlan Ram",
        position: "",
    },
    {
        id: 3,
        content:
            "The team at H & J provides a service that makes mind-boggling accounting simple to understand.",
        author: "Bridgette Fox",
        position: "",
    },
];

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);
    const timeoutRef = useRef(null);

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(() => {
            setActiveIndex((prevIndex) =>
                prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
            );
        }, 6000);

        return () => resetTimeout();
    }, [activeIndex]);

    return (
        <section className="py-16 md:py-24 relative bg-gray-100 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute left-0 top-0 w-1/2 h-full">
                <div className="absolute transform rotate-12 -left-48 top-20 h-20 w-[600px] bg-teal-500 opacity-10"></div>
            </div>
            <div className="absolute right-0 bottom-0 w-1/2 h-full">
                <div className="absolute transform -rotate-12 -right-48 bottom-20 h-20 w-[600px] bg-orange-500 opacity-10"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <div className="inline-block mb-4">
                        <span className="bg-gray-200 text-gray-700 px-4 py-1 font-medium text-sm skew-x-12 inline-block transform">
                            CLIENT TESTIMONIALS
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        What Our Clients Say
                    </h2>
                </div>

                <div className="max-w-4xl mx-auto relative">
                    <div className="relative h-[300px]">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={testimonial.id}
                                className={`absolute top-0 left-0 w-full transition-all duration-500 ${
                                    index === activeIndex
                                        ? "opacity-100 translate-x-0"
                                        : index < activeIndex
                                        ? "opacity-0 -translate-x-full"
                                        : "opacity-0 translate-x-full"
                                }`}
                            >
                                <div className="bg-white p-8 md:p-12 shadow-lg border-l-4 border-teal-500">
                                    <Quote className="h-10 w-10 text-orange-400 mb-6" />
                                    <p className="text-lg md:text-xl italic mb-6 text-gray-700">
                                        "{testimonial.content}"
                                    </p>
                                    <div>
                                        <p className="font-bold">
                                            {testimonial.author}
                                        </p>
                                        <p className="text-gray-500">
                                            {testimonial.position}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                className={`w-3 h-3 mx-1 rounded-none ${
                                    index === activeIndex
                                        ? "bg-teal-500"
                                        : "bg-gray-300"
                                }`}
                                onClick={() => setActiveIndex(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
