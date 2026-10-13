import { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, MapPin } from 'lucide-react';
import { EVENTS } from '../data.js';
import Reveal from './Reveal.jsx';

const GAP = 24;

function EventCard({ event }) {
  const solid = event.cta !== 'Details';
  return (
    <article className="group">
      <a href={event.href} target="_blank" rel="noreferrer" className="block overflow-hidden rounded-lg border border-ice-line bg-white/40">
        <img
          src={event.poster}
          alt={`${event.title} poster`}
          loading="lazy"
          className="aspect-[4/5] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </a>
      <div className="pt-5">
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-holo-pink">{event.type}</p>
        <h3 className="mt-2 text-2xl">{event.date}</h3>
        <p className="mt-2 flex items-center gap-1.5 text-sm text-ice-muted">
          <MapPin className="h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden="true" />
          {event.location}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {solid && (
            <a href={event.href} target="_blank" rel="noreferrer" className="btn-sm bg-navy text-fg hover:bg-panel">
              {event.cta}
            </a>
          )}
          <a
            href={event.href}
            target="_blank"
            rel="noreferrer"
            aria-label={`Details: ${event.title}`}
            className="btn-sm border border-ice-text/30 text-ice-text hover:border-ice-text"
          >
            Details <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Shows() {
  const track = useRef(null);
  const [active, setActive] = useState(0);
  const [edges, setEdges] = useState({ start: true, end: false });

  const step = () => {
    const el = track.current;
    const card = el?.firstElementChild;
    return card ? card.getBoundingClientRect().width + GAP : 0;
  };

  const update = useCallback(() => {
    const el = track.current;
    if (!el) return;
    const s = step();
    setActive(s ? Math.min(EVENTS.length - 1, Math.round(el.scrollLeft / s)) : 0);
    setEdges({ start: el.scrollLeft <= 2, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 2 });
  }, []);

  useEffect(() => {
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [update]);

  const scrollBy = (dir) => track.current?.scrollBy({ left: dir * step(), behavior: 'smooth' });
  const scrollTo = (i) => track.current?.scrollTo({ left: i * step(), behavior: 'smooth' });

  const arrowBase =
    'flex items-center justify-center border border-ice-text/25 text-ice-text transition-colors hover:border-ice-text disabled:cursor-default disabled:opacity-30 disabled:hover:border-ice-text/25';

  return (
    <section id="shows" className="border-t border-ice-line bg-lavender text-ice-text">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal className="flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow text-holo-pink">Mark your calendar</p>
            <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl">Upcoming shows</h2>
          </div>
          <div className="hidden gap-2 lg:flex">
            <button type="button" onClick={() => scrollBy(-1)} disabled={edges.start} className={`${arrowBase} h-12 w-12 rounded-md`} aria-label="Previous shows">
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button type="button" onClick={() => scrollBy(1)} disabled={edges.end} className={`${arrowBase} h-12 w-12 rounded-md`} aria-label="Next shows">
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </Reveal>

        <div className="relative mt-12">
          <div
            ref={track}
            onScroll={update}
            className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto scroll-smooth"
            style={{ gap: GAP }}
            aria-label="Upcoming shows"
          >
            {EVENTS.map((event, i) => (
              <Reveal
                key={event.title}
                delay={i * 110}
                className="shrink-0 basis-[80%] snap-start sm:basis-[46%] lg:basis-[calc((100%-48px)/3)]"
              >
                <EventCard event={event} />
              </Reveal>
            ))}
          </div>

          {/* Mobile / tablet floating controls */}
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            disabled={edges.start}
            className={`${arrowBase} absolute top-[34%] -left-3 h-11 w-11 -translate-y-1/2 rounded-full bg-lavender/90 shadow-sm backdrop-blur lg:hidden`}
            aria-label="Previous show"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            disabled={edges.end}
            className={`${arrowBase} absolute top-[34%] -right-3 h-11 w-11 -translate-y-1/2 rounded-full bg-lavender/90 shadow-sm backdrop-blur lg:hidden`}
            aria-label="Next show"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-2 lg:hidden">
          {EVENTS.map((e, i) => (
            <button
              key={e.title}
              type="button"
              onClick={() => scrollTo(i)}
              aria-label={`Go to show ${i + 1}`}
              aria-current={i === active}
              className={`h-2 rounded-full transition-all ${i === active ? 'w-7 bg-ice-text' : 'w-2 bg-ice-text/25'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
