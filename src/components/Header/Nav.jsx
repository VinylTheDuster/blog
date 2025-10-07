import { NavLink } from "react-router";

export default function Nav() {
  return (
    <nav className="content-center pr-8">
        <ul className="flex flex-row gap-15 font-bold text-xl">
            <li className="list-none"><NavLink to="/" className={({ isActive }) => isActive ? "nav-active" : "nav-buttons" }>Accueil</NavLink></li>
            <li className="list-none"><NavLink to="/blog" className={({ isActive }) => isActive ? "nav-active" : "nav-buttons" }>Blog</NavLink></li>
            <li className="list-none"><NavLink to="/about" className={({ isActive }) => isActive ? "nav-active" : "nav-buttons" }>À Propos</NavLink></li>
        </ul>
    </nav>
  )
}
