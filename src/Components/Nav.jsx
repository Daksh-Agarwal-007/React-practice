function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">
            Start Bootstrap
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active text-muted"
                  aria-current="page"
                  href="index.html"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-muted" href="About.html">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-muted" href="Contact.html">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-muted" href="Pricing.html">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-muted" href="FAQ.html">
                  FAQ
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-muted" href="BLOG.html">
                  BLOG
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-muted" href="Portfolio.html">
                  Portfolio
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
