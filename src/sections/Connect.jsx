import Reveal, { SplitText } from '../components/Reveal';
import { connect, links, profile, references } from '../data/content';
import './Connect.css';

const social = [
  {
    label: 'Google Scholar',
    href: links.scholar,
    d: 'M12 3 1 9l11 6 9-4.9V17h2V9L12 3ZM5 13.2V17c0 2.2 3.1 4 7 4s7-1.8 7-4v-3.8l-7 3.8-7-3.8Z'
  },
  {
    label: 'ResearchGate',
    href: links.researchgate,
    d: 'M6 4h5a4 4 0 0 1 0 8H9l6 8h-3l-5.4-7.2V20H4V6a2 2 0 0 1 2-2Zm3 2H6v4h3a2 2 0 0 0 0-4Z'
  },
  {
    label: 'LinkedIn',
    href: links.linkedin,
    d: 'M4.5 3.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM3 9h3v12H3V9Zm6 0h3v1.7A3.6 3.6 0 0 1 15 9c3 0 4 2 4 4.7V21h-3v-6.6c0-1.7-.6-2.7-2-2.7s-2.3 1-2.3 2.7V21H9V9Z'
  },
  {
    label: 'Email',
    href: links.email,
    d: 'M3 6h18v12H3V6Zm0 0 9 7 9-7'
  }
];

const Connect = () => (
  <section id="connect" className="section solid layer connect">
    <div className="wrap">
      <Reveal variant="up">
        <p className="eyebrow">007 / Let's Connect</p>
      </Reveal>
      <SplitText as="h2" className="h2 connect-title" text="Open to postdoctoral positions" />
      <Reveal variant="up" delay={0.1}>
        <p className="lead connect-body">{connect.body}</p>
      </Reveal>

      <Reveal variant="up" delay={0.18}>
        <div className="connect-actions">
          <a className="btn btn--primary" href={links.email}>
            {profile.email}
          </a>
          <a className="btn btn--ghost" href={profile.cv} target="_blank" rel="noreferrer">
            Download CV
          </a>
        </div>
      </Reveal>

      <div className="connect-social">
        {social.map((s, i) => (
          <Reveal variant="scale" delay={0.22 + i * 0.07} key={s.label}>
            <a className="social-card panel panel-hover" href={s.href} target="_blank" rel="noreferrer">
              <span className="social-icon">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d={s.d} />
                </svg>
              </span>
              <span className="social-label">{s.label}</span>
            </a>
          </Reveal>
        ))}
      </div>

      <div className="connect-refs">
        <Reveal variant="up">
          <p className="eyebrow">References</p>
        </Reveal>
        <div className="ref-grid">
          {references.map((r, i) => (
            <Reveal variant="up" delay={i * 0.08} key={r.name}>
              <div className="panel ref-card">
                <h3 className="h3 ref-name">{r.name}</h3>
                <p className="ref-role mono">{r.role}</p>
                <p className="ref-org">{r.org}</p>
                <a className="ref-mail" href={`mailto:${r.email}`}>
                  {r.email}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>

    <footer className="footer">
      <div className="wrap footer-inner">
        <span className="mono">
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span className="mono footer-loc">{profile.location}</span>
        <a className="mono footer-top" href="#home">
          back to top ↑
        </a>
      </div>
    </footer>
  </section>
);

export default Connect;
