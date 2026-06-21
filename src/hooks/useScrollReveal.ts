import { useEffect } from "react";

/**
 * Observes all [data-reveal] elements and adds `.is-visible` when they
 * enter the viewport. Runs once after first mount; cleans up on unmount.
 */
export const useScrollReveal = () => {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll("[data-reveal]"));
    if (!els.length) return;

    const show = (el: Element) => el.classList.add("is-visible");

    // Elements already in view on load should appear immediately
    els.forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) show(el);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (isIntersecting) {
            show(target);
            observer.unobserve(target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -48px 0px" }
    );

    els.forEach((el) => {
      if (!el.classList.contains("is-visible")) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
};
