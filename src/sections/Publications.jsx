import Reveal, { SplitText } from '../components/Reveal';
import { conferences, publications } from '../data/content';
import './Publications.css';

const Publications = () => (
  <section id="publications" className="section solid layer pubs">
    <div className="wrap">
      <Reveal variant="up">
        <p className="eyebrow">005 / Research Publications</p>
      </Reveal>
      <SplitText as="h2" className="h2" text="Peer-reviewed output" />
      <Reveal variant="up" delay={0.1}>
        <p className="lead">
          Five journal articles across Elsevier, Springer and the Royal Society of Chemistry —
          all first-author.
        </p>
      </Reveal>

      <ol className="pub-list">
        {publications.map((p, i) => (
          <Reveal as="li" variant="up" delay={i * 0.06} className="pub-item" key={p.n}>
            <a className="pub-link" href={p.doi} target="_blank" rel="noreferrer">
              <span className="pub-n mono">{p.n}</span>
              <div className="pub-body">
                <p className="pub-authors mono">
                  {p.authors} · <span className="pub-year">{p.year}</span>
                </p>
                <h3 className="pub-title">{p.title}</h3>
                <p className="pub-journal">
                  <em>{p.journal}</em>
                  <span className="pub-detail"> · {p.detail}</span>
                </p>
              </div>
              <span className="pub-arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M7 17 17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </Reveal>
        ))}
      </ol>

      <div className="pub-conf">
        <Reveal variant="up">
          <p className="eyebrow">Conference presentations</p>
        </Reveal>
        <div className="conf-grid">
          {conferences.map((c, i) => (
            <Reveal variant="up" delay={i * 0.08} key={c.meta}>
              <div className="panel conf-card">
                <p className="conf-title">{c.title}</p>
                <p className="conf-meta mono">{c.meta}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Publications;
