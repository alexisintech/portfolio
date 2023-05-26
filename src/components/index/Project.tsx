import Image from "next/image";
import { UilGithub, UilExternalLinkAlt } from "@iconscout/react-unicons";
import { IProject } from "@/lib/types";

interface IProps {
  project: IProject;
}

export const Project = ({ project }: IProps) => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 md:gap-4 xl:gap-20">
      <section className="flex order-1 relative w-3/5">
        <div>
          <Image
            className="rounded"
            width="1000"
            height="1000"
            src={project.img}
            alt={`${project.title} app`}
          />
        </div>
        <ul className="absolute right-2 top-2 gap-1 flex flex-col">
          <li>
            <a
              href={project.githubUrl}
              aria-label="Github"
              target="_blank"
              title="Github"
            >
              <UilGithub className="opacity-50 hover:opacity-100 w-5" />
            </a>
          </li>
          <li>
            <a
              href={project.liveUrl}
              aria-label="Live site"
              target="_blank"
              title="Live site"
            >
              <UilExternalLinkAlt className="opacity-50 hover:opacity-100 w-5" />
            </a>
          </li>
        </ul>
      </section>
      <section className="flex flex-col gap-1 lg:gap-2 order-2 md:mt-0 lg:w-2/5">
        <h3 className="uppercase font-mont font-medium">{project.title}</h3>
        <p className="md:text-justify">{project.description}</p>
        <p className="md:text-justify italic opacity-50 text-md md:text-sm">
          {project.creatorsNote}
        </p>
      </section>
    </div>
  );
};
