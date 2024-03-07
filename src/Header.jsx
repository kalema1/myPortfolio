import { useState } from "react";
import { IoIosMenu, IoIosClose } from "react-icons/io";

export default function Header() {
  const [showNav, setShowNav] = useState(false);

  function handleShowNavigation() {
    setShowNav((navBar) => !navBar);
  }

  return (
    <header className={`header ${showNav ? "show-nav" : ""}`}>
      <div className="container position-fixed">
        <nav className="nav-bar">
          <div className="logo">kalema</div>
          <div className="nav-list">
            <ul className="nav-list">
              <li className="nav-list-item">
                <a href="#home">Home</a>
              </li>
              <li className="nav-list-item">
                <a href="#about">About</a>
              </li>
              <li className="nav-list-item">
                <a href="#projects">Projects</a>
              </li>
              <li className="nav-list-item">
                <a href="#contact">Contant</a>
              </li>
            </ul>
          </div>
          <div className="toggle" onClick={handleShowNavigation}>
            {showNav ? (
              <IoIosClose className="menu-icon" />
            ) : (
              <IoIosMenu className="menu-icon" />
            )}
          </div>
          <div className="mobile-nav-list">
            <ul className="mobile-nav" onClick={handleShowNavigation}>
              <li className="nav-list-item">
                <a href="#home">Home</a>
              </li>
              <li className="nav-list-item">
                <a href="#about">About</a>
              </li>
              <li className="nav-list-item">
                <a href="#projects">Projects</a>
              </li>
              <li className="nav-list-item">
                <a href="#contact">Contant</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
