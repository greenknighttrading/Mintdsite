import { Trophy, Gift, Users, Heart } from 'lucide-react';
import { EXPECT, HIGHLIGHT_VIDEO, IMAGES } from '../data.js';
import Reveal from './Reveal.jsx';

const ICONS = { trophy: Trophy, gift: Gift, users: Users, heart: Heart };

export default function About() {
  return (
    <section id="about" className="bg-ice text-ice-text">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-28">
        <div>
          <Reveal>
            <p className="eyebrow text-holo-pink">What to expect</p>
            <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl">A show day, done right.</h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-ice-muted">
              Pokémon, TCG, games, giveaways — and a room full of people who love this as much as you do.
            </p>
          </Reveal>

          <ul className="mt-10 divide-y divide-ice-line border-y border-ice-line">
            {EXPECT.map((item, i) => {
              const Icon = ICONS[item.icon];
              return (
                <Reveal as="li" key={item.title} delay={i * 90} className="flex items-start gap-4 py-5">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-ice-text" strokeWidth={1.5} aria-hidden="true" />
                  <div>
                    <h3 className="font-sans text-sm font-bold tracking-[0.12em]">{item.title}</h3>
                    <p className="mt-1 text-ice-muted">{item.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>

        <div className="flex flex-col gap-4 lg:pt-2">
          <Reveal delay={100} className="overflow-hidden rounded-lg border border-ice-line bg-navy">
            <video
              className="aspect-video w-full object-cover"
              controls
              preload="none"
              playsInline
              poster={IMAGES.videoPoster}
              aria-label="MINTD Card Show highlight reel"
            >
              {HIGHLIGHT_VIDEO && <source src={HIGHLIGHT_VIDEO} type="video/mp4" />}
            </video>
          </Reveal>
          <div className="grid grid-cols-2 gap-4">
            <Reveal delay={190} className="overflow-hidden rounded-lg border border-ice-line">
              <img src={IMAGES.eventCrowd} alt="Collectors crowding the show floor" loading="lazy" className="aspect-[4/3] w-full object-cover" />
            </Reveal>
            <Reveal delay={280} className="overflow-hidden rounded-lg border border-ice-line">
              <img src={IMAGES.eventCommunity} alt="Families and collectors trading cards" loading="lazy" className="aspect-[4/3] w-full object-cover" />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
