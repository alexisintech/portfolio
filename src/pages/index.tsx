import { About } from "@/components/index/About";
import { Before } from "@/components/index/Before";
import { Hero } from "@/components/index/Hero";
import { Now } from "@/components/index/Now";
import { Projects } from "@/components/index/Projects";

export default function Home() {
  return (
    <main className={`min-h-screen max-w-7xl mx-auto`}>
      <Hero />
      {/* <About /> */}
      <Before />
      <Now />
      <Projects />
    </main>
  );
}
