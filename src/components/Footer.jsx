import '../Footer.css'
import { Link } from 'react-router-dom'
function Footer() {
    return (
<footer className="footer">
  <div className="footer-content">
    <div>
      <h3>RealEstate Hub</h3>
      <p>Find your dream home anywhere, anytime.</p>
    </div>

    <div>
      <h4>visit</h4>
      <p><Link to="/">Home</Link></p>
      <p><Link to="/properties">Properties</Link></p>
      <p><Link to="/about">About</Link></p>
      <p><Link to="/contact">Contact Us</Link></p>
    </div>

    <div>
      <h4>Contact</h4>
      <p>Email: info@Realestates.com</p>
      <p>Phone: +254 700 000 000</p>
    </div>
  </div>

  <p className="copyright">
    © 2026 RealEstate Hub. All rights reserved.
  </p>
</footer>
    );
}

export default Footer;