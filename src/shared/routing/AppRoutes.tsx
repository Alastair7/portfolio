import { Route, Routes } from "react-router"
import { HomePage } from "../../pages/Home"
import { AboutPage } from "../../pages/About"

export const AppRoutes = () => {
  return <Routes>
    <Route index element={<HomePage />} />
    <Route path="about" element={<AboutPage />} />
  </Routes>
}
