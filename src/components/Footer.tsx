import { motion } from "motion/react";
import { ArrowUp, Heart } from "lucide-react";
import { SabbirProfile } from "../data";

interface FooterProps {
  theme: "dark" | "light";
}

export default function Footer({ theme }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative py-12 border-t border-gray-200 dark:border-white/5 bg-white/5 dark:bg-black/10 select-none overflow-hidden max-w-full">
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        {/* Core Name Credentials */}
        <div className="space-y-1">
          <span className="block font-display font-bold text-sm tracking-wider text-gray-900 dark:text-white uppercase">
            {SabbirProfile.name.toUpperCase()}
          </span>
          <span className="block text-[10px] font-mono tracking-widest text-gray-400 dark:text-gray-500 uppercase">
            © {new Date().getFullYear()} — PRIVATE PLATFORM PORTFOLIO
          </span>
        </div>

        {/* Dynamic Made With Credit */}
        <div className="flex items-center justify-center space-x-1 font-mono text-[10px] text-gray-400 dark:text-gray-500">
          <span>Architected with</span>
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ repeat: Infinity, duration: 1.2 }}
            className="text-red-500"
          >
            <Heart size={10} className="fill-current" />
          </motion.div>
          <span>by Sabbir Shohan</span>
        </div>

        {/* Back to top anchor */}
        <button
          onClick={scrollToTop}
          className="p-3 rounded-xl border border-gray-200 dark:border-white/10 dark:hover:border-white/20 bg-white/5 dark:bg-white/[0.03] text-gray-700 dark:text-gray-400 hover:text-brand-cyan hover:border-brand-cyan/30 flex items-center justify-center transition-all cursor-pointer pointer-events-auto shadow-sm group interactive-card"
          aria-label="Scroll back to top of page"
        >
          <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>

      {/* Decorative tiny glass line */}
      <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-brand-cyan/20 to-transparent pointer-events-none" />
    </footer>
  );
}
