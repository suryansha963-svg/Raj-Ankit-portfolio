import { useEffect, useState } from 'react';
import PillNav from './components/PillNav';
import Hero from './sections/Hero';
import Research from './sections/Research';
import Thesis from './sections/Thesis';
import Career from './sections/Career';
import Awards from './sections/Awards';
import Publications from './sections/Publications';
import Skills from './sections/Skills';
import Connect from './sections/Connect';
import { navItems } from './data/content';
import './App.css';

const App = () => {
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState('#home');

  /* page-wide scroll progress rail */
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  /* scroll spy for the nav pills */
  useEffect(() => {
    const ids = navItems.map((n) => n.href.slice(1));
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!els.length) return undefined;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="shell">
      {/* fixed atmospheric backdrop */}
      <div className="bg-fixed" aria-hidden="true">
        <div className="bg-aurora" />
        <div className="bg-scan" />
        <div className="bg-noise" />
      </div>

      <div className="progress-rail" style={{ width: `${progress * 100}%` }} aria-hidden="true" />

      <div className="nav-dock">
        <PillNav
          logo="images/logo.svg"
          logoAlt="Raj Ankit Pandey"
          items={navItems}
          activeHref={active}
          className="site-nav"
          baseColor="#04060d"
          pillColor="#eef3fb"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#04060d"
          ease="power3.easeOut"
        />
      </div>

      <main>
        <Hero />
        <Research />
        <Thesis />
        <Career />
        <Awards />
        <Publications />
        <Skills />
        <Connect />
      </main>
    </div>
  );
};

export default App;
