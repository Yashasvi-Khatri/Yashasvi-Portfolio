import { useEffect, useState, useRef } from 'react';

interface UseInViewAnimationProps {
  threshold?: number;
}

export const useInViewAnimation = <T extends HTMLElement>({ threshold = 0.1 }: UseInViewAnimationProps = {}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return { ref, inView };
};
