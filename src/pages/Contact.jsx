import { useState } from 'react';
import { ArrowLeft, Check } from 'lucide-react';
import { navigate } from '../App.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const field =
  'w-full rounded-md border border-white/15 bg-transparent px-4 text-fg placeholder:text-muted/50 transition-colors focus:border-holo-blue focus:outline-none';

function BackHome() {
  return (
    <a
      href="/"
      onClick={(e) => {
        e.preventDefault();
        navigate('/');
      }}
      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-muted/80 transition-colors hover:text-holo-blue"
    >
      <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back home
    </a>
  );
}

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div className="relative flex min-h-screen flex-col">
      <Header onHome={false} />
      <main className="flex-1 pt-[72px]">
        <div className="mx-auto max-w-2xl px-5 py-20 sm:px-8 lg:py-28">
          <BackHome />
          <p className="eyebrow mt-10 text-holo-pink">Contact</p>
          <h1 className="mt-4 text-5xl sm:text-6xl">Get in touch.</h1>
          <p className="mt-5 text-lg text-muted/75">Questions about shows, vendor tables, or sponsorships? Send us a note.</p>

          {sent ? (
            <div className="mt-12 border-y border-white/10 py-10" role="status">
              <Check className="h-8 w-8 text-holo-blue" strokeWidth={1.5} aria-hidden="true" />
              <h2 className="mt-4 text-3xl">Message sent.</h2>
              <p className="mt-3 text-muted/75">Thanks for reaching out — we'll get back to you soon.</p>
              <div className="mt-8">
                <BackHome />
              </div>
            </div>
          ) : (
            <form
              className="mt-12 space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <div>
                <label htmlFor="name" className="eyebrow mb-2 block text-[11px] text-muted/80">Name</label>
                <input id="name" name="name" required autoComplete="name" className={`${field} h-12`} />
              </div>
              <div>
                <label htmlFor="email" className="eyebrow mb-2 block text-[11px] text-muted/80">Email</label>
                <input id="email" name="email" type="email" required autoComplete="email" className={`${field} h-12`} />
              </div>
              <div>
                <label htmlFor="message" className="eyebrow mb-2 block text-[11px] text-muted/80">Message</label>
                <textarea id="message" name="message" required rows={6} className={`${field} py-3`} />
              </div>
              <button type="submit" className="btn-pink w-full sm:w-auto">Send message</button>
            </form>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
