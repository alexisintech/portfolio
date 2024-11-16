import Link from "next/link";

export const Now = () => {
  return (
    <div className="mx-auto w-full md:max-w-2xl lg:max-w-3xl">
      <div className="flex flex-col md:flex-row">
        <h2 className="top-0 items-end pr-16 pl-8 mb-4 md:mb-12 h-max md:pr-8 md:sticky md:h-min md:items-start md:pl-0">
          <div className="pt-2 text-xl uppercase font-mont font-medium opacity-50 [grid-area:1/1/1/1] md:w-min md:pl-3 md:pb-3 md:[writing-mode:vertical-lr]">
            Now
          </div>
        </h2>
        <p className="pr-4 pl-8 text-lg md:text-justify md:pl-0 md:text-base lg:pr-12">
          Now, I'm a software engineer at{" "}
          <Link
            target="_blank"
            href="https://clerk.com/"
            className="font-bold underline decoration-purple-400"
          >
            Clerk
          </Link>
          . For a majority of my time at Clerk, I've had sole ownership over the{" "}
          <Link
            target="_blank"
            href="https://clerk.com/docs"
            className="font-bold underline decoration-purple-400"
          >
            Clerk Docs
          </Link>
          . Now, I'm leading a teammate! I also like to help out other teams
          where I can to gain more product knowledge and bond with my Clerk
          family. 💙 For me, people come first. As a BIPOC LGTBQ+ neurodivergent
          Woman in tech, I'm passionate about supporting others, especially
          those from underrepresented groups. My experiences in adversity have
          helped me gain profound perspective and fathomless empathy. Outside of
          tech, I'm a huge music connoisseur with an affinity for electric
          guitars. I love going to live music events with my rave fam. I also
          enjoy reading about philosophy and Roman history, cooking, lifting
          weights, and watching anime.
        </p>
      </div>
    </div>
  );
};
