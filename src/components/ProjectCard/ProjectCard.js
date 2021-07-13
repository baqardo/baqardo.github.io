import React from "react";

import "./ProjectCard.scss";

import userIcon from "../../assets/img/user-icon.png";

import Paragraph from "../Typography/Paragraph/Paragraph";
import Heading from "../Typography/Heading/Heading";

const ProjectCard = props => (
  <a className="project-card" target="_blank" href={props.url} rel="noreferrer">
    <div className="project-card__image-wrapper">
      <img className="project-card__image" src={props.image} alt={props.name} />
    </div>
    <div className="project-card__info">
      <div className="project-card__name">
        <Heading tiny>{props.name}</Heading>
      </div>
      <div className="project-card__technologies">
        <Paragraph small>{props.stack}</Paragraph>
      </div>
      <div className="project-card__numbers">
        <div className="project-card__members">
          <img className="project-card__members-icon" src={userIcon} alt="" />
          <Paragraph small>{props.members}</Paragraph>
        </div>
        <div className="project-card__date">
          <Paragraph small>{props.date}</Paragraph>
        </div>
      </div>
    </div>
  </a>
);

export default ProjectCard;
