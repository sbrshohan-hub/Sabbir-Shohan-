import { motion } from "motion/react";
import { ArrowUpRight, ChevronDown, Award, Globe, ShieldCheck } from "lucide-react";
import { SabbirProfile } from "../data";

interface HeroProps {
  theme: "dark" | "light";
}

export default function Hero({ theme }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  const imageCardVariants = {
    hidden: { scale: 0.9, opacity: 0, rotate: 2 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: { type: "spring", stiffness: 80, damping: 20, delay: 0.4 },
    },
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
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
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden max-w-full"
    >
      {/* Floating Blurred Gradient Orbs behind Hero content */}
      <div className="glowing-orbs select-none">
        <div className={`orb orb-cyan w-[400px] h-[400px] top-[10%] left-[-10%] ${theme === "dark" ? "opacity-25" : "opacity-10"}`} />
        <div className={`orb orb-purple w-[450px] h-[450px] bottom-[10%] right-[-10%] ${theme === "dark" ? "opacity-25" : "opacity-10"}`} />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-20 w-full">
        {/* Left Core Introduction Panel */}
        <motion.div
          className="lg:col-span-7 flex flex-col items-start text-left space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Micro Header Badge */}
          <motion.div
            variants={itemVariants}
            className="flex items-center space-x-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase tracking-[0.2em] text-brand-cyan font-semibold shadow-sm"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-cyan"></span>
            </span>
            <span>Available for remote projects 2026</span>
          </motion.div>

          {/* Majestic High-Contrast Headline */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-gray-400 dark:text-gray-400 text-lg sm:text-xl italic font-serif text-left">
              Professional UI/UX Designer & Experience Creator
            </h2>
            <h1 className="text-[64px] sm:text-[90px] md:text-[110px] font-bold leading-[0.85] tracking-tighter mb-8 font-display uppercase">
              SABBIR<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 dark:from-white dark:via-white dark:to-gray-500">
                SHOHAN
              </span>
            </h1>
            <p className="text-gray-500 dark:text-gray-400 font-sans max-w-md text-sm leading-relaxed pt-2">
              Crafting world-class digital experiences and high-converting SaaS interfaces. Specialized in visual storytelling and user-centered dashboard systems since 2021.
            </p>
          </motion.div>

          {/* Core CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2"
          >
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-brand-cyan to-brand-purple text-white font-semibold text-sm hover:scale-[1.03] transition-transform flex items-center justify-center space-x-2 shadow-lg shadow-brand-cyan/15 group pointer-events-auto cursor-pointer interactive-card"
            >
              <span>View Case Studies</span>
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 rounded-full border border-gray-200 dark:border-white/10 dark:hover:border-white/20 bg-white/5 dark:bg-white/[0.04] text-gray-900 dark:text-gray-100 hover:text-white hover:bg-black/80 dark:hover:bg-white/10 text-sm font-semibold transition-all flex items-center justify-center space-x-2 pointer-events-auto cursor-pointer interactive-card"
            >
              <span>Get in Touch</span>
            </button>
          </motion.div>

          {/* Client Trust Ribbons */}
          <motion.div
            variants={itemVariants}
            className="flex items-center space-x-4 pt-6 border-t border-gray-200 dark:border-white/5 w-full text-gray-400 dark:text-gray-500 font-mono text-xs max-w-md"
          >
            <div className="flex -space-x-3 select-none">
              <div className="w-9 h-9 rounded-full border-2 border-slate-900 bg-gray-800 flex items-center justify-center text-[10px] font-bold text-white overflow-hidden shadow-inner">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=60" alt="Client" />
              </div>
              <div className="w-9 h-9 rounded-full border-2 border-slate-900 bg-blue-600 flex items-center justify-center text-[10px] font-bold text-white overflow-hidden shadow-inner">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=60" alt="Client" />
              </div>
              <div className="w-9 h-9 rounded-full border-2 border-slate-900 bg-gray-700 flex items-center justify-center text-[10px] font-bold text-white overflow-hidden shadow-inner">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=60" alt="Client" />
              </div>
            </div>
            <div className="text-xs text-gray-500 uppercase tracking-widest text-left">
              Trusted by 40+<br/>
              <span className="text-gray-900 dark:text-white font-bold">Global Clients</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Ultra-Modern Premium Hero Portrait Card */}
        <motion.div
          className="lg:col-span-5 flex justify-center lg:justify-end"
          variants={imageCardVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="relative group max-w-[340px] sm:max-w-[380px] w-full">
            {/* Glossy Backdrop Ambient shadow orbs */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-cyan to-brand-purple rounded-3xl blur-xl opacity-30 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
            
            {/* The Outer Main Frame */}
            <div className="relative p-3.5 glass-effect glass-panel rounded-3xl border border-white/15 dark:border-white/10 shadow-2xl overflow-hidden shimmer-bg shimmer-active group-hover:scale-[1.02] transition-transform duration-500">
              {/* Inner Frame */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-zinc-950/20 border border-white/5 shadow-inner">
                <img
                  src={SabbirProfile.portraitImage}
                  alt={SabbirProfile.name}
                  className="w-full h-full object-cover object-top filter saturate-[1.05] contrast-[1.02] group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                  referrerPolicy="no-referrer"
                />
                
                {/* Glossy Glass Grid Overlay on lower area */}
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-dark-bg via-dark-bg/80 to-transparent flex items-center justify-between">
                  <div className="text-left font-display">
                    <span className="block text-[10px] uppercase font-mono tracking-widest text-brand-cyan">Designer Portrait</span>
                    <span className="text-xs font-semibold text-white/95">Sabbir Shohan, {SabbirProfile.experienceSince}</span>
                  </div>
                  <div className="p-1 px-1.5 rounded-md bg-white/10 border border-white/10 text-[9px] font-mono text-white/90">
                    UI/UX
                  </div>
                </div>
              </div>

              {/* Holographic glowing lines on frame margins */}
              <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none border-t border-r border-brand-cyan/40 rounded-tr-3xl" />
              <div className="absolute bottom-0 left-0 w-16 h-16 pointer-events-none border-b border-l border-brand-purple/40 rounded-bl-3xl" />
            </div>
            
            {/* Extra abstract floating pill */}
            <div className="absolute -bottom-5 -right-3 px-4 py-2.5 rounded-2xl glass-effect border border-white/12 text-[11px] font-mono font-medium tracking-wide text-white bg-black/60 shadow-lg flex items-center space-x-2 hover:-translate-y-1 transition-transform">
              <span className="text-brand-cyan font-bold">5+</span>
              <span className="text-white/80">Years in Design</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Down Chevron Scrolling Assistant */}
      <div className="absolute bottom-6 inset-x-0 mx-auto w-fit flex flex-col items-center justify-center text-gray-400 dark:text-gray-500 hover:text-brand-cyan transition-colors select-none text-xs pointer-events-auto cursor-pointer" onClick={() => scrollToSection("about")}>
        <span className="font-mono tracking-widest mb-1 uppercase text-[10px]">Scroll Explore</span>
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown size={14} />
        </motion.div>
      </div>
    </section>
  );
}
