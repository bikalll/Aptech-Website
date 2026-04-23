"use client";

import React, { useState } from "react";
import Image from "next/image";

const projects = [
    {
        id: 1,
        title: "Biochar Integration",
        category: "SOIL RESTORATION",
        description: "Equipping smallholder farmers with advanced biochar application techniques to reverse soil degradation and establish long-lasting carbon sinks over the long term.",
        image: "/works/biochar.jpg",
        location: "Kavre, Nepal",
        metrics: [
            { value: "120+", label: "FARMERS" },
            { value: "10+", label: "PARTNERSHIPS" }
        ]
    },
    {
        id: 2,
        title: "Climate Workshop",
        category: "EDUCATION",
        description: "Facilitating intensive, community-first workshops to actively educate and empower local voices on pragmatic ecosystem building and climate resilience strategies.",
        image: "/works/community.jpg",
        location: "Kathmandu, Nepal",
        metrics: [
            { value: "50+", label: "COMMUNITIES" },
            { value: "3,000+", label: "PARTICIPANTS" }
        ]
    }
];

export default function ProjectsSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeProject = projects[activeIndex];

    return (
        <section className="relative w-full min-h-[100vh] lg:min-h-[800px] flex items-center justify-center overflow-hidden bg-black">

            {/* Full Viewport Background Imagery */}
            {projects.map((project, index) => (
                <div
                    key={project.id}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${activeIndex === index ? "opacity-100 z-0" : "opacity-0 z-0 pointer-events-none"
                        }`}
                >
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover opacity-60"
                        unoptimized
                        priority={index === 0}
                    />
                </div>
            ))}

            {/* Gradient Overlays for Text Legibility */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 via-transparent to-black/40" />

            {/* Main Content Container */}
            <div className="relative z-20 w-full h-full max-w-[1400px] mx-auto px-6 sm:px-12 flex flex-col justify-between pt-24 pb-48 lg:pb-32">

                {/* Top Title */}
                <div className="w-full text-center absolute top-24 left-0 right-0">
                    <h2 className="text-white text-[40px] sm:text-[56px] font-bold tracking-tight">
                        Our Projects
                    </h2>
                </div>

                {/* Center Content Row */}
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full mt-32 lg:mt-48 gap-12">

                    {/* Left Typography Focus */}
                    <div className="w-full lg:w-1/2 flex flex-col items-start min-h-[300px]">
                        <div
                            key={activeProject.id}
                            className="animate-fade-in-up"
                        >
                            <span className="inline-block px-4 py-1.5 border border-white/20 rounded-full text-white text-[11px] font-bold tracking-[0.2em] uppercase mb-6 backdrop-blur-sm bg-black/20">
                                {activeProject.category}
                            </span>
                            <h3 className="text-white text-[48px] sm:text-[64px] lg:text-[72px] font-bold leading-[1.05] mb-6 tracking-tight drop-shadow-[0_0_30px_rgba(255,255,255,0.15)]">
                                {activeProject.title}
                            </h3>
                            <p className="text-[16px] sm:text-[18px] text-white/90 font-light leading-relaxed max-w-lg">
                                {activeProject.description}
                            </p>
                        </div>
                    </div>

                    {/* Right Metrics Stack */}
                    <div className="w-full lg:w-[30%] flex flex-row lg:flex-col gap-8 lg:gap-16 justify-end items-start lg:items-end min-h-[200px]">
                        {activeProject.metrics.map((metric, i) => (
                            <div key={i} className="flex flex-col items-start lg:items-end animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
                                <div className="text-[#D4A017] text-[40px] lg:text-[56px] font-semibold leading-none mb-2">
                                    {metric.value}
                                </div>
                                <div className="text-white text-[12px] lg:text-[14px] font-bold tracking-[0.2em]">
                                    {metric.label}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            {/* Bottom Thumbnails Navigation */}
            <div className="absolute bottom-8 left-0 w-full z-30 px-6 sm:px-12">
                <div className="max-w-[1400px] mx-auto flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                    {projects.map((project, index) => (
                        <button
                            key={project.id}
                            onClick={() => setActiveIndex(index)}
                            className={`relative w-[180px] h-[120px] rounded-[16px] overflow-hidden flex-shrink-0 transition-all duration-300 focus:outline-none text-left flex flex-col justify-end p-3 ${activeIndex === index
                                ? "border-2 border-[#D4A017] ring-4 ring-[#D4A017]/30 scale-100 z-10 opacity-100 shadow-[0_0_20px_rgba(212,160,23,0.3)]"
                                : "border border-white/10 opacity-60 scale-95 hover:opacity-100 hover:scale-100 hover:ring-2 hover:ring-white/20"
                                }`}
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover -z-10"
                                unoptimized
                            />
                            <div className={`absolute inset-0 -z-10 ${activeIndex === index ? "bg-black/30" : "bg-black/60"}`} />

                            <span className="text-white/80 text-[9px] font-bold tracking-wider uppercase drop-shadow-md">
                                {project.title}
                            </span>
                            <span className="text-white font-medium text-[12px] drop-shadow-md truncate w-full">
                                {project.location}
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Global animation style block for the fade-in-up effect across layout swaps */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                    animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}} />
        </section>
    );
}
