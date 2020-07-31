import React, { useRef } from 'react';
import './ProjectCard.css';

const ProjectCard = (props) => {
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
      className="card2"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <div id="card-body">
        <div className="inner" ref={innerRef}>
          <h2 className="project-title" style={{ color: props.color }}>
            {props.title}
          </h2>
          <p>{props.description}</p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            id="live-code"
            href={props.link}
            style={{ color: props.backgroundColor }}
          >
            See it live
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            id="live-code"
            href={props.codeLink}
            style={{ color: props.backgroundColor }}
          >
            See the code
          </a>
        </div>
        <div
          className="cover2"
          style={{ backgroundColor: props.backgroundColor }}
        ></div>
        <div
          className="image"
          style={{ backgroundImage: `url(${props.backgroundImg})` }}
        ></div>
      </div>
    </div>
  );
};

export default ProjectCard;
