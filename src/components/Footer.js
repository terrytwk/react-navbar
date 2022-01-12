import React from "react";
import "./Footer.css";
import {
  AiOutlineLinkedin,
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineYoutube,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p className="footer-note">Welcome to my repository.</p>
      <div className="footer-icons">
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineLinkedin size={30} />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineInstagram size={30} />
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineFacebook size={30} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <AiOutlineTwitter size={30} />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <AiOutlineYoutube size={30} />
        </a>
      </div>

      <div className="footer-legal">
        <text>© 2021 React Navbar Inc.</text> <text>|</text>
        <a href="/">Privacy Policy</a>
        <a href="/">Terms of Use</a>
      </div>
    </div>
  );
};

export default Footer;
