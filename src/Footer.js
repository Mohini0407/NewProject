import React from 'react';
import './AllCss/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-scroll';

const Footer = () => {
  const NavLink = ({ text, target }) => {
    return (
      <li>
        <Link to={target} spy={true} smooth={true} offset={-70} duration={500}>{text}</Link>
      </li>
    );
  };

  return (
    <footer className="footer" style={{ backgroundColor: '#002244', color: '#ffffff' }}>
      <div className="container">
        <div className="row">
          
          <div className="col-md-3">
            <div className="box">
              <h4>Contact Us</h4>
              <p>Email: info@example.com</p>
              <p>Phone: +1234567890</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="ox">
              <h4>Operating Hours</h4>
              <p>Monday-Friday: 9:00 AM - 5:00 PM</p>
              <p>Saturday-Sunday: Closed</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="foot">
              <h4>Follow Us</h4>
              <p>Connect with us on social media:</p>
              <div className="social-icons">
                <a href="#"><FontAwesomeIcon icon={faFacebookF} style={{ color: '#ffffff' }} /></a>
                <a href="#"><FontAwesomeIcon icon={faTwitter} style={{ color: '#ffffff' }} /></a>
                <a href="#"><FontAwesomeIcon icon={faInstagram} style={{ color: '#ffffff' }} /></a>
                <a href="#"><FontAwesomeIcon icon={faLinkedinIn} style={{ color: '#ffffff' }} /></a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="foo">
              <h4>Quick Links</h4>
              <ul>
                <NavLink text="Home" target="home" />
                <NavLink text="Services" target="services" />
                <NavLink text="About" target="about" />
                <NavLink text="ContactUs" target="contactus" />
                <NavLink text="Product" target="product" />
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-box">
              <h4>Location</h4>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11185.048924905144!2dYOUR-LONGITUDE!3dYOUR-LATITUDE!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDU3JzEwLjgiTiA3wrAyOScxMy41Ilc!5e0!3m2!1sen!2sus!4v1614930949637!5m2!1sen!2sus" width="100%" height="200" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-12 text-center">
            <p>&copy; 2024 Vitamin M Consultant. All Rights Reserved By Shree Digital Marketing Agency & Technoweit.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
