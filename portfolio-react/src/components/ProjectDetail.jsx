import { Link, useParams } from '../router.jsx';
import { work } from '../data.js';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = work.find((item) => item.slug === slug);

  if (!project) {
    return (
      <main className="project-page">
        <div className="project-wrap">
          <Link className="back-link" to="/">← Back to portfolio</Link>
          <h1>Project not found</h1>
          <p className="project-lede">The project you are looking for does not exist.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="project-page">
      <div className="project-wrap">
        <Link className="back-link" to="/">← Back to portfolio</Link>

        <header className="project-hero">
          <p className="eyebrow">Project {project.num}</p>
          <h1>{project.title}</h1>
          {project.when && <p className="project-when">{project.when}</p>}
          <p className="project-lede">{project.desc}</p>
          <div className="tags project-tags">
            {project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
          </div>
        </header>

        <section className="project-section">
          <h2>Overview</h2>
          <p>{project.details}</p>
        </section>

        <section className="project-section">
          <h2>My contribution</h2>
          <ul className="project-list">
            {project.contribution.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>

        <section className="project-section">
          <h2>Screenshots</h2>
          <div className="screenshot-grid">
            {project.screenshots.map((image, index) => (
              <figure className="screenshot" key={image}>
                <img src={image} alt={`${project.title} screenshot ${index + 1}`} />
                <figcaption>{project.captions?.[index] ?? `Screenshot ${index + 1}`}</figcaption>
              </figure>
            ))}
          </div>
         
        </section>

        <section className="project-section project-links">
          <h2>Project link</h2>
          <a href={project.url} target="_blank" rel="noreferrer">View project / repository ↗</a>
        </section>
      </div>
    </main>
  );
}
