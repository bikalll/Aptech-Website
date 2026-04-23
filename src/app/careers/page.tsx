"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function CareersPage() {
    return (
        <main className="min-h-screen bg-[#0a1f12] flex flex-col">
            <div className="relative z-50 w-full">
                <Navbar />
            </div>
            <div className="flex-1 flex flex-col items-center justify-center px-6 -mt-24">
                <span className="text-[#D4A017] text-[13px] font-[700] tracking-[0.3em] uppercase mb-6">
                    Careers
                </span>
                <h1 className="text-white text-[48px] sm:text-[64px] lg:text-[80px] font-[600] tracking-[-0.03em] leading-[1.1] text-center mb-6">
                    Coming <span className="text-white/50 italic font-light">Soon</span>
                </h1>
                <p className="text-white/40 text-[17px] sm:text-[19px] font-[300] leading-relaxed text-center max-w-lg mb-12">
                    We&apos;re building something meaningful. Check back soon for opportunities to join our mission.
                </p>
                <Link
                    href="/"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/[0.04] border border-white/10 text-white/70 text-[15px] font-medium hover:bg-white/[0.08] hover:text-white hover:border-white/30 transition-all duration-300"
                >
                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Home
                </Link>
            </div>
        </main>
    );
}
