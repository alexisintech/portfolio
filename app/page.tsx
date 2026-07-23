import { Philosophy } from "./components/Philosophy";
import { Hero } from "./components/Hero";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alexis Aguilar's Portfolio",
  description:
    "I currently work as a software engineer at Clerk. Learn a little more about me!",
};

export default function Home() {
  return (
    <main className="py-20 mx-auto max-w-7xl min-h-screen">
      <div className="flex flex-col gap-10">
        <Hero />
        <Experience />
        <Philosophy />
        {/* <Projects /> */}
      </div>
    </main>
  );
}
