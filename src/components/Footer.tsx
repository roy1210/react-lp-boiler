import React from "react";
import { FooterContainer } from "../styles/components/Footer.styles";
import footerLogo from "../resources/header-logo.png";
import { Links, Media, Support } from "../data/links";

const Footer = (): JSX.Element => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <div className="wrapper">
        <ul className="links">
          {Links.map((link) => (
            <li key={link.description}>
              <a href={link.link} rel="noopener noreferrer" target="_blank">
                {link.description}
              </a>
            </li>
          ))}
          <li>
            <a
              href={`mailto:${Support}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              Support
            </a>
          </li>
        </ul>

        <div className="logo">
          <div className="footer-logo">
            <img src={footerLogo} alt="footer-logo" />
            <footer>© 2018-{currentYear} XYZ</footer>
          </div>
          <div className="media">
            {Media.map((media) => (
              <a
                href={media.link}
                rel="noopener noreferrer"
                target="_blank"
                key={media.alt}
              >
                <img src={media.src} alt={media.alt} />
              </a>
            ))}
          </div>
        </div>

        <footer className="footer-mobile">© 2018-{currentYear} XYZ</footer>
      </div>
    </FooterContainer>
  );
};

export default Footer;
