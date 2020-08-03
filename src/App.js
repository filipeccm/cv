import React, { lazy, Suspense } from 'react';

import Home from './pages/home/Home';
import Header from './components/header/Header';
import Loader from './components/loader/Loader';

const Projects = lazy(() => import('./pages/projects/Projects'));
const JobsSection = lazy(() => import('./pages/career/JobsSection'));

const App = () => {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Header />
        <Home />
        <Projects />
        <JobsSection />
      </Suspense>
    </div>
  );
};

export default App;
