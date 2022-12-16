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
              <a href="#" className="nav__list--item-link">Link3</a>
            </li>
            <li className="nav__list--item">
              <a href="#" className="nav__list--item-link">Link4</a>
            </li>
            <li className="nav__list--item">
              <a href="#" className="nav__list--item-link">Link5</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </>
}