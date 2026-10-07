import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import Lab from "@/components/Lab";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <main className="main-viewport">
      {/* Dynamic Cursor Spotlight & Ambient Backdrops */}
      <CursorGlow />
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <div className="ambient ambient-three" aria-hidden="true" />

      {/* Global Navigation */}
      <Navbar />

      {/* Hero Section with GSAP Timelines & 3D Tilt */}
      <Hero />

      {/* Continuous Marquee Ticker */}
      <Marquee />

      {/* Numerical Stats Counters with GSAP ScrollTrigger */}
      <Stats />

      {/* Core Capabilities with Spotlight Glow & Modal View */}
      <Services />

      {/* Selected Case Studies with Interactive Previews */}
      <Projects />

      {/* Execution Methodology with Scroll Progress Rail */}
      <Process />

      {/* Arnova Lab with Interactive Experiment Telemetry */}
      <Lab />

      {/* Frequently Asked Questions with GSAP Smooth Accordion */}
      <Faq />

      {/* High-Impact Project Inquiry & Contact Section */}
      <Contact />

      {/* Comprehensive Site Footer */}
      <Footer />

      {/* Floating Scroll Progress / Back-to-Top Button */}
      <ScrollProgress />
    </main>
  );
}
