import { useRef, useState, useEffect, useCallback } from 'react';

export const useParallax = (speed = 0.1) => {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);
  const rafId = useRef(null);

  const updateOffset = useCallback(() => {
    if (ref.current) {
      const scrollY = window.scrollY;
      const elementTop = ref.current.getBoundingClientRect().top + scrollY;
      const viewportHeight = window.innerHeight;
      const distanceFromViewport = scrollY + viewportHeight - elementTop;
      let parallaxValue = distanceFromViewport * speed;
      parallaxValue = Math.min(Math.max(parallaxValue, -100), 100);
      setOffset(parallaxValue);
    }
    rafId.current = null;
  }, [speed]);

  const handleScroll = useCallback(() => {
    if (rafId.current !== null) return;
    rafId.current = requestAnimationFrame(updateOffset);
  }, [updateOffset]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
    };
  }, [handleScroll]);

  return { ref, offset };
};