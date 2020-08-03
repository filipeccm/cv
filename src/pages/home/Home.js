import React from 'react';

import './Home.css';

import { ReactComponent as Linkedin } from '../../icons/linkedin-logo.svg';
import { ReactComponent as Github } from '../../icons/github-logo.svg';

const Home = () => {
  return (
    <section id="home">
      <div className="intro">
        <h2>
          Hello, I am <br /> Filipe Mendonça
        </h2>
        <p>
          Front-end Developer and <br /> Online Marketer
        </p>
      </div>
      <div className="icons">
        <div className="social-media">
          <a
            href="https://www.linkedin.com/in/filipe-mendonca/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin />
          </a>
        </div>
        <div className="social-media">
          <a
            href="https://github.com/filipeccm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
