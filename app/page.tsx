import Home from "@/components/home";
import NavBar from "@/components/navBar";
import Skills from "@/components/skills";
import Certificats from "@/components/certificats";
import Projects from '@/components/projects'
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <div>
      <NavBar />
      <Home />
      <Skills />
      <Certificats />
      <Projects />
      <Footer />
    </div>
  )
}
