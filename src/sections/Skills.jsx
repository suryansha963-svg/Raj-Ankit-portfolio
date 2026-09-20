import Reveal, { SplitText } from '../components/Reveal';
import { skills } from '../data/content';
import './Skills.css';

const Skills = () => (
  <section id="skills" className="section solid layer skills">
    <div className="wrap">
      <Reveal variant="up">
        <p className="eyebrow">006 / Technical Skills</p>
      </Reveal>
      <SplitText as="h2" className="h2" text="What I can run, make and measure" />

      <div className="skill-grid">
        {skills.map((group, gi) => (
          <Reveal variant="up" delay={gi * 0.1} key={group.group}>
            <div className="panel skill-card">
              <div className="skill-head">
                <span className="skill-num mono">{String(gi + 1).padStart(2, '0')}</span>
                <h3 className="h3 skill-title">{group.group}</h3>
              </div>
              <div className="skill-items">
                {group.items.map((item, ii) => (
                  <Reveal variant="scale" delay={gi * 0.1 + ii * 0.035} key={item}>
                    <span className="chip skill-chip">{item}</span>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
