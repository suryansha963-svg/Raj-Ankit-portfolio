import Reveal, { SplitText } from '../components/Reveal';
import { education, experience, facilities } from '../data/content';
import './Career.css';

const Career = () => (
  <section id="experience" className="section solid layer career">
    <div className="wrap">
      <Reveal variant="up">
        <p className="eyebrow">003 / Work Experience</p>
      </Reveal>
      <SplitText as="h2" className="h2" text="Teaching, building and running the lab" />
      <Reveal variant="up" delay={0.12}>
        <p className="lead">
          Academic and research roles at Thapar Institute of Engineering and Technology.
        </p>
      </Reveal>

      <div className="timeline">
        <span className="timeline-spine" aria-hidden="true" />
        {experience.map((job, i) => (
          <div className="timeline-item" key={job.period + job.role}>
            <span className="timeline-node" />
            <Reveal variant="left" delay={i * 0.06} className="panel timeline-card">
              <p className="timeline-period mono">{job.period}</p>
              <h3 className="h3 timeline-role">{job.role}</h3>
              <p className="timeline-org">{job.org}</p>
              <ul className="timeline-points">
                {job.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        ))}
      </div>
    </div>

    <div className="wrap career-split">
      <div>
        <Reveal variant="up">
          <p className="eyebrow">Education</p>
        </Reveal>
        <div className="edu-list">
          {education.map((e, i) => (
            <Reveal variant="up" delay={i * 0.08} key={e.degree}>
              <div className="panel edu-card">
                <div className="edu-top">
                  <h3 className="h3 edu-degree">{e.degree}</h3>
                  <span className="edu-score">{e.score}</span>
                </div>
                <p className="mono edu-period">{e.period}</p>
                <p className="edu-place">{e.place}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div>
        <Reveal variant="up">
          <p className="eyebrow">Facilities I built</p>
        </Reveal>
        <div className="facility-list">
          {facilities.map((f, i) => (
            <Reveal variant="right" delay={i * 0.1} key={f}>
              <div className="facility-item">
                <span className="facility-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M3 21h18M6 21V9l6-5 6 5v12M10 21v-5h4v5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <p>{f}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Career;
