import { Route, Routes } from "react-router"
import { HomePage } from "../../pages/Home"
import { AboutPage } from "../../pages/About"
import { ProjectsPage } from "../../pages/Projects"

export const AppRoutes = () => {
  return <Routes>
    <Route index element={<HomePage />} />
    <Route path="about" element={<AboutPage />} />
    <Route path="projects" element={<ProjectsPage />} />
  </Routes>
}
