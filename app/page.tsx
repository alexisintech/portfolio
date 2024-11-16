import { Before } from "./components/Before";
import { Hero } from "./components/Hero";
import { Now } from "./components/Now";
import { Projects } from "./components/Projects";

export default function Home() {
  return (
    <main className={`mx-auto max-w-7xl min-h-screen`}>
      <Hero />
      {/* <About /> */}
      <Before />
      <Now />
      <Projects />
    </main>
  );
}
