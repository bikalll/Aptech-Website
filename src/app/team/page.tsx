"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

const leader = {
    name: "Aarati Bista",
    role: "Founder & CEO",
    bio: "Pioneering climate innovation in Nepal, bridging global capital with local ecosystem resilience. Aarati leads the formulation of our core environmental strategies and directs high-level operations to ensure institutional alignment.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&q=80",
};

const teamMembers = [
    {
        name: "Prajjwal Bhatt",
        role: "Chief Technology Officer",
        image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=600&q=80",
    },
    {
        name: "Sudikshya Sharma",
        role: "Community Operations",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80",
    },
    {
        name: "Nirwan Shrestha",
        role: "Climate Strategist",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80",
    }
];

export default function TeamPage() {
    return (
        <main className="w-full min-h-screen font-sans flex flex-col overflow-x-hidden bg-white text-[#111111]">
            {/* ═══════════════════ HERO — matches services/homepage hero ═══════════════════ */}
            <section className="relative min-h-[100vh] lg:min-h-[680px] w-full flex flex-col items-center overflow-hidden">
                {/* Background — consistent with services page */}
                <div className="absolute inset-0 w-full h-full z-[0]">
                    <Image
                        src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1600"
                        alt="Inspiring landscape"
                        fill
                        priority
                        className="object-cover object-center"
                    />
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

                {/* Navbar */}
                <div className="relative z-50 w-full">
                    <Navbar />
                </div>

                {/* Hero content */}
                <div className="relative z-[10] flex-1 flex flex-col items-center justify-center text-center px-4 w-full max-w-[1100px] mx-auto pt-[80px] sm:pt-[140px] pb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                    <h1
                        className="text-white font-[800] leading-tight w-full drop-shadow-2xl"
                        style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)' }}
                    >
                        The Minds Shaping Climate Resilience
                    </h1>

                    <p className="mt-6 text-[rgba(255,255,255,0.65)] text-[16px] sm:text-[18px] max-w-2xl font-[300] leading-relaxed">
                        A dynamic team of innovators bridging global capital with local ecosystem strength.
                    </p>
                </div>
            </section>

            {/* Team Layout */}
            <section className="w-full py-20 px-6 sm:px-8 relative z-20">
                <div className="max-w-[1200px] mx-auto">

                    {/* Leader Section */}
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16 mb-24 max-w-4xl mx-auto">
                        <div className="w-full md:w-1/2 shrink-0 aspect-[4/5] relative rounded-lg overflow-hidden bg-[#F4F8F5]">
                            <Image
                                src={leader.image}
                                alt={leader.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col pt-4">
                            <h2 className="text-[36px] font-[500] tracking-tight text-[#111111] mb-2">
                                {leader.name}
                            </h2>
                            <p className="text-[15px] font-[600] tracking-wider uppercase text-[#3A5A40] mb-6">
                                {leader.role}
                            </p>
                            <div className="w-12 h-[2px] bg-[#DCEAE0] mb-6"></div>
                            <p className="text-[16px] text-[#555555] leading-relaxed font-light">
                                {leader.bio}
                            </p>
                        </div>
                    </div>

                    {/* Team Members Grid (3 columns) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 lg:gap-12 w-full pt-8 border-t border-[#E1E8E4]">
                        {teamMembers.map((member, idx) => (
                            <div key={idx} className="flex flex-col w-full text-center items-center">
                                <div className="w-full aspect-[4/5] sm:aspect-square relative rounded-lg overflow-hidden bg-[#F4F8F5] mb-6">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <h3 className="text-[20px] font-[500] tracking-tight text-[#111111] mb-1">
                                    {member.name}
                                </h3>
                                <p className="text-[14px] text-[#648460] tracking-wide uppercase">
                                    {member.role}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
            <Footer />
        </main>
    );
}
