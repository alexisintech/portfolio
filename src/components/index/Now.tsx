import Link from "next/link";

export const Now = () => {
  return (
    <div className="w-full py-10 xl:px-60">
      <div className="flex">
        <h2 className="mb-12 h-max items-end pr-16 md:pr-8 top-0 md:sticky md:h-min md:items-start pl-8 md:pl-0">
          <div className="pt-2 text-xl uppercase font-mont font-medium opacity-50 [grid-area:1/1/1/1] md:w-min md:pl-3 md:pb-3 md:[writing-mode:vertical-lr]">
            Now
          </div>
        </h2>
        <p className="text-justify pr-12">
          I was leading the creation of an educational technology platform with
          a small bootstrapped startup. I am now looking to bring my unique
          perspective and skillset to a collaborative environment where
          diversity and learning is celebrated. For me, people come first. As a
          Woman of Color in tech, I'm passionate about supporting others,
          especially those from underrepresented groups. My experiences with BPD
          and Autism have helped me gain profound perspective and fathomless
          empathy, and my challenges inspired me to create a mental health
          support community called{" "}
          <Link href="https://t.co/joXpZayBi3" className="text-purple-400">
            Reach.
          </Link>{" "}
          In my free time, I manage a few other communities and you can also
          find me career coaching, mentoring, pair programming, or tinkering
          with new technology.
        </p>
      </div>
    </div>
  );
};
