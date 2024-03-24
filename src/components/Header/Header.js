import "./Header.scss";
import logo from "../../assets/images/logo.png";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Header() {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState("");

  useEffect(() => {
    // Extract the pathname from the location object
    const { pathname } = location;

    // Set active item based on the current pathname
    if (pathname === "/") {
      setActiveItem("Home");
    } else if (pathname === "/goals") {
      setActiveItem("Goals");
    } else if (pathname === "/tasks") {
      setActiveItem("Tasks");
    } else if (pathname === "/stats") {
      setActiveItem("Stats");
    }
  }, [location]);

  return (
    <header className="header">
        <Link to={"/"}>
            <div className="header__logo">
                <img className="header__logo-image" src={logo} alt="colorful rocket" />
                <h2 className="header__logo-text">PROCKET</h2>
            </div>
        </Link>
      
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className={`header__nav-item ${activeItem === "Home" ? "header__nav-item--active" : ""}`}>
            <Link to={"/"} className="header__nav-link">
              Home
            </Link>
          </li>
          <li className={`header__nav-item ${activeItem === "Goals" ? "header__nav-item--active" : ""}`}>
            <Link to={"/goals"} className="header__nav-link">
              Goals
            </Link>
          </li>
          <li className={`header__nav-item ${activeItem === "Tasks" ? "header__nav-item--active" : ""}`}>
            <Link to={"/tasks"} className="header__nav-link">
              Tasks
            </Link>
          </li>
          <li className={`header__nav-item ${activeItem === "Stats" ? "header__nav-item--active" : ""}`}>
            <Link to={"/stats"} className="header__nav-link">
              Stats
            </Link>
          </li>
        </ul>
      </nav>
      
    </header>
  );
}

export default Header;

