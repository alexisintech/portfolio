import Link from "next/link";

export const Before = () => {
  return (
    <div className="mx-auto w-full md:max-w-2xl lg:max-w-3xl">
      <div className="flex flex-col md:flex-row">
        <h2 className="top-0 items-end pr-16 pl-8 mb-4 md:mb-12 h-max md:pr-8 md:sticky md:h-min md:items-start md:pl-0">
          <div className="pt-2 text-xl uppercase font-mont font-medium opacity-50 [grid-area:1/1/1/1] md:w-min md:pl-3 md:pb-3 md:[writing-mode:vertical-lr]">
            Before
          </div>
        </h2>
        <p className="pr-4 pl-8 text-lg md:text-justify md:pl-0 md:text-base lg:pr-12">
          In my final 2 years at Stetson University, I conducted{" "}
          <Link
            target="_blank"
            href="https://docs.google.com/document/d/16-k76OhwZFSgqhdwTLblBrW2aMaF6Sbr/edit?usp=sharing&ouid=114331911776529725485&rtpof=true&sd=true"
            className="font-bold underline decoration-purple-400"
          >
            Herpetology + Invasive Species research
          </Link>{" "}
          while also serving my peers as both a Biology and Writing Teaching
          Assistant. After receiving a B.S. in both Biology and Chemistry, I was
          privileged to help my community as a veterinary technician in gold
          standard animal hospitals for over 2.5 years. While managing animal
          hospitals, I learned full stack web development through the part time,
          remote bootcamp 100Devs. I built multiple projects individually and in
          cross-functional teams and successfully delivered websites to multiple
          clients. After graduating the 100Devs, I went back to my roots. I
          began writing regularly and started a LinkedIn series called{" "}
          <Link
            target="_blank"
            href="https://www.linkedin.com/posts/alexisintech_the-search-is-on-a-new-series-valentines-activity-7031397307820437504-0Sdb?utm_source=share&utm_medium=member_desktop"
            className="font-bold underline decoration-purple-400"
          >
            "Posting until I'm hired".
          </Link>{" "}
          I began teaching again through mentoring and career coaching. Pretty
          quickly, I got my first tech role as a Founding Engineer at a startup.
          That didn't last very long, so I tried it again at another startup...
          and that didn't last very long either. Ahh, startup life 🤷‍♀️
        </p>
      </div>
    </div>
  );
};
