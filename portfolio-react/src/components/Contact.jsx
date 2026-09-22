import { profile } from '../data.js';
import { useReveal } from '../useReveal.js';

export default function Contact() {
  const [ref, inView] = useReveal();
  return (
    <section id="contact" ref={ref} className={`reveal ${inView ? 'in' : ''}`}>
      <h2>Elsewhere</h2>
      <ul className="links">
        <li><a href={`mailto:${profile.email}`} target="_blank" rel="noreferrer">{profile.email}<span>Email</span></a></li>
        <li><a href={profile.github} target="_blank" rel="noreferrer">{profile.github.replace('https://', '')}<span>Code</span></a></li>
      </ul>
    </section>
  );
}
