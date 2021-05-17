import React from "react";
import "./Button.scss";

const Button = props => {
  let classes = "button";

  classes += props.secondary ? " button--secondary" : "";
  classes += props.tertiary ? " button--tertiary" : "";

  return (
    <a className={classes} target={props.target} href={props.href} rel="noreferrer">
      {props.children}
    </a>
  );
};

export default Button;
