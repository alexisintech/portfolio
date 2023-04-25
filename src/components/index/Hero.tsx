import { CSSProperties } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const style: CSSProperties = {
  opacity: 0.75,
};

export const Hero = () => {
  return (
    <main className="banner w-full p-3.5">
      <div className="container">
        <div className="flex flex-col w-full items-center">
          <div className="flex flex-col w-10/12 sm:w-4/12 md:w-3/12 self-center">
            <Image
              className="rounded-full"
              width="2000"
              height="2000"
              src="/avatar.webp"
              alt="Headshot of Alexis Aguilar"
            />
          </div>
          <Button variant="outline" className="m-auto">
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
              <span>Hire me</span>
            </Link>
          </Button>

          <span className="text-2xl">Alexis Aguilar</span>
          <span className="text-base font-normal opacity-50">Florida, USA</span>
        </div>
      </div>
    </main>
  );
};
