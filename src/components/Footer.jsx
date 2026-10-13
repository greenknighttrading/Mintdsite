import { Globe } from 'lucide-react';
import { IMAGES, INSTAGRAM_URL, ONTREASURE_URL, TIKTOK_URL } from '../data.js';
import { InstagramIcon, TikTokIcon } from './BrandIcons.jsx';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
          <img src={IMAGES.logo} alt="MINTD Card Show" loading="lazy" className="h-9 w-auto self-start" width="124" height="36" />
          <p className="text-sm text-muted/75">Building community through unforgettable card show experiences.</p>
        </div>
        <div className="flex items-center gap-5 text-muted/60">
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="Instagram" className="transition-colors hover:text-holo-pink">
            <InstagramIcon />
          </a>
          <a href={TIKTOK_URL} target="_blank" rel="noreferrer" aria-label="TikTok" className="transition-colors hover:text-holo-blue">
            <TikTokIcon />
          </a>
          <a href={ONTREASURE_URL} target="_blank" rel="noreferrer" aria-label="OnTreasure" className="transition-colors hover:text-holo-blue">
            <Globe className="h-5 w-5" strokeWidth={1.8} />
          </a>
        </div>
      </div>
    </footer>
  );
}
