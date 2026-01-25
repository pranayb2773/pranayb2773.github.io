import { Hero, About, Experience, Work, Contact } from '@/components/sections';

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
      <Hero />
      <About />
      <Experience />
      <Work />
      <Contact />
    </main>
  );
}
