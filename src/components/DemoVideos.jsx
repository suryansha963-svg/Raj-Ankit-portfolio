import { useRef, useState } from 'react';
import Reveal from './Reveal';
import './DemoVideos.css';

/**
 * One demonstration clip. Shows the poster with a play button; the first
 * click starts playback and hands over to the browser's native controls.
 * Only one clip plays at a time — starting one pauses the others.
 *
 * This does NOT use the scroll-triggered <Reveal> wrapper: that gates
 * visibility behind an IntersectionObserver threshold, and on some
 * viewport heights the clip sits at opacity 0 for a while before the
 * threshold is crossed — real content (not a decorative flourish)
 * shouldn't ever look broken or missing. The entrance animation here
 * plays once on mount instead, so the clip is guaranteed visible.
 */
const DemoVideo = ({ v, delay }) => {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  const start = () => {
    const el = ref.current;
    if (!el) return;
    setStarted(true);
    el.play().catch(() => {});
  };

  const pauseOthers = () => {
    document.querySelectorAll('video.demo-video').forEach((el) => {
      if (el !== ref.current) el.pause();
    });
  };

  return (
    <figure className="demo demo-enter" style={{ '--ar': v.ratio, animationDelay: `${delay}s` }}>
      <div className="demo-frame">
        <video
          ref={ref}
          className="demo-video"
          src={v.src}
          poster={v.poster}
          preload="none"
          playsInline
          controls={started}
          onPlay={pauseOthers}
          aria-label={v.label}
        />
        {!started && (
          <button
            type="button"
            className="demo-play"
            onClick={start}
            aria-label={`Play video: ${v.label}`}
          >
            <span aria-hidden="true">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                <path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5Z" />
              </svg>
            </span>
          </button>
        )}
      </div>
      <figcaption className="shot-cap">
        <span className="shot-label mono">{v.label}</span>
        {v.note}
      </figcaption>
    </figure>
  );
};

const DemoVideos = ({ videos }) => {
  if (!videos?.length) return null;
  const sum = videos.reduce((total, v) => total + v.ratio, 0);

  return (
    <div className="research-videos">
      <Reveal variant="up">
        <p className="eyebrow">Demonstrations</p>
      </Reveal>
      <div className="demo-row" style={{ '--sum': sum.toFixed(4), '--n': videos.length }}>
        {videos.map((v, i) => (
          <DemoVideo v={v} delay={i * 0.1} key={v.src} />
        ))}
      </div>
    </div>
  );
};

export default DemoVideos;

