import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FolderGit2, ArrowUpRight, CheckCircle, Award, Calendar, Sparkles, X } from "lucide-react";
import { ProjectsData } from "../data";
import { Project } from "../types";

interface ProjectsProps {
  theme: "dark" | "light";
}

export default function Projects({ theme }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 85, damping: 15 }
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-white/20 dark:bg-black/5 flex items-center justify-center">
      {/* Decorative floating lights */}
      <div className="glowing-orbs pointer-events-none select-none">
        <div className={`orb orb-purple w-[450px] h-[450px] top-[20%] right-[-10%] ${theme === "dark" ? "opacity-20" : "opacity-10"}`} />
        <div className={`orb orb-cyan w-[400px] h-[400px] bottom-[15%] left-[-15%] ${theme === "dark" ? "opacity-20" : "opacity-10"}`} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-16 space-y-3">
          <div className="flex items-center space-x-2 text-brand-cyan text-xs font-mono tracking-widest uppercase font-bold">
            <FolderGit2 size={14} />
            <span>03 / SELECTED WRITING & CASES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 dark:text-white tracking-tighter leading-tight">
            Transforming product ideas into <br />
            <span className="font-serif italic font-normal text-gradient-cyan-purple">interactive award-winning realities.</span>
          </h2>
          <div className="w-20 h-[1.5px] bg-gradient-to-r from-brand-cyan to-brand-purple rounded-full mt-2" />
        </div>

        {/* Vertical Case Studies List */}
        <motion.div
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {ProjectsData.map((project, index) => {
            const isEven = index % 2 === 0;
            const isFeatured = project.id === "solusy";

            return (
              <motion.div
                key={project.id}
                variants={cardVariants}
                className="group relative cursor-default"
              >
                {/* Glow border background aura */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-brand-cyan/15 to-brand-purple/15 blur-lg opacity-0 group-hover:opacity-100 transition duration-500 rounded-[32px]" />

                {/* Main Card Frame */}
                <div className="relative p-6 sm:p-8 rounded-[32px] glass-effect glass-panel border border-white/5 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shimmer-bg shimmer-active duration-500">
                  
                  {/* Left Column: Case Visual Mockup (Even = Left, Odd = Right in Desktop) */}
                  <div className={`lg:col-span-6 relative aspect-video rounded-2xl overflow-hidden shadow-lg border border-white/10 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}>
                    {/* Featured label badge */}
                    {isFeatured && (
                      <div className="absolute top-4 left-4 z-20 px-3.5 py-1.5 rounded-full bg-[#030303]/80 border border-brand-cyan/40 text-brand-cyan text-[10px] font-mono uppercase tracking-widest flex items-center space-x-1.5 shadow-md">
                        <Sparkles size={11} className="animate-spin" />
                        <span>Core Featured Case Study</span>
                      </div>
                    )}
                    
                    {/* High-res Image render with hover scale */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top filter saturate-[1.03] group-hover:scale-105 duration-700 pointer-events-none"
                      referrerPolicy="no-referrer"
                    />

                    {/* Gradient Overlay bottom shading */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>

                  {/* Right Column: Case Story, Metadata, Stats & Actions */}
                  <div className={`lg:col-span-6 flex flex-col items-start text-left space-y-6 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}>
                    <div className="space-y-2">
                      <span className="text-[11px] font-mono tracking-widest text-[#a855f7]/90 uppercase font-semibold">
                        // {project.category.toUpperCase()}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-display font-medium text-gray-900 dark:text-white leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-brand-cyan text-sm sm:text-base font-semibold tracking-wide">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Highlights pill tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 4).map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-white/[0.03] border border-gray-200 dark:border-white/5 text-[10px] font-mono text-gray-600 dark:text-gray-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Performance metrics display */}
                    {project.metrics && (
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full py-4 border-t border-b border-gray-200 dark:border-white/5">
                        {project.metrics.slice(0, 3).map((metric, idx) => (
                          <div key={idx} className="flex flex-col">
                            <span className="text-gradient-purple-cyan text-lg font-bold font-display">
                              {metric.value}
                            </span>
                            <span className="text-[9px] font-mono text-gray-400 dark:text-gray-500 uppercase tracking-widest leading-none mt-1">
                              {metric.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Primary actions buttons */}
                    <div className="flex flex-wrap items-center gap-4 pt-2">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="px-5 py-2.5 rounded-xl bg-gray-900 dark:bg-white/10 hover:bg-gradient-to-r hover:from-brand-cyan hover:to-brand-purple text-white text-xs font-semibold uppercase tracking-wider transition-all pointer-events-auto cursor-pointer interactive-card shadow-sm"
                      >
                        Read Case Analysis
                      </button>
                      
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noreferrer referrer"
                        className="px-5 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 dark:hover:border-white/20 text-gray-800 dark:text-gray-200 hover:text-brand-cyan text-xs font-semibold uppercase tracking-wider flex items-center space-x-1 hover:scale-[1.03] duration-300 pointer-events-auto"
                      >
                        <span>Visit Site</span>
                        <ArrowUpRight size={13} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Case Study Analysis Overlay Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-xl flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative max-w-4xl w-full rounded-[28px] overflow-hidden glass-panel border border-white/10 shadow-2xl bg-[#08080a] max-h-[90vh] overflow-y-auto text-left"
              initial={{ scale: 0.9, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
            >
              {/* Cover visual representation header */}
              <div className="relative aspect-video max-h-[300px] w-full overflow-hidden border-b border-white/5">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating controls */}
                <div className="absolute top-4 inset-x-4 flex justify-between items-center">
                  <div className="px-3 py-1.5 rounded-lg bg-[#030303]/85 text-[10px] font-mono text-brand-cyan border border-brand-cyan/20 tracking-wider font-bold">
                    // CASE STUDY
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 rounded-xl bg-[#030303]/85 hover:bg-brand-purple hover:text-white text-gray-400 border border-white/5 duration-300 cursor-pointer pointer-events-auto select-none"
                    aria-label="Close modal dialog"
                  >
                    <X size={16} />
                  </button>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-[#08080a]/40 to-transparent pointer-events-none" />
              </div>

              {/* Study Body Content */}
              <div className="p-6 sm:p-8 space-y-8">
                {/* Titles */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 border-b border-white/5 pb-6">
                  <div className="space-y-1">
                    <span className="text-xs font-mono uppercase tracking-widest text-brand-cyan">{selectedProject.category}</span>
                    <h3 className="text-3xl font-display font-medium text-white">{selectedProject.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{selectedProject.subtitle}</p>
                  </div>
                  <div className="flex items-center space-x-6 text-gray-500 font-mono text-xs">
                    <div className="flex flex-col text-left">
                      <span className="text-[9px] uppercase tracking-wider text-gray-600">CLIENT ROLE</span>
                      <span className="text-gray-300 font-medium min-w-10 flex gap-1 items-center mt-1">
                        <Award size={13} className="text-[#a855f7]" /> {selectedProject.role}
                      </span>
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-[9px] uppercase tracking-wider text-gray-600">DELIVERY YEAR</span>
                      <span className="text-gray-300 font-medium min-w-10 flex gap-1 items-center mt-1">
                        <Calendar size={13} className="text-[#a855f7]" /> {selectedProject.year}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Analytical breakdown Storytelling */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Long text columns */}
                  <div className="lg:col-span-8 space-y-6">
                    <div className="space-y-4 text-left">
                      <h4 className="text-xs uppercase font-mono tracking-widest text-[#a855f7]">01 / PROJECT SYNOPSIS</h4>
                      <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                        {selectedProject.longDescription}
                      </p>
                    </div>

                    {/* Key delivery features checklist checkboxes */}
                    {selectedProject.keyFeatures && (
                      <div className="space-y-4 pt-4 text-left">
                        <h4 className="text-xs uppercase font-mono tracking-widest text-brand-cyan">02 / INTERACTION SCOPE IMPLEMENTED</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                          {selectedProject.keyFeatures.map((feat, idx) => (
                            <div key={idx} className="flex gap-2.5">
                              <CheckCircle size={15} className="text-[#a855f7] shrink-0 mt-0.5" />
                              <span className="text-gray-400 text-xs leading-relaxed">{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right side stats/tags details panel */}
                  <div className="lg:col-span-4 p-5 rounded-2xl border border-white/5 bg-white/[0.01]/30 space-y-6">
                    <span className="block text-[10px] font-mono tracking-wider text-gray-500 uppercase">// OUTCOMES OVERVIEW</span>
                    
                    {/* Performance metrics inside model */}
                    {selectedProject.metrics && (
                      <div className="space-y-4">
                        {selectedProject.metrics.map((metric, idx) => (
                          <div key={idx} className="flex justify-between items-center border-b border-white/5 pb-3 last:border-b-0 last:pb-0">
                            <span className="text-gray-400 text-xs">{metric.label}</span>
                            <span className="text-brand-cyan font-bold font-mono text-sm">{metric.value}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Direct hyperlinks */}
                    <div className="pt-2">
                      <a
                        href={selectedProject.links.live}
                        target="_blank"
                        rel="noreferrer referrer"
                        className="w-full py-3 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-purple text-white text-xs font-semibold uppercase tracking-wider text-center flex items-center justify-center space-x-1.5 shadow-md shadow-brand-cyan/10 hover:scale-[1.03] duration-300 pointer-events-auto"
                      >
                        <span>Launch Live Portal</span>
                        <ArrowUpRight size={13} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
