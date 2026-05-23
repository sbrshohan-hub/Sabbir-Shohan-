import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function CustomCursor() {
  const [hidden, setHidden] = useState(true);
  const [hovered, setHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 400, mass: 0.6 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const dotSpringConfig = { damping: 10, stiffness: 1000 };
  const dotCursorX = useSpring(mouseX, dotSpringConfig);
  const dotCursorY = useSpring(mouseY, dotSpringConfig);

  useEffect(() => {
    // Disable custom cursor on mobile surfaces
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      setHidden(true);
      return;
    }

    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX - 16);
      mouseY.set(e.clientY - 16);
      setHidden(false);
    };

    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);

    window.addEventListener("mousemove", moveMouse);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    const handleHoverStart = () => setHovered(true);
    const handleHoverEnd = () => setHovered(false);

    // Dynamic listener for interactive components
    const updateListeners = () => {
      const interactives = document.querySelectorAll("a, button, [role='button'], input, textarea, .interactive-card");
      interactives.forEach((elem) => {
        elem.addEventListener("mouseenter", handleHoverStart);
        elem.addEventListener("mouseleave", handleHoverEnd);
      });
    };

    updateListeners();

    // Re-bind when DOM changes
    const observer = new MutationObserver(updateListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", moveMouse);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      observer.disconnect();
      
      const interactives = document.querySelectorAll("a, button, [role='button'], input, textarea, .interactive-card");
      interactives.forEach((elem) => {
        elem.removeEventListener("mouseenter", handleHoverStart);
        elem.removeEventListener("mouseleave", handleHoverEnd);
      });
    };
  }, [mouseX, mouseY]);

  if (hidden) return null;

  return (
    <>
      {/* Outer Spring Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-brand-cyan/60 pointer-events-none z-[9999] cursor-ring mix-blend-difference hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: hovered ? 1.5 : 1,
          backgroundColor: hovered ? "rgba(6, 182, 212, 0.2)" : "rgba(6, 182, 212, 0.0)",
          borderColor: hovered ? "rgba(168, 85, 247, 0.8)" : "rgba(6, 182, 212, 0.6)",
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.3 }}
      />
      {/* Fixed Center Core Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-brand-purple pointer-events-none z-[9999] cursor-ring mix-blend-difference hidden md:block"
        style={{
          x: dotCursorX,
          y: dotCursorY,
          translateX: "12px",
          translateY: "12px",
        }}
        animate={{
          scale: hovered ? 0.5 : 1,
          backgroundColor: hovered ? "#06b6d4" : "#a855f7",
        }}
      />
    </>
  );
}
