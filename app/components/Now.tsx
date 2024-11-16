import Link from "next/link";

export const Now = () => {
  return (
    <div className="py-10 mx-auto w-full md:max-w-2xl lg:max-w-3xl">
      <div className="flex flex-col md:flex-row">
        <h2 className="top-0 items-end pr-16 pl-8 mb-4 md:mb-12 h-max md:pr-8 md:sticky md:h-min md:items-start md:pl-0">
          <div className="pt-2 text-xl uppercase font-mont font-medium opacity-50 [grid-area:1/1/1/1] md:w-min md:pl-3 md:pb-3 md:[writing-mode:vertical-lr]">
            Now
          </div>
        </h2>
        <p className="pr-4 pl-8 text-lg md:text-justify md:pl-0 md:text-base lg:pr-12">
          I was a founding engineer at two startups... but those experiences
          were short lived, as what happens in the startup life sometimes. Now,
          I'm a software engineer at{" "}
          <Link
            target="_blank"
            href="https://clerk.com/"
            className="font-bold underline decoration-purple-400"
          >
            Clerk
          </Link>
          . For me, people come first. As a Woman of Color in tech, I'm
          passionate about supporting others, especially those from
          underrepresented groups. My experiences with BPD and Autism have
          helped me gain profound perspective and fathomless empathy, and my
          challenges inspired me to create a mental health support community
          called{" "}
          <Link
            target="_blank"
            href="https://t.co/joXpZayBi3"
            className="font-bold underline decoration-purple-400"
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
