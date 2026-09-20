import { useCallback, useEffect, useRef, useState } from 'react';
import './ScrollFrames.css';

const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);

/**
 * ScrollFrames
 * ------------
 * Plays an image sequence on a <canvas> as the user scrolls. The section is
 * `pages` viewport-heights tall; the canvas is sticky inside it, so the frames
 * scrub while the page stays pinned. Children render on top of the canvas and
 * can react to progress via the `render` prop.
 *
 * Frames are preloaded in priority order (nearest-to-current first) so the
 * sequence starts playing before the whole set has landed.
 */
const ScrollFrames = ({
  dir,
  count: countProp,
  frames,
  pad = 3,
  ext = 'jpg',
  pages = 3,
  smoothing = 0.12,
  className = '',
  overlay = 0.35,
  vignette = true,
  children,
  onProgress
}) => {
  const wrapRef = useRef(null);
  const stickyRef = useRef(null);
  const canvasRef = useRef(null);
  const progressCbRef = useRef(onProgress);
  progressCbRef.current = onProgress;
  const imagesRef = useRef([]);
  const targetRef = useRef(0);
  const currentRef = useRef(0);
  const rafRef = useRef(0);
  const loadedRef = useRef(0);
  const [ready, setReady] = useState(false);
  const [loadPct, setLoadPct] = useState(0);

  // Two ways to supply the sequence: a directory + frame count (files served
  // from /public), or an explicit array of URLs (used by the single-file
  // preview build, where every frame is inlined as a data URI).
  const count = frames ? frames.length : countProp;

  const srcFor = useCallback(
    (i) => (frames ? frames[i] : `${dir}/f${String(i).padStart(pad, '0')}.${ext}`),
    [frames, dir, pad, ext]
  );

  /* ---------------- preload ---------------- */
  useEffect(() => {
    let alive = true;
    const imgs = new Array(count);
    imagesRef.current = imgs;
    loadedRef.current = 0;

    const bump = () => {
      if (!alive) return;
      loadedRef.current += 1;
      const pct = loadedRef.current / count;
      setLoadPct(pct);
      // Start drawing as soon as the opening frames are in.
      if (loadedRef.current >= Math.min(8, count)) setReady(true);
    };

    // Load first frame immediately, then fan out.
    const order = [];
    for (let i = 0; i < count; i += 1) order.push(i);

    let cursor = 0;
    const CONCURRENCY = 8;

    const next = () => {
      if (!alive || cursor >= order.length) return;
      const i = order[cursor];
      cursor += 1;
      const img = new Image();
      img.decoding = 'async';
      img.onload = () => {
        bump();
        next();
      };
      img.onerror = () => {
        bump();
        next();
      };
      img.src = srcFor(i);
      imgs[i] = img;
    };

    for (let k = 0; k < CONCURRENCY; k += 1) next();

    return () => {
      alive = false;
    };
  }, [count, srcFor]);

  /* ---------------- scroll + draw loop ---------------- */
  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return undefined;

    const ctx = canvas.getContext('2d', { alpha: false });
    let w = 0;
    let h = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.max(1, Math.round(w * dpr));
      canvas.height = Math.max(1, Math.round(h * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const readScroll = () => {
      const rect = wrap.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const p = total <= 0 ? 0 : clamp(-rect.top / total, 0, 1);
      targetRef.current = p;
    };

    const drawCover = (img) => {
      if (!img || !img.complete || !img.naturalWidth) return false;
      const ir = img.naturalWidth / img.naturalHeight;
      const cr = w / h;
      let dw;
      let dh;
      if (cr > ir) {
        dw = w;
        dh = w / ir;
      } else {
        dh = h;
        dw = h * ir;
      }
      ctx.drawImage(img, (w - dw) / 2, (h - dh) / 2, dw, dh);
      return true;
    };

    const nearestLoaded = (idx) => {
      const imgs = imagesRef.current;
      if (imgs[idx]?.complete && imgs[idx].naturalWidth) return imgs[idx];
      for (let d = 1; d < count; d += 1) {
        const a = imgs[idx - d];
        if (a?.complete && a.naturalWidth) return a;
        const b = imgs[idx + d];
        if (b?.complete && b.naturalWidth) return b;
      }
      return null;
    };

    const tick = () => {
      const t = targetRef.current;
      const c = currentRef.current;
      currentRef.current = smoothing <= 0 ? t : c + (t - c) * smoothing;
      if (Math.abs(t - currentRef.current) < 0.00015) currentRef.current = t;

      const p = currentRef.current;
      const idx = clamp(Math.round(p * (count - 1)), 0, count - 1);

      ctx.fillStyle = '#04060d';
      ctx.fillRect(0, 0, w, h);
      drawCover(nearestLoaded(idx));

      if (stickyRef.current) {
        stickyRef.current.style.setProperty('--sf-p', p.toFixed(4));
      }
      if (progressCbRef.current) progressCbRef.current(p);
      rafRef.current = requestAnimationFrame(tick);
    };

    resize();
    readScroll();
    currentRef.current = targetRef.current;
    rafRef.current = requestAnimationFrame(tick);

    window.addEventListener('scroll', readScroll, { passive: true });
    window.addEventListener('resize', () => {
      resize();
      readScroll();
    });

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('scroll', readScroll);
    };
  }, [count, smoothing]);

  return (
    <div
      ref={wrapRef}
      className={`sf-wrap ${className}`}
      style={{ height: `${pages * 100}vh` }}
    >
      <div className="sf-sticky" ref={stickyRef}>
        <canvas ref={canvasRef} className="sf-canvas" />
        <div className="sf-tint" style={{ opacity: overlay }} />
        {vignette && <div className="sf-vignette" />}
        {!ready && (
          <div className="sf-loader">
            <div className="sf-loader-bar">
              <span style={{ width: `${Math.round(loadPct * 100)}%` }} />
            </div>
            <span className="sf-loader-label">
              initialising sequence · {Math.round(loadPct * 100)}%
            </span>
          </div>
        )}
        <div className="sf-content">{children}</div>
      </div>
    </div>
  );
};

export default ScrollFrames;
