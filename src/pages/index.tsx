import { About } from "@/components/index/About";
import { Hero } from "@/components/index/Hero";
import { Projects } from "@/components/index/Projects";

export default function Home() {
  return (
    <main className={`min-h-screen dark:bg-neutral-950`}>
      <Hero />
      <About />
      <Projects />
    </main>
  );
}
