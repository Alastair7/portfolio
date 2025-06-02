import './ProjectFooter.scss';

import type { Project } from './domain';
import { ProjectCard } from './ProjectCard';

type Props = {
  projects: Project[];
};

export const ProjectFooter = ({ projects }: Props) => {
  const projectCards = projects.map((project) => (
    <ProjectCard key={project.id} projectDetails={project} />
  ));

  return <div className="project-footer">{projectCards}</div>;
};
