"use client";

import Image from "next/image";
import React from "react";
import Navbar from "./Navbar";

export default function CareersHero() {
    return (
        <section className="relative min-h-[100vh] lg:min-h-[680px] w-full flex flex-col items-center overflow-hidden">
            <div className="absolute inset-0 w-full h-full z-[0]">
                <Image
                    src="https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=2800"
                    alt="Lush deep forest canopy overhead"
                    fill
                    priority
                    className="object-cover object-center"
                />
                <div
                    className="absolute inset-0"
                    style={{
                        background: `radial-gradient(ellipse at left center, rgba(5,25,10,0.6) 0%, transparent 60%),
                                     linear-gradient(to bottom, rgba(10, 40, 20, 0.75) 0%, rgba(10, 40, 20, 0.55) 50%, rgba(10, 40, 20, 0.80) 100%)`
                    }}
                />
            </div>

            <div className="relative z-50 w-full">
                <Navbar />
            </div>

            <div className="relative z-[10] flex-1 flex flex-col items-center justify-center text-center px-4 w-full max-w-[1100px] mx-auto pt-[80px] sm:pt-[140px] pb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                <span className="text-[#D4A017] text-[13px] font-[700] tracking-[0.25em] uppercase mb-6 flex items-center gap-4">
                    <span className="w-8 h-[1px] bg-[#D4A017]"></span>
                    Careers
                    <span className="w-8 h-[1px] bg-[#D4A017]"></span>
                </span>
                <h1
                    className="text-white font-[800] leading-tight w-full drop-shadow-2xl"
                    style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)' }}
                >
                    Build the Future of Climate Action With Us
                </h1>

                <p className="mt-6 text-[rgba(255,255,255,0.65)] text-[16px] sm:text-[18px] max-w-2xl font-[300] leading-relaxed">
                    We are looking for passionate problem solvers to help scale community-driven environmental solutions across Nepal.
                </p>

                <div className="mt-12">
                    <a href="#open-positions" className="bg-[#D4960A] text-[#1A1A1A] font-[600] text-[16px] rounded-[8px] px-8 py-4 hover:bg-[#B8820A] hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(212,150,10,0.5)] transition-all transform inline-flex items-center gap-2">
                        View Open Positions <span>&rarr;</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
