import React from 'react';
import CardJob from './CardJob';
import jobs from './jobs';

const JobsSection = () => {
  return (
    <section id="career">
      <CardJob job={jobs[0]} />
      <CardJob job={jobs[1]} />
      <CardJob job={jobs[2]} />
      <CardJob job={jobs[3]} />
    </section>
  );
};

export default JobsSection;
