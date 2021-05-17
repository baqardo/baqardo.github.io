import React from "react";
import "./Paragraph.scss";

const Paragraph = props => {
  let classes = "paragraph";

  classes += props.medium ? " paragraph--medium" : "";
  classes += props.small ? " paragraph--small" : "";

  return <p className={classes}>{props.children}</p>;
};

export default Paragraph;
