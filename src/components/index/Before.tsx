import Link from "next/link";

export const Before = () => {
  return (
    <div className="w-full py-10 md:max-w-2xl lg:max-w-3xl mx-auto">
      <div className="flex flex-col md:flex-row">
        <h2 className="mb-4 md:mb-12 h-max items-end pr-16 md:pr-8 top-0 md:sticky md:h-min md:items-start pl-8 md:pl-0">
          <div className="pt-2 text-xl uppercase font-mont font-medium opacity-50 [grid-area:1/1/1/1] md:w-min md:pl-3 md:pb-3 md:[writing-mode:vertical-lr]">
            Before
          </div>
        </h2>
        <p className="md:text-justify pl-8 md:pl-0 pr-4 text-lg md:text-base lg:pr-12">
          In my final 2 years at Stetson University, I conducted{" "}
          <Link
            target="_blank"
            href="https://docs.google.com/document/d/16-k76OhwZFSgqhdwTLblBrW2aMaF6Sbr/edit?usp=sharing&ouid=114331911776529725485&rtpof=true&sd=true"
            className="font-bold decoration-purple-400 underline"
          >
            Herpetology + Invasive Species research
          </Link>{" "}
          while also serving my peers as both a Biology and Writing Teaching
          Assistant. After receiving a B.S. in both Biology and Chemistry, I was
          privileged to help my community as a veterinary technician in gold
          standard animal hospitals for over 2.5 years. While managing animal
          hospitals, I learned full stack web development through the part time,
          remote bootcamp 100Devs. I built multiple projects in cross-functional
          teams. I successfully delivered to clients, including a Partnered
          Twitch streamer's e-commerce{" "}
          <Link
            target="_blank"
            href="https://reversah.com"
            className="font-bold decoration-purple-400 underline"
          >
            website
          </Link>
          , achieving a quarterly increase of 248% in total sales, 102% in
          conversion rate, and 100% in returning customer rate.
        </p>
      </div>
    </div>
  );
};
