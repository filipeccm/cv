import React from 'react';
import JobCard from '../../components/career/JobCard';
import jobs from '../../data/jobs.data';

const JobsSection = () => {
  return (
    <section id="career">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </section>
  );
};

export default JobsSection;
