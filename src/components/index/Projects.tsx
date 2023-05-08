import { Project } from "./Project";
import { IProject } from "@/lib/types";

export const Projects = () => {
  return (
    <main className="w-full py-48">
      <div className="container flex flex-col gap-10 px-52">
        <div className="flex gap-5 self-center mb-10">
          <h4 className="font-mont uppercase italic">Personal</h4>
          <h4 className="font-mont uppercase italic opacity-50">
            Cross-functional teams
          </h4>
        </div>
        {personalProjects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </main>
  );
};

const personalProjects: IProject[] = [
  {
    title: "Mindfully",
    description:
      "A full-stack app that encourages users to improve their mental health through mindfulness and journaling. Write journal entries every day either by using a blank slate or by using prompts created for you or created by you.",
    github: "https://github.com/alexisintech/mindfully",
    live: "https://mindfully.up.railway.app",
  },
];
