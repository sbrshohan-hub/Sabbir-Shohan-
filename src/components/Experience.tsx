import { motion } from "motion/react";
import { History, Calendar, Award, Compass } from "lucide-react";
import { ExperienceData } from "../data";

interface ExperienceProps {
  theme: "dark" | "light";
}

export default function Experience({ theme }: ExperienceProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 90, damping: 15 }
    }
  };

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-white/20 dark:bg-black/5 flex items-center justify-center">
      {/* Visual background atmospheric elements */}
      <div className="glowing-orbs pointer-events-none select-none">
        <div className={`orb orb-cyan w-[350px] h-[350px] top-[10%] left-[-5%] ${theme === "dark" ? "opacity-15" : "opacity-5"}`} />
        <div className={`orb orb-purple w-[380px] h-[380px] bottom-[15%] right-[-5%] ${theme === "dark" ? "opacity-15" : "opacity-5"}`} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-16 space-y-3">
          <div className="flex items-center space-x-2 text-brand-cyan text-xs font-mono tracking-widest uppercase font-bold">
            <History size={14} />
            <span>06 / CHRONOLOGICAL WORK HISTORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 dark:text-white tracking-tighter leading-tight">
            Professional trajectory and <br />
            <span className="font-serif italic font-normal text-gradient-cyan-purple">milestones since 2021.</span>
          </h2>
          <div className="w-20 h-[1.5px] bg-gradient-to-r from-brand-cyan to-brand-purple rounded-full mt-2" />
        </div>

        {/* Vertical Timeline Track Grid */}
        <div className="relative max-w-3xl mx-auto text-left">
          {/* Main vertical line track */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-[1.5px] bg-gradient-to-b from-brand-cyan via-brand-purple to-transparent opacity-30 sm:-translate-x-1/2" />

          {/* Timeline Milestones */}
          <motion.div
            className="space-y-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {ExperienceData.map((exp, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className={`relative flex flex-col sm:flex-row items-start sm:justify-between w-full pl-12 sm:pl-0 ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Glowing Node Marker */}
                  <div className="absolute left-2.5 sm:left-1/2 w-3.5 h-3.5 rounded-full bg-gradient-to-tr from-brand-cyan to-brand-purple border-2 border-slate-900 shadow shadow-brand-cyan/40 z-20 sm:-translate-x-1/2 top-7 hover:scale-125 duration-300 pointer-events-auto cursor-pointer" />

                  {/* Left Column Spacer or Micro timing (Desktop) */}
                  <div className="hidden sm:block sm:w-[45%] text-left sm:text-right px-6 mt-6">
                    <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl border border-brand-cyan/20 bg-brand-cyan/5 text-[11px] font-mono tracking-wider font-bold text-brand-cyan shadow-sm">
                      <Calendar size={12} />
                      <span>{exp.year}</span>
                    </span>
                  </div>

                  {/* Right Column Core Card Panel */}
                  <div className="w-full sm:w-[45%]">
                    {/* Glowing shadow outline */}
                    <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-brand-cyan/10 to-brand-purple/10 blur-md opacity-0 hover:opacity-100 duration-500 rounded-2xl" />

                    <div className="relative p-6 rounded-2xl glass-effect glass-panel border border-white/5 shadow-xl shimmer-bg shimmer-active duration-500 group interactive-card">
                      
                      {/* Mobile Year badge */}
                      <div className="sm:hidden mb-3.5">
                        <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg border border-brand-cyan/20 bg-brand-cyan/5 text-[10px] font-mono font-bold text-brand-cyan">
                          <Calendar size={11} />
                          <span>{exp.year}</span>
                        </span>
                      </div>

                      {/* Header metadata */}
                      <div className="space-y-1.5">
                        <div className="flex items-center space-x-1.5 text-gray-500 font-mono text-[9px] uppercase tracking-widest font-semibold">
                          <Compass size={11} />
                          <span>{exp.company}</span>
                        </div>
                        <h3 className="text-base sm:text-lg font-display font-medium text-gray-900 dark:text-white group-hover:text-brand-cyan transition-colors">
                          {exp.role}
                        </h3>
                      </div>

                      {/* Content Description */}
                      <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed mt-4">
                        {exp.description}
                      </p>

                      {/* Skills listed checklist */}
                      <div className="flex flex-wrap gap-1.5 pt-4 mt-4 border-t border-gray-100 dark:border-white/5">
                        {exp.skills.map((skill, sidx) => (
                          <span
                            key={sidx}
                            className="px-2 py-0.5 rounded-md bg-gray-50 dark:bg-white/[0.02] border border-gray-200 dark:border-white/5 text-[9px] font-mono text-gray-500 dark:text-gray-400"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
