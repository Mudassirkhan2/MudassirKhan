import About from "@/components/home/About";
import Contact from "@/components/common/Contact";
import Hero from "@/components/home/Hero";
import Projects from "@/components/home/Projects";
import HeroBg from "@/components/clients/HeroBg";
import NavBar from "@/components/layout/NavBar";
import Cursor from "@/components/common/Cursor";


export default function Home() {

  return (
    <main className="relative min-h-screen mx-auto text-white mainimg dottedBackground">
      <div>
        <HeroBg />
        <NavBar />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Cursor />
      </div>
    </main>
  )
}
