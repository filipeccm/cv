import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

import WeatherAPICover from './images/weatherAPI-cover.svg';
import MyLibraryCover from './images/MyLibraryCover.svg';
import EtchASketchCover from './images/etch-a-sketch-cover.svg';
import TodoList from './images/todo-list.svg';

//portfolio, weather-api, myLibrary, todo-list, etch-a-sketch,
//React, Javascript, CSS, HTML, Node, Webpack,

const Projects = (props) => {
  return (
    <section className="projects" id="projects">
      <header className="proj-header">
        <h2>Projects I've developed so far</h2>
      </header>
      <div className="projects-grid">
        <ProjectCard
          title={'React Ecommerce'}
          // link={'https://filipeccm.github.io/weather-api/'}
          // codeLink={'https://github.com/filipeccm/weather-api'}
          color={'#caf0f8'}
          description={
            'An ecommerce built with React, Redux, Firebase (for storage and authentication), React-Router and Stripe (for payments)'
          }
          backgroundColor={'#0096c7'}
          backgroundImg={WeatherAPICover}
        />
        <ProjectCard
          title={'Online Portfolio'}
          // link={'https://filipeccm.github.io/weather-api/'}
          // codeLink={'https://github.com/filipeccm/weather-api'}
          color={'#caf0f8'}
          description={'This whole portfolio was made from scratch using React'}
          backgroundColor={'#0096c7'}
          backgroundImg={WeatherAPICover}
        />
        <ProjectCard
          title={'Weather API'}
          link={'https://filipeccm.github.io/weather-api/'}
          codeLink={'https://github.com/filipeccm/weather-api'}
          color={'#dceaf9'}
          description={`A weather app developed with React that fetch data about a city's weather from an API and then display it to the user.`}
          backgroundColor={'#3461b2'}
          backgroundImg={WeatherAPICover}
        />
        <ProjectCard
          title={'My Library (with Firebase)'}
          link={'https://filipeccm.github.io/myLibrary/'}
          codeLink={'https://github.com/filipeccm/myLibrary'}
          color={'#2d3047'}
          description={`A library app that can store, delete and change the read-status of a book using Firebase Realtime Database. It was developed with Javascript, CSS and HTML`}
          backgroundColor={'#ed7524'}
          backgroundImg={MyLibraryCover}
        />
        <ProjectCard
          title={'To-do list (Local Storage)'}
          link={'https://filipeccm.github.io/todo-list/'}
          codeLink={'https://github.com/filipeccm/todo-list'}
          color={'#2d3047'}
          description={`A to-do app made with Javascript, CSS, HTML. It uses Webpack, Local Storage and the Flatpickr NPM to add, update, delete and organize to-dos in multiple projects. Each to-do has its own priority and due date.  `}
          backgroundColor={'#57b593'}
          backgroundImg={TodoList}
        />
        <ProjectCard
          title={'Etch-a-sketch'}
          link={'https://filipeccm.github.io/etch-a-sketch/'}
          codeLink={'https://github.com/filipeccm/etch-a-sketch'}
          color={'#88dae5'}
          description={`A browser simulation of the classic etch-a-sketch. The user can create, reset and define the grid measures, as well as the color. It was developed using HTML, CSS and Javascript`}
          backgroundColor={'#e84855'}
          backgroundImg={EtchASketchCover}
        />
      </div>
    </section>
  );
};

export default Projects;
