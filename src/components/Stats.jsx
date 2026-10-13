import { STATS } from '../data.js';
import Reveal from './Reveal.jsx';

export default function Stats() {
  return (
    <section aria-label="By the numbers" className="border-y border-white/10 bg-navy">
      <div className="mx-auto grid max-w-7xl grid-cols-2 px-5 sm:px-8 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <Reveal
            key={s.label}
            delay={i * 90}
            className={`py-8 text-center sm:py-10 ${i % 2 === 1 ? 'border-l border-white/10' : ''} ${i === 2 ? 'lg:border-l' : ''} ${i >= 2 ? 'border-t border-white/10 lg:border-t-0' : ''}`}
          >
            <div className="font-display text-4xl leading-none sm:text-5xl">{s.value}</div>
            <div className="mt-3 text-[11px] font-bold uppercase tracking-[0.22em] text-muted/75">{s.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
