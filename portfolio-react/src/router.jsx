import { useEffect, useState } from 'react';

export function Link({ to, className, children }) {
  function handleClick(event) {
    if (to.startsWith('/')) {
      event.preventDefault();
      window.history.pushState({}, '', to);
      window.dispatchEvent(new PopStateEvent('popstate'));
      window.scrollTo(0, 0);
    }
  }

  return <a href={to} className={className} target="_blank" rel="noreferrer">{children}</a>;
}

export function usePath() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const onPopState = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  return path;
}

export function useParams() {
  const parts = window.location.pathname.split('/').filter(Boolean);
  return { slug: parts[0] === 'project' ? parts[1] : undefined };
}
