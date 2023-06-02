"use client"
import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Projects from "@/components/Projects";
import SecModal from "@/components/SecModal";
import HeroBg from "@/components/clients/HeroBg";
import  { useEffect, useState } from "react";
export default function Home() {
  const [attention, setAttention] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAttention(true);
    }, 15000);
  }, []);
  return (
    <main className="relative min-h-screen mx-auto text-white">
      <div>
        <HeroBg />
        <NavBar />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
      {attention && <SecModal handleClose={() => setAttention(false)} />}
    </main>
  )
}
