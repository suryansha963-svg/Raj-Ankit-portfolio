import { useCallback, useEffect, useRef, useState } from 'react';
import ScrollFrames from '../components/ScrollFrames';
import ScrollExpand from '../components/ScrollExpand';
import { sequences, thesis } from '../data/content';
import './Thesis.css';

/**
 * Thesis
 * ------
 * The second pinned frame sequence. As the chip animation scrubs, the six
 * findings of the Ph.D. thesis light up one after another, then the section
 * hands over to a ScrollExpand frame that opens to full bleed for the M.Sc.
 * work.
 */
const Thesis = () => {
  const total = thesis.phd.points.length;
  const [active, setActive] = useState(0);
  const listRef = useRef(null);

  // Keep the active finding parked at a constant height by sliding the list,
  // so long lists never overflow the pinned stage.
  useEffect(() => {
    const list = listRef.current;
    const el = list?.children?.[active];
    if (!list || !el) return;
    const target = el.offsetTop + el.offsetHeight / 2 - list.clientHeight * 0.44;
    list.style.transform = `translate3d(0, ${-Math.max(0, target)}px, 0)`;
  }, [active]);

  const handleProgress = useCallback(
    (p) => {
      // First 12% is the title beat; the rest steps through the findings.
      const t = (p - 0.12) / 0.8;
      const idx = Math.max(0, Math.min(total - 1, Math.floor(t * total)));
      setActive((prev) => (prev === idx ? prev : idx));
    },
    [total]
  );

  return (
    <section id="thesis" className="thesis">
      <ScrollFrames
        dir={sequences.lab.dir}
        count={sequences.lab.count}
        pages={6}
        overlay={0.78}
        smoothing={0.1}
        onProgress={handleProgress}
        className="thesis-frames"
      >
        <div className="wrap thesis-stage">
          <header className="thesis-head">
            <p className="eyebrow">002 / Thesis Work</p>
            <h2 className="h2 thesis-title">{thesis.phd.title}</h2>
            <p className="thesis-brief">{thesis.phd.brief}</p>
            <div className="thesis-meter">
              <span
                className="thesis-meter-fill"
                style={{ width: `${((active + 1) / total) * 100}%` }}
              />
            </div>
            <p className="mono thesis-count">
              finding {String(active + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </p>
          </header>

          <div className="thesis-points-viewport">
            <ol className="thesis-points" ref={listRef}>
            {thesis.phd.points.map((point, i) => (
              <li
                key={i}
                className={`thesis-point ${
                  i === active ? 'is-active' : i < active ? 'is-past' : ''
                }`}
              >
                <span className="thesis-point-n mono">{String(i + 1).padStart(2, '0')}</span>
                <p>{point}</p>
              </li>
            ))}
            </ol>
          </div>
        </div>
      </ScrollFrames>

      {/* ---------- M.Sc. thesis: frame opens to full bleed ---------- */}
      <div className="thesis-expand solid">
        <ScrollExpand
          src="images/expand.jpg"
          alt="Lead-free piezoelectric energy harvesting"
          title={thesis.msc.label}
          scrollHint="keep scrolling"
          useWindowScroll
          startWidth={40}
          startHeight={56}
          startRadius={22}
          mediaZoom={1.4}
          scrollDistance={1.2}
          holdDistance={0.4}
          overlayScrim={0.8}
        >
          <div className="thesis-msc">
            <p className="eyebrow">M.Sc. Thesis</p>
            <h3 className="h2 thesis-msc-title">{thesis.msc.title}</h3>
            <p className="lead">{thesis.msc.brief}</p>
            <ul className="thesis-msc-list">
              {thesis.msc.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </ScrollExpand>
      </div>
    </section>
  );
};

export default Thesis;
