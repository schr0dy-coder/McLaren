const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Models</h3>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">McLaren P1</a></li>
              <li><a href="#" className="footer-link">McLaren 720S</a></li>
              <li><a href="#" className="footer-link">McLaren 750S</a></li>
              <li><a href="#" className="footer-link">McLaren GT</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="footer-title">Racing</h3>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">Formula 1</a></li>
              <li><a href="#" className="footer-link">Heritage</a></li>
              <li><a href="#" className="footer-link">Drivers</a></li>
              <li><a href="#" className="footer-link">News</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="footer-title">Ownership</h3>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">Find a Dealer</a></li>
              <li><a href="#" className="footer-link">Test Drive</a></li>
              <li><a href="#" className="footer-link">Service</a></li>
              <li><a href="#" className="footer-link">Support</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="footer-title">Company</h3>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">About</a></li>
              <li><a href="#" className="footer-link">Careers</a></li>
              <li><a href="#" className="footer-link">Sustainability</a></li>
              <li><a href="#" className="footer-link">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-logo">
            <span className="logo">McLaren</span>
          </div>
          <div className="footer-legal">
            <p className="copyright">© 2024 McLaren Automotive. All rights reserved.</p>
            <div className="legal-links">
              <a href="#" className="legal-link">Privacy Policy</a>
              <a href="#" className="legal-link">Terms of Service</a>
              <a href="#" className="legal-link">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer