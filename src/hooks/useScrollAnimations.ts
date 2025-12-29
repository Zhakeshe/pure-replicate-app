import { useEffect } from "react";

/**
 * Hooks up scroll-triggered animations for any element that declares
 * `data-animate-on-scroll`.
 *
 * Optional attributes:
 * - data-animate-delay: CSS time string for per-element delay
 * - data-animate-stagger: "true" to apply incremental delays based on DOM order
 */
export const useScrollAnimations = () => {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-animate-on-scroll]")
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const target = entry.target as HTMLElement;
          const animateClass = target.dataset.animateOnScroll;
          if (animateClass) {
            animateClass
              .split(" ")
              .filter(Boolean)
              .forEach((cls) => target.classList.add(cls));
          }
          if (target.dataset.animateDelay) {
            target.style.animationDelay = target.dataset.animateDelay;
          }
          target.classList.add("scroll-reveal-visible");
          observer.unobserve(target);
        });
      },
      { threshold: 0.25, rootMargin: "0px 0px -5%" }
    );

    elements.forEach((element, index) => {
      element.classList.add("scroll-reveal");
      if (element.dataset.animateStagger === "true") {
        const baseDelay = parseFloat(element.dataset.animateDelay || "0");
        const staggerDelay = baseDelay + index * 0.06;
        element.style.animationDelay = `${staggerDelay}s`;
      }
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);
};

export default useScrollAnimations;
