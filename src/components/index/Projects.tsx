import Image from "next/image";
import { UilGithub, UilExternalLinkAlt } from "@iconscout/react-unicons";

export const Projects = () => {
  return (
    <main className="w-full py-48">
      <div className="container flex gap-20 px-52">
        <section className="flex order-1 w-3/5 relative">
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
        <section className="flex flex-col gap-2 order-2 w-2/5">
          <h3 className="uppercase font-mont font-medium">Title</h3>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt cumque
            esse nemo animi adipisci ipsum ut ad praesentium nesciunt.
          </p>
        </section>
      </div>
    </main>
  );
};

const projects = [{}];
