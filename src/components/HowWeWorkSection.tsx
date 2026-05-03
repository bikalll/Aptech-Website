"use client";
import React from "react";

const steps = [
    { num: "01", title: "Identify Local Needs" },
    { num: "02", title: "Deploy Global Solutions" },
    { num: "03", title: "Collaborate with Community & Partners" },
    { num: "04", title: "Localize & Execute" },
    { num: "05", title: "Ensure Sustainability" },
    { num: "06", title: "Monitor, Verify & Handover" }
];

export default function HowWeWorkSection() {
    return (
        <section className="relative w-full bg-[#EBF0ED] py-32 px-6 sm:px-8">
            <div className="max-w-[1400px] mx-auto flex flex-col items-center">
                <h2 className="text-[#3A5A40] text-[13px] font-[700] tracking-[0.25em] uppercase mb-16 flex items-center gap-4">
                    <span className="w-8 h-[1px] bg-[#3A5A40]"></span>
                    How do we Work
                    <span className="w-8 h-[1px] bg-[#3A5A40]"></span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                    {steps.map((step, idx) => (
                        <div key={idx} className="bg-white rounded-2xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-[#DCEAE0] flex flex-col gap-6 group hover:shadow-[0_20px_50px_rgba(58,90,64,0.1)] transition-all hover:-translate-y-1">
                            <span className="text-4xl font-[300] text-[#D4A017]">{step.num}</span>
                            <h3 className="text-2xl font-[600] text-[#1a1a1a] tracking-tight group-hover:text-[#3A5A40] transition-colors">{step.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
