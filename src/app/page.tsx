import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CoreAreasSection from "@/components/CoreAreasSection";
import ServicesSection from "@/components/ServicesSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import ProjectsSection from "@/components/ProjectsSection";
import ReadsSection from "@/components/ReadsSection";
import PartnersMarquee from "@/components/PartnersMarquee";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <PartnersMarquee />
      <AboutSection />
      <CoreAreasSection />
      <ServicesSection />
      <HowWeWorkSection />
      <ProjectsSection />
      <ReadsSection />
      <Footer />
    </main>
  );
}
