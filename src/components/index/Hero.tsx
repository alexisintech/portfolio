import { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import { Button } from "@/components/ui/button";
import { UilLinkedin, UilTwitter, UilGithub } from "@iconscout/react-unicons";

const style: CSSProperties = {
  opacity: 0.75,
};

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export const Hero = () => {
  return (
    <main className="w-full py-20">
      <div className="container">
        <div className="flex flex-col w-full items-center gap-1">
          {/* Avatar */}
          <div className="flex flex-col w-10/12 sm:w-4/12 md:w-3/12 self-center mb-2">
            <Image
              priority
              className="rounded-full"
              width="2000"
              height="2000"
              src="/avatar.webp"
              alt="Headshot of Alexis Aguilar"
            />
          </div>
          {/* Hire me button */}
          <Button variant="outline" size="sm" className="m-auto h-5">
            <Link
              href={"mailto:alexmerona@gmail.com"}
              className="flex flex-row gap-2 no-underline"
            >
              <span className="relative flex h-2 w-2 flex-shrink-0 self-center">
                <span
                  style={style}
                  className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400"
                ></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              </span>
              <span className={`${montserrat.className} uppercase text-xxs`}>
                Hire me
              </span>
            </Link>
          </Button>

          <h1 className="text-2xl">Alexis Aguilar</h1>
          <span className="opacity-50">Florida, USA</span>
          <ul className="flex gap-3">
            <li>
              <a
                href="https://github.com/alexisintech"
                aria-label="Github"
                target="_blank"
              >
                <UilGithub className="opacity-50 hover:opacity-100 w-5" />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/alexisintech"
                aria-label="Twitter"
                target="_blank"
              >
                <UilTwitter className="opacity-50 hover:opacity-100 w-5" />
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/alexisintech"
                aria-label="LinkedIn"
                target="_blank"
              >
                <UilLinkedin className="opacity-50 hover:opacity-100 w-5" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};
