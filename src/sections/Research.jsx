import { useCallback, useEffect, useState } from 'react';
import Reveal, { SplitText } from '../components/Reveal';
import ScrollExpand from '../components/ScrollExpand';
import Lightbox from '../components/Lightbox';
import DemoVideos from '../components/DemoVideos';
import { media, researchAreas, researchInterests } from '../data/content';
import { demoVideos } from '../data/videos';
import './Research.css';

const Research = () => {
  const [zoom, setZoom] = useState(null);

  const open = useCallback((src, label) => setZoom({ src, label }), []);
  const close = useCallback(() => setZoom(null), []);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && close();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [close]);

  return (
    <>
      {/* ---------- the lab, opening to full bleed ---------- */}
      <div className="solid research-banner">
        <ScrollExpand
          src={media.collage}
          alt="Research overview: biopolymer nanofibres, functional ceramics, PTCR thermistors and a triboelectric nanogenerator on the bench"
          title="Inside the work"
          scrollHint="scroll to open"
          useWindowScroll
          startWidth={42}
          startHeight={56}
          startRadius={22}
          mediaZoom={1.32}
          scrollDistance={1.15}
          holdDistance={0.35}
          overlayScrim={0.5}
        >
          <div className="research-banner-copy">
            <p className="eyebrow">The bench</p>
            <h2 className="h2">
              Chitosan and BaTiO₃ in, <span className="grad-text">light out</span>.
            </h2>
            <p className="lead">
              Biopolymer nanofibres, functional ceramics and PTCR thermistors, characterised on the
              scope and demonstrated on a self-powered LED array.
            </p>
          </div>
        </ScrollExpand>
      </div>

      <section id="research" className="section solid layer research">
        <div className="wrap">
          <Reveal variant="up">
            <p className="eyebrow">001 / Research Interests</p>
          </Reveal>
          <SplitText
            as="h2"
            className="h2 research-title"
            text="Four threads, one question: can waste become watts?"
          />
          <Reveal variant="up" delay={0.12}>
            <p className="lead">
              Everything below sits on the same idea — that contact electrification in cheap,
              biodegradable materials can be engineered hard enough to power real devices.
            </p>
          </Reveal>
        </div>

        <div className="wrap research-rows">
          {researchAreas.map((area, i) => (
            <article
              className={`research-row ${
                area.gallery ? `is-gallery ${i % 2 ? 'is-flipped' : ''}` : 'is-strip'
              }`}
              key={area.id}
              style={{ '--accent': area.accent }}
            >
              {/* ----- visual ----- */}
              <Reveal variant={i % 2 ? 'right' : 'left'} className="research-visual">
                {area.image && (
                  <figure className="shot">
                    <button
                      type="button"
                      className="shot-btn"
                      onClick={() => open(area.image, area.title)}
                      aria-label={`Enlarge figure: ${area.title}`}
                    >
                      <img src={area.image} alt={area.caption || area.title} loading="lazy" />
                      <span className="shot-zoom" aria-hidden="true">
                        <svg
                          viewBox="0 0 24 24"
                          width="16"
                          height="16"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                        >
                          <circle cx="11" cy="11" r="7" />
                          <path d="M20 20l-3.5-3.5M11 8v6M8 11h6" strokeLinecap="round" />
                        </svg>
                      </span>
                    </button>
                    {area.caption && <figcaption className="shot-cap">{area.caption}</figcaption>}
                  </figure>
                )}

                {area.gallery && (
                  <div className="shot-gallery">
                    {area.gallery.map((g, gi) => (
                      <Reveal variant="up" delay={gi * 0.1} key={g.src}>
                        <figure className="shot shot--sm">
                          <button
                            type="button"
                            className="shot-btn"
                            onClick={() => open(g.src, g.label)}
                            aria-label={`Enlarge figure: ${g.label}`}
                          >
                            <img src={g.src} alt={g.note} loading="lazy" />
                          </button>
                          <figcaption className="shot-cap">
                            <span className="shot-label mono">{g.label}</span>
                            {g.note}
                          </figcaption>
                        </figure>
                      </Reveal>
                    ))}
                  </div>
                )}
              </Reveal>

              {/* ----- copy ----- */}
              <div className="research-copy">
                <div className="research-copy-head">
                  <Reveal variant="up" delay={0.05}>
                    <span className="research-index">{area.index}</span>
                  </Reveal>
                  <div className="research-copy-titles">
                    <Reveal variant="up" delay={0.1}>
                      <p className="research-tag mono">{area.tag}</p>
                    </Reveal>
                    <Reveal variant="up" delay={0.15}>
                      <h3 className="h3 research-heading">{area.title}</h3>
                    </Reveal>
                  </div>
                </div>
                <div className="research-copy-body">
                  <div>
                    <Reveal variant="up" delay={0.2}>
                      <p className="research-blurb">{area.blurb}</p>
                    </Reveal>
                    <Reveal variant="up" delay={0.25}>
                      <p className="research-detail">{area.detail}</p>
                    </Reveal>
                  </div>
                  <ul className="research-list">
                    {area.bullets.map((b, bi) => (
                      <Reveal as="li" variant="left" delay={0.3 + bi * 0.08} key={b}>
                        <span className="research-bullet" />
                        {b}
                      </Reveal>
                    ))}
                  </ul>
                </div>
              </div>

              <DemoVideos videos={demoVideos[area.id]} />
            </article>
          ))}
        </div>

        <div className="wrap research-interests">
          <Reveal variant="up">
            <p className="eyebrow">Full interest map</p>
          </Reveal>
          <div className="research-chips">
            {researchInterests.map((r, i) => (
              <Reveal variant="scale" delay={i * 0.04} key={r}>
                <span className="chip">{r}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Lightbox shot={zoom} onClose={close} />
    </>
  );
};

export default Research;
