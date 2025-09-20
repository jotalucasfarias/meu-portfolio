import Header from './components/Header/Header';
import HeroBanner from './components/HeroBanner/HeroBanner';

export default function App() {
  return (
    <div className="bg-white dark:bg-black transition-colors duration-500">
      <Header />
      <HeroBanner />
    </div>
  );
}
