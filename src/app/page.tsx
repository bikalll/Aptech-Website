import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ImpactSection from "@/components/ImpactSection";
import ServicesSection from "@/components/ServicesSection";
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
      <ImpactSection />
      <ServicesSection />
      <ProjectsSection />
      <ReadsSection />
      <Footer />
    </main>
  );
}
