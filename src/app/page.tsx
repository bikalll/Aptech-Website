import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ImpactSection from "@/components/ImpactSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <AboutSection />
      <ImpactSection />
      <ServicesSection />
      <ProjectsSection />
    </main>
  );
}
