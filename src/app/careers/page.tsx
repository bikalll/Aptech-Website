import React from 'react';
import CareersHero from '@/components/CareersHero';
import CareersValues from '@/components/CareersValues';
import CareersPositions from '@/components/CareersPositions';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'Careers | Aptech Lab',
    description: 'Join Aptech Lab to build regenerative agriculture and climate tech solutions.',
};

export default function CareersPage() {
    return (
        <main className="min-h-screen bg-black w-full text-white overflow-hidden flex flex-col">
            <CareersHero />
            <CareersValues />
            <CareersPositions />
            <Footer />
        </main>
    );
}
