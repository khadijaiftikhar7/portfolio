import { useEffect, useState } from 'react';

export function Link({ to, className, children }) {
  const internal = to.startsWith('/');

  function handleClick(event) {
    // Let the browser handle ctrl/cmd/shift/middle clicks (open in new tab, etc.)
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
    if (internal) {
      event.preventDefault();
      window.history.pushState({}, '', to);
      window.dispatchEvent(new PopStateEvent('popstate'));
      window.scrollTo(0, 0);
    }
  }

  return internal ? (
    <a href={to} className={className} onClick={handleClick}>{children}</a>
  ) : (
    <a href={to} className={className} target="_blank" rel="noreferrer">{children}</a>
  );
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
