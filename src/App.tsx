import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Terminal } from "lucide-react";

// Core Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import DribbbleShowcase from "./components/DribbbleShowcase";
import Blog from "./components/Blog";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import ParticleBackground from "./components/ParticleBackground";

export default function App() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("hero");

  // Sync theme with document class list
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark", "dark-mode");
      root.classList.remove("light-mode");
    } else {
      root.classList.remove("dark", "dark-mode");
      root.classList.add("light-mode");
    }
  }, [theme]);

  // Handle entry premium loading sequence
  useEffect(() => {
    const loaderTimer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(loaderTimer);
  }, []);

  // Track scroll positions using IntersectionObserver to feed Navbar
  useEffect(() => {
    const sections = ["hero", "about", "services", "projects", "dribbble", "blog", "experience", "contact"];
    
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px", // Trigger when section occupies the focus window
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className={`relative min-h-screen transition-colors duration-500 overflow-x-hidden ${
      theme === "dark" 
        ? "bg-[#030303] text-gray-100" 
        : "bg-slate-50 text-gray-900"
    }`}>
      {/* Absolute Ambient Background Vectors & Particles */}
      <ParticleBackground theme={theme} />
      <CustomCursor />

      {/* Entry Loading screen */}
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 z-[9999] bg-[#030303] text-white flex flex-col items-center justify-center select-none"
            exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          >
            <div className="flex flex-col items-center space-y-4">
              {/* Spinner & Initializing Indicators */}
              <div className="relative w-16 h-16 flex items-center justify-center">
                <motion.div
                  className="absolute w-full h-full rounded-full border-2 border-brand-cyan/20 border-t-brand-cyan"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
                />
                <motion.div
                  className="absolute w-10 h-10 rounded-full border-2 border-brand-purple/20 border-b-brand-purple"
                  animate={{ rotate: -360 }}
                  transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
                />
                <Sparkles size={16} className="text-brand-cyan animate-pulse" />
              </div>

              {/* Loader typography */}
              <div className="text-center font-display uppercase tracking-widest pt-4 space-y-1.5">
                <motion.h2 
                  className="text-base font-bold text-white tracking-widest"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Sabbir Shohan
                </motion.h2>
                <div className="flex items-center justify-center space-x-1.5 text-gray-500 text-[9px] font-mono leading-none">
                  <Terminal size={11} className="text-brand-purple" />
                  <span>INITIALIZING DIGITAL WORKSPACE...</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Primary Application Body */}
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-30"
        >
          {/* persistent navbar */}
          <Navbar theme={theme} toggleTheme={toggleTheme} activeSection={activeSection} />

          {/* chronological modular views */}
          <main className="relative">
            <Hero theme={theme} />
            <About theme={theme} />
            <Services theme={theme} />
            <Projects theme={theme} />
            <DribbbleShowcase theme={theme} />
            <Blog theme={theme} />
            <Experience theme={theme} />
            <Contact theme={theme} />
          </main>

          {/* site signature footers */}
          <Footer theme={theme} />
        </motion.div>
      )}
    </div>
  );
}
