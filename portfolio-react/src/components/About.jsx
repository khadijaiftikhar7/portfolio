import { about } from '../data.js';
import { useReveal } from '../useReveal.js';

export default function About() {
  const [ref, inView] = useReveal();
  return (
    <section id="about" ref={ref} className={`prose reveal ${inView ? 'in' : ''}`}>
      <h2>About</h2>
      {about.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </section>
  );
}
