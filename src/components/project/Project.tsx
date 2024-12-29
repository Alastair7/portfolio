import { Project } from "./domain";

export const ProjectView = (project: Project) => {
  return (
    <div className="bg-gray-900 text-white m-auto">
      <h1 className="">{project.name}</h1>
      <p>{project.id}</p>
      <p>{project.description}</p>
      <p>{project.stack.join(", ")}</p>
      <p>{project.date}</p>
    </div>
  );
};
