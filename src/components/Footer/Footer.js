import React from "react";

import "./Footer.scss";

import footerShapes from "../../assets/img/footer-bg.png";
import footerWave from "../../assets/img/footer-mask.png";
import githubIcon from "../../assets/svg/github.svg";

const Footer = props => (
  <footer className="footer">
    <div className="footer__shapes-mask">
      <img className="footer__shapes-mask-item" src={footerShapes} alt="" />
    </div>
    <div className="footer__wave-mask">
      <img className="footer__wave-mask-item" src={footerWave} alt="" />
    </div>
    <div className="footer__content">
      <a className="footer__github" href="https://github.com/baqardo" target="_blank" rel="noreferrer">
        <img className="footer__github-icon" src={githubIcon} alt="GitHub" />
      </a>
    </div>
  </footer>
);

export default Footer;
