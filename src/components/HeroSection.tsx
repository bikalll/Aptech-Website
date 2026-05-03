"use client";

import Image from "next/image";
import React from "react";

import Navbar from "./Navbar";

export default function HeroSection() {
    return (
        <section className="relative min-h-[100vh] lg:min-h-[680px] w-full flex flex-col items-center overflow-hidden">
            {/* Background Image & Overlays */}
            <div className="absolute inset-0 w-full h-full z-[0]">
                <Image
                    src="https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=2800"
                    alt="Epic lush terraced fields"
                    fill
                    priority
                    className="object-cover object-center"
                />
                {/* Gradient overlays */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: `
              radial-gradient(ellipse at left center, rgba(5,25,10,0.6) 0%, transparent 60%),
              linear-gradient(to bottom, rgba(10, 40, 20, 0.75) 0%, rgba(10, 40, 20, 0.55) 50%, rgba(10, 40, 20, 0.80) 100%)
            `
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-[10] flex flex-col h-full w-full">
                {/* Removed Edge Crosshair */}

                <Navbar />

                <div className="flex-1 flex flex-col items-center justify-center text-center px-4 w-full max-w-[1100px] mx-auto pt-[80px] sm:pt-[140px] pb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                    <h1
                        className="text-white font-[800] leading-tight w-full drop-shadow-2xl"
                        style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)' }}
                    >
                        Connecting What Exists to What's Needed
                    </h1>

                    <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                        <button className="w-full max-w-[320px] sm:w-auto bg-[#D4960A] text-[#1A1A1A] font-[600] text-[16px] rounded-[8px] px-8 py-4 hover:bg-[#B8820A] hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(212,150,10,0.5)] transition-all transform flex items-center justify-center gap-2 shadow-none border-none cursor-pointer">
                            Partner with us <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                        </button>
                        <button className="w-full max-w-[320px] sm:w-auto bg-transparent border-[1.5px] border-[rgba(255,255,255,0.7)] text-white font-[600] text-[16px] rounded-[8px] px-8 py-4 hover:bg-[rgba(255,255,255,0.1)] hover:border-white transition-colors cursor-pointer">
                            Work at Aptech Lab
                        </button>
                    </div>

                    {/* Premium Newsletter / Waitlist Row Replacing Metrics */}
                    <div className="mt-12 w-full max-w-[560px] flex flex-col items-center px-4 sm:px-0">
                        <span className="text-[#D4A017] text-[10px] sm:text-[12px] font-[700] tracking-[0.2em] uppercase mb-4 drop-shadow-md">
                            JOIN THE INITIATIVE EARLY ACCESS
                        </span>
                        <div className="flex w-full relative shadow-[0_8px_40px_rgba(0,0,0,0.3)] group">
                            <input
                                type="email"
                                placeholder="Enter your email address..."
                                className="w-full bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.15)] rounded-full py-[16px] pl-6 pr-[140px] text-white text-[15px] placeholder-[rgba(255,255,255,0.4)] focus:outline-none focus:border-[#D4A017] focus:bg-[rgba(255,255,255,0.12)] focus:ring-4 focus:ring-[#D4A017]/10 transition-all backdrop-blur-md"
                            />
                            <button className="absolute right-1.5 top-1.5 bottom-1.5 bg-[#D4A017] text-[#1A1A1A] font-[600] text-[14px] px-8 rounded-full hover:bg-[#B8820A] hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(212,160,23,0.4)] transition-all flex items-center justify-center">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
