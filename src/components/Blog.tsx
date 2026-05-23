import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BookOpen, Search, Clock, Calendar, ArrowRight, X, Sparkles, UserCheck } from "lucide-react";
import { BlogPostsData } from "../data";
import { BlogPost } from "../types";

interface BlogProps {
  theme: "dark" | "light";
}

export default function Blog({ theme }: BlogProps) {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [readingProgress, setReadingProgress] = useState(0);

  const modalContentRef = useRef<HTMLDivElement | null>(null);

  // Extract all categories dynamically and append 'All'
  const categories = ["All", ...Array.from(new Set(BlogPostsData.map((p) => p.category)))];

  // Filter logic
  const filteredPosts = BlogPostsData.filter((post) => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Track scroll position inside the opened overlay reader modal
  const handleModalScroll = () => {
    const element = modalContentRef.current;
    if (!element) return;

    const totalHeight = element.scrollHeight - element.clientHeight;
    if (totalHeight === 0) return;

    const scrolled = (element.scrollTop / totalHeight) * 100;
    setReadingProgress(scrolled);
  };

  // Reset progress bar value on opening a post
  useEffect(() => {
    if (selectedPost) {
      setReadingProgress(0);
    }
  }, [selectedPost]);

  return (
    <section id="blog" className="py-24 relative overflow-hidden flex items-center justify-center">
      {/* Visual background atmospheric elements */}
      <div className="glowing-orbs pointer-events-none select-none">
        <div className={`orb orb-purple w-[400px] h-[400px] top-[15%] left-[5%] ${theme === "dark" ? "opacity-15" : "opacity-5"}`} />
        <div className={`orb orb-cyan w-[380px] h-[380px] bottom-[25%] right-[5%] ${theme === "dark" ? "opacity-15" : "opacity-5"}`} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="flex flex-col items-start text-left space-y-3">
            <div className="flex items-center space-x-2 text-brand-cyan text-xs font-mono tracking-widest uppercase font-bold">
              <BookOpen size={14} />
              <span>05 / DESIGN INSIGHTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 dark:text-white tracking-tighter leading-tight">
              Shedding lights on user flow <br />
              <span className="font-serif italic font-normal text-gradient-purple-cyan">and interface architecture.</span>
            </h2>
            <div className="w-20 h-[1.5px] bg-gradient-to-r from-brand-cyan to-brand-purple rounded-full mt-2" />
          </div>

          {/* Filtering and search widgets column */}
          <div className="relative w-full max-w-sm shrink-0">
            <div className="absolute inset-y-0 left-4 flex items-center text-gray-400 pointer-events-none">
              <Search size={14} />
            </div>
            <input
              type="text"
              placeholder="Search design articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 dark:hover:border-white/20 bg-white/5 dark:bg-white/[0.04] text-gray-900 dark:text-white placeholder-gray-500 text-xs tracking-wide focus:outline-none focus:ring-1 focus:ring-brand-cyan pointer-events-auto cursor-text text-left"
            />
          </div>
        </div>

        {/* Categories Pill Horizontal bar */}
        <div className="flex flex-wrap gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none justify-start">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4.5 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all pointer-events-auto cursor-pointer ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-brand-cyan to-brand-purple text-white shadow-md shadow-brand-cyan/15"
                  : "border border-gray-200 dark:border-white/10 dark:hover:border-white/20 text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/[0.03]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dynamic Cards Grid */}
        <AnimatePresence mode="popLayout">
          {filteredPosts.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {filteredPosts.map((post) => (
                <motion.div
                  layout
                  key={post.id}
                  whileHover={{ y: -6 }}
                  className="group p-5 rounded-3xl glass-effect glass-panel border border-white/5 shadow-lg flex flex-col justify-between overflow-hidden shimmer-bg shimmer-active duration-500 interactive-card relative"
                >
                  <div className="space-y-4">
                    {/* Visual Card Cover */}
                    <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/5 bg-black/20">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover filter saturate-[1.03] group-hover:scale-102 duration-500 pointer-events-none"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-md border border-white/10 text-[9px] font-mono uppercase tracking-wider text-white">
                        {post.category}
                      </div>
                    </div>

                    {/* Metadata Header */}
                    <div className="flex items-center space-x-4 text-[10px] font-mono text-gray-400 dark:text-gray-500">
                      <div className="flex items-center gap-1.5 hover:text-brand-cyan transition-colors">
                        <Calendar size={11} />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5 hover:text-brand-purple transition-colors">
                        <Clock size={11} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="space-y-2 text-left">
                      <h3 className="font-display font-medium text-base sm:text-lg text-gray-900 dark:text-white group-hover:text-brand-cyan transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Footer anchor */}
                  <div className="mt-6 pt-4 border-t border-gray-100 dark:border-white/5 flex items-center justify-between text-xs font-bold text-gray-800 dark:text-gray-300 group-hover:text-brand-cyan transition-colors pointer-events-auto">
                    <button
                      onClick={() => setSelectedPost(post)}
                      className="uppercase tracking-widest text-[10px] font-mono flex items-center space-x-1.5 group/btn cursor-pointer font-bold focus:outline-none"
                    >
                      <span>Read Publication</span>
                      <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              layout
              className="text-center py-20 p-8 rounded-2xl border border-dashed border-gray-300 dark:border-white/10 bg-white/5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <h3 className="font-display font-medium text-gray-900 dark:text-white text-base">No Insights Found</h3>
              <p className="text-gray-500 text-xs mt-1">Try resetting your search query or choosing another category.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Dynamic Overlay Reader Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Reading progress ticker anchor on top bar */}
            <div className="fixed top-0 left-0 w-full h-[3.5px] bg-[#222225] z-[60]">
              <div
                className="h-full bg-gradient-to-r from-brand-cyan to-brand-purple transition-all duration-75"
                style={{ width: `${readingProgress}%` }}
              />
            </div>

            {/* Main Reading Canvas slide-in screen */}
            <motion.div
              ref={modalContentRef}
              onScroll={handleModalScroll}
              className="relative max-w-2xl w-full h-full bg-[#08080a] border-l border-white/15 dark:border-white/10 shadow-2xl overflow-y-auto px-6 sm:px-12 py-16 text-left flex flex-col justify-between"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 220 }}
            >
              {/* Close controls */}
              <div className="absolute top-6 right-6 flex items-center space-x-3 z-50">
                <span className="text-[10px] font-mono tracking-wider text-gray-500 uppercase">// Article View</span>
                <button
                  onClick={() => setSelectedPost(null)}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-brand-purple hover:text-white border border-white/5 duration-300 cursor-pointer pointer-events-auto select-none"
                  aria-label="Close article modal"
                >
                  <X size={15} />
                </button>
              </div>

              {/* Main Content Body Container */}
              <div className="space-y-8 pt-8">
                {/* Category & timings header */}
                <div className="flex items-center space-x-3">
                  <span className="px-3 py-1 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 text-[10px] font-mono text-brand-cyan uppercase tracking-wider font-semibold">
                    {selectedPost.category}
                  </span>
                  <div className="flex items-center space-x-3.5 text-[10px] font-mono text-gray-400">
                    <span className="flex items-center gap-1"><Calendar size={11} /> {selectedPost.date}</span>
                    <span className="flex items-center gap-1"><Clock size={11} /> {selectedPost.readTime}</span>
                  </div>
                </div>

                {/* Main Headline */}
                <h3 className="text-2xl sm:text-3xl font-display font-medium text-white leading-tight">
                  {selectedPost.title}
                </h3>

                {/* Featured image visual showcase */}
                <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-xl border border-white/10 bg-black/20">
                  <img
                    src={selectedPost.image}
                    alt={selectedPost.title}
                    className="w-full h-full object-cover filter saturate-[1.03]"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Analytical body (Supports clean nested text render) */}
                <div className="text-gray-300 text-sm leading-relaxed space-y-6 pt-4 border-t border-white/5">
                  {/* Explode paragraph text lines */}
                  {selectedPost.content.split("\n\n").map((chunk, idx) => {
                    const isHeader = chunk.startsWith("###");
                    const isList = chunk.startsWith("-");

                    if (isHeader) {
                      return (
                        <h4
                          key={idx}
                          className="font-display font-medium text-white text-lg sm:text-xl pt-4 hover:text-brand-cyan transition-colors flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-purple" />
                          {chunk.replace("###", "").trim()}
                        </h4>
                      );
                    }

                    if (isList) {
                      return (
                        <ul key={idx} className="space-y-2 border-l border-[#222225] pl-4">
                          {chunk
                            .split("\n")
                            .filter((line) => line.trim().length > 0)
                            .map((li, lidx) => (
                              <li key={lidx} className="text-gray-400 text-xs leading-relaxed flex items-start gap-1.5">
                                <span className="text-brand-cyan font-bold select-none">•</span>
                                <span>{li.replace("-", "").trim()}</span>
                              </li>
                            ))}
                        </ul>
                      );
                    }

                    return (
                      <p key={idx} className="whitespace-pre-line text-xs sm:text-sm">
                        {chunk}
                      </p>
                    );
                  })}
                </div>
              </div>

              {/* Author signature footer block */}
              <div className="mt-16 pt-6 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center space-x-3.5">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-brand-cyan/20 bg-cover bg-center">
                    <img
                      src={selectedPost.author.avatar}
                      alt={selectedPost.author.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="text-left font-display">
                    <span className="block text-xs font-semibold text-white/95">{selectedPost.author.name}</span>
                    <span className="block text-[9px] font-mono tracking-wider text-gray-500 uppercase">Designer Author</span>
                  </div>
                </div>

                <div className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-gradient-to-r from-brand-cyan/10 to-brand-purple/10 border border-brand-cyan/25 text-[10px] font-mono text-white select-none shadow">
                  <UserCheck size={11} className="text-brand-cyan shrink-0" />
                  <span>Verified Auth</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
