import { skills, languages } from '../data.js';
import { useReveal } from '../useReveal.js';

export default function Skills() {
  const [ref, inView] = useReveal();
  return (
    <section id="skills" ref={ref} className={`reveal ${inView ? 'in' : ''}`}>
      <h2>Skills</h2>
      <dl className="skills">
        {skills.map((s) => (
          <div key={s.label}>
            <dt>{s.label}</dt>
            <dd>{s.value}</dd>
          </div>
        ))}
        <div>
          <dt>Languages Spoken</dt>
          <dd>{languages.join(', ')}</dd>
        </div>
      </dl>
    </section>
  );
}
