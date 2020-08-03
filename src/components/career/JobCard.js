import React from 'react';
import './JobCard.css';

import Button from '../button/Button';

const JobCard = ({
  job: { bgColor, logo, name, titleColor, year, description, website },
}) => {
  return (
    <div className="job-card" style={{ backgroundColor: bgColor }}>
      <div className="front" id="image">
        <img id="front-img" src={logo} alt={name} />
      </div>
      <div id="text">
        <h2 style={{ color: titleColor }}>{name}</h2>
        <h3>{year}</h3>
        <p>{description}</p>
        <Button color={bgColor} link={website} />
      </div>
    </div>
  );
};

export default JobCard;
