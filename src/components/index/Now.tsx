import Link from "next/link";

export const Now = () => {
  return (
    <div className="w-full py-10 md:max-w-2xl lg:max-w-3xl mx-auto">
      <div className="flex flex-col md:flex-row">
        <h2 className="mb-4 md:mb-12 h-max items-end pr-16 md:pr-8 top-0 md:sticky md:h-min md:items-start pl-8 md:pl-0">
          <div className="pt-2 text-xl uppercase font-mont font-medium opacity-50 [grid-area:1/1/1/1] md:w-min md:pl-3 md:pb-3 md:[writing-mode:vertical-lr]">
            Now
          </div>
        </h2>
        <p className="md:text-justify pl-8 md:pl-0 pr-4 text-lg md:text-base lg:pr-12">
          I was a founding engineer at two startups... but those experiences
          were short lived, as what happens in the startup life sometimes. Now,
          I'm a software engineer at{" "}
          <Link
            target="_blank"
            href="https://clerk.com/"
            className="font-bold decoration-purple-400 underline"
          >
            Clerk
          </Link>{" "}
          . For me, people come first. As a Woman of Color in tech, I'm
          passionate about supporting others, especially those from
          underrepresented groups. My experiences with BPD and Autism have
          helped me gain profound perspective and fathomless empathy, and my
          challenges inspired me to create a mental health support community
          called{" "}
          <Link
            target="_blank"
            href="https://t.co/joXpZayBi3"
            className="font-bold decoration-purple-400 underline"
          >
            Reach.
          </Link>{" "}
          In my free time, I manage a few other communities. I'm also a huge
          music connoisseur, an anime and gaming nerd, and a lifter of weights.
        </p>
      </div>
    </div>
  );
};
