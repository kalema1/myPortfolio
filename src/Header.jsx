export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav-bar">
          <div className="logo">kalema</div>
          <div className="nav-list">
            <ul className="nav-list">
              <li className="nav-list-item">
                <a href="/">Home</a>
              </li>
              <li className="nav-list-item">
                <a href="/">About</a>
              </li>
              <li className="nav-list-item">
                <a href="/">Projects</a>
              </li>
              <li className="nav-list-item">
                <a href="/">Contants</a>
              </li>
            </ul>
          </div>
          <div className="toggle"></div>
        </nav>
      </div>
    </header>
  );
}
