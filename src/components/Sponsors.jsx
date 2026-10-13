import { Heart } from 'lucide-react';
import { IMAGES, PARTNERS } from '../data.js';
import Reveal from './Reveal.jsx';

export default function Sponsors() {
  return (
    <section id="sponsors" className="border-t border-white/10 bg-navy">
      <div className="mx-auto max-w-5xl px-5 py-20 text-center sm:px-8 lg:py-24">
        <Reveal>
          <p className="eyebrow text-holo-blue">Sponsored by</p>
          <img src={IMAGES.collectr} alt="Collectr" loading="lazy" className="mx-auto mt-8 h-28 w-auto max-w-full sm:h-32" />
        </Reveal>
        <div className="mx-auto mt-14 grid max-w-3xl grid-cols-2 items-center gap-x-8 gap-y-10 sm:grid-cols-4">
          {PARTNERS.map((p, i) => (
            <Reveal key={p.name} delay={i * 90}>
              <img src={p.logo} alt={p.name} loading="lazy" className="mx-auto h-16 w-auto max-w-full object-contain" />
            </Reveal>
          ))}
        </div>
        <Reveal as="p" delay={120} className="mx-auto mt-12 flex max-w-md items-start justify-center gap-2 text-sm text-muted/75">
          <Heart className="mt-0.5 h-3.5 w-3.5 shrink-0 text-holo-pink" aria-hidden="true" />
          <span>Thanks to our other partners for their support. We also partner with nonprofits to give back to the community.</span>
        </Reveal>
      </div>
    </section>
  );
}
