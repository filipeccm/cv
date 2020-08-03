import React from 'react';
import './Button.css';

const Button = ({ link, color }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="btn">
      <div className="btn-cover"></div>
      <div className="btn-text" style={{ color: color }}>
        See the Website
      </div>
    </a>
  );
};

export default Button;
