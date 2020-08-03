import React, { useRef } from 'react';
import './ProjectCard.css';

const ProjectCard = ({
  project: {
    color,
    title,
    description,
    link,
    codeLink,
    backgroundColor,
    backgroundImg,
  },
}) => {
  const innerRef = useRef();

  const handleMouseOver = () => {
    if (innerRef.current) {
      innerRef.current.style.setProperty(
        'transform',
        `matrix(1, 0, 0, 1, 0, -${innerRef.current.offsetHeight + 30})`
      );
    }
  };
  const handleMouseLeave = () => {
    if (innerRef.current) {
      innerRef.current.style.setProperty(
        'transform',
        `matrix(1, 0, 0, 1, 0, -70)`
      );
    }
  };
  return (
    <div
      className="card"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <div id="card-body">
        <div className="inner" ref={innerRef}>
          <h2 className="project-title" style={{ color: color }}>
            {title}
          </h2>
          <p>{description}</p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            id="live-code"
            href={link}
            style={{ color: backgroundColor }}
          >
            See it live
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            id="live-code"
            href={codeLink}
            style={{ color: backgroundColor }}
          >
            See the code
          </a>
        </div>
        <div
          className="cover"
          style={{ backgroundColor: backgroundColor }}
        ></div>
        <div
          className="image"
          style={{ backgroundImage: `url(${backgroundImg})` }}
        ></div>
      </div>
    </div>
  );
};

export default ProjectCard;
