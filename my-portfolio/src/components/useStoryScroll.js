// Shared scroll behaviour for the "data story" routes:
//  - `.reveal` elements fade/slide in when scrolled into view
//  - `.chart-section` elements get a `draw` class to trigger CSS animations
//  - `.num[data-count]` elements count up to their target value
// Pass a ref to the story's root element.
import { useEffect } from "react";

export default function useStoryScroll(rootRef) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const observers = [];

    const addOnce = (className, threshold) => {
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add(className);
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold }
      );
      return obs;
    };

    // Reveal on scroll
    const revealObserver = addOnce("in-view", 0.15);
    root.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));
    observers.push(revealObserver);

    // Draw charts when their section enters view
    const chartObserver = addOnce("draw", 0.4);
    root.querySelectorAll(".chart-section").forEach((el) => chartObserver.observe(el));
    observers.push(chartObserver);

    // Count-up for stat tiles
    const countUp = (el) => {
      const target = parseInt(el.getAttribute("data-count"), 10);
      const suffix = el.getAttribute("data-suffix") || "";
      if (reduceMotion || Number.isNaN(target)) {
        el.textContent = (Number.isNaN(target) ? "" : target.toLocaleString()) + suffix;
        return;
      }
      let start = null;
      const dur = 1400;
      const tick = (ts) => {
        if (!start) start = ts;
        const p = Math.min((ts - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.floor(eased * target).toLocaleString() + suffix;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    const statObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            countUp(entry.target);
            statObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );
    root.querySelectorAll(".num[data-count]").forEach((el) => statObserver.observe(el));
    observers.push(statObserver);

    return () => observers.forEach((o) => o.disconnect());
  }, [rootRef]);
}
