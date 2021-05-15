import React from "react";
import "./Button.scss";

const Button = props => (
  <a href={props.href} className="button">
    {props.children}
  </a>
);

export default Button;
