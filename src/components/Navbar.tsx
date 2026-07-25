import '../style/Navbar.css'

function Navbar() {
  return (
    <header className="header">
      <div className="container navbar">
        <a href="#" className="navbar__logo" aria-label="NorthPeak Digital home">
          NorthPeak<span>.</span>
        </a>

        <nav className="navbar__nav" aria-label="Primary navigation">
          <a href="#services">Services</a>
          <a href="#results">Results</a>
          <a href="#pricing">Pricing</a>
        </nav>

        <a href="#contact" className="navbar__cta">
          Start a project
        </a>
      </div>
    </header>
  );
}

export default Navbar;