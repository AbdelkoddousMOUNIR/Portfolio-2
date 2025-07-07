import StarsCanvas from "@/components/background/background";
import Contact from "@/components/contact/contact";
import Experience from "@/components/experience/experience";
import Footer from "@/components/footer/footer";
import Hero from "@/components/hero/hero";
import MyApproach from "@/components/myApproach/myApproach";
import Projects from "@/components/projects/projects";
import Skills from "@/components/skills/skills";
//import Testimonials from "@/components/testimonials/testimonials";
import { FloatingNav } from "@/components/ui/floatingNavbar";
import { Spotlight } from "@/components/ui/spotlight";
import Welcome from "@/components/welcome/welcome";
import { navItems } from "@/data/data";
import { Metadata } from "next";
import env from "dotenv";
env.config()

export const metadata: Metadata = {
  title: "Abdelkoddous MOUNIR Portfolio",
  description: "Hi I'm Abdelkoddous MOUNIR full stack developer based in Morocco",
  keywords: ["Abdelkoddous MOUNIR", "Abdelkoddous", "MOUNIR", "full stack developer"],
  openGraph: {
    title: "Abdelkoddous MOUNIR Portfolio",
    description: "Hi I'm Abdelkoddous MOUNIR full stack developer based in Morocco",
    url: process.env.Website_Url as string,
    siteName: "Abdelkoddous MOUNIR Portfolio",
    images: [
      {
        url: "https://example.com/banner.png",
        width: 1200,
        height: 630,
        alt: "MySite preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

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
