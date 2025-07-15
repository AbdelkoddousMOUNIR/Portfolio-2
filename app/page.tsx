import StarsCanvas from "@/components/background/background";
import Contact from "@/components/contact/contact";
import Experience from "@/components/experience/experience";
import Footer from "@/components/footer/footer";
import Hero from "@/components/hero/hero";
import MyApproach from "@/components/myApproach/myApproach";
import Projects from "@/components/projects/projects";
import Skills from "@/components/skills/skills";
import { FloatingNav } from "@/components/ui/floatingNavbar";
import { Spotlight } from "@/components/ui/spotlight";
import Welcome from "@/components/welcome/welcome";
import { navItems } from "@/data/data";
import env from "dotenv";
env.config()

export default function Home() {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <StarsCanvas />
      <Spotlight fill="#3674B5" />
      <div className="fixed z-30 w-full h-screen bg-black bg-opacity-70"></div>
      <div className="relative z-50">
        <FloatingNav navItems={navItems} />
        <Welcome />
        <Hero />
        <Projects />
        <Skills />
        <MyApproach />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
