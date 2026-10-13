import { Store, ArrowRight } from 'lucide-react';
import { INSTAGRAM_URL, ONTREASURE_URL } from '../data.js';
import { InstagramIcon } from './BrandIcons.jsx';
import Reveal from './Reveal.jsx';

export default function Vendors() {
  return (
    <section id="vendors" className="border-t border-white/10 bg-navy">
      <Reveal className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[auto_1fr_auto] lg:gap-16 lg:py-24">
        <Store className="h-16 w-16 text-holo-blue sm:h-20 sm:w-20" strokeWidth={1} aria-hidden="true" />
        <div className="max-w-xl">
          <p className="eyebrow text-holo-pink">Vendors</p>
          <h2 className="mt-4 text-4xl sm:text-5xl">Find your next favorite table.</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted/75">
            Follow us on Instagram for every vendor-table drop. When applications open, registration and payment are handled through OnTreasure.
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:min-w-[260px]">
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="btn-pink">
            <InstagramIcon className="h-4 w-4" /> Follow vendor drops
          </a>
          <a href={ONTREASURE_URL} target="_blank" rel="noreferrer" className="btn-outline">
            OnTreasure <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
