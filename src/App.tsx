import './App.css';
import { HomePage } from './pages/HomePage';
import projects from './assets/data/projects.json';

function App() {
  return (
    <>
      <HomePage projects={projects} />
    </>
  );
}

export default App;
