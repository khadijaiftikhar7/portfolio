import { profile } from '../data.js';

export default function Hero() {
  return (
    <header className="hero" id="top">
      <p className="eyebrow">{profile.eyebrow}</p>
      <h1>{profile.name}</h1>
      <p className="lede">{profile.lede}</p>
      <nav className="meta">
        <a href={`mailto:${profile.email}`} target="_blank" rel="noreferrer">Email</a>
        <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
      </nav>
    </header>
  );
}
