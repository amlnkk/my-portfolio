import { FaGithub, FaInstagram } from "react-icons/fa";

import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <p className="footer-text">© 2026 My Portfolio</p>

        <div className="footer-socials">
          <a
            href="https://github.com/amlnkk"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.instagram.com/a.mlnkk?igsh=MWkwbmJicTB1Y3J0Nw%3D%3D&utm_source=qr"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
