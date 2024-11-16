import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import { Button } from "./shadcn/button";
import { UilLinkedin, UilTwitter, UilGithub } from "@iconscout/react-unicons";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

const Avatar = () => {
  return (
    <div className="flex flex-col self-center mb-2 w-10/12">
      <Image
        priority
        className="rounded-full"
        width="2000"
        height="2000"
        src="/avatar.webp"
        alt="Headshot of Alexis Aguilar"
      />
    </div>
  );
};

const HireMeButton = () => {
  return (
    <Button variant="outline" size="sm" className="m-auto h-5">
      <Link
        href={"mailto:alexmerona@gmail.com"}
        className="flex flex-row gap-2 no-underline"
      >
        <span className="flex relative flex-shrink-0 self-center w-2 h-2">
          <span className="inline-flex absolute w-full h-full bg-green-400 rounded-full opacity-75 animate-ping"></span>
          <span className="inline-flex relative w-2 h-2 bg-green-500 rounded-full"></span>
        </span>
        <span className="uppercase text-[0.6rem]">Hire me</span>
      </Link>
    </Button>
  );
};

export const Hero = () => {
  return (
    <main className="py-20 mx-auto w-full max-w-md">
      <div className="flex flex-col gap-1 items-center w-full">
        <Avatar />
        {/* <HireMeButton /> */}

        <h1 className="text-2xl">Alexis Aguilar</h1>
        <span className="opacity-50">Florida, USA</span>
        <ul className="flex gap-3">
          <li className="hover:animate-wiggle">
            <a
              href="https://github.com/alexisintech"
              aria-label="Github"
              target="_blank"
            >
              <UilGithub className="w-5 opacity-50 hover:opacity-100" />
            </a>
          </li>
          <li className="hover:animate-wiggle">
            <a
              href="https://twitter.com/alexisintech"
              aria-label="Twitter"
              target="_blank"
            >
              <UilTwitter className="w-5 opacity-50 hover:opacity-100" />
            </a>
          </li>
          <li className="hover:animate-wiggle">
            <a
              href="https://linkedin.com/in/alexisintech"
              aria-label="LinkedIn"
              target="_blank"
            >
              <UilLinkedin className="w-5 opacity-50 hover:opacity-100" />
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
};
