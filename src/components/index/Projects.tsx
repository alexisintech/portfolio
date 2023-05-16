import Image from "next/image";
import {
  UilGithub,
  UilExternalLinkAlt,
  UilAngleLeft,
  UilAngleRight,
} from "@iconscout/react-unicons";

export const Projects = () => {
  return (
    <main className="w-full py-48">
      <div className="container flex flex-col gap-10 px-52">
        {/* personal */}
        <h4 className="font-mont uppercase italic ml-24 opacity-50">
          Personal
        </h4>
        <div className="flex gap-20 items-center">
          <UilAngleLeft className="order-1" />
          <section className="flex order-2 w-3/5 relative">
            <Image
              className="rounded"
              width="1000"
              height="1000"
              src="/mindfully.webp"
              alt="Mindfully app"
            />
            <ul className="absolute right-2 top-2 gap-1 flex flex-col">
              <li>
                <a
                  href="https://github.com/alexisintech/mindfully"
                  aria-label="Github"
                  target="_blank"
                >
                  <UilGithub className="opacity-50 hover:opacity-100 w-5" />
                </a>
              </li>
              <li>
                <a
                  href="https://mindfully.up.railway.app"
                  aria-label="Github"
                  target="_blank"
                >
                  <UilExternalLinkAlt className="opacity-50 hover:opacity-100 w-5" />
                </a>
              </li>
            </ul>
          </section>
          <section className="flex flex-col gap-2 order-3 w-2/5 self-start">
            <h3 className="uppercase font-mont font-medium">Title</h3>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              cumque esse nemo animi adipisci ipsum ut ad praesentium nesciunt.
            </p>
          </section>
          <UilAngleRight className="order-4" />
        </div>
        {/* cross-functional */}
        <h4 className="self-end font-mont uppercase italic mt-14 mr-24 opacity-50">
          Cross-functional team projects
        </h4>
        <div className="flex gap-20 items-center">
          <UilAngleLeft className="order-1" />
          <section className="flex order-3 w-3/5 relative">
            <Image
              className="rounded"
              width="1000"
              height="1000"
              src="/mindfully.webp"
              alt="Mindfully app"
            />
            <ul className="absolute right-2 top-2 gap-1 flex flex-col">
              <li>
                <a
                  href="https://github.com/alexisintech/mindfully"
                  aria-label="Github"
                  target="_blank"
                >
                  <UilGithub className="opacity-50 hover:opacity-100 w-5" />
                </a>
              </li>
              <li>
                <a
                  href="https://mindfully.up.railway.app"
                  aria-label="Github"
                  target="_blank"
                >
                  <UilExternalLinkAlt className="opacity-50 hover:opacity-100 w-5" />
                </a>
              </li>
            </ul>
          </section>
          <section className="flex flex-col gap-2 order-2 w-2/5 self-start">
            <h3 className="uppercase font-mont font-medium">Title</h3>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              cumque esse nemo animi adipisci ipsum ut ad praesentium nesciunt.
            </p>
          </section>
          <UilAngleRight className="order-4" />{" "}
        </div>
      </div>
    </main>
  );
};

const projects = [{}];
