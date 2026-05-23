import { useState, ChangeEvent, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Send, CheckCircle, AlertTriangle, MessageSquareCode, ArrowUpRight, Copy, Check } from "lucide-react";
import { SabbirProfile } from "../data";

interface ContactProps {
  theme: "dark" | "light";
}

export default function Contact({ theme }: ContactProps) {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SabbirProfile.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Client-side quick validations
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please fill out all mandatory fields before sending.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("sending");

    // Simulate luxury-grade server delivery transaction
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  const socialIconsMap = (name: string) => {
    switch (name) {
      case "dribbble":
        return "Dribbble";
      case "linkedin":
        return "LinkedIn";
      case "behance":
        return "Behance";
      case "instagram":
        return "Instagram";
      default:
        return "Twitter";
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden flex items-center justify-center">
      {/* Visual leak nodes */}
      <div className="glowing-orbs pointer-events-none select-none">
        <div className={`orb orb-cyan w-[380px] h-[380px] top-[15%] right-[5%] ${theme === "dark" ? "opacity-15" : "opacity-5"}`} />
        <div className={`orb orb-purple w-[350px] h-[350px] bottom-[15%] left-[5%] ${theme === "dark" ? "opacity-15" : "opacity-5"}`} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-16 space-y-3">
          <div className="flex items-center space-x-2 text-brand-cyan text-xs font-mono tracking-widest uppercase font-bold">
            <MessageSquareCode size={14} />
            <span>07 / CONNECT WITH ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 dark:text-white tracking-tighter leading-tight">
            Initiate a high-performance <br />
            <span className="font-serif italic font-normal text-gradient-purple-cyan">collaboration today.</span>
          </h2>
          <div className="w-20 h-[1.5px] bg-gradient-to-r from-brand-cyan to-brand-purple rounded-full mt-2" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Direct info, Social listings */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 p-8 rounded-3xl glass-effect glass-panel border border-white/5 shadow-xl select-none group interactive-card text-left">
            <div className="space-y-6">
              <span className="text-[10px] font-mono tracking-widest text-brand-cyan uppercase font-bold">
                // CONNECT INBOX
              </span>
              <h3 className="text-2xl font-display font-medium text-gray-900 dark:text-white">
                Have a vision? Let’s organize the layout together.
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">
                Whether you want to build a dense business dashboard analytics platform, optimize conversions of an existing SaaS landing web, construct an atomic design system, or consult on a new mobile interaction app, write to me!
              </p>
            </div>

            {/* Direct Email Click-to-copy card */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-gray-200 dark:border-white/5 grid grid-cols-1 sm:grid-cols-12 items-center gap-4">
              <div className="sm:col-span-2 p-3 w-fit rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan shrink-0">
                <Mail size={16} />
              </div>
              <div className="sm:col-span-8 text-left min-w-0">
                <span className="block text-[9px] font-mono text-gray-500 uppercase tracking-widest">OFFICIAL EMAIL</span>
                <span className="block text-xs sm:text-sm font-semibold text-gray-800 dark:text-white truncate">{SabbirProfile.contact.email}</span>
              </div>
              <button
                onClick={handleCopyEmail}
                className="sm:col-span-2 p-2.5 rounded-lg border border-gray-200 dark:border-white/10 dark:hover:border-white/20 hover:text-brand-cyan transition-colors ml-auto sm:ml-0 flex items-center justify-center shrink-0"
                aria-label="Copy email address"
              >
                {copiedEmail ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
              </button>
            </div>

            {/* Social linkages lists */}
            <div className="space-y-4 pt-6 border-t border-gray-200 dark:border-white/5 text-left">
              <span className="block text-[10px] font-mono tracking-widest text-[#a855f7] uppercase font-bold mb-4">
                // CREATIVE CHANNELS
              </span>
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(SabbirProfile.contact.socials).map(([name, url]) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noreferrer referrer"
                    className="flex justify-between items-center p-3 rounded-xl border border-gray-200 dark:border-white/10 dark:hover:border-white/20 bg-gray-50 dark:bg-white/[0.02]/30 text-gray-700 dark:text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-brand-cyan hover:to-brand-purple text-xs font-semibold uppercase tracking-wider transition-all pointer-events-auto"
                  >
                    <span>{socialIconsMap(name)}</span>
                    <ArrowUpRight size={13} className="opacity-60" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Premium Form Workspace */}
          <div className="lg:col-span-7 p-8 rounded-3xl glass-effect glass-panel border border-white/5 shadow-xl flex flex-col justify-between group interactive-card text-left relative">
            <span className="block text-[10px] font-mono tracking-widest text-brand-cyan uppercase font-bold mb-6">
              // SECURE TRANSACTIONAL MESSAGE GATE
            </span>

            <form onSubmit={handleSubmit} className="space-y-5 flex-grow flex flex-col justify-between">
              <div className="space-y-4">
                {/* Name / Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="name" className="text-[10px] font-mono tracking-wider text-gray-400 dark:text-gray-500 uppercase">
                      Your Identity *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4.5 py-3.5 rounded-xl border border-gray-200 dark:border-white/10 focus:border-brand-cyan focus:outline-none bg-white/5 dark:bg-white/[0.03] text-gray-900 dark:text-white text-xs sm:text-sm transition-all pointer-events-auto cursor-text text-left"
                    />
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label htmlFor="email" className="text-[10px] font-mono tracking-wider text-gray-400 dark:text-gray-500 uppercase">
                      Electronic Mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="e.g. john@company.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4.5 py-3.5 rounded-xl border border-gray-200 dark:border-white/10 focus:border-brand-cyan focus:outline-none bg-white/5 dark:bg-white/[0.03] text-gray-900 dark:text-white text-xs sm:text-sm transition-all pointer-events-auto cursor-text text-left"
                    />
                  </div>
                </div>

                {/* Subject of connection */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="subject" className="text-[10px] font-mono tracking-wider text-gray-400 dark:text-gray-500 uppercase">
                    Core Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="e.g. SaaS Dashboard Redesign Project"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4.5 py-3.5 rounded-xl border border-gray-200 dark:border-white/10 focus:border-brand-cyan focus:outline-none bg-white/5 dark:bg-white/[0.03] text-gray-900 dark:text-white text-xs sm:text-sm transition-all pointer-events-auto cursor-text text-left"
                  />
                </div>

                {/* Core message */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="message" className="text-[10px] font-mono tracking-wider text-gray-400 dark:text-gray-500 uppercase">
                    Detail Requirements *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Describe your timeline, visual criteria, and metrics..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4.5 py-3.5 rounded-xl border border-gray-200 dark:border-white/10 focus:border-brand-cyan focus:outline-none bg-white/5 dark:bg-white/[0.03] text-gray-900 dark:text-white text-xs sm:text-sm transition-all pointer-events-auto cursor-text text-left resize-none"
                  />
                </div>
              </div>

              {/* Error messages alerting */}
              <AnimatePresence>
                {status === "error" && (
                  <motion.div
                    className="p-3.5 h-fit rounded-xl border border-red-500/20 bg-red-500/10 text-red-400 flex items-center space-x-2.5 text-xs text-left"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <AlertTriangle size={15} className="shrink-0" />
                    <span>{errorMessage}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit CTA action row */}
              <button
                type="submit"
                disabled={status === "sending"}
                className={`w-full py-4 mt-4 rounded-xl text-xs font-semibold uppercase tracking-widest font-mono text-white flex items-center justify-center space-x-2 hover:scale-[1.01] transition-transform shadow-lg pointer-events-auto cursor-pointer ${
                  status === "sending"
                    ? "bg-[#222225] text-gray-500 cursor-not-allowed"
                    : "bg-gradient-to-r from-brand-cyan to-brand-purple hover:shadow-brand-cyan/20"
                }`}
              >
                <span>{status === "sending" ? "DELIVERING INTERFACE ARTIFACTS..." : "TRANSMIT INQUIRY FEED"}</span>
                <Send size={12} className="shrink-0" />
              </button>
            </form>

            {/* Success Overlay Panel (Modal inside Form Grid) */}
            <AnimatePresence>
              {status === "success" && (
                <motion.div
                  className="absolute inset-0 z-20 rounded-3xl bg-[#08080a] flex flex-col items-center justify-center text-center p-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="space-y-4">
                    <motion.div
                      className="p-4 w-fit h-fit rounded-full bg-emerald-500/10 border border-emerald-500/35 text-emerald-500 mx-auto"
                      initial={{ scale: 0.5, rotate: -45 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    >
                      <CheckCircle size={32} />
                    </motion.div>
                    <h4 className="text-white font-display text-xl font-bold uppercase tracking-wide pt-2">
                      Inquiry Logged Successfully!
                    </h4>
                    <p className="text-gray-400 text-xs sm:text-sm max-w-sm mx-auto leading-relaxed">
                      Sabbir Shohan will review your dashboard metrics and response schedule inside the coming 24 hours. Let's build!
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="px-6 py-2.5 rounded-lg border border-white/10 hover:border-white/20 text-white text-xs font-mono uppercase tracking-wider hover:text-brand-cyan duration-300 pointer-events-auto cursor-pointer"
                    >
                      Return to form
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
