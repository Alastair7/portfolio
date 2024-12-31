import "./App.css";
import { ProfileHeader } from "./components/profile/ProfileHeader";
import { ProfileSkills } from "./components/profile/ProfileSkills";
import { ProjectShowcase } from "./components/project/ProjectShowcase";
function App() {
  return (
    <>
      <ProfileHeader />
      <ProjectShowcase />
      <ProfileSkills />
      <div className="text-white text-center mt-2 p-2">
        <p className="text-pretty tracking-tighter">
          I'm also familiar with Microsoft's Azure stack (Azure DevOps, Azure
          Portal, CosmosDB...).
        </p>
        <p className="text-pretty tracking-tighter">
          I'm okay working in an Agile environment, since this is the way I've
          been working until now.
        </p>
      </div>
    </>
  );
}

export default App;
