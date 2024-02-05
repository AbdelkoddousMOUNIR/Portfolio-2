import React from 'react'
import Home from "../components/Home.jsx";
import NavBar from "../components/NavBar";
import Skills from "../components/Skills";
import Certificats from "../components/Certificats";
import Footer from "../components/Footer";
import Projects from '../components/Projects.jsx'

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
