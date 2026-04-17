"use client";

import React from "react";

const services = [
    {
        num: "01",
        title: "Climate Finance & Strategy",
        description: "Architecting bespoke carbon projects. We engineer robust Measurement, Reporting, and Verification (MRV) systems designed to unlock institutional capital and drive tangible, audited environmental impact.",
    },
    {
        num: "02",
        title: "Market Intelligence",
        description: "Deep-tier policy analysis and multi-variable feasibility studies. We provide the empirical clarity required to confidently navigate complex socio-ecological and regulatory environments in emerging economies.",
    },
    {
        num: "03",
        title: "Community Mobilization",
        description: "Executing on the ground. From deploying biochar technological systems to localized soil restoration, we orchestrate field operations that directly elevate smallholder farmer livelihoods.",
    }
];

export default function ServicesSection() {
    return (
        <section id="services" className="relative w-full bg-[#DCEAE0] text-[#111111] pt-32 pb-40 px-6 sm:px-8">
            <div className="max-w-[1400px] mx-auto">
                {/* Section Header */}
                <div className="w-full flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
                    <div className="max-w-3xl">
                        <h2 className="text-[#3A5A40] text-[13px] font-[700] tracking-[0.25em] uppercase mb-8 flex items-center gap-4">
                            <span className="w-8 h-[1px] bg-[#3A5A40]"></span>
                            Our Core Pillars
                        </h2>
                        <h3 className="text-[40px] sm:text-[56px] lg:text-[72px] font-[500] leading-[1.05] tracking-[-0.02em]">
                            Bridging global <span className="text-[#648460] italic font-light">foresight</span>
                            <br /> with localized execution.
                        </h3>
                    </div>
                    <div className="max-w-[360px]">
                        <p className="text-[17px] text-[rgba(0,0,0,0.6)] leading-relaxed font-light">
                            We operate at the critical intersection of environmental innovation and socio-economic resilience, building scalable mechanisms for tomorrow&apos;s climate.
                        </p>
                    </div>
                </div>

                {/* Editorial Service Rows */}
                <div className="flex flex-col w-full border-t border-[#CDD8D1]">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group flex flex-col lg:flex-row w-full border-b border-[#CDD8D1] py-12 lg:py-16 items-start lg:items-center relative transition-colors duration-500 hover:bg-[#E1E8E4] overflow-hidden cursor-pointer"
                        >
                            <div className="w-full lg:w-[15%] mb-6 lg:mb-0">
                                <span className="text-[16px] font-[500] text-black/30 group-hover:text-[#3A5A40] transition-colors duration-500">
                                    {service.num}
                                </span>
                            </div>

                            <div className="w-full lg:w-[45%] pr-8 mb-6 lg:mb-0">
                                <h4 className="text-[32px] sm:text-[40px] lg:text-[48px] font-[500] tracking-tight text-[#111111] group-hover:translate-x-4 transition-transform duration-500 ease-out">
                                    {service.title}
                                </h4>
                            </div>

                            <div className="w-full lg:w-[35%]">
                                <p className="text-[16px] text-[#4A5D50] leading-relaxed group-hover:text-[#111111] transition-colors duration-500 font-light">
                                    {service.description}
                                </p>
                            </div>

                            <div className="w-full lg:w-[5%] flex justify-end mt-8 lg:mt-0 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out">
                                <div className="w-12 h-12 rounded-full border border-[#3A5A40] flex items-center justify-center text-[#3A5A40]">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
