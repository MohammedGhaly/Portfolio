import AboutSection from "./_sections/AboutSection";
import ContactSection from "./_sections/ContactSection";
import HeroSection from "./_sections/HeroSection";
import ProjectsSection from "./_sections/ProjectsSection";
import ScrollWrapper from "./_components/Others/ScrollWrapper";
import ServicesSection from "./_sections/ServicesSection";
import "./app.css";
import AppLoader from "./_components/Others/AppLoader";

export default function Home() {
  return (
    <ScrollWrapper>
      <AppLoader />
      <main className="font-oswald flex max-w-screen flex-col gap-10">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </ScrollWrapper>
  );
}
