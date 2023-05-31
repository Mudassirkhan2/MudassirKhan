
import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Projects from "@/components/Projects";
import HeroBg from "@/components/clients/HeroBg";

export default function Home() {
  return (
    <main className="relative min-h-screen mx-auto text-white">
      <HeroBg />
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  )
}
