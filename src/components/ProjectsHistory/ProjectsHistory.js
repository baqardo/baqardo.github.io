import React from "react";

import "./ProjectsHistory.scss";

import ApexaImage from "../../assets/img/apexa.png";
import FlyawayImage from "../../assets/img/flyaway.png";
import MarshmelloImage from "../../assets/img/marshmello.png";
import TripmateImage from "../../assets/img/tripmate.png";
import AgencyImage from "../../assets/img/agency.png";
import SoslinaImage from "../../assets/img/soslina.png";
import MiBusinessImage from "../../assets/img/mi_business.png";
import Paragraph from "../Typography/Paragraph/Paragraph";
import Heading from "../Typography/Heading/Heading";

const ProjectsHistory = props => (
  <section className="projects-history">
    <div className="projects-history__content">
      <a
        className="projects-history__item"
        target="_blank"
        href="https://baqardo.github.io/Training-Responsive-Apexa-Header/"
        rel="noreferrer">
        <div className="projects-history__image-wrapper">
          <img className="projects-history__image" src={ApexaImage} alt="Apexa Header" />
        </div>
        <div className="projects-history__info">
          <div className="projects-history__name">
            <Heading tiny>Apexa Header</Heading>
          </div>
          <div className="projects-history__date">
            <Paragraph small>05.2021</Paragraph>
          </div>
          <div className="projects-history__technologies">
            <Paragraph small>React, SCSS, RWD</Paragraph>
          </div>
        </div>
      </a>

      <a
        className="projects-history__item"
        target="_blank"
        href="https://baqardo.github.io/Training-Responsive-Travelmates-Header/"
        rel="noreferrer">
        <div className="projects-history__image-wrapper">
          <img className="projects-history__image" src={TripmateImage} alt="TripMate Header" />
        </div>
        <div className="projects-history__info">
          <div className="projects-history__name">
            <Heading tiny>TripMate Header</Heading>
          </div>
          <div className="projects-history__date">
            <Paragraph small>04.2021</Paragraph>
          </div>
          <div className="projects-history__technologies">
            <Paragraph small>React, SCSS, RWD</Paragraph>
          </div>
        </div>
      </a>

      <a
        className="projects-history__item"
        target="_blank"
        href="https://baqardo.github.io/Training-Responsive-Vietnam-Header/"
        rel="noreferrer">
        <div className="projects-history__image-wrapper">
          <img className="projects-history__image" src={FlyawayImage} alt="Fly Away Header" />
        </div>
        <div className="projects-history__info">
          <div className="projects-history__name">
            <Heading tiny>Fly Away Header</Heading>
          </div>
          <div className="projects-history__date">
            <Paragraph small>04.2021</Paragraph>
          </div>
          <div className="projects-history__technologies">
            <Paragraph small>React, SCSS, RWD</Paragraph>
          </div>
        </div>
      </a>

      <a
        className="projects-history__item"
        target="_blank"
        href="https://baqardo.github.io/Training---Responsive-Marshmello-Header/"
        rel="noreferrer">
        <div className="projects-history__image-wrapper">
          <img className="projects-history__image" src={MarshmelloImage} alt="Marshmello Header" />
        </div>
        <div className="projects-history__info">
          <div className="projects-history__name">
            <Heading tiny>Marshmello Header</Heading>
          </div>
          <div className="projects-history__date">
            <Paragraph small>03.2021</Paragraph>
          </div>
          <div className="projects-history__technologies">
            <Paragraph small>React, SCSS, RWD</Paragraph>
          </div>
        </div>
      </a>

      <a
        className="projects-history__item"
        target="_blank"
        href="https://baqardo.github.io/MI-Business/"
        rel="noreferrer">
        <div className="projects-history__image-wrapper">
          <img className="projects-history__image" src={MiBusinessImage} alt="Mi Business" />
        </div>
        <div className="projects-history__info">
          <div className="projects-history__name">
            <Heading tiny>Mi Business</Heading>
          </div>
          <div className="projects-history__date">
            <Paragraph small>10.2020</Paragraph>
          </div>
          <div className="projects-history__technologies">
            <Paragraph small>JavaScript, SCSS, RWD</Paragraph>
          </div>
        </div>
      </a>

      <a className="projects-history__item" target="_blank" href="https://baqardo.github.io/Agency/" rel="noreferrer">
        <div className="projects-history__image-wrapper">
          <img className="projects-history__image" src={AgencyImage} alt="Agency" />
        </div>
        <div className="projects-history__info">
          <div className="projects-history__name">
            <Heading tiny>Agency</Heading>
          </div>
          <div className="projects-history__date">
            <Paragraph small>08.2020</Paragraph>
          </div>
          <div className="projects-history__technologies">
            <Paragraph small>React, SCSS, GSAP, RWD</Paragraph>
          </div>
        </div>
      </a>

      <a className="projects-history__item" target="_blank" href="http://soslina.pl" rel="noreferrer">
        <div className="projects-history__image-wrapper">
          <img className="projects-history__image" src={SoslinaImage} alt="Soślina" />
        </div>
        <div className="projects-history__info">
          <div className="projects-history__name">
            <Heading tiny>Soslina</Heading>
          </div>
          <div className="projects-history__date">
            <Paragraph small>03.2021</Paragraph>
          </div>
          <div className="projects-history__technologies">
            <Paragraph small>JavaScript, SCSS, GSAP, RWD</Paragraph>
          </div>
        </div>
      </a>
    </div>
  </section>
);

export default ProjectsHistory;
