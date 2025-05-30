import { About } from '../components/about/About';
import { HeaderInfo } from '../components/header/HeaderInfo';
import type { Project } from '../components/project/domain';
import { ProjectFooter } from '../components/project/ProjectFooter';

type Props = {
  projects?: Project[];
};
export const HomePage = ({ projects }: Props) => {
  return (
    <div>
      <HeaderInfo />
      <About />
      <h1>Projects</h1>
      <ProjectFooter projects={projects ?? []} />
    </div>
  );
};
