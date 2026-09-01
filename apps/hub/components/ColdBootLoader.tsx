"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BRAND } from "@portfolio/config";

const STORAGE_KEY = "kenny-hub-loader-seen";

export default function ColdBootLoader() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem(STORAGE_KEY);
    if (!seen) {
      setVisible(true);
      sessionStorage.setItem(STORAGE_KEY, "1");
      const timer = setTimeout(() => setVisible(false), 1800);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-canvas"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden={!visible}
        >
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center border border-accent-border text-accent font-display font-extrabold text-lg gold-ring">
              K
            </span>
            <span className="font-display text-lg font-extrabold tracking-tight text-ink">
              {BRAND.shortName} Onifade
            </span>
          </div>
          <div className="relative mt-8 h-px w-48 overflow-hidden bg-line">
            <motion.div
              className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-accent to-transparent"
              initial={{ x: "-100%" }}
              animate={{ x: "200%" }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
