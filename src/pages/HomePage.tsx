import { About } from '../components/about/About';
import { HeaderInfo } from '../components/header/HeaderInfo';
import type { Project } from '../components/project/domain';
import { ProjectFooter } from '../components/project/ProjectFooter';
import './HomePage.scss';

type Props = {
  projects?: Project[];
};
export const HomePage = ({ projects }: Props) => {
  return (
    <div>
      <HeaderInfo />
      <About />
      <h2>My Work</h2>
      <ProjectFooter projects={projects ?? []} />
    </div>
  );
};
