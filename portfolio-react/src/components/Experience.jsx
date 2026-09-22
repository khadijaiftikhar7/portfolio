import { experience } from '../data.js';
import { useReveal } from '../useReveal.js';

export default function Experience() {
  const [ref, inView] = useReveal();
  return (
    <section id="experience" ref={ref} className={`reveal ${inView ? 'in' : ''}`}>
      <h2>Experience</h2>
      {experience.map((job) => (
        <div className="role" key={job.role}>
          <p className="when">{job.when}</p>
          <h3>{job.role}</h3>
          <ul>
            {job.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
