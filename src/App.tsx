import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HeroBanner from './components/HeroBanner/HeroBanner';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Sobre from './components/Sobre/Sobre';
export default function App() {
  return (
    <div className="bg-white dark:bg-black transition-colors duration-500">
      <Header />
      <main>
        <HeroBanner />
        <Sobre />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
