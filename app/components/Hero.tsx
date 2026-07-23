import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "./shadcn/button";
import avatar from "@/public/avatar.png";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

const Avatar = () => {
  return (
    <div className="relative self-center w-10/12 aspect-square overflow-hidden rounded-full">
      <Image
        priority
        placeholder="blur"
        fill
        className="object-cover object-[center_65%]"
        sizes="(max-width: 28rem) 83vw, 373px"
        src={avatar}
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
        <span className="flex relative shrink-0 self-center w-2 h-2">
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
    <main className="mx-auto w-full max-w-md">
      <div className="flex flex-col items-center w-full gap-3.5">
        <Avatar />

        <div className="flex flex-col items-center gap-3.5">
          <HireMeButton />
          <div className="flex flex-col items-center gap-1.5">
            <h1 className="text-2xl leading-none">Alexis Aguilar</h1>
            <span className="leading-none opacity-50">
              Scottsdale, Arizona, USA
            </span>
          </div>
          <ul className="flex items-center gap-3 [&_li]:flex [&_li]:items-center [&_li]:justify-center [&_li]:hover:animate-wiggle [&_a]:flex [&_a]:size-5 [&_a]:items-center [&_a]:justify-center [&_a]:opacity-50 [&_a]:transition-opacity [&_a]:hover:opacity-100 [&_a]:no-underline [&_a]:font-normal">
            <li>
              <a
                href="https://github.com/alexisintech"
                aria-label="Github"
                target="_blank"
              >
                <Github size={20} color="#ffedd5" />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/alexisintech"
                aria-label="Twitter"
                target="_blank"
              >
                <Twitter size={20} color="#ffedd5" />
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/alexisintech"
                aria-label="LinkedIn"
                target="_blank"
              >
                <Linkedin size={20} color="#ffedd5" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};
