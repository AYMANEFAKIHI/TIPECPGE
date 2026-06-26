import { ReactNode, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";

export const PageTransition = ({ children }: { children: ReactNode }) => {
  const [location] = useLocation();

  useEffect(() => {
    // Support links like "/#pricing" navigating across routes — scroll to the
    // hash target once the new page has mounted.
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      // Wait a tick for the route's content to render before measuring position.
      const t = setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 80);
      return () => clearTimeout(t);
    }
  }, [location]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
