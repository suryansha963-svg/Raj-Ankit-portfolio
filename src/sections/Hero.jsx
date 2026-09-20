import { useCallback, useRef, useState } from 'react';
import ScrollFrames from '../components/ScrollFrames';
import TextType from '../components/TextType';
import RotatingText from '../components/RotatingText';
import { Counter } from '../components/Reveal';
import { profile, sequences, stats } from '../data/content';
import './Hero.css';

/**
 * Hero
 * ----
 * A 3-viewport-tall pinned stage. The AI-chip frame sequence scrubs in the
 * background while three "acts" of content cross-fade on top of it, driven by
 * the --sf-p custom property the player writes every frame.
 */
const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v);

/** ramp up between a and b, then back down between c and d */
const band = (p, a, b, c, d) => Math.min(clamp01((p - a) / (b - a)), clamp01((d - p) / (d - c)));

const Hero = () => {
  const [act, setAct] = useState(0);
  const stageRef = useRef(null);

  const handleProgress = useCallback((p) => {
    // Opacities are written straight to the DOM every frame — keeping them out
    // of React state avoids re-rendering 60x a second.
    const el = stageRef.current;
    if (el) {
      el.style.setProperty('--o1', String(clamp01(1.05 - p * 4.2)));
      el.style.setProperty('--o2', String(band(p, 0.28, 0.40, 0.58, 0.69)));
      el.style.setProperty('--o3', String(band(p, 0.72, 0.82, 1.6, 1.8)));
      el.style.setProperty('--p', p.toFixed(4));
    }
    // Quantised act drives pointer-events only, so it re-renders rarely.
    const next = p < 0.3 ? 0 : p < 0.72 ? 1 : 2;
    setAct((prev) => (prev === next ? prev : next));
  }, []);

  return (
    <section id="home" className="hero" ref={stageRef}>
      <ScrollFrames
        dir={sequences.hero.dir}
        count={sequences.hero.count}
        pages={4}
        overlay={0.42}
        smoothing={0.11}
        onProgress={handleProgress}
        className="hero-frames"
      >
        {/* ---------- ACT 1 — identity ---------- */}
        <div className={`hero-act hero-act--1 ${act === 0 ? 'is-live' : ''}`}>
          <div className="wrap hero-inner">
            <p className="hero-kicker mono">
              Ph.D. Researcher · Physics &amp; Materials Science
            </p>

            <h1 className="h1 hero-name">
              RAJ ANKIT <span className="grad-text">PANDEY</span>
            </h1>

            <div className="hero-rotate">
              <span className="hero-rotate-static">Working on</span>
              <RotatingText
                texts={profile.rotating}
                mainClassName="hero-rotate-pill"
                staggerFrom="last"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '-120%' }}
                staggerDuration={0.022}
                splitLevelClassName="hero-rotate-split"
                transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                rotationInterval={2200}
              />
            </div>

            <TextType
              className="hero-typed"
              text={profile.typed}
              typingSpeed={52}
              deletingSpeed={26}
              pauseDuration={1900}
              cursorCharacter="▌"
              cursorClassName="hero-cursor"
              textColors={['#9aa8bf']}
            />

            <div className="hero-cta">
              <a className="btn btn--primary" href="#research">
                View my research
              </a>
              <a className="btn btn--ghost" href={profile.cv} target="_blank" rel="noreferrer">
                Download CV
              </a>
            </div>
          </div>

          <div className="hero-scrollcue">
            <span className="mono">scroll</span>
            <span className="hero-scrollcue-line" />
          </div>
        </div>

        {/* ---------- ACT 2 — portrait + introduction ---------- */}
        <div className={`hero-act hero-act--2 ${act === 1 ? 'is-live' : ''}`}>
          <div className="wrap hero-intro">
            <div className="hero-portrait">
              <img src={profile.portrait} alt={`Portrait of ${profile.name}`} />
            </div>
            <div className="hero-intro-copy">
              <p className="eyebrow">Who I am</p>
              <h2 className="h2">
                I make ordinary motion <span className="grad-text">generate power</span>.
              </h2>
              <p className="lead">{profile.bio}</p>
              <p className="mono hero-affil">
                {profile.department} · {profile.institute}
              </p>
            </div>
          </div>
        </div>

        {/* ---------- ACT 3 — numbers ---------- */}
        <div className={`hero-act hero-act--3 ${act === 2 ? 'is-live' : ''}`}>
          <div className="wrap">
            <p className="eyebrow hero-stats-eyebrow">By the numbers</p>
            <div className="hero-stats">
              {stats.map((s) => (
                <div className="hero-stat" key={s.label}>
                  <span className="hero-stat-value grad-text">
                    <Counter value={s.value} decimals={s.decimals || 0} suffix={s.suffix} />
                  </span>
                  <span className="hero-stat-label mono">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollFrames>
    </section>
  );
};

export default Hero;
