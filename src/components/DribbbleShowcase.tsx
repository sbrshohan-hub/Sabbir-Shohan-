import { motion } from "motion/react";
import { Grid, Heart, Eye, ArrowUpRight } from "lucide-react";
import { DribbbleWorks } from "../data";

interface DribbbleShowcaseProps {
  theme: "dark" | "light";
}

export default function DribbbleShowcase({ theme }: DribbbleShowcaseProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 18 }
    }
  };

  return (
    <section id="dribbble" className="py-24 relative overflow-hidden bg-white/5 dark:bg-black/10 flex items-center justify-center">
      {/* Visual glowing leaking backgrounds */}
      <div className="glowing-orbs pointer-events-none select-none">
        <div className={`orb orb-cyan w-[300px] h-[300px] top-[10%] right-[5%] ${theme === "dark" ? "opacity-15" : "opacity-5"}`} />
        <div className={`orb orb-purple w-[350px] h-[350px] bottom-[15%] left-[5%] ${theme === "dark" ? "opacity-15" : "opacity-5"}`} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div className="flex flex-col items-start text-left space-y-3">
            <div className="flex items-center space-x-2 text-brand-cyan text-xs font-mono tracking-widest uppercase font-bold">
              <Grid size={14} />
              <span>04 / LATEST DRIBBBLE FEED</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 dark:text-white tracking-tighter leading-tight">
              Explorations & rapid layout <br />
              <span className="font-serif italic font-normal text-gradient-purple-cyan">micro-UI concepts.</span>
            </h2>
            <div className="w-20 h-[1.5px] bg-gradient-to-r from-brand-cyan to-brand-purple rounded-full mt-2" />
          </div>

          <a
            href="https://dribbble.com/SabbirShohan"
            target="_blank"
            rel="noreferrer referrer"
            className="flex items-center space-x-1.5 px-5 py-3 rounded-xl border border-gray-200 dark:border-white/10 dark:hover:border-white/20 bg-white/5 text-gray-800 dark:text-gray-300 hover:text-brand-cyan transition-all text-xs font-bold uppercase tracking-wider group shrink-0 interactive-card cursor-pointer pointer-events-auto"
          >
            <span>Follow on Dribbble</span>
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Dribbble Works Grid Display */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {DribbbleWorks.map((work) => (
            <motion.div
              key={work.id}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="group relative p-4 rounded-3xl glass-effect glass-panel border border-white/5 shadow-xl duration-500 overflow-hidden shimmer-bg shimmer-active interactive-card"
            >
              <a
                href={work.url}
                target="_blank"
                rel="noreferrer referrer"
                className="block relative aspect-[4/3] rounded-2xl overflow-hidden shadow-inner border border-white/10 bg-black/20 overflow-hidden cursor-pointer"
              >
                {/* Micro Image */}
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover filter saturate-[1.03] group-hover:scale-[1.04] transition-all duration-750 ease-out pointer-events-none"
                  referrerPolicy="no-referrer"
                />

                {/* Animated Glass Overlay (Reveals on Hover) */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-350 pointer-events-none">
                  <div className="p-3.5 rounded-2xl bg-white/25 border border-white/20 text-white shadow-xl scale-75 group-hover:scale-100 duration-350 shrink-0">
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                {/* Floating category badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-md border border-white/10 text-[9px] font-mono tracking-wider uppercase text-white/90">
                  {work.category}
                </div>
              </a>

              {/* Title & Micro Metrics Footer */}
              <div className="pt-4 px-1.5 flex flex-col items-start gap-3">
                <a
                  href={work.url}
                  target="_blank"
                  rel="noreferrer referrer"
                  className="text-left font-display text-sm font-medium text-gray-800 dark:text-gray-100 group-hover:text-brand-cyan transition-colors line-clamp-1 block leading-tight pointer-events-auto"
                >
                  {work.title}
                </a>

                <div className="w-full border-t border-gray-200 dark:border-white/5 pt-3.5 flex items-center justify-between text-gray-400 dark:text-gray-500 font-mono text-[10px]">
                  <span className="text-[9px] text-[#a855f7]/85 tracking-widest uppercase">
                    // DRIBBBLE CONCEPT
                  </span>
                  
                  <div className="flex items-center space-x-3 select-none">
                    <div className="flex items-center space-x-1 hover:text-red-500 transition-colors">
                      <Heart size={11} className="fill-current" />
                      <span>{work.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1 hover:text-brand-cyan transition-colors">
                      <Eye size={11} />
                      <span>{work.views}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
