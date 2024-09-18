import Home from "@/components/home";
import NavBar from "@/components/navBar";
import Skills from "@/components/skills";
import Certificats from "@/components/certificats";
import Projects from '@/components/projects'
import Footer from "@/components/footer";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function HomePage() {
  return (
    <div>
      <NavBar />
      <Home />
      <Skills />
      <Projects />
      <Certificats />
      <Footer />
      <BackgroundBeams />
    </div>
  )
}
