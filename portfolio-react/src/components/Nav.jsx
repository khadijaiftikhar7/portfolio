import { useEffect, useState } from 'react';
import { navItems, profile } from '../data.js';

export default function Nav({ theme, toggleTheme }) {
  const [active, setActive] = useState(navItems[0].id);

  useEffect(() => {
    function onScroll() {
      const pos = window.scrollY + 140;
      let current = navItems[0].id;

      navItems.forEach((item) => {
        const el = document.getElementById(item.id);

        if (el && el.offsetTop <= pos) {
          current = item.id;
        }
      });

      setActive(current);
    }

    document.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => document.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="navbar">
      <div className="navrow">

        <a className="brand" href="#top">
          {profile.name}
        </a>

        <ul className="navlinks">
          <li>
            <a
              href="#work"
              className={active === 'work' ? 'active' : ''}
            >
              Work
            </a>
          </li>

          <li>
            <a
              href="#about"
              className={active === 'about' ? 'active' : ''}
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#experience"
              className={active === 'experience' ? 'active' : ''}
            >
              Experience
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className={active === 'contact' ? 'active' : ''}
            >
              Contact
            </a>
          </li>
        </ul>

        <button
          className="themebtn"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          ◐
        </button>

      </div>
    </div>
  );
}