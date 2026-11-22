
"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 0.8,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1,
    });

    // Keep GSAP ScrollTrigger synchronized with Lenis
    lenis.on("scroll", ScrollTrigger.update);

    // Use GSAP's animation clock for smooth scrolling
    const updateScroll = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateScroll);

    // Prevent GSAP from skipping frames during scrolling
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateScroll);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return null;
}
