import { useState } from 'react';
import { Mail } from 'lucide-react';
import { navigate } from '../App.jsx';
import Reveal from './Reveal.jsx';

export default function Newsletter() {
  const [joined, setJoined] = useState(false);

  return (
    <section className="border-t border-white/10 bg-navy">
      <Reveal className="mx-auto max-w-[620px] px-5 py-20 text-center sm:px-8 lg:py-24">
        <Mail className="mx-auto h-8 w-8 text-holo-blue" strokeWidth={1.5} aria-hidden="true" />
        <h2 className="mt-5 text-3xl sm:text-4xl">Stay in the loop</h2>
        <p className="mt-3 text-muted/75">New shows, giveaways, and updates.</p>

        {joined ? (
          <p className="mx-auto mt-8 max-w-[460px] rounded-md border border-white/10 px-4 py-3.5 font-semibold text-holo-blue" role="status">
            You're on the list — see you at the next show!
          </p>
        ) : (
          <form
            className="mx-auto mt-8 flex max-w-[460px] overflow-hidden rounded-md border border-white/15 focus-within:border-holo-blue"
            onSubmit={(e) => {
              e.preventDefault();
              setJoined(true);
            }}
          >
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="Enter your email"
              className="h-12 min-w-0 flex-1 bg-transparent px-4 text-fg placeholder:text-muted/60 focus:outline-none"
            />
            <button type="submit" className="h-12 shrink-0 bg-holo-pink px-6 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#d4508b]">
              Join
            </button>
          </form>
        )}

        <a
          href="/contact"
          onClick={(e) => {
            e.preventDefault();
            navigate('/contact');
          }}
          className="btn-outline mt-6"
        >
          Contact us
        </a>
      </Reveal>
    </section>
  );
}
