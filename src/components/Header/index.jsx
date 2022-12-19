import { NavLink } from "react-router-dom"
import "./style.scss"

export const Header = () => {
  const a = "Hi";
  return <>
    <header>
      <div className="container">
        <nav className="nav">
          <h2 className="nav-logo">Logo</h2>
          <ul className="nav__list">
            <li className="nav__list--item text-white fw-bold">
              <NavLink to="/" className={({isActive}) => isActive ? "text-dark text-decoration-none" : "text-white text-decoration-none"}>Home</NavLink>
            </li>
            <li className="nav__list--item text-white fw-bold">
              <NavLink to="/task" className={({isActive}) => isActive ? "text-dark text-decoration-none" : "text-white text-decoration-none"}>Task</NavLink>
            </li>
            <li className="nav__list--item">
              <NavLink to="/adduser" className={({isActive}) => isActive ? "text-dark text-decoration-none fw-bold" : "text-white text-decoration-none fw-bold"}>Add user</NavLink>
            </li>
            <li className="nav__list--item">
              <NavLink to="/userlist" className={({isActive}) => isActive ? "text-dark text-decoration-none fw-bold" : "text-white text-decoration-none fw-bold"}>User list</NavLink>
            </li>
            <li className="nav__list--item">
              <NavLink to="/link5" className={({isActive}) => isActive ? "text-dark text-decoration-none fw-bold" : "text-white text-decoration-none fw-bold"}>Link5</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </>
}