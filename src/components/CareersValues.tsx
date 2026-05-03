"use client";

import React from "react";

const values = [
    {
        title: "Impact First",
        description: "Every decision is measured against real-world ecological restoration and community empowerment.",
        icon: "01"
    },
    {
        title: "Radical Transparency",
        description: "We build open systems for climate finance. Trust and integrity are our defaults.",
        icon: "02"
    },
    {
        title: "Community Driven",
        description: "We build solutions that serve the stewards of the earth, ensuring technology works with communities, not against them.",
        icon: "03"
    },
    {
        title: "Iterative Excellence",
        description: "We move quickly but thoughtfully, knowing the stakes of climate action demand both speed and precision.",
        icon: "04"
    }
];

export default function CareersValues() {
    return (
        <section className="relative w-full py-28 sm:py-40 px-6 sm:px-8 bg-[#DCEAE0] overflow-hidden">
            {/* Ambient glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C1D6C8] rounded-full blur-[120px] opacity-60 -translate-y-1/3 translate-x-1/4 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#3A5A40] rounded-full blur-[150px] opacity-[0.1] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

            <div className="max-w-[1400px] mx-auto relative z-10">
                <div className="w-full flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-3xl">
                        <h2 className="text-[#3A5A40] text-[13px] font-[700] tracking-[0.25em] uppercase mb-8 flex items-center gap-4">
                            <span className="w-8 h-[1px] bg-[#3A5A40]"></span>
                            Why Join Us
                        </h2>
                        <h3 className="text-[40px] sm:text-[56px] lg:text-[72px] font-[500] leading-[1.05] tracking-[-0.02em] text-[#111111]">
                            Our core <span className="text-[#648460] italic font-light">principles</span>
                        </h3>
                    </div>
                    <div className="max-w-[360px]">
                        <p className="text-[17px] text-[rgba(0,0,0,0.6)] leading-relaxed font-light">
                            We operate at the intersection of nature, community, and systems. These principles guide everything we do.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full">
                    {values.map((val, idx) => (
                        <div
                            key={idx}
                            className="group relative bg-[#F4F8F5] rounded-[2rem] p-8 lg:p-10 flex flex-col gap-6 transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-2 hover:bg-[#3A5A40] border border-[#CDD8D1] hover:border-[#3A5A40] overflow-hidden hover:shadow-[0_40px_60px_-15px_rgba(58,90,64,0.3)] cursor-pointer"
                        >
                            {/* Animated background gradient flare */}
                            <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-[800ms] ease-out translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>

                            <div className="flex justify-between items-start">
                                <div className="w-14 h-14 rounded-full bg-white group-hover:bg-[#466B4C] flex items-center justify-center text-[#3A5A40] group-hover:text-white shadow-sm transition-all duration-500 group-hover:scale-110">
                                    <span className="text-[15px] font-[700] tracking-widest font-mono">{val.icon}</span>
                                </div>
                            </div>

                            <div className="flex flex-col gap-3">
                                <h4 className="text-[28px] sm:text-[32px] font-[500] tracking-tight text-[#111111] group-hover:text-white transition-colors duration-500 leading-[1.1]">
                                    {val.title}
                                </h4>
                                <p className="text-[16px] text-[#4A5D50] group-hover:text-[#E2EAE4] leading-relaxed transition-colors duration-500 font-light">
                                    {val.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
