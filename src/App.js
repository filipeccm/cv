import React, { lazy, Suspense } from 'react';
import Home from './Home';
// import Projects from './Projects';
import './App.css';
// import JobsSection from './JobsSection';
import Header from './Header';

//NAV
//HOMEPAGE
//PROJECTS
//SKILLS
//CAREER
//CONTATO(?)

const Projects = lazy(() => import('./Projects'));
const JobsSection = lazy(() => import('./JobsSection'));

const App = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Home />
      </div>
      <Suspense fallback={<div>...</div>}>
        <div>
          <Projects />
        </div>
        <div>
          <JobsSection />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
