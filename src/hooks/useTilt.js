import { useState, useRef, useEffect } from 'react';

/**
 * A custom React hook that calculates mouse-hover coordinates on a DOM element
 * and returns CSS styles for a smooth 3D parallax tilt effect.
 * 
 * @param {Object} options Configuration parameters.
 * @param {number} options.max Maximum degrees of rotation.
 * @param {number} options.perspective 3D space depth.
 * @param {number} options.scale Scaling multiplier on hover.
 * @param {number} options.speed Return transitions speed in ms.
 */
export default function useTilt(options = {}) {
  const ref = useRef(null);
  const [style, setStyle] = useState({
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    transition: 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
    transformStyle: 'preserve-3d',
  });

  const { max = 12, perspective = 1000, scale = 1.03, speed = 500 } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      
      // Coordinates relative to element center
      const x = e.clientX - rect.left - width / 2;
      const y = e.clientY - rect.top - height / 2;

      // Calculate tilt percentages
      const rotateX = -(y / (height / 2)) * max;
      const rotateY = (x / (width / 2)) * max;

      setStyle({
        transform: `perspective(${perspective}px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`,
        transition: 'transform 0.1s ease-out',
        transformStyle: 'preserve-3d',
      });
    };

    const handleMouseLeave = () => {
      setStyle({
        transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
        transition: `transform ${speed}ms cubic-bezier(0.25, 1, 0.5, 1)`,
        transformStyle: 'preserve-3d',
      });
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [max, perspective, scale, speed]);

  return { ref, style };
}
