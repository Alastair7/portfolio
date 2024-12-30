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
        <p>
          My tech stack at work is: C# with ASP.NET for the backend and
          Typescript with Vite + React for the frontend. I also have knowledge
          about: Go, Lua, HTML, CSS, Python.
        </p>
        <p className="text-pretty tracking-tighter">
          Also I'm familiar with Microsoft tech: Azure, Azure DevOps, CosmosDB,
          Application Insights and more. And I know how to work in an Agile
          environment.
        </p>
      </div>
    </>
  );
}

export default App;
