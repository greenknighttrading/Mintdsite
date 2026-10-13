import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { IMAGES, NEXT_SHOW, TICKET_URL } from '../data.js';

function timeLeft() {
  const ms = Math.max(0, NEXT_SHOW.getTime() - Date.now());
  const s = Math.floor(ms / 1000);
  return {
    Days: Math.floor(s / 86400),
    Hours: Math.floor((s % 86400) / 3600),
    Min: Math.floor((s % 3600) / 60),
    Sec: s % 60,
  };
}

function Countdown() {
  // Start empty and fill on mount so server/client markup always matches.
  const [left, setLeft] = useState(null);

  useEffect(() => {
    setLeft(timeLeft());
    const id = setInterval(() => setLeft(timeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const units = ['Days', 'Hours', 'Min', 'Sec'];

  return (
    <div className="mt-9">
      <p className="eyebrow text-holo-pink">Next show — September 20, 2026</p>
      <div className="mt-4 flex" role="timer" aria-live="off" aria-label="Countdown to the next show">
        {units.map((u, i) => (
          <div key={u} className={`px-4 first:pl-0 sm:px-6 ${i > 0 ? 'border-l border-white/15' : ''}`}>
            <div className="font-display text-3xl tabular-nums leading-none sm:text-5xl">
              {left ? String(left[u]).padStart(2, '0') : '00'}
            </div>
            <div className="mt-2 text-[10px] font-bold uppercase tracking-[0.22em] text-muted/75">{u}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[680px] items-end overflow-hidden pt-[72px]">
      <img src={IMAGES.heroCrowd} alt="A packed trading card show floor" className="absolute inset-0 h-full w-full object-cover" fetchPriority="high" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-navy/20" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-7xl px-5 pt-20 pb-16 sm:px-8 sm:pb-20">
        <div className="max-w-[640px]">
          <p className="eyebrow text-holo-blue">Welcome to the</p>
          <h1 className="mt-4">
            <span className="block text-[4.5rem] sm:text-[6rem] lg:text-[7.5rem]">MINTD</span>
            <span className="mt-1 block text-[2.1rem] text-fg/85 sm:text-[2.75rem] lg:text-[3.4rem]">Card Show</span>
          </h1>
          <p className="mt-6 max-w-[520px] text-lg leading-relaxed text-muted/90">
            The DMV's family-friendly trading card show — Pokémon, TCG, games, giveaways, and a community that shows up.
          </p>

          <Countdown />

          <div className="mt-9 flex flex-wrap gap-3">
            <a href={TICKET_URL} target="_blank" rel="noreferrer" className="btn-pink">
              Buy tickets <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="#about" className="btn-outline">Learn more</a>
          </div>
        </div>
      </div>
    </section>
  );
}
