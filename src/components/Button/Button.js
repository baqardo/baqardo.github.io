import React from 'react';
import './Button.scss';

const Button = props => {
  let classes = 'button';

  classes += props.secondary ? ' button--secondary' : '';
  classes += props.tertiary ? ' button--tertiary' : '';
  classes += props.big ? ' button--big' : '';

  return (
    <a className={classes} target={props.target} href={props.href} rel="noreferrer" onClick={props.onClick}>
      {props.children}
    </a>
  );
};

export default Button;
