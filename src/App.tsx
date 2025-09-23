import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HeroBanner from './components/HeroBanner/HeroBanner';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
export default function App() {
  return (
    <div className="bg-[#FCFBF8] dark:bg-[#0a0a0a] transition-colors duration-500">
      <Header />
      {/*
        Adicionamos as classes 'snap-y' e 'snap-mandatory' ao elemento 'main' para ativar o scroll snapping vertical obrigatório.
        Cada seção recebe 'snap-start' e 'min-h-screen' para garantir que ocupe a tela inteira e "grude" ao rolar.
      */}
      <main className="snap-y snap-mandatory h-screen overflow-y-scroll">
        <section className="snap-start ">
          <HeroBanner />
        </section>
        <section className="snap-start">
          <About />
        </section>
        <section className="snap-start ">
          <Skills />
        </section>
        <section className="snap-start ">
          <Projects />
        </section>
        <section className="snap-start ">
          <Contact />
        </section>
        {/* Footer agora é uma seção snap, aparecendo apenas ao final do scroll */}
        <section className="snap-start">
          <Footer />
        </section>
      </main>
    </div>
  );
}
