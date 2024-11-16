import { Before } from "./components/Before";
import { Hero } from "./components/Hero";
import { Now } from "./components/Now";
import { Projects } from "./components/Projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alexis Aguilar's Portfolio",
  description:
    "I currently work as a software engineer at Clerk. Learn a little more about me!",
};

export default function Home() {
  return (
    <main className={`mx-auto max-w-7xl min-h-screen`}>
      <Hero />
      {/* <About /> */}
      <div className="flex flex-col gap-10">
        <Before />
        <Now />
      </div>
      <Projects />
    </main>
  );
}
