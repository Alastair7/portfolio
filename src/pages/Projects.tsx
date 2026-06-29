import { Menu } from "../components/menu/Menu"
import { ProjectPreview, type Project, type ProjectStatus } from "../components/project/Project"
import "./Projects.css"
import projectList from "../shared/constants/projects.json"

export const ProjectsPage = () => {
  const projects: Project[] = projectList.map(project => {
    return {
      ...project,
      status: project.status as ProjectStatus
    }

  })

  return <>
    <h1>Alexandru Ban</h1>
    <h2>Some of my projects</h2>
    <Menu />
    <div className="projects">
      {projects.map(project => (<ProjectPreview key={project.id} {...project} />))}
    </div>
  </>
}
