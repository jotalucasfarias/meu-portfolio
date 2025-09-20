export default function HeroBanner() {
  return (
    <section className="w-full h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
        Hello, I'm João Lucas
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl">
        A passionate Frontend Developer crafting beautiful and functional web
        experiences.
      </p>
      <a
        href="#projects"
        className="bg-yellow-500 text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-600 transition-colors duration-300"
      >
        View My Work
      </a>

      
    </section>
  );
}
