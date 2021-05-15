import React, { Component } from "react";
import "./Navigation.scss";

import logoImage from "../../assets/img/logo.png";

class Navigation extends Component {
  render() {
    return (
      <nav className="navigation">
        <div className="navigation__logo-container">
          <img className="navigation__logo" src={logoImage} alt="logo" />
        </div>

        <ul className="navigation__list">
          <li className="navigation__list-item">
            <a className="navigation__link navigation__link--active" href="#">
              Home
            </a>
          </li>
          <li className="navigation__list-item">
            <a className="navigation__link" href="#">
              Projects
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
