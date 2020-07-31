import React from 'react';
import './Button.css';

const Button = (props) => {
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      className="btn"
    >
      <div className="btn-cover"></div>
      <div className="btn-text" style={{ color: props.color }}>
        See the Website
      </div>
    </a>
  );
};

export default Button;
