import React from "react";
import Paragraph from "../Typography/Paragraph/Paragraph";

import "./Technologies.scss";

import HTML_IMAGE from "../../assets/svg/HTML_MASK.svg";
import JS_IMAGE from "../../assets/svg/JS_MASK.svg";
import SCSS_IMAGE from "../../assets/svg/SCSS_MASK.svg";
import REACT_IMAGE from "../../assets/svg/REACT_MASK.svg";
import REDUX_IMAGE from "../../assets/svg/REDUX_MASK.svg";
import GITHUB_IMAGE from "../../assets/svg/GITHUB_MASK.svg";

import HTML_IMAGE_MOZILLA from "../../assets/svg/HTML_MASK_Mozilla.svg";
import JS_IMAGE_MOZILLA from "../../assets/svg/JS_MASK_Mozilla.svg";
import SCSS_IMAGE_MOZILLA from "../../assets/svg/SCSS_MASK_Mozilla.svg";
import REACT_IMAGE_MOZILLA from "../../assets/svg/REACT_MASK_Mozilla.svg";
import REDUX_IMAGE_MOZILLA from "../../assets/svg/REDUX_MASK_Mozilla.svg";
import GITHUB_IMAGE_MOZILLA from "../../assets/svg/GITHUB_MASK_Mozilla.svg";
import Heading from "../Typography/Heading/Heading";

const Technologies = props => {
  let isFirefox = navigator.userAgent.indexOf("Firefox") !== -1;

  return (
    <section className="technologies">
      <div className="technologies__title">
        <Heading>My Technologies</Heading>
      </div>
      <div className="technologies__content">
        <div className="technologies__item">
          <div className="technologies__icon-wrapper">
            <img className="technologies__icon" src={isFirefox ? HTML_IMAGE_MOZILLA : HTML_IMAGE} alt="HTML" />
          </div>
          <div className="technologies__name">
            <Paragraph medium>HTML</Paragraph>
          </div>
        </div>

        <div className="technologies__item">
          <div className="technologies__image-wrapper">
            <img className="technologies__icon" src={isFirefox ? JS_IMAGE_MOZILLA : JS_IMAGE} alt="JavaScript" />
          </div>
          <div className="technologies__name">
            <Paragraph medium>JavaScript</Paragraph>
          </div>
        </div>

        <div className="technologies__item">
          <div className="technologies__image-wrapper">
            <img className="technologies__icon" src={isFirefox ? SCSS_IMAGE_MOZILLA : SCSS_IMAGE} alt="CSS/SCSS" />
          </div>
          <div className="technologies__name">
            <Paragraph medium>CSS/SCSS</Paragraph>
          </div>
        </div>

        <div className="technologies__item">
          <div className="technologies__image-wrapper">
            <img className="technologies__icon" src={isFirefox ? REACT_IMAGE_MOZILLA : REACT_IMAGE} alt="React" />
          </div>
          <div className="technologies__name">
            <Paragraph medium>React</Paragraph>
          </div>
        </div>

        <div className="technologies__item">
          <div className="technologies__image-wrapper">
            <img className="technologies__icon" src={isFirefox ? REDUX_IMAGE_MOZILLA : REDUX_IMAGE} alt="Redux" />
          </div>
          <div className="technologies__name">
            <Paragraph medium>Redux</Paragraph>
          </div>
        </div>

        <div className="technologies__item">
          <div className="technologies__image-wrapper">
            <img className="technologies__icon" src={isFirefox ? GITHUB_IMAGE_MOZILLA : GITHUB_IMAGE} alt="GitHub" />
          </div>
          <div className="technologies__name">
            <Paragraph medium>GitHub</Paragraph>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
