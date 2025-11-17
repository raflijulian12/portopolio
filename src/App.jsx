import About from "./components/about"
import Footer from "./components/footer"
import Hero from "./components/hero"
import Navbar from "./components/navbar"
import Portfolio from "./components/portopolio"
import Certificate from "./components/sertivicate"
import AnimatedBackground from "./components/animated-background"

export default function App() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-white overflow-hidden">
      <AnimatedBackground />

      {/* Content wrapper dengan relative positioning */}
      <div className="relative z-10 flex flex-col items-center px-6 md:px-20">
        <Navbar />
        <Hero />
        <About />
        <Portfolio />
        <Certificate />
        <Footer />
      </div>
    </div>
  )
}
