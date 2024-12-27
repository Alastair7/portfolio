import "./App.css";
import { ProfileHeader } from "./components/profile/ProfileHeader";
import { Project } from "./components/project/Project";
import projects from "./components/project/projects.json";
function App() {
  const projectList = projects;
  const project = projectList.map((p) => <Project {...p} />);
  return (
    <>
      <ProfileHeader />
      <div className="flex">{project}</div>
    </>
  );
}

export default App;
