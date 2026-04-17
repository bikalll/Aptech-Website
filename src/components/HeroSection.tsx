"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <nav className="relative z-50 w-full max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between h-24">
            {/* Logo */}
            <div className="flex items-center gap-3">
                <Image
                    src="/logo/atl-logo.png"
                    alt="Aptech Lab logo"
                    width={96}
                    height={96}
                    className="object-contain"
                />
            </div>

            {/* Nav Links */}
            <div className="hidden lg:flex items-center justify-center gap-8">
                <Link
                    href="/"
                    className="text-white text-[15px] font-normal border-b-2 border-[#D4A017] pb-1"
                >
                    Home
                </Link>
                <Link
                    href="#services"
                    className="text-white text-[15px] font-normal pb-1 border-b-2 border-transparent hover:border-[#D4A017] transition-colors"
                >
                    Services
                </Link>
                <Link
                    href="#teams"
                    className="text-white text-[15px] font-normal pb-1 border-b-2 border-transparent hover:border-[#D4A017] transition-colors"
                >
                    Teams
                </Link>
                <Link
                    href="#careers"
                    className="text-white text-[15px] font-normal pb-1 border-b-2 border-transparent hover:border-[#D4A017] transition-colors"
                >
                    Careers
                </Link>
                <Link
                    href="#about"
                    className="text-white text-[15px] font-normal pb-1 border-b-2 border-transparent hover:border-[#D4A017] transition-colors"
                >
                    About Us
                </Link>
            </div>

            {/* CTA Button & Hamburger */}
            <div className="flex items-center gap-4">
                <button className="hidden sm:block bg-white text-[#1a1a1a] rounded-full px-6 py-[10px] font-semibold text-[14px] hover:bg-gray-100 transition-colors">
                    Get in touch
                </button>

                {/* Mobile Menu Button */}
                <button
                    className="block lg:hidden text-white p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="absolute top-24 left-0 w-full bg-[#0a1f12]/95 backdrop-blur-xl border-t border-white/10 lg:hidden flex flex-col items-center py-10 gap-6 shadow-2xl transition-all animate-in fade-in slide-in-from-top-4">
                    <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-white text-[18px] font-semibold hover:text-[#D4A017] transition-colors">
                        Home
                    </Link>
                    <Link href="#services" onClick={() => setIsMenuOpen(false)} className="text-white text-[18px] font-semibold hover:text-[#D4A017] transition-colors">
                        Services
                    </Link>
                    <Link href="#teams" onClick={() => setIsMenuOpen(false)} className="text-white text-[18px] font-semibold hover:text-[#D4A017] transition-colors">
                        Teams
                    </Link>
                    <Link href="#careers" onClick={() => setIsMenuOpen(false)} className="text-white text-[18px] font-semibold hover:text-[#D4A017] transition-colors">
                        Careers
                    </Link>
                    <Link href="#about" onClick={() => setIsMenuOpen(false)} className="text-white text-[18px] font-semibold hover:text-[#D4A017] transition-colors">
                        About Us
                    </Link>
                    <button className="mt-4 bg-[#D4A017] text-[#1a1a1a] rounded-full px-8 py-3 font-bold text-[16px] hover:bg-[#B8820A] transition-colors w-[80%] max-w-[300px]">
                        Get in touch
                    </button>
                </div>
            )}
        </nav>
    );
};

export default function HeroSection() {
    return (
        <section className="relative min-h-[100vh] lg:min-h-[680px] w-full flex flex-col items-center overflow-hidden">
            {/* Background Image & Overlays */}
            <div className="absolute inset-0 w-full h-full z-[0]">
                <Image
                    src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600"
                    alt="Lush green rice paddies aerial view"
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

                <div className="flex-1 flex flex-col items-center justify-center text-center px-4 w-full max-w-[1100px] mx-auto pt-[80px] sm:pt-[140px] pb-20">
                    <h1
                        className="text-white font-[800] leading-tight w-full"
                        style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
                    >
                        Global Climate Ideas Powering Practical Solutions for Nepal’s Future
                    </h1>

                    <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                        <button className="w-full max-w-[320px] sm:w-auto bg-[#D4960A] text-[#1A1A1A] font-[600] text-[16px] rounded-[8px] px-7 py-3.5 hover:bg-[#B8820A] hover:scale-[1.02] transition-transform transform flex items-center justify-center gap-2 shadow-none border-none cursor-pointer">
                            Partner with us <span>&rarr;</span>
                        </button>
                        <button className="w-full max-w-[320px] sm:w-auto bg-transparent border-[1.5px] border-[rgba(255,255,255,0.7)] text-white font-[600] text-[16px] rounded-[8px] px-7 py-3.5 hover:bg-[rgba(255,255,255,0.1)] transition-colors cursor-pointer">
                            Work at Aptech Lab
                        </button>
                    </div>

                    {/* Premium Newsletter / Waitlist Row Replacing Metrics */}
                    <div className="mt-10 w-full max-w-[560px] flex flex-col items-center px-4 sm:px-0">
                        <span className="text-[#D4A017] text-[10px] sm:text-[12px] font-[700] tracking-[0.2em] uppercase mb-5">
                            JOIN THE INITIATIVE EARLY ACCESS
                        </span>
                        <div className="flex w-full relative shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
                            <input
                                type="email"
                                placeholder="Enter your email address..."
                                className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.15)] rounded-full py-[14px] pl-6 pr-[130px] text-white text-[15px] placeholder-[rgba(255,255,255,0.4)] focus:outline-none focus:border-[#D4A017] focus:bg-[rgba(255,255,255,0.08)] transition-all backdrop-blur-md"
                            />
                            <button className="absolute right-1.5 top-1.5 bottom-1.5 bg-[#D4A017] text-[#1A1A1A] font-[600] text-[14px] px-6 rounded-full hover:bg-[#B8820A] hover:scale-[1.02] transition-transform flex items-center justify-center">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
