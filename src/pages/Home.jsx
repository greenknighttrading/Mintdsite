import Header from '../components/Header.jsx';
import Hero from '../components/Hero.jsx';
import Stats from '../components/Stats.jsx';
import About from '../components/About.jsx';
import Shows from '../components/Shows.jsx';
import Vendors from '../components/Vendors.jsx';
import Sponsors from '../components/Sponsors.jsx';
import Newsletter from '../components/Newsletter.jsx';
import Footer from '../components/Footer.jsx';

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Shows />
        <Vendors />
        <Sponsors />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
