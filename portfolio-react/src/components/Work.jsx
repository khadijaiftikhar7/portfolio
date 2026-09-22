import { work } from '../data.js';
import { useReveal } from '../useReveal.js';
import { Link } from '../router.jsx';

export default function Work() {
  const [ref, inView] = useReveal();
  return (
    <section id="work" ref={ref} className={`reveal ${inView ? 'in' : ''}`}>
      <h2>Selected Work</h2>
      {work.map((item) => (
        <Link className="work" to={`/project/${item.slug}`} key={item.num}>
          <span className="num">{item.num}</span>
          <h3>{item.title} <span className="arrow">↗</span></h3>
          {item.when && <p className="work-when">{item.when}</p>}
          <p>{item.desc}</p>
          <div className="tags">
            {item.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
          </div>
        </Link>
      ))}
    </section>
  );
}
