import './ProjectCard.scss';

import type { Project } from './domain';

type Props = {
  projectDetails: Project;
};
export const ProjectCard = ({ projectDetails }: Props) => {
  const stack = projectDetails.stack.map((techStack) => (
    <img key={techStack.id} src={techStack.path} alt={techStack.name} />
  ));

  return (
    <div className="card">
      <h1>{projectDetails.name}</h1>
      <p>{projectDetails.image}</p>
      <p>{projectDetails.description}</p>
      <div className="card__stack">{stack}</div>
    </div>
  );
};
