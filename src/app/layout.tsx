import type { Metadata } from 'next';
import { Manrope, Inter } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
    subsets: ['latin'],
    variable: '--font-manrope',
    weight: ['400', '500', '600', '700', '800'],
});

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
    title: 'Aptech Lab Hero Section',
    description: 'Recreation of the Aptech Lab hero section',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
            <body className="antialiased min-h-full font-sans bg-black">
                {children}
            </body>
        </html>
    );
}
