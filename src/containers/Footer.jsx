import React from 'react';
import { Logo } from '../imports';
import { FaFacebookSquare, FaTwitter, FaPinterest, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="url-shortening__footer">
      <div className="url-shortening__footer-container" >
        <div className="url-shortening__footer-container-logo">
          <img src={ Logo } alt="Logo" />
        </div>
        <div className="url-shortening__footer-container-links">
          <div>
            <h4>Features</h4>
            <p>Link Shortening</p>
            <p>Branded Links</p>
            <p>Analytics</p>
          </div>
          <div>
            <h4>Resources</h4>
            <p>Blog</p>
            <p>Developers</p>
            <p>Support</p>
          </div>
          <div>
            <h4>Company</h4>
            <p>About</p>
            <p>Our Team</p>
            <p>Careers</p>
            <p>Contact</p>
          </div>
        </div>
        <div className="url-shortening__footer-container-social">
          <FaFacebookSquare size={27} />
          <FaTwitter size={27} />
          <FaPinterest size={27} />
          <FaInstagram size={27} />
        </div>
      </div>
      <div className="url-shortening__footer-copyright">
        <p>© 2021 shrtcode by tibush Labs. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
