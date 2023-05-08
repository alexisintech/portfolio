import Image from "next/image";
import { UilGithub, UilExternalLinkAlt } from "@iconscout/react-unicons";
import { IProject } from "@/lib/types";

interface IProps {
  project: IProject;
}

export const Project = ({ project }: IProps) => {
  return (
    <div className="flex gap-20">
      <section className="flex order-1 w-3/5 relative">
        <Image
          className="rounded"
          width="1000"
          height="1000"
          src={`/${project.title}.webp`}
          alt={`${project.title} app`}
        />
        <ul className="absolute right-2 top-2 gap-1 flex flex-col">
          <li>
            <a
              href={project.github}
              aria-label="Github"
              target="_blank"
              title="Github"
            >
              <UilGithub className="opacity-50 hover:opacity-100 w-5" />
            </a>
          </li>
          <li>
            <a
              href={project.live}
              aria-label="Live site"
              target="_blank"
              title="Live site"
            >
              <UilExternalLinkAlt className="opacity-50 hover:opacity-100 w-5" />
            </a>
          </li>
        </ul>
      </section>
      <section className="flex flex-col gap-2 order-2 w-2/5">
        <h3 className="uppercase font-mont font-medium">{project.title}</h3>
        <p className="text-justify">{project.description}</p>
      </section>
    </div>
  );
};
