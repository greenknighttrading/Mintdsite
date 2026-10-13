import { useEffect, useState } from 'react';
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';

// Minimal client-side routing: "/" and "/contact".
export function navigate(to) {
  window.history.pushState({}, '', to);
  window.dispatchEvent(new PopStateEvent('popstate'));
  window.scrollTo(0, 0);
}

export default function App() {
  const [path, setPath] = useState(() => window.location.pathname);

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  return path.replace(/\/+$/, '') === '/contact' ? <Contact /> : <Home />;
}
