import './App.css';
import { HomePage } from './pages/HomePage';
import projects from './assets/data/projects.json';
import type { Project } from './components/project/domain';

function App() {
  const projectList: Project[] = projects;
  return (
    <>
      <HomePage projects={projectList} />
    </>
  );
}

export default App;
