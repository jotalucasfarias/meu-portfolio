import Header from './components/Header/Header';
import HeroBanner from './components/HeroBanner/HeroBanner';
import Sobre from './components/Sobre/Sobre';
import Skills from './components/Skills/Skills';

export default function App() {
  return (
    <div className="bg-white dark:bg-black transition-colors duration-500">
      <Header />
      <HeroBanner />
      <Sobre />
      <Skills />
    </div>
  );
}
