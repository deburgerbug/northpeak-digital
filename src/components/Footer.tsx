import '../style/Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <a
            href="#"
            className="footer__logo"
            aria-label="NorthPeak Digital home"
          >
            NorthPeak<span>.</span>
          </a>

          <nav className="footer__nav" aria-label="Footer navigation">
            <a href="#services">Services</a>
            <a href="#results">Results</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>

        <div className="footer__bottom">
          <p>© {currentYear} NorthPeak Digital. Training concept.</p>

          <p>
            <a
              href="https://digitalheroesco.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Built for Digital Heroes Training Task
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;