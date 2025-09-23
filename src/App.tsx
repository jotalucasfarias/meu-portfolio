import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HeroBanner from './components/HeroBanner/HeroBanner';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
export default function App() {
  return (
    <div className=" bg-[#FCFBF8] dark:bg-[#0a0a0a] transition-colors duration-500">
      <Header />
      <div className="container mx-auto px-4 sm:px-6 lg:px-24">
        <main>
          <HeroBanner />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>
      <Footer />
    </div>
  );
}
