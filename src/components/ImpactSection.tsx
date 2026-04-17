"use client";

import React, { useEffect, useState, useRef } from "react";

const metrics = [
    {
        target: 120,
        suffix: "+",
        label: "Smallholder Farmers Empowered",
        description: "Directly increasing local agricultural resilience and economic stability."
    },
    {
        target: 8,
        suffix: " Tons",
        label: "Biochar Removed",
        description: "Locally produced biochar integrated to restore degraded soil networks."
    },
    {
        target: 16,
        suffix: " Tons",
        label: "Carbon Permanently Sequestered",
        description: "Verified atmospheric carbon removed through applied field operations."
    },
    {
        target: 70,
        suffix: "%",
        label: "Women-Led Operations",
        description: "Driving systemic social equity within technical environmental execution."
    }
];

// Custom Hook & Component for CountUp Animation on Scroll
const AnimatedCounter = ({ target, suffix, duration = 2000 }: { target: number, suffix: string, duration?: number }) => {
    const [count, setCount] = useState(0);
    const counterRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        let startTime: number | null = null;
        let animationFrame: number;
        let observer: IntersectionObserver;

        const startCount = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);

            // Easing out function (decelerating to zero velocity)
            const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
            const currentCount = Math.floor(easeOutQuart * target);

            setCount(currentCount);

            if (percentage < 1) {
                animationFrame = requestAnimationFrame(startCount);
            } else {
                setCount(target);
            }
        };

        const handleObserve = (entries: IntersectionObserverEntry[]) => {
            const entry = entries[0];
            if (entry.isIntersecting) {
                // Reset and restart animation when it scrolls into view
                startTime = null;
                requestAnimationFrame(startCount);
                // Optional: Unobserve after first animation loops
                // observer.unobserve(entry.target); 
            } else {
                // Reset count to 0 when it leaves the screen to re-animate on scroll up!
                setCount(0);
            }
        };

        observer = new IntersectionObserver(handleObserve, { threshold: 0.1 });
        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => {
            if (animationFrame) cancelAnimationFrame(animationFrame);
            if (observer) observer.disconnect();
        };
    }, [target, duration]);

    return (
        <span ref={counterRef} className="text-[48px] sm:text-[56px] font-[600] tracking-tighter text-[#D4A017] mb-2 drop-shadow-sm group-hover:scale-105 transform origin-left transition-transform duration-500 tabular-nums">
            {count}{suffix}
        </span>
    );
};

export default function ImpactSection() {
    return (
        <section className="relative w-full bg-[#112419] text-white py-24 sm:py-32 px-6 sm:px-8 border-y border-[rgba(255,255,255,0.05)]">

            {/* Background Decor */}
            <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-[#D4A017] rounded-full blur-[200px] opacity-[0.03] -translate-y-1/2" />
            </div>

            <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col items-center">

                {/* Header */}
                <div className="text-center mb-20">
                    <h2 className="text-[#D4A017] text-[13px] font-[700] tracking-[0.2em] uppercase mb-4">
                        Impact at Scale
                    </h2>
                    <h3 className="text-[32px] sm:text-[44px] lg:text-[52px] font-[500] tracking-[-0.02em] leading-tight max-w-3xl mx-auto">
                        Measurable change driven by <span className="italic font-light text-[rgba(255,255,255,0.7)]">community-first</span> climate integration.
                    </h3>
                </div>

                {/* Impact Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                    {metrics.map((metric, index) => (
                        <div
                            key={index}
                            className="flex flex-col p-8 rounded-[16px] bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.04)] hover:border-[rgba(212,160,23,0.3)] transition-all duration-500 ease-out group"
                        >
                            <AnimatedCounter target={metric.target} suffix={metric.suffix} />

                            <span className="text-[15px] sm:text-[17px] font-[600] text-white leading-tight mb-4 tracking-wide uppercase">
                                {metric.label}
                            </span>
                            <p className="text-[14px] text-[rgba(255,255,255,0.5)] font-light leading-relaxed">
                                {metric.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
