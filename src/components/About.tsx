import { motion } from "motion/react";
import { User, Layers, Monitor, Flame, Zap } from "lucide-react";
import { SabbirProfile } from "../data";

interface AboutProps {
  theme: "dark" | "light";
}

export default function About({ theme }: AboutProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white/20 dark:bg-black/5 flex items-center justify-center">
      {/* Decorative Blur Orbs */}
      <div className="glowing-orbs pointer-events-none select-none">
        <div className={`orb orb-purple w-[350px] h-[350px] top-[40%] right-[5%] ${theme === "dark" ? "opacity-20" : "opacity-10"}`} />
        <div className={`orb orb-cyan w-[300px] h-[300px] bottom-[10%] left-[5%] ${theme === "dark" ? "opacity-20" : "opacity-10"}`} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-20 w-full">
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-16 space-y-3">
          <div className="flex items-center space-x-2 text-brand-cyan text-xs font-mono tracking-widest uppercase font-bold">
            <User size={14} />
            <span>01 / ABOUT THE CREATIVE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 dark:text-white tracking-tighter leading-tight">
            Shaping the visual standards of <br />
            <span className="font-serif italic font-normal text-gradient-cyan-purple">next-generation software.</span>
          </h2>
          <div className="w-20 h-[1.5px] bg-gradient-to-r from-brand-cyan to-brand-purple rounded-full mt-2" />
        </div>

        {/* Bento Grid Layout */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Main Story (Left Large Card) */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-7 p-8 rounded-3xl glass-effect glass-panel border border-white/10 shadow-xl flex flex-col justify-between space-y-6 shimmer-bg shimmer-active group interactive-card"
          >
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-brand-purple">
                <Flame size={18} />
                <span className="text-xs font-mono uppercase tracking-widest font-bold">Professional Experience</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-medium text-gray-900 dark:text-white leading-snug">
                Designing conversion-heavy digital tools since 2021.
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
                {SabbirProfile.aboutLong}
              </p>
            </div>

            {/* Core Values Sub-grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-gray-200 dark:border-white/5">
              <div className="flex gap-3">
                <div className="p-2 w-fit h-fit rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan">
                  <Layers size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider">User-Centered Focus</h4>
                  <p className="text-gray-400 text-xs mt-1">Shedding cognitive complexity to empower decision-making.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="p-2 w-fit h-fit rounded-lg bg-brand-purple/10 border border-brand-purple/20 text-brand-purple">
                  <Monitor size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider">SaaS & Dashboards</h4>
                  <p className="text-gray-400 text-xs mt-1">Visualizing data variables dynamically in single-screen views.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats & Skills (Right Grid Cluster) */}
          <div className="lg:col-span-5 flex flex-col gap-8 h-full">
            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 shrink-0">
              {SabbirProfile.stats.map((stat, idx) => (
                <motion.div 
                  key={idx}
                  variants={itemVariants}
                  className="p-6 rounded-2xl glass-effect glass-panel border border-white/5 shadow-md flex flex-col justify-center items-center text-center hover:scale-[1.04] transition-all duration-350 select-none group interactive-card"
                  whileHover={{ y: -4 }}
                >
                  <span className="text-3xl sm:text-4xl font-display font-bold text-gradient-purple-cyan block mb-1">
                    {stat.value}{stat.suffix}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 font-mono text-[9px] uppercase tracking-widest text-[10px] leading-tight">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Skills Panel */}
            <motion.div 
              variants={itemVariants}
              className="p-8 rounded-3xl glass-effect glass-panel border border-white/5 shadow-xl flex-grow flex flex-col h-full justify-between space-y-6 group interactive-card"
            >
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-brand-cyan">
                  <Zap size={16} />
                  <span className="text-xs font-mono uppercase tracking-widest font-bold">Aesthetic Skills</span>
                </div>
                <h3 className="text-xs font-bold font-display uppercase tracking-wider text-gray-700 dark:text-gray-300">
                  Toolsets & Competency
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">
                  Engineered with atomic spacing parameters. Excellent synchronization capabilities across developer repos.
                </p>
              </div>

              {/* Tag Cloud */}
              <div className="flex flex-wrap gap-2.5 pt-4 border-t border-gray-200 dark:border-white/5">
                {SabbirProfile.skills.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="px-3.5 py-1.5 rounded-xl border border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-white/[0.03] hover:bg-gradient-to-r hover:from-brand-cyan/20 hover:to-brand-purple/20 hover:border-brand-cyan/40 hover:text-white text-gray-800 dark:text-gray-300 text-xs font-medium cursor-default transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
