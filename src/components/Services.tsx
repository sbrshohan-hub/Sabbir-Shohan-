import { motion } from "motion/react";
import * as LucideIcons from "lucide-react";
import { ServicesData } from "../data";

interface ServicesProps {
  theme: "dark" | "light";
}

// Map dynamic icon name strings to Lucide components safely
const getIcon = (name: string) => {
  const IconComponent = (LucideIcons as any)[name];
  if (IconComponent) {
    return <IconComponent className="stroke-[1.5]" size={20} />;
  }
  return <LucideIcons.HelpCircle size={20} />;
};

export default function Services({ theme }: ServicesProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden flex items-center justify-center">
      {/* Background Ambient Orbs */}
      <div className="glowing-orbs pointer-events-none select-none">
        <div className={`orb orb-cyan w-[380px] h-[380px] top-[15%] left-[5%] ${theme === "dark" ? "opacity-20" : "opacity-10"}`} />
        <div className={`orb orb-purple w-[400px] h-[400px] bottom-[20%] right-[5%] ${theme === "dark" ? "opacity-20" : "opacity-10"}`} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-16 space-y-3">
          <div className="flex items-center space-x-2 text-brand-cyan text-xs font-mono tracking-widest uppercase font-bold">
            <LucideIcons.Briefcase size={14} />
            <span>02 / PROFESSIONAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 dark:text-white tracking-tighter leading-tight">
            High-caliber services tailored for <br />
            <span className="font-serif italic font-normal text-gradient-purple-cyan">hyper-growth digital products.</span>
          </h2>
          <div className="w-20 h-[1.5px] bg-gradient-to-r from-brand-cyan to-brand-purple rounded-full mt-2" />
        </div>

        {/* Dynamic Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {ServicesData.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className="relative p-8 rounded-3xl glass-effect glass-panel border border-white/5 shadow-xl hover:scale-[1.03] hover:border-brand-cyan/20 duration-500 flex flex-col justify-between group overflow-hidden shimmer-bg shimmer-active interactive-card"
            >
              <div className="space-y-6">
                {/* Icon Wrapper and Line decorations */}
                <div className="flex items-center justify-between">
                  <div className="p-3 w-fit h-fit rounded-xl bg-gradient-to-br from-brand-cyan/10 to-brand-purple/10 border border-brand-cyan/20 group-hover:from-brand-cyan/20 group-hover:to-brand-purple/20 group-hover:scale-110 duration-300 text-brand-cyan shrink-0">
                    {getIcon(service.iconName)}
                  </div>
                  <div className="text-[10px] font-mono text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                    // Ready
                  </div>
                </div>

                {/* Service Metadata */}
                <div className="space-y-3">
                  <h3 className="text-lg sm:text-xl font-display font-medium text-gray-900 dark:text-white group-hover:text-brand-cyan transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Scope deliverables checklist */}
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-white/5 space-y-2.5">
                <span className="block text-[9px] font-mono uppercase tracking-widest text-[#a855f7]/85 mb-3">
                  DELIVERABLE OUTCOMES
                </span>
                {service.features.map((feat, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan/80 shrink-0" />
                    <span className="text-xs text-gray-600 dark:text-gray-300 font-sans tracking-wide">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>

              {/* Decorative Corner vector glows (only displays with hover) */}
              <div className="absolute top-0 right-0 w-8 h-8 bg-brand-cyan rounded-full filter blur-md opacity-0 group-hover:opacity-10 pointer-events-none duration-500" />
              <div className="absolute bottom-0 left-0 w-8 h-8 bg-brand-purple rounded-full filter blur-md opacity-0 group-hover:opacity-10 pointer-events-none duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
