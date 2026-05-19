"use client";

import { useEffect, useRef, useState, RefObject } from "react";

export function useInView<T extends HTMLElement>(
  ref?: RefObject<T>,
  options?: IntersectionObserverInit
): boolean {
  const [inView, setInView] = useState(false);
  const internalRef = useRef<T>(null);
  const target = ref ?? internalRef;

  useEffect(() => {
    const el = target.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1, ...options }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, options]);

  return inView;
}
