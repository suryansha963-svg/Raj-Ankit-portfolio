import { useEffect } from 'react';
import './Lightbox.css';

/**
 * Lightbox — full-screen view of a research figure.
 * `shot` is { src, label } or null.
 */
const Lightbox = ({ shot, onClose }) => {
  useEffect(() => {
    if (!shot) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [shot]);

  if (!shot) return null;

  return (
    <div className="lb" role="dialog" aria-modal="true" aria-label={shot.label} onClick={onClose}>
      <button type="button" className="lb-close" onClick={onClose} aria-label="Close">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
        </svg>
      </button>
      <figure className="lb-figure" onClick={(e) => e.stopPropagation()}>
        <img src={shot.src} alt={shot.label} />
        <figcaption className="mono">{shot.label}</figcaption>
      </figure>
    </div>
  );
};

export default Lightbox;
