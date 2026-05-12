import '../Footer.css'
import { Link } from 'react-router-dom'
function Footer() {
    return (
<footer className="footer">
  <div className="footer-content">
    <div>
      <h3>Zion Estates</h3>
      <p>Find your dream home anywhere, anytime.</p>
    </div>

    <div>
      <h4>Quick Links</h4>
      <p><Link to="">Home</Link></p>
      <p><Link to="">Properties</Link></p>
      <p><Link to="">About</Link></p>
      <p><Link to="">Contact</Link></p>
    </div>

    <div>
      <h4>Contact</h4>
      <p>Email: info@zionestates.com</p>
      <p>Phone: +254 700 000 000</p>
    </div>
  </div>

  <p className="copyright">
    © 2026 Zion Estates. All rights reserved.
  </p>
</footer>
    );
}

export default Footer;