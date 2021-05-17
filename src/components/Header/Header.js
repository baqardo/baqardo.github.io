import React from "react";
import Heading from "../Typography/Heading/Heading";
import Paragraph from "../Typography/Paragraph/Paragraph";
import "./Header.scss";

import shapeImage from "../../assets/img/banner_bg.png";
import waveImage from "../../assets/img/hero.png";
import projectWaveImage from "../../assets/img/projects-wave.png";

import laptopImage from "../../assets/img/laptop.png";
import phoneImage from "../../assets/img/phone.png";
import websiteImage from "../../assets/img/website.png";

const Header = props => {
  return props.first ? (
    <header className="header">
      <div className="header__darkening-mask"></div>
      <div className="header__shapes-mask">
        <img className="header__shapes-mask-item" src={shapeImage} alt="" />
      </div>
      <div className="header__images-mask">
        <img className="header__images-mask-laptop" src={laptopImage} alt="" />
        <img className="header__images-mask-phone" src={phoneImage} alt="" />
        <img className="header__images-mask-website" src={websiteImage} alt="" />
      </div>
      <div className="header__wave-mask">
        <img className="header__wave-mask-item" src={waveImage} alt="" />
      </div>

      <div className="header__content">
        <Heading>I am Andrzej Nawalaniec</Heading>
        <Paragraph>A passionate front-end developer</Paragraph>
      </div>
    </header>
  ) : (
    <header className="header">
      <div className="header__darkening-mask"></div>
      <div className="header__shapes-mask">
        <img className="header__shapes-mask-item" src={shapeImage} alt="" />
      </div>
      <div className="header__wave-mask">
        <img className="header__wave-mask-item" src={projectWaveImage} alt="" />
      </div>

      <div className="header__content">
        <Heading>My Projects History</Heading>
      </div>
    </header>
  );
};

export default Header;
