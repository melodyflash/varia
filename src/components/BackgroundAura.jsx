import { motion, useAnimationFrame } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const colors = [
  'rgba(61, 130, 255, 0.45)',
  'rgba(128, 92, 255, 0.35)',
  'rgba(44, 220, 209, 0.3)'
];

export default function BackgroundAura() {
  const ref = useRef(null);
  const getReduceMotion = () => typeof document !== 'undefined' && document.documentElement.classList.contains('a11y-reduceMotion');
  const [reduceMotion, setReduceMotion] = useState(getReduceMotion);

  useEffect(() => {
    const observer = new MutationObserver(() => setReduceMotion(getReduceMotion()));
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  useAnimationFrame((time) => {
    if (!ref.current || reduceMotion) return;
    const rotate = (time / 12000) % 360;
    ref.current.style.transform = `translate(-50%, -50%) rotate(${rotate}deg)`;
  });

  return (
    <div className="aura-wrapper" aria-hidden="true">
      <motion.div
        ref={ref}
        className="aura"
        animate={reduceMotion ? { scale: 1 } : { scale: [0.96, 1.04, 0.96] }}
        transition={reduceMotion ? { duration: 0 } : { repeat: Infinity, duration: 18, ease: 'easeInOut' }}
        style={{ background: `radial-gradient(circle at 30% 30%, ${colors.join(',')})` }}
      />
    </div>
  );
}
