export default function Header() {
  return (
    <header className="header">
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
          <div className="toggle"></div>
        </nav>
      </div>
    </header>
  );
}
