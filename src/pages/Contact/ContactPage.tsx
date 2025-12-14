import "./ContactPage.css";
import profileImg from "/src/assets/image/MyChibi.png";

import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="page notebook-page">
      <div className="page-content">
        <h2 className="page-title">Contact</h2>

        {/* Image */}
        <div className="contact-image">
          <img src={profileImg} alt="Me" />
        </div>

        <h1 className="contact-name">Marvin Owera</h1>

        {/* Social Icons */}
        <div className="contact-socials">
          <a
            className="social-circle"
            href="https://linkedin.com"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a
            className="social-circle"
            href="https://instagram.com"
            target="_blank"
          >
            <FaInstagram />
          </a>
          <a
            className="social-circle"
            href="https://facebook.com"
            target="_blank"
          >
            <FaFacebook />
          </a>
          <a
            className="social-circle"
            href="https://tiktok.com"
            target="_blank"
          >
            <FaTiktok />
          </a>
          <a
            className="social-circle"
            href="https://github.com"
            target="_blank"
          >
            <FaGithub />
          </a>
          <a className="social-circle" href="mailto:marvinowera04@gmail.com">
            <FaEnvelope />
          </a>
        </div>

        <p className="contact-text">
          Let’s connect! Feel free to reach out anytime.
        </p>
        {/* Button */}
        <a href="mailto:marvinowera04@gmail.com" className="contact-btn">
          Contact Me
        </a>
      </div>
    </div>
  );
}
