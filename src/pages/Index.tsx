
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Toaster />
    </main>
  );
};

export default Index;
