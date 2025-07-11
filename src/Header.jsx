import React, { useState, useEffect, useRef } from "react";

const Header = ({ currentPage, setCurrentPage }) => {


  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    styleHeroContainer();
  };
  const handleLogoClick = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    stylingHeroContainer();
  }
  
  const heroRef = useRef(null);

  const stylingHeroContainer = () => {
    if (heroRef.current) {
      heroRef.current.style.height = "100vh";
    }
  }

  const styleHeroContainer = () => {
    if (heroRef.current) {
      heroRef.current.style.height = "auto";
    }
  };

  return (
    <>
      <div className="hero-container" ref={heroRef}>
        <nav className="navbar">
          <div className="navbar-container">
            <div className="navbar-brand">
              <button onClick={() => handleLogoClick("home")} className="logo">
                McLaren
              </button>
            </div>

            <div className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
              <ul className="navbar-nav">

                <li className="nav-item">
                  <button
                    onClick={() => handleLogoClick("home")}
                    className={`nav-link ${
                      currentPage === "home" ? "active" : ""
                    }`}
                  >
                    Home
                  </button>
                </li>

                <li className="nav-item">
                  <button
                    onClick={() => handleNavClick("models")}
                    className={`nav-link ${
                      currentPage === "models" ? "active" : ""
                    }`}
                  >
                    Models
                  </button>
                </li>

                <li className="nav-item">
                  <button
                    onClick={() => handleNavClick("bespoke")}
                    className={`nav-link ${
                      currentPage === "bespoke" ? "active" : ""
                    }`}
                  >
                    Bespoke
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    onClick={() => handleNavClick("racing")}
                    className={`nav-link ${
                      currentPage === "racing" ? "active" : ""
                    }`}
                  >
                    Racing
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    onClick={() => handleNavClick("ownership")}
                    className={`nav-link ${
                      currentPage === "ownership" ? "active" : ""
                    }`}
                  >
                    Ownership
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    onClick={() => handleNavClick("about")}
                    className={`nav-link ${
                      currentPage === "about" ? "active" : ""
                    }`}
                  >
                    About
                  </button>
                </li>
              </ul>
            </div>

            <div className="navbar-toggle" onClick={toggleMenu}>
              <span className={`hamburger ${isMenuOpen ? "active" : ""}`}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
