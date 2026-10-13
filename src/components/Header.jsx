import { IMAGES, NAV, TICKET_URL, INSTAGRAM_URL, TIKTOK_URL } from '../data.js';
import { navigate } from '../App.jsx';
import { InstagramIcon, TikTokIcon } from './BrandIcons.jsx';

export default function Header({ onHome = true }) {
  const base = onHome ? '' : '/';

  const handleRoute = (e, to) => {
    e.preventDefault();
    navigate(to);
  };

  return (
    <header className="absolute inset-x-0 top-0 z-30 border-b border-white/10 bg-navy/40 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <div className="flex items-center gap-4">
          <a href="/" onClick={(e) => handleRoute(e, '/')} aria-label="MINTD Card Show home">
            <img src={IMAGES.logo} alt="MINTD Card Show" className="h-9 w-auto sm:h-10" width="138" height="40" />
          </a>
          <span className="h-7 w-px bg-white/15" aria-hidden="true" />
          <div className="flex items-center gap-3">
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="Instagram" className="text-holo-pink transition-transform hover:scale-110">
              <InstagramIcon />
            </a>
            <a href={TIKTOK_URL} target="_blank" rel="noreferrer" aria-label="TikTok" className="text-holo-blue transition-transform hover:scale-110">
              <TikTokIcon />
            </a>
          </div>
        </div>

        <div className="flex items-center gap-8">
          <nav className="hidden md:block" aria-label="Primary">
            <ul className="flex items-center gap-7">
              {NAV.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.route ? item.href : `${base}${item.href}`}
                    onClick={item.route ? (e) => handleRoute(e, item.href) : undefined}
                    className="text-xs font-bold uppercase tracking-[0.14em] text-fg/90 transition-colors hover:text-holo-blue"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a href={TICKET_URL} target="_blank" rel="noreferrer" className="btn-pink h-11 px-4 text-xs sm:px-5">
            Buy tickets
          </a>
        </div>
      </div>
    </header>
  );
}
