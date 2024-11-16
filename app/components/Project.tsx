import Image from "next/image";
import { UilGithub, UilExternalLinkAlt } from "@iconscout/react-unicons";
import { IProject } from "../types/globals";

interface IProps {
  project: IProject;
}

export const Project = ({ project }: IProps) => {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:gap-8 xl:gap-12">
      <section className="flex relative order-1 w-3/5">
        <div>
          <Image
            className="rounded"
            width="1000"
            height="1000"
            src={project.img}
            alt={`${project.title} app`}
          />
        </div>
        <ul className="flex absolute top-2 right-2 flex-col gap-1">
          <li>
            <a
              href={project.githubUrl}
              aria-label="Github"
              target="_blank"
              title="Github"
            >
              <UilGithub className="w-5 opacity-50 hover:opacity-100" />
            </a>
          </li>
          <li>
            <a
              href={project.liveUrl}
              aria-label="Live site"
              target="_blank"
              title="Live site"
            >
              <UilExternalLinkAlt className="w-5 opacity-50 hover:opacity-100" />
            </a>
          </li>
        </ul>
      </section>
      <section className="flex flex-col order-2 gap-1 lg:gap-2 md:mt-0 lg:w-2/5">
        <h3 className="font-medium uppercase font-mont">{project.title}</h3>
        <p className="md:text-justify">{project.description}</p>
        <p className="italic opacity-50 md:text-justify text-md md:text-sm">
          {project.creatorsNote}
        </p>
      </section>
    </div>
  );
};
