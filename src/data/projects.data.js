import WeatherAPICover from '../images/weatherAPI-cover.svg';
import MyLibraryCover from '../images/MyLibraryCover.svg';
import EtchASketchCover from '../images/etch-a-sketch-cover.svg';
import TodoList from '../images/todo-list.svg';
import Portfolio from '../images/portfolio-cover.svg';
import EcommerceCover from '../images/ecommerce.svg';

const projects = [
  {
    id: 6,
    title: 'React Ecommerce',
    description:
      'An ecommerce built with React, Redux, React-Router, Firebase for storage and authentication, as well as Node, Express and Stripe for payments in the backend.',
    link: 'https://crwn-react-ecom.herokuapp.com/',
    codeLink: 'https://github.com/filipeccm/ecommerce-react',
    color: 'rgb(31 247 200)',
    backgroundColor: 'rgb(206 59 87)',
    backgroundImg: EcommerceCover,
  },
  {
    id: 5,
    title: 'Online Portfolio',
    description: 'This whole portfolio was made from scratch using React',
    link: 'https://filipeccm.github.io/cv/',
    codeLink: 'https://github.com/filipeccm/cv',
    color: '#ff6d65',
    backgroundColor: '#1C2541',
    backgroundImg: Portfolio,
  },
  {
    id: 4,
    title: 'Weather API',
    description:
      "A weather app developed with React that fetch data about a city's weather from an API and then display it to the user.",
    link: 'https://filipeccm.github.io/weather-api/',
    codeLink: 'https://github.com/filipeccm/weather-api',
    color: '#dceaf9',
    backgroundColor: '#3461b2',
    backgroundImg: WeatherAPICover,
  },
  {
    id: 3,
    title: 'My Library (with Firebase)',
    description:
      'A library app that can store, delete and change the read-status of a book using Firebase Realtime Database. It was developed with Javascript, CSS and HTML.',
    link: 'https://filipeccm.github.io/myLibrary/',
    codeLink: 'https://github.com/filipeccm/myLibrary',
    color: '#2d3047',
    backgroundColor: '#ed7524',
    backgroundImg: MyLibraryCover,
  },
  {
    id: 2,
    title: 'To-do List (with Local Storage)',
    description:
      'A library app that can store, delete and change the read-status of a book using Firebase Realtime Database. It was developed with Javascript, CSS and HTML.',
    link: 'https://filipeccm.github.io/todo-list/',
    codeLink: 'https://github.com/filipeccm/todo-list',
    color: '#2d3047',
    backgroundColor: '#57b593',
    backgroundImg: TodoList,
  },
  {
    id: 1,
    title: 'Etch-a-sketch',
    description:
      'A browser simulation of the classic etch-a-sketch. The user can create, reset and define the grid measures, as well as the color. It was developed using HTML, CSS and Javascript.',
    link: 'https://filipeccm.github.io/etch-a-sketch/',
    codeLink: 'https://github.com/filipeccm/etch-a-sketch',
    color: '#88dae5',
    backgroundColor: '#e84855',
    backgroundImg: EtchASketchCover,
  },
];

export default projects;
