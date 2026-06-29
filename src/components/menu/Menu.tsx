import { Link } from "react-router"
import "./Menu.css"

export const Menu = () => {
  return <nav className="menu">
    <Link className="menu__item" to={"/"}>Home</Link>
    <Link className="menu__item" to={"/about"}>About</Link>
    <Link className="menu__item" to={"/projects"}>Projects</Link>
  </nav>
}
