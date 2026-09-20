import { useEffect, useRef, useState } from 'react';
import './Reveal.css';

/**
 * useInView — fires once when the element scrolls into view.
 */
export const useInView = (options = {}) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return undefined;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px', ...options }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [options.threshold, options.rootMargin]);

  return [ref, inView];
};

/**
 * Reveal — one element sliding/fading in as it enters the viewport.
 * variant: up | left | right | scale
 */
const Reveal = ({
  children,
  variant = 'up',
  delay = 0,
  duration = 0.9,
  as: Tag = 'div',
  className = '',
  style,
  ...rest
}) => {
  const [ref, inView] = useInView();

  return (
    <Tag
      ref={ref}
      className={`reveal reveal--${variant} ${inView ? 'is-in' : ''} ${className}`}
      style={{
        transitionDelay: `${delay}s`,
        transitionDuration: `${duration}s`,
        ...style
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

/**
 * RevealGroup — staggers its direct children automatically.
 */
export const RevealGroup = ({
  children,
  stagger = 0.09,
  start = 0,
  variant = 'up',
  className = '',
  ...rest
}) => (
  <div className={className} {...rest}>
    {Array.isArray(children)
      ? children.map((child, i) => (
          <Reveal key={i} variant={variant} delay={start + i * stagger}>
            {child}
          </Reveal>
        ))
      : children}
  </div>
);

/**
 * SplitText — reveals a headline word by word.
 */
export const SplitText = ({ text, className = '', as: Tag = 'h2', stagger = 0.045, delay = 0 }) => {
  const [ref, inView] = useInView({ threshold: 0.3 });
  const words = String(text).split(' ');

  return (
    <Tag ref={ref} className={`split ${inView ? 'is-in' : ''} ${className}`}>
      {words.map((w, i) => (
        <span className="split-word" key={`${w}-${i}`}>
          <span className="split-inner" style={{ transitionDelay: `${delay + i * stagger}s` }}>
            {w}
          </span>
          {i < words.length - 1 ? '\u00A0' : ''}
        </span>
      ))}
    </Tag>
  );
};

/**
 * Counter — counts up to `value` when it enters view.
 */
export const Counter = ({ value, decimals = 0, suffix = '', duration = 1600 }) => {
  const [ref, inView] = useInView({ threshold: 0.5 });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return undefined;
    let raf;
    const t0 = performance.now();
    const loop = (t) => {
      const p = Math.min((t - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(value * eased);
      if (p < 1) raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  return (
    <span ref={ref} className="counter">
      {n.toFixed(decimals)}
      {suffix}
    </span>
  );
};

export default Reveal;
