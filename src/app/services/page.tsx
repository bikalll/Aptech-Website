"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


/* ─── Scroll-reveal hook ─── */
function useReveal(threshold = 0.15) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } },
            { threshold }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, [threshold]);
    return { ref, visible };
}



/* ─── Data ─── */
const services = [
    {
        id: "01",
        title: "Climate Finance & Strategy",
        tagline: "Unlocking capital for planet-scale impact",
        description: "Architecting bespoke carbon projects, rigorous baselines, and uncompromising MRV.",
        details: "We specialize in developing high-integrity emission reduction and removal projects. Through rigorous methodologies aligned with global best practices, we unlock institutional capital necessary to deploy innovative environmental interventions at scale. Our focus is long-term carbon permanence and verifiable socio-economic development.",
        image: "/works/nature.jpg",
        features: ["Carbon Mechanism Structuring", "MRV Framework Design", "Capital Risk Mitigation"],
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
    {
        id: "02",
        title: "Market Intelligence",
        tagline: "Empirical clarity for emerging economies",
        description: "Deep-tier policy analysis and multi-variable feasibility mapping.",
        details: "Navigating the volatile regulatory environment of climate tech requires empirical clarity. We construct comprehensive feasibility analyses, socio-ecological impact assessments, and regulatory models that empower our clients to confidently expand operations within emerging economies.",
        image: "/works/biochar.jpg",
        features: ["Regulatory & Policy Scoping", "Socio-Ecological Modeling", "Advanced Feasibility Studies"],
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
            </svg>
        ),
    },
    {
        id: "03",
        title: "Community Mobilization",
        tagline: "Ground-level operations that elevate lives",
        description: "Moving policy into reality with rigorous, localized execution operations.",
        details: "Global foresight fails without localized execution. We deploy biochar technologies, conduct intensive climate resilience workshops, and implement localized soil restoration efforts. By placing women and marginalized groups at the center of implementation, we orchestrate field operations that directly elevate smallholder farmer livelihoods.",
        image: "/works/community.jpg",
        features: ["Grassroots Technical Training", "Biochar Practical Deployment", "Women-Led Operations"],
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
            </svg>
        ),
    },
];

const methodology = [
    {
        step: "01",
        title: "Diagnostic",
        desc: "Rigorous socio-ecological analysis establishing a baseline for intervention.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
        ),
    },
    {
        step: "02",
        title: "Parametrization",
        desc: "Modeling variables and financial streams to create a high-integrity framework.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
    },
    {
        step: "03",
        title: "Deployment",
        desc: "Executing on the ground with strict MRV protocols and sustained tracking.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
            </svg>
        ),
    },
];



/* ─── Component ─── */
export default function ServicesPage() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <main className="w-full min-h-screen font-sans flex flex-col overflow-x-hidden">

            {/* ═══════════════════ HERO — matches homepage hero ═══════════════════ */}
            <section className="relative min-h-[100vh] lg:min-h-[680px] w-full flex flex-col items-center overflow-hidden">
                {/* Background — identical to homepage */}
                <div
                    className="absolute inset-0 w-full h-full z-[0]"
                    style={{ transform: `translateY(${scrollY * 0.35}px)` }}
                >
                    <Image
                        src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1600"
                        alt="Ecosystem Resilience"
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

                {/* Hero content — fonts/weights match homepage */}
                <div className="relative z-[10] flex-1 flex flex-col items-center justify-center text-center px-4 w-full max-w-[1100px] mx-auto pt-[80px] sm:pt-[140px] pb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                    <h1
                        className="text-white font-[800] leading-tight w-full drop-shadow-2xl"
                        style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)' }}
                    >
                        Architecting Ecosystem Resilience for Nepal&apos;s Future
                    </h1>

                    <p className="mt-6 text-[rgba(255,255,255,0.65)] text-[16px] sm:text-[18px] max-w-2xl font-[300] leading-relaxed">
                        Designing and deploying high-integrity environmental infrastructure.
                        We convert atmospheric carbon models into ground-level economic opportunity.
                    </p>

                    <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                        <Link href="#our-services" className="w-full max-w-[320px] sm:w-auto bg-[#D4960A] text-[#1A1A1A] font-[600] text-[16px] rounded-[8px] px-8 py-4 hover:bg-[#B8820A] hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(212,150,10,0.5)] transition-all transform flex items-center justify-center gap-2">
                            Explore Our Work <span>&rarr;</span>
                        </Link>
                        <Link href="/#about" className="w-full max-w-[320px] sm:w-auto bg-transparent border-[1.5px] border-[rgba(255,255,255,0.7)] text-white font-[600] text-[16px] rounded-[8px] px-8 py-4 hover:bg-[rgba(255,255,255,0.1)] hover:border-white transition-colors">
                            Learn About Us
                        </Link>
                    </div>
                </div>
            </section>

            {/* ═══════════════════ TRUST PILLARS — premium cards design ═══════════════════ */}
            <section className="relative w-full bg-[#DCEAE0] text-[#111111] pt-32 pb-40 px-6 sm:px-8">
                <div className="max-w-[1400px] mx-auto">
                    {/* Section Header */}
                    <div className="w-full flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
                        <div className="max-w-3xl">
                            <h2 className="text-[#3A5A40] text-[13px] font-[700] tracking-[0.25em] uppercase mb-8 flex items-center gap-4">
                                <span className="w-8 h-[1px] bg-[#3A5A40]"></span>
                                Our Foundation
                            </h2>
                            <h3 className="text-[40px] sm:text-[56px] lg:text-[72px] font-[500] leading-[1.05] tracking-[-0.02em]">
                                Rooted in <span className="text-[#648460] italic font-light">purpose</span>,
                                <br /> driven by impact.
                            </h3>
                        </div>
                        <div className="max-w-[360px]">
                            <p className="text-[17px] text-[rgba(0,0,0,0.6)] leading-relaxed font-light">
                                A pioneering, woman-led social innovation venture dedicated to addressing Nepal&apos;s most critical climate and environmental challenges.
                            </p>
                        </div>
                    </div>

                    {/* Premium Grid Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full">
                        {[
                            {
                                num: "01",
                                title: "Our Background",
                                description: "A pioneering, woman-led social innovation venture dedicated to addressing Nepal's most critical climate and environmental challenges. We act as the vital bridge between global expertise and local ecosystems.",
                                icon: (
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3v18h18" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
                                    </svg>
                                ),
                            },
                            {
                                num: "02",
                                title: "Our Vision",
                                description: "Bridging global expertise with local ecosystems to engineer sustainable solutions that communities can seamlessly adopt, maintain, and scale for lasting environmental resilience.",
                                icon: (
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                                    </svg>
                                ),
                            },
                            {
                                num: "03",
                                title: "Our Goal",
                                description: "Long-term carbon permanence and verifiable socio-economic development through community-first climate action and grassroots environmental operations across Nepal.",
                                icon: (
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                        <circle cx="9" cy="7" r="4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 3.13a4 4 0 0 1 0 7.75" />
                                    </svg>
                                ),
                            },
                        ].map((pillar, index) => (
                            <div
                                key={index}
                                className="group relative bg-[#F4F8F5] rounded-[2.5rem] p-8 lg:p-10 flex flex-col justify-between transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-3 hover:bg-[#3A5A40] border border-[#CDD8D1] hover:border-[#3A5A40] overflow-hidden hover:shadow-[0_40px_60px_-15px_rgba(58,90,64,0.3)] min-h-[460px] cursor-pointer"
                            >
                                {/* Animated background gradient flare */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-[800ms] ease-out translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>

                                <div>
                                    {/* Header Row: Num + Icon */}
                                    <div className="flex justify-between items-start mb-12">
                                        <span className="text-[15px] font-[600] tracking-wide text-[#3A5A40] group-hover:text-[#A7D1B5] transition-colors duration-500 font-mono">
                                            {pillar.num}
                                        </span>
                                        <div className="w-16 h-16 rounded-full bg-white group-hover:bg-[#466B4C] flex items-center justify-center text-[#3A5A40] group-hover:text-white shadow-sm transition-all duration-500 group-hover:scale-110">
                                            <div className="w-7 h-7">
                                                {pillar.icon}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <h4 className="text-[28px] sm:text-[32px] font-[500] tracking-tight text-[#111111] group-hover:text-white mb-6 transition-colors duration-500 leading-[1.1]">
                                        {pillar.title}
                                    </h4>

                                    <p className="text-[16px] text-[#4A5D50] group-hover:text-[#E2EAE4] leading-relaxed transition-colors duration-500 font-light">
                                        {pillar.description}
                                    </p>
                                </div>


                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════ SERVICES DEEP DIVE — dark green themed ═══════════════════ */}
            <section id="our-services" className="relative w-full py-28 sm:py-40 bg-[#112419] overflow-hidden">
                {/* Ambient glows */}
                <div className="absolute top-[10%] right-0 w-[800px] h-[800px] bg-[#1E5631] rounded-full blur-[250px] opacity-30 pointer-events-none" />
                <div className="absolute bottom-[10%] left-0 w-[600px] h-[600px] bg-[#D4A017] rounded-full blur-[250px] opacity-[0.05] pointer-events-none" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gradient-to-b from-[#D4A017]/40 to-transparent" />

                <div className="max-w-[1400px] mx-auto px-6 sm:px-12 relative z-10">
                    {/* Section header */}
                    <div className="w-full flex flex-col items-center text-center mb-20 sm:mb-28">
                        <div className="flex items-center gap-5 mb-10">
                            <span className="w-12 h-[1px] bg-[#D4A017]/40" />
                            <span className="text-[#D4A017] text-[13px] font-[700] tracking-[0.3em] uppercase">
                                What We Do
                            </span>
                            <span className="w-12 h-[1px] bg-[#D4A017]/40" />
                        </div>

                        <h2 className="text-[44px] sm:text-[60px] lg:text-[80px] font-[500] leading-[1.05] tracking-[-0.03em] text-white max-w-4xl">
                            Three pillars driving
                            <br />
                            <span className="relative inline-block text-[rgba(255,255,255,0.7)] italic font-light">
                                measurable
                                <svg className="absolute w-full h-[8px] -bottom-1 left-0 text-[#D4A017] opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 25 0 50 5 Q 75 10 100 5" stroke="currentColor" strokeWidth="2" fill="transparent" />
                                </svg>
                            </span>{" "}
                            climate action.
                        </h2>

                        <p className="mt-8 text-[17px] sm:text-[19px] text-[rgba(255,255,255,0.5)] font-[300] leading-relaxed max-w-2xl">
                            We operate at the critical intersection of environmental innovation and socio-economic resilience, building scalable mechanisms for tomorrow&apos;s climate.
                        </p>

                        <div className="mt-10 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
                            <span className="w-2 h-2 rounded-full bg-[#D4A017]/50" />
                            <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
                        </div>
                    </div>

                    {/* Service Cards — premium dark theme */}
                    <div className="flex flex-col w-full gap-8 lg:gap-16 mt-16">
                        {services.map((service, index) => (
                            <div
                                key={service.id}
                                className={`group flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} w-full bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-[32px] overflow-hidden backdrop-blur-md hover:bg-[rgba(255,255,255,0.04)] hover:border-[rgba(212,160,23,0.3)] transition-all duration-700 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]`}
                            >
                                {/* Image Half */}
                                <div className="w-full lg:w-1/2 relative h-[350px] sm:h-[450px] lg:h-auto overflow-hidden">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out mix-blend-luminosity hover:mix-blend-normal"
                                    />
                                    {/* Overlay gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#112419] via-[#112419]/40 to-transparent group-hover:opacity-50 transition-opacity duration-500" />

                                    {/* Number Badge */}
                                    <div className="absolute top-6 left-6 w-14 h-14 rounded-full bg-[#112419]/80 border border-[rgba(255,255,255,0.1)] backdrop-blur-md flex items-center justify-center shadow-lg pointer-events-none group-hover:border-[#D4A017]/50 transition-colors duration-500">
                                        <span className="text-[#D4A017] font-[700] text-[18px]">{service.id}</span>
                                    </div>
                                </div>

                                {/* Content Half */}
                                <div className="w-full lg:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center relative">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-14 h-14 rounded-2xl bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-[#D4A017] group-hover:bg-[#D4A017] group-hover:text-[#112419] transition-colors duration-500 shadow-[0_0_20px_rgba(212,160,23,0.1)]">
                                            {service.icon}
                                        </div>
                                        <span className="text-[13px] font-[700] tracking-[0.2em] uppercase text-[#D4A017]/80 group-hover:text-[#D4A017] transition-colors duration-500">
                                            {service.tagline}
                                        </span>
                                    </div>

                                    <h4 className="text-[32px] sm:text-[40px] lg:text-[48px] font-[500] tracking-tight text-white mb-6 leading-[1.1] group-hover:-translate-y-1 transition-transform duration-500">
                                        {service.title}
                                    </h4>

                                    <div className="text-[17px] text-[rgba(255,255,255,0.6)] leading-relaxed font-light mb-10 flex flex-col gap-4">
                                        <p className="font-[400] text-white/90 text-[19px]">
                                            {service.description}
                                        </p>
                                        <p className="group-hover:text-[rgba(255,255,255,0.8)] transition-colors duration-500">
                                            {service.details}
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-3 mt-auto pt-8 border-t border-[rgba(255,255,255,0.05)]">
                                        {service.features.map((feature, i) => (
                                            <span key={i} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] text-[13px] font-[500] text-[rgba(255,255,255,0.8)] group-hover:bg-[rgba(255,255,255,0.08)] group-hover:border-[#D4A017]/30 transition-all duration-300">
                                                <svg className="w-3.5 h-3.5 text-[#D4A017]" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                                </svg>
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════ METHODOLOGY — dark section ═══════════════════ */}
            <section className="relative w-full bg-[#112419] text-white py-28 sm:py-40 overflow-hidden border-y border-[rgba(255,255,255,0.05)]">
                {/* Ambient */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-40 bg-gradient-to-b from-[#D4A017]/40 to-transparent" />
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#D4A017] rounded-full blur-[200px] opacity-[0.04] pointer-events-none" />

                <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
                    <div className="text-center mb-20 sm:mb-28">
                        <span className="text-[#D4A017] text-[13px] font-[700] tracking-[0.2em] uppercase mb-4 block">Our Process</span>
                        <h2 className="text-[32px] sm:text-[44px] lg:text-[52px] font-[500] tracking-[-0.02em] mb-6 leading-tight">
                            The Implementation<br className="hidden sm:block" />{" "}
                            <span className="italic font-light text-[rgba(255,255,255,0.7)]">Architecture</span>
                        </h2>
                        <p className="text-[17px] text-[rgba(255,255,255,0.5)] font-[300] max-w-xl mx-auto leading-relaxed">
                            How we bridge the gap between global theory and local reality — a repeatable, verifiable framework.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                        {methodology.map((item, idx) => (
                            <MethodologyCard key={idx} item={item} index={idx} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════ FULL-WIDTH CTA — greenish section ═══════════════════ */}
            <section className="relative w-full overflow-hidden bg-[#DCEAE0]">
                {/* Ambient glows */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C1D6C8] rounded-full blur-[120px] opacity-60 -translate-y-1/3 translate-x-1/4 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#3A5A40] rounded-full blur-[150px] opacity-[0.1] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

                <div className="relative z-10 max-w-[900px] mx-auto px-6 sm:px-12 py-28 sm:py-40 text-center">
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <span className="w-12 h-[2px] bg-[#3A5A40]" />
                        <span className="text-[#3A5A40] text-[13px] font-[700] tracking-[0.2em] uppercase">Ready to make an impact?</span>
                        <span className="w-12 h-[2px] bg-[#3A5A40]" />
                    </div>
                    <h2 className="text-[36px] sm:text-[48px] lg:text-[56px] font-[500] tracking-[-0.02em] leading-tight mb-6 text-[#111111]">
                        Let&apos;s build climate resilience{" "}
                        <span className="italic font-light text-[#648460]">together</span>.
                    </h2>
                    <p className="text-[17px] text-[rgba(0,0,0,0.6)] font-[300] max-w-lg mx-auto leading-relaxed mb-12">
                        Whether you&apos;re a government body, NGO, or private enterprise — we tailor our expertise to your context.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="mailto:contact@aptechlab.com" className="bg-[#D4960A] text-[#1A1A1A] font-[600] text-[16px] rounded-[8px] px-10 py-4 hover:bg-[#B8820A] hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(212,150,10,0.5)] transition-all transform flex items-center justify-center gap-2">
                            Get in Touch <span>&rarr;</span>
                        </a>
                        <Link href="/" className="text-[#3A5A40] text-[15px] font-[600] hover:text-[#111111] transition-colors underline underline-offset-4 decoration-[#3A5A40]/30 hover:decoration-[#3A5A40]">
                            Back to Home
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}


/* ═══════════════════ METHODOLOGY CARD ═══════════════════ */
function MethodologyCard({ item, index }: { item: typeof methodology[0]; index: number }) {
    const { ref, visible } = useReveal(0.2);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`group relative bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-[20px] p-8 sm:p-12 backdrop-blur-sm hover:bg-[rgba(255,255,255,0.04)] hover:border-[rgba(212,160,23,0.4)] hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(212,160,23,0.12)] transition-all duration-500 ease-out overflow-hidden ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
            style={{ transitionDelay: `${index * 150}ms` }}
        >
            {/* Spotlight overlay on hover */}
            <div
                className="absolute inset-0 rounded-[20px] opacity-0 transition-opacity duration-500 pointer-events-none z-0"
                style={{
                    opacity: isHovered ? 1 : 0,
                    background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(212,160,23,0.08), transparent 40%)`
                }}
            />

            <div className="relative z-10 w-full mb-10 flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-[#D4A017] group-hover:border-[rgba(212,160,23,0.3)] group-hover:bg-[rgba(212,160,23,0.08)] transition-all duration-500">
                    {item.icon}
                </div>
                <span className="text-[64px] font-[800] text-white/[0.04] leading-none tracking-tighter group-hover:text-white/[0.08] transition-colors duration-500">{item.step}</span>
            </div>

            <div className="relative z-10">
                <h4 className="text-[24px] sm:text-[28px] font-[500] text-white mb-4 tracking-tight">{item.title}</h4>
                <p className="text-[15px] font-[300] text-[rgba(255,255,255,0.5)] leading-relaxed group-hover:text-[rgba(255,255,255,0.7)] transition-colors duration-500">{item.desc}</p>
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-[#D4A017]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
        </div>
    );
}
