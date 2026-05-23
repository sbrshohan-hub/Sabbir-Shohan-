import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sun, Moon, Menu, X, ArrowUpRight } from "lucide-react";
import { SabbirProfile } from "../data";

interface NavbarProps {
  theme: "dark" | "light";
  toggleTheme: () => void;
  activeSection: string;
}

const navItems = [
  { id: "hero", label: "Intro" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Case Study" },
  { id: "dribbble", label: "Dribbble" },
  { id: "blog", label: "Insights" },
  { id: "experience", label: "History" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ theme, toggleTheme, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.header
      id="main-navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-4 glass-effect glass-panel border-b border-white/5 shadow-lg"
          : "py-6 bg-transparent"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Designer Logomark */}
        <button
          onClick={() => scrollToSection("hero")}
          className="flex items-center space-x-2.5 font-display group focus:outline-none"
        >
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-cyan to-brand-purple flex items-center justify-center overflow-hidden shadow-md shadow-brand-cyan/20">
            <span className="font-bold text-white text-base tracking-wider group-hover:scale-110 transition-transform duration-300">
              SS
            </span>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="text-left hidden sm:block">
            <span className={`block font-bold text-sm tracking-widest ${theme === 'dark' ? 'text-white' : 'text-gray-900 group-hover:text-brand-cyan transition-colors'}`}>
              {SabbirProfile.name.toUpperCase()}
            </span>
            <span className="block text-[10px] uppercase font-mono tracking-wider text-brand-cyan/80">
              Portfolio
            </span>
          </div>
        </button>

        {/* Central Nav Actions (Desktop) */}
        <nav className="hidden lg:flex items-center space-x-1.5 p-1.5 rounded-full border border-white/5 bg-black/10 dark:bg-white/[0.02]">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 rounded-full text-xs font-medium tracking-wide uppercase transition-colors duration-300 pointer-events-auto ${
                  isActive
                    ? theme === "dark"
                      ? "text-black font-semibold"
                      : "text-white font-semibold"
                    : theme === "dark"
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                {isActive && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-brand-cyan to-brand-purple rounded-full z-[-1]"
                    layoutId="activeNavIndicator"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right utility items */}
        <div className="flex items-center space-x-4">
          {/* Light/Dark Toggle */}
          <button
            onClick={toggleTheme}
            className={`p-2.5 rounded-xl border border-white/10 dark:border-white/5 bg-black/5 dark:bg-white/[0.04] text-gray-500 hover:text-brand-cyan dark:text-gray-400 dark:hover:text-brand-cyan transition-colors shadow-sm cursor-pointer`}
            aria-label="Toggle theme color"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* Let's Talk CTA button (Desktop) */}
          <button
            onClick={() => scrollToSection("contact")}
            className="hidden sm:flex items-center space-x-1.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-purple text-xs font-semibold uppercase text-white shadow-md shadow-brand-cyan/10 hover:shadow-brand-purple/20 transition-all hover:scale-[1.03] group interactive-card"
          >
            <span>Let's talk</span>
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          {/* Mobile Hamburg Trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2.5 rounded-xl border border-black/5 dark:border-white/5 bg-black/5 dark:bg-white/[0.04] text-gray-700 dark:text-gray-300 pointer-events-auto cursor-pointer"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Popdown Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-x-0 top-[73px] bg-black/95 dark:bg-black/95 glass-effect border-b border-white/5 lg:hidden z-40 shadow-2xl py-6"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-2 px-6">
              {navItems.map((item, idx) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`py-3.5 px-4 text-left rounded-xl text-sm font-semibold tracking-wide uppercase flex justify-between items-center ${
                      isActive
                        ? "bg-gradient-to-r from-brand-cyan to-brand-purple text-white"
                        : "text-gray-300 hover:bg-white/5 hover:text-white"
                    }`}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.04 }}
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight size={14} className="opacity-60" />
                  </motion.button>
                );
              })}
              <button
                onClick={() => scrollToSection("contact")}
                className="mt-4 w-full py-4 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-purple text-white text-center text-sm font-bold uppercase shadow-lg shadow-brand-cyan/20 flex items-center justify-center gap-1.5"
              >
                <span>HAVE A PROJECT? LET'S TALK</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
