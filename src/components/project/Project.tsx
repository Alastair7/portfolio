import { Project } from "./domain";

export const ProjectView = (project: Project) => {
  return (
    <div className="p-2 bg-slate-700 w-10/12 h-44 shadow-md rounded-lg text-white m-auto flex flex-col gap-4">
      <div className="h-20 ">
        <h1 className="text-center uppercase font-semibold">{project.name}</h1>
        <h2 className="text-center text-sm text-pretty">
          {project.description}
        </h2>
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-center text-sm text-balance h-10">
          {project.stack.join(", ")}
        </p>
        <p className="text-end text-xs text-neutral-300">
          {new Date(project.date).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};
