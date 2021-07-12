import React from "react";

import "./ProjectsHistory.scss";

import ApexaImage from "../../assets/img/apexa.png";
import FlyawayImage from "../../assets/img/flyaway.png";
import MarshmelloImage from "../../assets/img/marshmello.png";
import TripmateImage from "../../assets/img/tripmate.png";
import AgencyImage from "../../assets/img/agency.png";
import SoslinaImage from "../../assets/img/soslina.png";
import MiBusinessImage from "../../assets/img/mi_business.png";
import SmartphoneImage from "../../assets/img/smartphone.png";
import PejpersokerImage from "../../assets/img/pejpersoker.png";
import PacmanImage from "../../assets/img/pacman.png";

import ProjectCard from "../ProjectCard/ProjectCard";

const ProjectsHistory = props => {
  const projects = [
    {
      name: "Apexa Header",
      date: "05.2021",
      stack: "React, SCSS, RWD",
      url: "https://baqardo.github.io/Training-Responsive-Apexa-Header/",
      image: ApexaImage,
      members: 1,
    },
    {
      name: "TripMate Header",
      date: "04.2021",
      stack: "React, SCSS, RWD",
      url: "https://baqardo.github.io/Training-Responsive-Travelmates-Header/",
      image: TripmateImage,
      members: 1,
    },
    {
      name: "Fly Away Header",
      date: "04.2021",
      stack: "React, SCSS, RWD",
      url: "https://baqardo.github.io/Training-Responsive-Vietnam-Header/",
      image: FlyawayImage,
      members: 1,
    },
    {
      name: "Marshmello Header",
      date: "03.2021",
      stack: "React, SCSS, RWD",
      url: "https://baqardo.github.io/Training---Responsive-Marshmello-Header/",
      image: MarshmelloImage,
      members: 1,
    },

    {
      name: "Mi Business",
      date: "10.2020",
      stack: "JavaScript, SCSS, RWD",
      url: "https://baqardo.github.io/MI-Business/",
      image: MiBusinessImage,
      members: 1,
    },
    {
      name: "Agency",
      date: "08.2020",
      stack: "React, SCSS, GSAP, RWD",
      url: "https://baqardo.github.io/Agency/",
      image: AgencyImage,
      members: 1,
    },
    {
      name: "Soslina",
      date: "03.2020",
      stack: "JavaScript, SCSS, GSAP, RWD",
      url: "http://soslina.pl",
      image: SoslinaImage,
      members: 2,
    },
    {
      name: "Smartphone",
      date: "09.2019",
      stack: "JavaScript, CSS, HTML, JQuery",
      url: "https://baqardo.github.io/Smartphone/",
      image: SmartphoneImage,
      members: 2,
    },
    {
      name: "PejperSoker",
      date: "06.2019",
      stack: "JavaScript, CSS, PHP, SQL",
      url: "https://baqardo.github.io/PejperSoker/",
      image: PejpersokerImage,
      members: 3,
    },
    {
      name: "Pac-Man",
      date: "06.2018",
      stack: "JavaScript, CSS, HTML, P5",
      url: "https://baqardo.github.io/pacman/",
      image: PacmanImage,
      members: 3,
    },
  ];

  return (
    <section className="projects-history">
      <div className="projects-history__content">
        {projects.map(({ name, date, stack, url, image, members }) => {
          return (
            <ProjectCard name={name} date={date} stack={stack} url={url} image={image} members={members} key={name} />
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsHistory;
