"use client";

import React, { useState } from "react";
import Image from "next/image";

const areas = [
    {
        title: "Climate",
        num: "01",
        desc: "Carbon reduction mechanisms and macro-level resilience frameworks.",
        img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Water",
        num: "02",
        desc: "Sustainable water resource management and revitalization policies.",
        img: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Waste",
        num: "03",
        desc: "Circular economy integrations and proactive emission avoidance.",
        img: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Energy",
        num: "04",
        desc: "Transitioning infrastructure towards clean and renewable endpoints.",
        img: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Land",
        num: "05",
        desc: "Biochar integration and regenerative soil restoration models.",
        img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80"
    }
];

export default function CoreAreasSection() {
    const [hoveredIndex, setHoveredIndex] = useState<number>(0);

    return (
        <section className="w-full bg-[#111111] text-white py-24 sm:py-32 px-4 sm:px-8 border-t border-[rgba(255,255,255,0.05)] overflow-hidden">
            <div className="max-w-[1400px] mx-auto flex flex-col items-center">
                <h2 className="text-[#D4A017] text-[13px] font-[700] tracking-[0.25em] uppercase mb-4 flex items-center gap-4">
                    <span className="w-8 h-[1px] bg-[#D4A017]"></span>
                    Our Core Areas
                    <span className="w-8 h-[1px] bg-[#D4A017]"></span>
                </h2>
                <p className="text-white/60 mb-16 text-center max-w-lg text-[18px]">
                    Deploying Appropriate Technologies for Nepal across key environmental sectors.
                </p>

                {/* Desktop Expanding Cards */}
                <div className="hidden lg:flex w-full h-[550px] gap-4">
                    {areas.map((area, idx) => {
                        const isHovered = hoveredIndex === idx;
                        return (
                            <div
                                key={idx}
                                onMouseEnter={() => setHoveredIndex(idx)}
                                className={`relative h-full rounded-3xl overflow-hidden cursor-pointer transition-all duration-[700ms] ease-[cubic-bezier(0.25,1,0.3,1)] ${isHovered ? "w-[40%] bg-[rgba(255,255,255,0.08)] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-[rgba(212,160,23,0.4)]" : "w-[15%] bg-[rgba(255,255,255,0.02)] border-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.04)]"
                                    } flex flex-col justify-end p-8 xl:p-10 border`}
                            >
                                {/* Background Image */}
                                <div className={`absolute inset-0 transition-opacity duration-1000 ${isHovered ? 'opacity-40' : 'opacity-0'}`}>
                                    <Image
                                        src={area.img}
                                        alt={area.title}
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 800px"
                                        className="object-cover mix-blend-luminosity scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent" />
                                </div>

                                <div className="relative z-10 flex flex-col gap-3 h-full justify-between">
                                    <div className={`transition-all duration-700 ease-out transform ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-60 translate-y-2'}`}>
                                        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-[rgba(212,160,23,0.3)] bg-[rgba(212,160,23,0.1)] text-[15px] font-[700] text-[#D4A017] tracking-widest backdrop-blur-md">
                                            {area.num}
                                        </span>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h3 className={`font-[500] tracking-tight transition-all duration-700 whitespace-nowrap ${isHovered ? "text-[40px] xl:text-[48px] text-white" : "text-[24px] xl:text-[28px] text-[rgba(255,255,255,0.3)]"}`}>
                                            {area.title}
                                        </h3>
                                        <div
                                            className={`transition-all duration-700 ease-in-out overflow-hidden`}
                                            style={{ maxHeight: isHovered ? "100px" : "0px", opacity: isHovered ? 1 : 0 }}
                                        >
                                            <p className="text-[17px] text-[rgba(255,255,255,0.7)] font-light leading-relaxed mt-2">
                                                {area.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Mobile / Tablet Grid */}
                <div className="lg:hidden flex flex-col gap-6 w-full max-w-2xl mx-auto">
                    {areas.map((area, idx) => (
                        <div key={idx} className="relative w-full h-[220px] sm:h-[260px] rounded-[24px] overflow-hidden border border-[rgba(212,160,23,0.2)] p-8 flex flex-col justify-end shadow-xl group">
                            {/* Background Image */}
                            <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-500">
                                <Image
                                    src={area.img}
                                    alt={area.title}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 800px"
                                    className="object-cover mix-blend-luminosity duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/70 to-transparent" />
                            </div>

                            <div className="relative z-10 flex flex-col gap-3">
                                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[rgba(212,160,23,0.4)] bg-[rgba(212,160,23,0.2)] text-[13px] font-[700] text-[#D4A017] tracking-widest backdrop-blur-md">
                                    {area.num}
                                </span>
                                <h3 className="text-[32px] sm:text-[36px] font-[500] tracking-tight text-white leading-none">{area.title}</h3>
                                <p className="text-[15px] sm:text-[16px] text-[rgba(255,255,255,0.7)] font-light leading-relaxed max-w-[90%]">
                                    {area.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
