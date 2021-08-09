import React from 'react';
import Heading from '../Typography/Heading/Heading';

import './Projects.scss';

import soslinaImage from '../../assets/img/soslina.png';
import agencyImage from '../../assets/img/agency.png';
import miBusinessImage from '../../assets/img/mi_business.png';

import Paragraph from '../Typography/Paragraph/Paragraph';
import Button from '../Button/Button';

const Projects = props => {
  return (
    <section className="projects">
      <div className="projects__title">
        <Heading>My Latest Works</Heading>
      </div>

      <div className="projects__content">
        <div className="projects__item">
          <div className="projects__info">
            <div className="projects__name">
              <Heading small>Mi Business</Heading>
            </div>
            <div className="projects__date">
              <Paragraph small>10.2020</Paragraph>
            </div>
            <div className="projects__technologies">
              <Paragraph small>JavaScript, SCSS, RWD</Paragraph>
            </div>
            <div className="projects__button">
              <Button href="https://baqardo.github.io/MI-Business/" target="_blank" tertiary>
                View Project
              </Button>
            </div>
          </div>
          <div className="projects__image-wrapper">
            <img className="projects__image" src={miBusinessImage} alt="Mi Business" />
          </div>
        </div>

        <div className="projects__item">
          <div className="projects__info">
            <div className="projects__name">
              <Heading small>Agency</Heading>
            </div>
            <div className="projects__date">
              <Paragraph small>08.2020</Paragraph>
            </div>
            <div className="projects__technologies">
              <Paragraph small>React, SCSS, GSAP, RWD</Paragraph>
            </div>
            <div className="projects__button">
              <Button href="https://baqardo.github.io/Agency/" target="_blank">
                View Project
              </Button>
            </div>
          </div>
          <div className="projects__image-wrapper">
            <img className="projects__image" src={agencyImage} alt="Agency" />
          </div>
        </div>

        <div className="projects__item">
          <div className="projects__info">
            <div className="projects__name">
              <Heading small>Soslina</Heading>
            </div>
            <div className="projects__date">
              <Paragraph small>07.2020</Paragraph>
            </div>
            <div className="projects__technologies">
              <Paragraph small>JavaScript, SCSS, GSAP, RWD</Paragraph>
            </div>
            <div className="projects__button">
              <Button href="http://soslina.pl" target="_blank" secondary>
                View Project
              </Button>
            </div>
          </div>
          <div className="projects__image-wrapper">
            <img className="projects__image" src={soslinaImage} alt="Soslina" />
          </div>
        </div>
        <div className="projects__main-button">
          <Button href="#projects" onClick={() => props.handleClick('projects')} tertiary big>
            View More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
