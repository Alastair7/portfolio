import { useEffect, useState } from "react";

import { useScreenSize } from "../../shared/hooks/useScreenSize";
import { Project } from "./domain";
import { ProjectView } from "./Project";
import { projects } from "./projects";

export const ProjectShowcase = () => {
  const screenSize = useScreenSize();
  const isSmallScreen = screenSize.width <= 640;

  return isSmallScreen ? <SmallScreenShowcase /> : <DefaultShowcase />;
};

const SmallScreenShowcase = () => {
  const [curIndex, setCurIndex] = useState<number>(0);
  const [project, setProject] = useState<Project>(projects[curIndex]);

  const onNextClick = () => {
    const nextIndex = curIndex + 1;
    if (nextIndex > projects.length - 1) {
      setCurIndex(0);
      return;
    }
    setCurIndex(nextIndex);
  };

  const onPrevClick = () => {
    const prevIndex = curIndex - 1;

    if (prevIndex < 0) {
      setCurIndex(projects.length - 1);
      return;
    }

    setCurIndex(prevIndex);
  };

  useEffect(() => {
    setProject(projects[curIndex]);
  }, [curIndex]);

  return (
    <div>
      <button onClick={onNextClick}>Next</button>
      <ProjectView {...project} />
      <button onClick={onPrevClick}>Prev</button>
    </div>
  );
};

const DefaultShowcase = () => {
  const projectMap = projects.map((project) => (
    <ProjectView key={project.id} {...project} />
  ));
  return <>{projectMap}</>;
};
