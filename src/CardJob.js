import React, { useRef, useState, useEffect } from 'react';
import Button from './Button';
import './JobCard.css';

// const useOnScreen = (options) => {
//   const ref = useRef();
//   const [visible, setVisible] = useState(false);
//   useEffect(() => {
//     const observer = new IntersectionObserver(([entry]) => {
//       setVisible(entry.isIntersecting);
//     }, options);
//     if (ref.current) {
//       observer.observe(ref.current);
//     }

//     return () => {
//       if (ref.current) {
//         observer.unobserve(ref.current);
//       }
//     };
//   }, [ref, options]);
//   console.log(ref.current);
//   return [ref, visible];
// };

const CardJob = (props) => {
  // const [ref, visible] = useOnScreen({ threshold: 0.3 });
  return (
    <div
      // ref={ref}
      className="job-card"
      style={{ backgroundColor: props.job.bgColor }}
    >
      <div className="front" id="imagem">
        <img id="front-img" src={props.job.logo} alt={props.job.name} />
      </div>
      <div id="text">
        <h2 style={{ color: props.job.titleColor }}>{props.job.name}</h2>
        <h3>{props.job.year}</h3>
        <p>{props.job.description}</p>
        {/* button */}
        <Button color={props.job.bgColor} link={props.job.website} />
      </div>
    </div>
  );
};

export default CardJob;
