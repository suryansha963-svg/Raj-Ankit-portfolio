import Reveal, { SplitText } from '../components/Reveal';
import { awards } from '../data/content';
import './Awards.css';

const icons = {
  trophy: 'M8 3h8v3a4 4 0 0 1-8 0V3ZM5 5H3v2a4 4 0 0 0 4 4M19 5h2v2a4 4 0 0 1-4 4M9 21h6M12 14v7',
  badge: 'M12 2 15 6l5 1-3 4 1 5-6-2-6 2 1-5-3-4 5-1 3-4Z',
  star: 'M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9L12 3Z',
  spark: 'M12 3v6M12 15v6M3 12h6M15 12h6M6 6l3 3M15 15l3 3M18 6l-3 3M9 15l-3 3',
  rank: 'M4 20h4v-8H4v8Zm6 0h4V4h-4v16Zm6 0h4v-5h-4v5Z',
  quiz: 'M9 9a3 3 0 1 1 4 2.8c-.7.3-1 .9-1 1.7v.5M12 18h.01'
};

const Awards = () => (
  <section id="awards" className="section solid layer awards">
    <div className="wrap">
      <Reveal variant="up">
        <p className="eyebrow">004 / Awards &amp; Achievements</p>
      </Reveal>
      <SplitText as="h2" className="h2" text="Recognition along the way" />

      <div className="award-grid">
        {awards.map((a, i) => (
          <Reveal variant="scale" delay={i * 0.07} key={a.title}>
            <article className="panel award-card">
              <span className="award-icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={icons[a.icon] || icons.star} />
                </svg>
              </span>
              <h3 className="h3 award-title">{a.title}</h3>
              <p className="award-meta mono">{a.meta}</p>
              <p className="award-detail">{a.detail}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Awards;
