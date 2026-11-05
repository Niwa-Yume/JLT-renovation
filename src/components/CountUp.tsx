import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

// "500+" → compte de 0 à 500 en gardant le suffixe. Le texte final est rendu d'emblée (sans JS / SEO).
const CountUp = ({ value }: { value: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduced = useReducedMotion();
  const [, num, suffix = ""] = value.match(/^(\d+)(.*)$/) ?? [];

  useEffect(() => {
    if (!inView || reduced || !num || !ref.current) return;
    const el = ref.current;
    const controls = animate(0, Number(num), {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => (el.textContent = Math.round(v) + suffix),
    });
    return () => controls.stop();
  }, [inView, reduced, num, suffix]);

  return <span ref={ref} className="tabular-nums">{value}</span>;
};

export default CountUp;
