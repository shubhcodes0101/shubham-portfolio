
"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export default function CinematicIntro() {
  const [visible, setVisible] = useState(true);
  const [showTitle, setShowTitle] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const titleTimer = window.setTimeout(
      () => setShowTitle(true),
      prefersReducedMotion ? 100 : 1100
    );

    const exitTimer = window.setTimeout(
      () => setVisible(false),
      prefersReducedMotion ? 900 : 4000
    );

    return () => {
      window.clearTimeout(titleTimer);
      window.clearTimeout(exitTimer);
    };
  }, [prefersReducedMotion]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="intro-background fixed inset-0 z-50 flex flex-col items-center justify-center px-5"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.04,
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <button
            onClick={() => setVisible(false)}
            className="absolute right-6 top-6 z-10 font-mono text-xs tracking-widest text-[#c69a52] transition-colors hover:text-white"
            aria-label="Skip introduction"
          >
            SKIP INTRO ↗
          </button>

          <div className="mb-12 text-center">
            <p className="font-mono text-[10px] tracking-[0.45em] text-[#c69a52]">
              LIGHTS, CAMERA, CODE.
            </p>
          </div>

          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="clapper">
              <div className="clapper-bottom" />
              <div className="clapper-top" />
            </div>
          </motion.div>

          <AnimatePresence>
            {showTitle && (
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 35, filter: "blur(12px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h1 className="font-display text-5xl tracking-wide text-[#f1e8d9] sm:text-7xl md:text-8xl">
                  SHUBHAM REDDY
                </h1>

                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.4, duration: 2.5 }}
                  className="film-divider mx-auto mt-5 h-px w-48"
                />

                <p className="mt-5 font-mono text-[10px] tracking-[0.4em] text-[#c69a52] sm:text-xs">
                  A DEVELOPER&apos;S STORY
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="absolute bottom-10 font-mono text-[9px] tracking-[0.3em] text-[#a49a8e]">
            THE WALKING DEV
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
