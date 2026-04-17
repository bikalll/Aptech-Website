"use client";

import React from "react";

export default function AboutSection() {
    return (
        <section id="about" className="relative w-full bg-[#F4F7F5] text-[#111111] py-32 sm:py-40 px-6 sm:px-8 overflow-hidden">

            {/* Abstract Background Element for Creative Touch */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#EBF0ED] rounded-full blur-[120px] opacity-60 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#D4A017] rounded-full blur-[150px] opacity-10 translate-y-1/3 -translate-x-1/4 pointer-events-none" />

            <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

                {/* Left Side: Headline & Quote */}
                <div className="w-full lg:w-1/2 flex flex-col">
                    <div className="flex items-center gap-4 mb-8">
                        <span className="w-12 h-[2px] bg-[#D4A017]"></span>
                        <span className="text-[#3A5A40] text-[13px] font-[700] tracking-[0.25em] uppercase">
                            Who We Are
                        </span>
                    </div>

                    <h2 className="text-[36px] sm:text-[48px] lg:text-[60px] font-[500] leading-[1.1] tracking-[-0.03em] text-[#1a1a1a]">
                        “One-Stop solution for <br className="hidden sm:block" />
                        <span className="text-[#3A5A40] italic font-light relative">
                            climate and environmental
                            <svg className="absolute w-full h-[6px] -bottom-1 left-0 text-[#D4A017] opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="transparent" />
                            </svg>
                        </span>
                        <br />
                        problems in Nepal”
                    </h2>
                </div>

                {/* Right Side: Description Content */}
                <div className="w-full lg:w-1/2 flex flex-col gap-8">

                    <div className="bg-white p-8 sm:p-12 rounded-[24px] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-[#EAE6DF] relative group hover:-translate-y-2 transition-transform duration-500">
                        <svg className="w-10 h-10 text-[#D4A017] opacity-20 absolute top-8 right-8" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                        <p className="text-[17px] sm:text-[19px] leading-[1.7] text-[#333333] font-[400]">
                            <strong className="font-[600] text-[#111111]">Aptech Lab</strong> is a pioneering, woman-led social innovation venture dedicated to addressing Nepal’s most critical climate and environmental challenges. We act as the vital bridge between global expertise and local ecosystems, engineering sustainable solutions that communities can seamlessly adopt, maintain, and scale.
                        </p>
                    </div>

                    <div className="pl-6 border-l-[3px] border-[#3A5A40]">
                        <p className="text-[16px] sm:text-[17px] leading-[1.8] text-[#555555] font-light">
                            Our methodology operates at the critical intersection of actionable climate resilience and robust ecosystem building. Whether deploying sustainable agricultural practices, structuring carbon offset mechanisms, or adapting practical environmental technologies, our approaches are deeply rooted in the pragmatic realities of Nepal.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}
