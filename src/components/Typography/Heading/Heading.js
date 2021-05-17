import React from "react";
import "./Heading.scss";

const Heading = props => {
  let classes = "heading";

  classes += props.small ? " heading--small" : "";
  classes += props.tiny ? " heading--tiny" : "";

  return <h1 className={classes}>{props.children}</h1>;
};

export default Heading;
