import { useEffect, useState } from 'react';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Experience from './components/Experience.jsx';
import Work from './components/Work.jsx';
import Skills from './components/Skills.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import ProjectDetail from './components/ProjectDetail.jsx';
import { usePath } from './router.jsx';

export default function App() {
  const path = usePath();
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('theme');
      if (saved) setTheme(saved);
    } catch (e) {}
  }, []);

  useEffect(() => {
    if (theme) document.documentElement.setAttribute('data-theme', theme);
    else document.documentElement.removeAttribute('data-theme');
  }, [theme]);

  function toggleTheme() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const current = theme || (prefersDark ? 'dark' : 'light');
    const next = current === 'dark' ? 'light' : 'dark';
    setTheme(next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  }

  const projectPage = path.startsWith('/project/');

  return (
    <>
      {!projectPage && <Nav theme={theme} toggleTheme={toggleTheme} />}
      {projectPage ? (
        <ProjectDetail />
      ) : (
        <div className="wrap">
          <Hero />
          <Experience />
          <Work />
          <Skills />
          <About />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}
